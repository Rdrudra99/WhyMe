'use client'

import { usePathname } from 'next/navigation'
import { SidebarTrigger } from '@/components/ui/sidebar'

export function ConditionalSidebarTrigger() {
 const pathname = usePathname()

 if (pathname === '/chat') {
  return null
 }

 return <SidebarTrigger className="ml-3 mt-3" />
}

