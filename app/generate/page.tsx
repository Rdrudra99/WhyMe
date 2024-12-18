'use client'

import * as React from "react"
import { useState, useCallback, useRef, useEffect } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Globe, ClipboardCopy, Pencil, AlertCircle } from 'lucide-react'
import template from "@/config/template"
import dynamic from 'next/dynamic'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { motion, AnimatePresence } from 'framer-motion'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { toast } from "@/hooks/use-toast"
import { ScrollArea } from "@/components/ui/scroll-area"

const MDEditor = dynamic(
 () => import("@uiw/react-md-editor").then((mod) => mod.default),
 { ssr: false }
)

interface FormField {
 label: string;
 field: string;
 name: string;
 placeholder?: string;
 required: boolean;
 options?: string[];
}

interface UseCase {
 title: string;
 prompt: string;
 form: FormField[];
}

export default function AIToolSelector() {
 const [language, setLanguage] = useState("English")
 const [tone, setTone] = useState("Convincing")
 const [selectedUseCase, setSelectedUseCase] = useState<UseCase | null>(null)
 const [formData, setFormData] = useState<Record<string, string>>({})
 const [resultString, setResultString] = useState<string>("")
 const [isLoading, setIsLoading] = useState(false)
 const [error, setError] = useState<Error | null>(null)
 const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)

 const handleUseCaseSelect = useCallback((value: string) => {
  const useCase = template.find((t) => t.title === value)
  setSelectedUseCase(useCase || null)
  setFormData({})
 }, [])

 const handleInputChange = useCallback((name: string, value: string) => {
  setFormData((prev) => ({ ...prev, [name]: value }))
 }, [])

 const generateAiContent = useCallback(async () => {
  setIsLoading(true)
  setError(null)

  const promptTemplate = selectedUseCase?.prompt || ""
  let finalPrompt = promptTemplate

  Object.entries(formData).forEach(([key, value]) => {
   finalPrompt = finalPrompt.replace(`{${key}}`, value)
  })

  try {
   const response = await fetch("/api/aiContent", {
    method: "POST",
    body: JSON.stringify({
     message: finalPrompt,
     language,
     tone
    }),
    headers: {
     "Content-Type": "application/json",
    },
   })
   if (response.ok) {
    const data = await response.json()
    setResultString(data.content)
   } else {
    throw new Error("Failed to generate content")
   }
  } catch (error: unknown) {
   setError(error instanceof Error ? error : new Error("An unknown error occurred"))
  } finally {
   setIsLoading(false)
  }
 }, [formData, selectedUseCase, language, tone])

 const renderFormFields = useCallback(() => {
  if (!selectedUseCase) return null

  return selectedUseCase.form.map((field, index) => (
   <div key={index} className="space-y-2">
    <label className="text-sm font-medium">{field.label}</label>
    {field.field === "input" && (
     <Input
      value={formData[field.name] || ""}
      onChange={(e) => handleInputChange(field.name, e.target.value)}
      placeholder={field.placeholder}
      required={field.required}
     />
    )}
    {field.field === "textarea" && (
     <Textarea
      value={formData[field.name] || ""}
      onChange={(e) => handleInputChange(field.name, e.target.value)}
      placeholder={field.placeholder}
      required={field.required}
      className="min-h-[100px]"
     />
    )}
    {field.field === "select" && (
     <Select
      value={formData[field.name] || ""}
      onValueChange={(value) => handleInputChange(field.name, value)}
     >
      <SelectTrigger>
       <SelectValue placeholder={`Select ${field.label.toLowerCase()}`} />
      </SelectTrigger>
      <SelectContent>
       {field.options?.map((option, optionIndex) => (
        <SelectItem key={optionIndex} value={option}>
         {option}
        </SelectItem>
       ))}
      </SelectContent>
     </Select>
    )}
   </div>
  ))
 }, [selectedUseCase, formData, handleInputChange])

 const copyToClipboard = useCallback(() => {
  navigator.clipboard.writeText(resultString).then(() => {
   toast({
    title: "Copied to clipboard",
    description: "The content has been copied to your clipboard.",
   })
  }).catch(err => {
   console.error('Failed to copy: ', err)
   toast({
    title: "Failed to copy",
    description: "An error occurred while copying the content.",
    variant: "destructive",
   })
  })
 }, [resultString])

 return (
  <div className="container mx-auto px-4 py-8 pt-16">
   <div className="flex flex-col lg:flex-row gap-8">
    <div className="lg:w-1/3 space-y-6">
     <div className="sticky top-4 bg-background p-4 rounded-lg border">
      <ScrollArea className="h-[calc(100vh-8rem)]">
       <div className="space-y-4">
        <div className="space-y-2">
         <label className="text-sm font-medium">Language</label>
         <Select value={language} onValueChange={setLanguage}>
          <SelectTrigger className="w-full">
           <Globe className="w-4 h-4 mr-2" />
           <SelectValue placeholder="Select language" />
          </SelectTrigger>
          <SelectContent>
           <SelectItem value="English">🇺🇸 English</SelectItem>
           <SelectItem value="Spanish">🇪🇸 Spanish</SelectItem>
           <SelectItem value="Hindi">🇮🇳 Hindi</SelectItem>
           <SelectItem value="French">🇫🇷 French</SelectItem>
           <SelectItem value="German">🇩🇪 German</SelectItem>
           <SelectItem value="Italian">🇮🇹 Italian</SelectItem>
           <SelectItem value="Portuguese">🇵🇹 Portuguese</SelectItem>
           <SelectItem value="Dutch">🇳🇱 Dutch</SelectItem>
           <SelectItem value="Russian">🇷🇺 Russian</SelectItem>
           <SelectItem value="Chinese">🇨🇳 Chinese</SelectItem>
          </SelectContent>
         </Select>
        </div>
        <div className="space-y-2">
         <label className="text-sm font-medium">Tone</label>
         <Select value={tone} onValueChange={setTone}>
          <SelectTrigger className="w-full">
           <SelectValue placeholder="Select tone" />
          </SelectTrigger>
          <SelectContent>
           <SelectItem value="Convincing">Convincing</SelectItem>
           <SelectItem value="Professional">Professional</SelectItem>
           <SelectItem value="Friendly">Friendly</SelectItem>
          </SelectContent>
         </Select>
        </div>
        <div className="space-y-2">
         <label className="text-sm font-medium">Choose use case</label>
         <Select onValueChange={handleUseCaseSelect}>
          <SelectTrigger className="w-full">
           <SelectValue placeholder="Select use case" />
          </SelectTrigger>
          <SelectContent className="max-h-[300px]">
           {template.map((useCase, index) => (
            <SelectItem key={index} value={useCase.title}>
             <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
               {/* Icon placeholder */}
              </div>
              <span>{useCase.title}</span>
             </div>
            </SelectItem>
           ))}
          </SelectContent>
         </Select>
        </div>
        {selectedUseCase && (
         <>
          <div className="space-y-4">{renderFormFields()}</div>
          <Button
           onClick={generateAiContent}
           className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
           disabled={isLoading}
          >
           {isLoading ? "Generating..." : "Write for me"}
          </Button>
         </>
        )}
        {error && (
         <div className="p-4 mt-4 bg-destructive/15 text-destructive rounded-lg">
          <p className="text-sm font-medium">
           {error.message}
          </p>
         </div>
        )}
       </div>
      </ScrollArea>
     </div>
    </div>

    <div className="lg:w-2/3 space-y-6">
     <AnimatePresence>
      {resultString ? (
       <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
       >
        <div className="bg-background p-4 rounded-lg border">
         <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Generated Content</h2>
          <div className="flex gap-2">
           <TooltipProvider>
            <Tooltip>
             <TooltipTrigger asChild>
              <Button onClick={copyToClipboard} variant="outline" size="icon">
               <ClipboardCopy className="h-4 w-4" />
              </Button>
             </TooltipTrigger>
             <TooltipContent>
              <p>Copy to clipboard</p>
             </TooltipContent>
            </Tooltip>
           </TooltipProvider>
           <TooltipProvider>
            <Tooltip>
             <TooltipTrigger asChild>
              <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
               <DialogTrigger asChild>
                <Button variant="outline" size="icon">
                 <Pencil className="h-4 w-4" />
                </Button>
               </DialogTrigger>
               <DialogContent className="max-w-[800px] w-[90vw] max-h-[80vh]">
                <DialogHeader>
                 <DialogTitle>Edit Content</DialogTitle>
                </DialogHeader>
                <div className="mt-4 h-[calc(80vh-100px)]">
                 <MDEditor
                  value={resultString}
                  onChange={(value) => setResultString(value || "")}
                  preview="edit"
                  height="100%"
                 />
                </div>
               </DialogContent>
              </Dialog>
             </TooltipTrigger>
             <TooltipContent>
              <p>Edit content</p>
             </TooltipContent>
            </Tooltip>
           </TooltipProvider>
          </div>
         </div>
         <ScrollArea className="h-[calc(100vh-12rem)]">
          <div className="prose max-w-none dark:prose-invert">
           <ReactMarkdown
            components={{
             code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
               <SyntaxHighlighter
                {...props}
                children={String(children).replace(/\n$/, '')}
                style={tomorrow}
                language={match[1]}
                PreTag="div"
               />
              ) : (
               <code {...props} className={className}>
                {children}
               </code>
              )
             }
            }}
           >
            {resultString}
           </ReactMarkdown>
          </div>
         </ScrollArea>
        </div>
       </motion.div>
      ) : (
       <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
       >
        <div className="bg-background p-4 rounded-lg border h-[calc(100vh-8rem)] flex flex-col justify-center items-center">
         <AlertCircle className="w-16 h-16 text-muted-foreground mb-4" />
         <h2 className="text-2xl font-bold text-foreground mb-2">No Content Generated</h2>
         <p className="text-muted-foreground text-center">
          Select a use case and click "Write for me" to generate content.
         </p>
        </div>
       </motion.div>
      )}
     </AnimatePresence>
    </div>
   </div>
  </div>
 )
}

