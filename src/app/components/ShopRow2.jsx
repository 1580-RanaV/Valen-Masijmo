'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePassword } from './PasswordProtection';
import { useRouter } from 'next/navigation';

export default function NextThree() {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [currentImages, setCurrentImages] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0
  });
  
  const { requestAccess } = usePassword();
  const router = useRouter();

  const products = [
    {
      id: 1,
      images: ['/t6.png'],
      title: 'Valen Valentine T-Shirt',
      price: '₹35,799',
      inStock: true,
      slug: 'maybe-egypt-tshirt' // Add product slug for routing
    },
    {
      id: 2,
      images: ['/t5.png'],
      title: 'Dear Masijmo T-Shirt',
      price: '₹1,55,799',
      inStock: true,
      slug: 'ironveil-tshirt'
    },
    {
      id: 3,
      images: ['/t8.png'],
      title: 'Valen Club EXCLUSIVE T-Shirt',
      price: '₹65,799',
      inStock: false,
      slug: 'only-names-tshirt'
    },
    {
      id: 4,
      images: ['/t7.png'],
      title: 'Valen Picnic T-Shirt',
      price: '₹35,799',
      inStock: true,
      slug: 'owl-watching-tshirt'
    }
  ];

  useEffect(() => {
    if (hoveredProduct !== null) {
      const product = products.find(p => p.id === hoveredProduct);
      
      // Only start carousel if there are multiple images
      if (product && product.images.length > 1) {
        const intervalId = setInterval(() => {
          setCurrentImages(prev => ({
            ...prev,
            [hoveredProduct]: (prev[hoveredProduct] + 1) % product.images.length
          }));
        }, 2000);

        return () => clearInterval(intervalId);
      }
    }
  }, [hoveredProduct]);

  const handleMouseEnter = (productId) => {
    setHoveredProduct(productId);
  };

  const handleMouseLeave = (productId) => {
    setHoveredProduct(null);
    setCurrentImages(prev => ({
      ...prev,
      [productId]: 0
    }));
  };

  // Handle product click with password protection
  const handleProductClick = (product) => {
    requestAccess(() => {
      // This runs only after correct password
      // Option 1: Go to specific product page
      router.push(`/product/${product.slug}`);
      
      // Option 2: Go to shop page (uncomment if you prefer this)
      // router.push('/shop');
      
      // Option 3: Go to shop with product ID (uncomment if you prefer this)
      // router.push(`/shop?product=${product.id}`);
    });
  };

  return (
    <section className="w-full py-16 md:py-24">
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(0);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeImage {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .image-container {
          position: relative;
          overflow: hidden;
        }
        .image-slide {
          transition: opacity 0.8s ease-in-out;
        }
        .stock-badge {
          animation: slideUp 0.3s ease-out forwards;
        }
      `}</style>
      
      <div className="max-w-full px-0">
        <h2 className="text-3xl text-gray-50 md:text-5xl font-bold text-center mb-12 tracking-wider px-4">
          M
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-4 lg:gap-2">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
              onMouseEnter={() => handleMouseEnter(product.id)}
              onMouseLeave={() => handleMouseLeave(product.id)}
              onClick={() => handleProductClick(product)}
            >
              {/* Image Container */}
              <div 
                className="relative w-full overflow-hidden bg-gray-100 mb-4 image-container" 
                style={{ paddingBottom: '150%' }}
              >
                <Image
                  src={product.images[currentImages[product.id]]}
                  alt={product.title}
                  fill
                  className="object-cover image-slide"
                  key={currentImages[product.id]}
                  style={{ animation: 'fadeImage 0.8s ease-in-out' }}
                />
              </div>
              
              {/* Product Info - Fixed height container */}
              <div className="text-center px-2 relative mb-4 md:mb-0">
                <h3 className="text-sm font-bold tracking-wide transition-all duration-300 group-hover:opacity-70 text-neutral-900 mb-1">
                  {product.title}
                </h3>
                
                <p className="text-sm font-bold tracking-wider transition-all duration-300 group-hover:text-neutral-500 text-neutral-500 mb-2">
                  {product.price}
                </p>
                
                {/* Stock status container - fixed height on desktop to prevent layout shift */}
                <div className="mt-2 md:h-8 flex items-center justify-center">
                  {/* Mobile: Always visible */}
                  <span 
                    className={`md:hidden inline-block px-3 py-1 rounded-full text-xs font-bold ${
                      product.inStock 
                        ? 'bg-black text-white' 
                        : 'bg-black text-white'
                    }`}
                  >
                    {product.inStock ? 'In Stock' : 'Sold Out'}
                  </span>
                  
                  {/* Desktop: Show on hover - absolute positioned */}
                  {hoveredProduct === product.id && (
                    <span 
                      className={`hidden md:inline-block stock-badge px-3 py-1 text-xs font-bold ${
                        product.inStock 
                          ? 'bg-black text-white' 
                          : 'bg-black text-white'
                      }`}
                    >
                      {product.inStock ? 'In Stock' : 'Sold Out'}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}