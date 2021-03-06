import React from 'react';

export default function Footer() {
  return (
    <footer className='footer py-5 absolute bottom-0 w-full'>
      <div className='container text-center'>
        <a
          href='https://cleancommit.io?utm_source=HenloGatsby&utm_medium=referral'
          className='text-center text-sm font-regular text-gray-400 hover:text-gray-500 transition-colors'>
          Created by cleancommit.io
        </a>
      </div>
    </footer>
  );
}
