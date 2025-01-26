import React from 'react';
import { useState } from 'react';
import type { LinksProps } from 'src/data/links';

interface HeaderProps {
  title: string;
  Links: LinksProps[];
}

const Header = ({ title, Links, }: HeaderProps) => {

 

  return (
    <header className='bg-black w-full p-4'>
      <nav className='max-w-screen-2xl mx-auto flex gap-6 items-center justify-between'>
      <h1 className='text-4xl text-yellow-500 font-bold '>{title}</h1>

      <ul className='flex gap-3 font-medium'>
        {
          Links.map((link) => (
            <li key={link.url} className='text-yellow-500'>
              {
                link.label === "Comprar" ? (
                  <div
                  // onMouseEnter={handleDropdownToggle}  // Muestra el dropdown al pasar el mouse
                  // onMouseLeave={handleDropdownToggle}  // Oculta el dropdown cuando el mouse sale
                >
                  <a href={link.url}>{link.label}</a>
                  {(
                    <ul className="dropdown">
                      <li><a href="/servicios/desarrollo-web">Desarrollo Web</a></li>
                      <li><a href="/servicios/seo">SEO</a></li>
                      <li><a href="/servicios/diseno">Diseño Gráfico</a></li>
                    </ul>
                  )}
                </div>
                ) : (
                  <a href={link.url}>{link.label}</a> 
                )}
            </li>
          ))
        }
      </ul>

      </nav>
    </header>
  )
}

export default Header;