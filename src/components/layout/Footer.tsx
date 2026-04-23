import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Image
                src="/logo-full.jpeg"
                alt="AgriAce Fertilizers"
                width={180}
                height={60}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-sm">
              Premium fertilizers for sustainable agriculture. Powering Soil. Maximizing Yield.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products"
                  className="text-sm hover:text-green-400 transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm hover:text-green-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm hover:text-green-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li className="text-sm hover:text-green-400 transition-colors cursor-pointer">
                Organic Fertilizers
              </li>
              <li className="text-sm hover:text-green-400 transition-colors cursor-pointer">
                NPK Fertilizers
              </li>
              <li className="text-sm hover:text-green-400 transition-colors cursor-pointer">
                Liquid Fertilizers
              </li>
              <li className="text-sm hover:text-green-400 transition-colors cursor-pointer">
                Soil Amendments
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: info@agriace.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Agriculture St</li>
              <li>City, State 12345</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>
            &copy; {currentYear} AgriAce Fertilizers. All rights reserved. | Built
            with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
