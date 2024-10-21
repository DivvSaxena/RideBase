import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-2 font-jeko">Ridebase</h2>
            <p className="max-w-md text-sm text-gray-400">
              Request a ride, hop in, and go and don&apos;t worry about the inaccurate prices cause it&apos;s decentralised
            </p>
          </div>
          <div className="flex space-x-12 md:space-x-24">
            <div>
              <h3 className="text-lg font-semibold mb-4 font-jeko">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" legacyBehavior>
                    <a className="text-sm text-gray-400 hover:text-white">About</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog" legacyBehavior>
                    <a className="text-sm text-gray-400 hover:text-white">Blog</a>
                  </Link>
                </li>
                <li>
                  <Link href="/partners" legacyBehavior>
                    <a className="text-sm text-gray-400 hover:text-white">Partners</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 font-jeko">Solutions</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/marketing" legacyBehavior>
                    <a className="text-sm text-gray-400 hover:text-white">Marketing</a>
                  </Link>
                </li>
                <li>
                  <Link href="/analytics" legacyBehavior>
                    <a className="text-sm text-gray-400 hover:text-white">Analytics</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 font-jeko">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/claim" legacyBehavior>
                    <a className="text-sm text-gray-400 hover:text-white">Claim</a>
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" legacyBehavior>
                    <a className="text-sm text-gray-400 hover:text-white">Privacy</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 md:mt-0 flex justify-center w-full md:w-auto">
            <Image 
              src="/images/base.gif" 
              alt="Footer Image"
              width={300} 
              height={300} 
              className="rounded-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
