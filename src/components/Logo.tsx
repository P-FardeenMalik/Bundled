import React from 'react';
import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-3">
      <Image 
        src="https://assets.co.dev/31027885-c7e9-4de0-8d87-ffffa58fc73e/logo-0535a30.jpg"
        alt="Bundled Logo"
        width={40}
        height={40}
        className="rounded-lg"
      />
      <span className="text-xl font-bold text-white">Bundled</span>
    </div>
  );
};

export default Logo;
