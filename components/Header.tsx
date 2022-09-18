import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
        <Link href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://miro.medium.com/max/1400/1*psYl0y9DUzZWtHzFJLIvTw.png"
            alt="Logo"
            className="w-10 object-contain cursor-pointer"
          />
        </Link>
        <div className="hidden md:inline-flex items-center space-x-5">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="text-white bg-green-600 px-4 py-1 rounded-full">
            Follow
          </h3>
        </div>
      </div>
      <div className="flex items-center space-x-5 text-green-500">
        <h3>Sign In</h3>
        <h3 className="border px-4 py-1 rounded-full border-green-500">
          Get Started
        </h3>
      </div>
    </header>
  );
};

export default Header;
