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

  // All T-shirts now between ₹35k–₹40k
  const products = [
    {
      id: 1,
      images: ['/t6/t6-4.png'],
      title: 'VALEN VALENTINE T-SHIRT',
      price: '₹36,499',
      inStock: true,
      slug: 'valen-valentine-tshirt'
    },
    {
      id: 2,
      images: ['/t5/t5-4.png'],
      title: 'DEAR MASIJMO T-SHIRT',
      price: '₹38,999',
      inStock: true,
      slug: 'dear-masijmo-tshirt'
    },
    {
      id: 3,
      images: ['/t8/t8-4.png'],
      title: 'VALEN CLUB EXCLUSIVE T-SHIRT',
      price: '₹39,499',
      inStock: false,
      slug: 'valen-club-tshirt'
    },
    {
      id: 4,
      images: ['/t7/t7-4.png'],
      title: 'VALEN PICNIC T-SHIRT',
      price: '₹35,999',
      inStock: true,
      slug: 'valen-picnic-tshirt'
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

  const handleMouseEnter = (productId) => setHoveredProduct(productId);
  const handleMouseLeave = (productId) => {
    setHoveredProduct(null);
    setCurrentImages(prev => ({ ...prev, [productId]: 0 }));
  };

  const handleProductClick = (product) => {
    requestAccess(() => router.push(`/product/${product.slug}`));
  };

  return (
    <section className="w-full py-16 px-0 overflow-x-hidden">
      <style jsx>{`
        @keyframes fadeImage {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .image-container {
          position: relative;
          overflow: hidden;
        }
        .image-slide {
          transition: opacity 0.8s ease-in-out;
        }
      `}</style>

      <h2 className="text-xs text-gray-50 font-bold text-center mb-8 tracking-wider px-4">
        M
      </h2>

      {/* EDGE-TO-EDGE GRID (no gaps) */}
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 w-full">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
              onMouseEnter={() => handleMouseEnter(product.id)}
              onMouseLeave={() => handleMouseLeave(product.id)}
              onClick={() => handleProductClick(product)}
            >
              <div
                className="image-container bg-gray-100"
                style={{ aspectRatio: '2 / 3' }}
              >
                <Image
                  src={product.images[currentImages[product.id]]}
                  alt={product.title}
                  fill
                  className="object-cover image-slide"
                  key={currentImages[product.id]}
                  style={{ animation: 'fadeImage 0.8s ease-in-out' }}
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  priority
                />
              </div>

              <div className="text-center px-2 py-4">
                <h3 className="text-xs font-bold tracking-wide transition-opacity duration-300 group-hover:opacity-70 text-neutral-900 mb-1">
                  {product.title}
                </h3>
                <p className="text-xs font-bold tracking-wider transition-colors duration-300 group-hover:text-neutral-400 text-neutral-500">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
