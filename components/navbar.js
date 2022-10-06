import React from 'react';
import Container from '@components/container';
import Link from 'next/link';
import Image from 'next/image';
import GetImage from '@utils/getImage';
import { myLoader } from '@utils/all';

export default function Navbar(props) {
  const leftmenu = [
    {
      label: 'Home',
      href: '/'
    },
    {
      label: 'About',
      href: '/about'
    },
    {
      label: 'Contact',
      href: '/contact'
    }
  ];

  const rightmenu = [
    {
      label: 'Archive',
      href: '/archive'
    },
    {
      label: 'Github',
      href: 'https://github.com/web3templates/stablo',
      external: true
    },
    {
      label: 'Download',
      href: 'https://web3templates.com/templates/stablo-minimal-blog-website-template',
      external: true
    }
  ];

  const mobilemenu = [...leftmenu, ...rightmenu];

  return (
    <Container>
      <nav>
        <div>
          {
            <>
              <div className="flex flex-wrap justify-between md:gap-10 md:flex-nowrap">
                <div className="flex-col items-center justify-start order-1 hidden w-full md:flex md:flex-row md:justify-end md:w-auto md:order-none md:flex-1">
                  {leftmenu.map((item, index) => (
                    <Link href={item.href} key={index}>
                      <a className="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500">
                        {item.label}
                      </a>
                    </Link>
                  ))}
                </div>
                <div className="flex justify-between items-center w-full md:w-auto">
                  <Link href="/">
                    <a className="w-28 dark:hidden">
                      {props.logo ? (
                        <Image
                          {...GetImage(props.logo)}
                          alt="Logo"
                          sizes="(max-width: 640px) 100vw, 200px"
                          priority={true}
                        />
                      ) : (
                        <span className="block text-center">
                          Stablo
                        </span>
                      )}
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="hidden w-28 dark:block">
                      {props.logoalt ? (
                        <Image
                          {...GetImage(props.logoalt)}
                          alt="Logo"
                          sizes="(max-width: 640px) 100vw, 200px"
                          priority={true}
                        />
                      ) : (
                        <span className="block text-center">
                          Stablo
                        </span>
                      )}
                    </a>
                  </Link>
                </div>

                <div className="flex-col items-center justify-start order-2 hidden w-full md:flex md:flex-row md:w-auto md:flex-1 md:order-none">
                  {rightmenu.map((item, index) => (
                    <Link href={item.href} key={index}>
                      <a
                        className="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500"
                        target={item.external ? '_blank' : ''}
                        rel={item.external ? 'noopener' : ''}>
                        {item.label}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center justify-start order-2 w-full md:hidden">
                {mobilemenu.map((item, index) => (
                  <Link href={item.href} key={index}>
                    <a
                      className="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500"
                      target={item.external ? '_blank' : ''}
                      rel={item.external ? 'noopener' : ''}>
                      {item.label}
                    </a>
                  </Link>
                ))}
              </div>
            </>
          }
        </div>
      </nav>
    </Container>
  );
}
