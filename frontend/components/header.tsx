"use clinet"

import Link from 'next/link';
import { Button } from './ui/button';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/">
            QA
          </Link>
        </h1>
        <div className="flex space-x-4">
          <Link href="/login">
            <Button variant="default">Login</Button>
          </Link>
          <Link href="/signup">
            <Button variant="default">Sign Up</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
