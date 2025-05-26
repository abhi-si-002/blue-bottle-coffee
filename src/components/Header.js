import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Header({ businessName }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#14213d] backdrop-blur-sm border-b border-[#22315a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5e7d6ebd9795e7339c7b2b6d/1587069905970-2GLWC4OHNC8N5V6Y9FKU/logo-01%2Bcopy.jpg"
              alt="Blue Bottle Coffee Logo"
              width={40}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
            <h1 className="text-2xl font-bold tracking-tight text-white">
              {businessName}
            </h1>
          </div>
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-white hover:text-[#a3bffa] transition-colors">
                Home
              </a>
              <a href="#services" className="text-white hover:text-[#a3bffa] transition-colors">
                Menu
              </a>
              <a href="#contact" className="text-white hover:text-[#a3bffa] transition-colors">
                Contact Us
              </a>
            </nav>
            {/* <ThemeToggle /> */}
          </div>
        </div>
      </div>
    </header>
  );
} 