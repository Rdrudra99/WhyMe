import './globals.css'
import { Inter } from 'next/font/google'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'
import { ConditionalSidebarTrigger } from '@/components/conditional-sidebar-trigger'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Minimal Docs Site',
  description: 'A gorgeous minimal documentation site using Next.js App Router',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/@uiw/react-md-editor@3.6.0/dist/mdeditor.min.css"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <SidebarProvider>
          <AppSidebar />
          <ConditionalSidebarTrigger />
          <main className="flex-1 overflow-auto">{children}</main>
        </SidebarProvider>
      </body>
    </html>
  )
}

