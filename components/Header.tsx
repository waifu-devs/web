'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  navigationMenuTriggerStyleShimmer,
} from '@/components/ui/navigation-menu';
import Logo from './Logo';
import Link from 'next/link';
import { Separator } from './ui/separator';
import { IconSun, IconMoon } from '@tabler/icons-react';

export default function Header() {
  const [showSeparator, setShowSeparator] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowSeparator(true);
      } else {
        setShowSeparator(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className='flex flex-col sticky top-0 z-[20] w-full justify-center bg-white/90 dark:bg-inherit'>
      <div className='flex flex-row justify-between w-[75%] px-4 py-2 self-center my-1'>
        <div className='flex flex-row items-center'>
          <Logo />
          <h1 className='text-lg md:text-xl lg:text-xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug mx-auto'>
            Waifu.dev
          </h1>
        </div>

        <div className='flex flex-row items-center'>
        <button
            type='button'
            onClick={toggleDarkMode}
            className='p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all'
          >
            {darkMode ? (
              <IconSun size={24} className='text-yellow-500' />
            ) : (
              <IconMoon size={24} className='text-gray-800 dark:text-white' />
            )}
          </button>

          <Separator orientation='vertical' className='w-[2px] bg-border mx-4' />
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href='/about' legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About
                  </NavigationMenuLink>
                </Link>
                <Link href='/auth' legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyleShimmer()}>
                    Login
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showSeparator ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <Separator className='h-[1px] bg-border' />
      </motion.div>
    </header>
  );
}
