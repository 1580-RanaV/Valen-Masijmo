'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePassword } from './PasswordProtection';
import { useRouter } from 'next/navigation';

export default function Grid() {
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
      images: ['/grid-1.png'],
      slug: 'product-1'
    },
    {
      id: 2,
      images: ['/grid-2.png'],
      slug: 'product-2'
    },
    {
      id: 3,
      images: ['/grid-3.png'],
      slug: 'product-3'
    },
    {
      id: 4,
      images: ['/grid-4.png'],
      slug: 'product-4'
    }
  ];

  useEffect(() => {
    if (hoveredProduct !== null) {
      const product = products.find(p => p.id === hoveredProduct);
      
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

  const handleProductClick = (product) => {
    requestAccess(() => {
      router.push(`/product/${product.slug}`);
    });
  };

  return (
    <section className="w-full py-16 md:py-24">
      <style jsx>{`
        @keyframes fadeImage {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .image-container {
          position: relative;
          overflow: hidden;
        }
        .image-slide {
          transition: opacity 0.8s ease-in-out;
        }
      `}</style>
      
      <div className="max-w-full px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
              onMouseEnter={() => handleMouseEnter(product.id)}
              onMouseLeave={() => handleMouseLeave(product.id)}
              onClick={() => handleProductClick(product)}
            >
              <div 
                className="relative w-full overflow-hidden bg-gray-100 image-container" 
                style={{ paddingBottom: '150%' }}
              >
                <Image
                  src={product.images[currentImages[product.id]]}
                  alt={`Product ${product.id}`}
                  fill
                  className="object-cover image-slide"
                  key={currentImages[product.id]}
                  style={{ animation: 'fadeImage 0.8s ease-in-out' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}