import React from 'react'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  navigationMenuTriggerStyleShimmer,
} from "@/components/ui/navigation-menu"
import Logo from './Logo'
import Link from 'next/link'
import { Separator } from '@radix-ui/react-separator'


export default function Header() {
  return (
    <header className='bg-white sticky top-0 z-[20] w-[80%] self-center'>
      <div className='flex flex-row justify-between w-full px-4 py-2'>
      <div className='flex flex-row items-center'>
        <Logo/>
        <h1 className='text-xl dark:text-whitetext-2xl md:text-xl lg:text-4xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug mx-auto'>Waifu.dev</h1>
      </div>
      <NavigationMenu>
        <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
          <Link href="/auth/github" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyleShimmer()}>
              Login
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      </div>
      <Separator className='h-[1px] bg-border' />
    </header>

  )
}
