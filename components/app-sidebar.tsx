'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { GalleryVerticalEnd, Search } from 'lucide-react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
 Sidebar,
 SidebarContent,
 SidebarGroup,
 SidebarGroupContent,
 SidebarGroupLabel,
 SidebarHeader,
 SidebarMenu,
 SidebarMenuItem,
 SidebarMenuButton,
} from '@/components/ui/sidebar'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from '@/components/ui/alert-dialog'

const navItems = [
 { title: 'Introduction', url: '/' },
 { title: 'Getting Started', url: '/getting-started' },
 { title: 'Components', url: '/components' },
 { title: 'API Reference', url: '/api-reference' },
 { title: 'Generate', url: '/generate' },
 { title: 'Chat', url: '/chat' },
 { title: 'Write', url: '/write' },
 { title: 'History', url: '/history' },
];

export function AppSidebar() {
 const pathname = usePathname()
 const [showUpdateDialog, setShowUpdateDialog] = useState(false)

 return (
  <Sidebar>
   <SidebarHeader>
    <SidebarMenu>
     <SidebarMenuItem>
      <SidebarMenuButton size="lg" asChild>
       <Link href="/">
        <div className="bg-primary text-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
         <GalleryVerticalEnd className="size-4" />
        </div>
        <div className="flex flex-col gap-0.5 leading-none">
         <span className="font-semibold">Docs</span>
         <span className="">v1.0.0</span>
        </div>
       </Link>
      </SidebarMenuButton>
     </SidebarMenuItem>
    </SidebarMenu>
    <form>
     <SidebarGroup className="py-0">
      <SidebarGroupContent className="relative">
       <Label htmlFor="search" className="sr-only">
        Search
       </Label>
       <Input
        id="search"
        placeholder="Search the docs..."
        className="pl-8"
       />
       <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
      </SidebarGroupContent>
     </SidebarGroup>
    </form>
   </SidebarHeader>
   <SidebarContent>
    <SidebarGroup>
     <SidebarGroupLabel>Navigation</SidebarGroupLabel>
     <SidebarGroupContent>
      <SidebarMenu>
       {navItems.map(item => (
        <SidebarMenuItem key={item.url}>
         <SidebarMenuButton asChild isActive={pathname === item.url}>
          <Link href={item.url}>{item.title}</Link>
         </SidebarMenuButton>
        </SidebarMenuItem>
       ))}
      </SidebarMenu>
     </SidebarGroupContent>
    </SidebarGroup>
   </SidebarContent>
   <div className="mt-auto p-4">
    <Button onClick={() => setShowUpdateDialog(true)} className="w-full">
     Update
    </Button>
   </div>
   <AlertDialog open={showUpdateDialog} onOpenChange={setShowUpdateDialog}>
    <AlertDialogContent>
     <AlertDialogHeader>
      <AlertDialogTitle>Upgrade to Pro</AlertDialogTitle>
      <AlertDialogDescription>
       Upgrade to our Pro plan to access advanced features and unlimited generations.
      </AlertDialogDescription>
     </AlertDialogHeader>
     <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Upgrade Now</AlertDialogAction>
     </AlertDialogFooter>
    </AlertDialogContent>
   </AlertDialog>
  </Sidebar>
 )
}

