import React from 'react';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <header className='bg-black w-full p-4'>
      <h1 className='text-4xl text-yellow-500 font-bold'>{title}</h1>
    </header>
  )
}

export default Header;