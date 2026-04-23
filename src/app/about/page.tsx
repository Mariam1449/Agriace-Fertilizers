import Image from "next/image";

export default function About() {
  return (
    <div className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About AgriAce Fertilizers
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Leading the way in sustainable agriculture solutions since 2010
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Mission
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              At AgriAce Fertilizers, we are committed to providing farmers and
              gardeners with the highest quality fertilizers that promote
              sustainable agriculture while maximizing crop yields.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              We believe in the power of science-based solutions combined with
              environmental responsibility. Our products are designed to
              nourish plants, enrich soil, and protect our planet for future
              generations.
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-900 to-green-700 rounded-lg p-12 flex items-center justify-center relative overflow-hidden">
            <Image
              src="/logo-title.jpeg"
              alt="AgriAce Fertilizers - Premium Quality Logo"
              width={700}
              height={500}
              className="object-contain w-full max-w-2xl"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Sustainability
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                We prioritize eco-friendly practices and renewable resources in
                all our products.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-lime-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Quality
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Every product undergoes rigorous testing to ensure the highest
                standards.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Customer Focus
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Your success is our success. We provide expert support and
                guidance.
              </p>
            </div>
          </div>
        </div>

        {/* Brand Identity Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Our Brand Identity
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <Image
              src="/brand-identity.jpeg"
              alt="AgriAce Brand Identity - Business Cards, Packaging & Marketing Materials"
              width={1200}
              height={800}
              className="w-full rounded-lg"
            />
            <p className="text-center text-gray-600 dark:text-gray-400 mt-4">
              Complete brand identity including business cards, product packaging, and marketing materials
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-green-500 to-lime-500 rounded-lg p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-lg">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-lg">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg">Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-lg">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
