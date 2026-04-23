import Image from "next/image";

export default function Products() {
  const products = [
    {
      name: "CrownHuma Potassium Humate",
      price: "₹399",
      description: "Organic Soil Conditioner & Plant Growth Promoter - Eco-Friendly & Safe for Sustainable Agriculture",
      features: ["Increases Root Growth", "Improves Soil Fertility", "Eco-Friendly & Organic"],
      image: "/product-packaging.jpeg",
      featured: true,
    },
    {
      name: "NPK 20-20-20",
      price: "₹449",
      description: "Balanced NPK formula for all-purpose plant nutrition",
      features: ["Balanced nutrients", "Fast absorption", "Suitable for all crops"],
      color: "lime",
    },
    {
      name: "Liquid Nutrients",
      price: "₹349",
      description: "Quick-absorbing liquid fertilizer for rapid growth",
      features: ["Instant results", "Easy application", "Concentrated formula"],
      color: "yellow",
    },
    {
      name: "Organic Compost",
      price: "₹299",
      description: "100% natural compost for enriching soil with organic matter",
      features: ["Rich in nutrients", "Improves soil structure", "Eco-friendly"],
      color: "green",
    },
    {
      name: "Micronutrient Mix",
      price: "₹499",
      description: "Essential trace elements for plant health",
      features: ["Complete micronutrients", "Prevents deficiencies", "Premium quality"],
      color: "lime",
    },
    {
      name: "Slow Release Granules",
      price: "₹549",
      description: "Time-release formula for sustained nutrition",
      features: ["3-month release", "Reduces application frequency", "Weather resistant"],
      color: "yellow",
    },
  ];

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Products
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our comprehensive range of fertilizers and soil amendments
            designed for every agricultural need.
          </p>
        </div>

        {/* Brochure Section */}
        <div className="mb-16 bg-gradient-to-r from-green-700 to-green-600 rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-8 lg:p-12 flex flex-col justify-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                Download Our Product Brochure
              </h2>
              <p className="text-lg mb-6 text-green-100">
                Get detailed information about Crown Huma products, benefits, and application guidelines.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Complete product specifications
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Usage instructions & benefits
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Available in Urdu & English
                </li>
              </ul>
              <a
                href="/brochure-crown-huma.jpeg"
                download="AgriAce-Crown-Huma-Brochure.jpeg"
                className="bg-white text-green-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors duration-200 inline-flex items-center justify-center gap-2 w-fit"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Brochure
              </a>
            </div>
            <div className="bg-white p-4 lg:p-8 flex items-center justify-center">
              <Image
                src="/brochure-crown-huma.jpeg"
                alt="Crown Huma Product Brochure"
                width={500}
                height={700}
                className="rounded-lg shadow-xl w-full max-w-md"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${product.featured ? 'ring-2 ring-green-500' : ''}`}
            >
              {product.image ? (
                <div className="relative h-64 bg-white">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain p-4"
                  />
                  {product.featured && (
                    <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                </div>
              ) : (
                <div className={`bg-${product.color}-500 h-48 flex items-center justify-center`}>
                  <svg
                    className="w-24 h-24 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-3xl font-bold text-green-600 dark:text-green-400 mb-4">
                  {product.price}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {product.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-gray-700 dark:text-gray-300"
                    >
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full btn-primary">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
