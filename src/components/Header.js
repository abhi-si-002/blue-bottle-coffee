import Image from "next/image";

export default function Header({ businessName }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1e3932]/95 backdrop-blur-sm border-b border-[#00754a]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5e7d6ebd9795e7339c7b2b6d/1587069905970-2GLWC4OHNC8N5V6Y9FKU/logo-01%2Bcopy.jpg"
              alt="Blue Bottle Coffee Logo"
              width={48}
              height={48}
              className="h-12 w-auto object-contain"
              priority
            />
            <h1 className="text-2xl font-bold tracking-tight text-[#f1f8f5]">
              {businessName}
            </h1>
          </div>
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-[#f1f8f5] hover:text-[#00754a] transition-colors font-medium">
                Home
              </a>
              <a href="#services" className="text-[#f1f8f5] hover:text-[#00754a] transition-colors font-medium">
                Menu
              </a>
              <a href="#contact" className="text-[#f1f8f5] hover:text-[#00754a] transition-colors font-medium">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
} 