'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NextThree() {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [currentImages, setCurrentImages] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0
  });
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const router = useRouter();
  const minSwipeDistance = 50;

  const products = [
    {
      id: 1,
      images: ['/t6/t6-4.png'],
      title: 'VALEN VALENTINE T-SHIRT',
      price: '₹36,499',
      slug: 'valen-valentine-tshirt'
    },
    {
      id: 2,
      images: ['/t5/t5-4.png'],
      title: 'DEAR MASIJMO T-SHIRT',
      price: '₹38,999',
      slug: 'dear-masijmo-tshirt'
    },
    {
      id: 3,
      images: ['/t8/t8-4.png'],
      title: 'VALEN CLUB EXCLUSIVE T-SHIRT',
      price: '₹39,499',
      slug: 'valen-club-tshirt'
    },
    {
      id: 4,
      images: ['/t7/t7-4.png'],
      title: 'VALEN PICNIC T-SHIRT',
      price: '₹35,999',
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

  const handleProductClick = () => {
    router.push('/shop');
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = (productId, totalImages) => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setCurrentImages((prev) => ({
        ...prev,
        [productId]: (prev[productId] + 1) % totalImages,
      }));
    }
    
    if (isRightSwipe) {
      setCurrentImages((prev) => ({
        ...prev,
        [productId]: prev[productId] === 0 ? totalImages - 1 : prev[productId] - 1,
      }));
    }
  };

  return (
    <section className="w-full px-0 overflow-x-hidden">
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
        .progress-bar {
          position: absolute;
          bottom: 8px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 4px;
          z-index: 10;
        }
        .progress-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.5);
          transition: background-color 0.3s ease;
        }
        .progress-dot.active {
          background-color: rgba(255, 255, 255, 1);
        }
        @media (min-width: 640px) {
          .progress-bar {
            display: none;
          }
        }
      `}</style>

      <h2 className="text-xs text-gray-50 font-bold text-center mb-8 tracking-wider px-4">
        M
      </h2>

      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 w-full">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
              onClick={handleProductClick}
            >
              <div
                className="image-container bg-gray-100"
                style={{ aspectRatio: '2 / 3' }}
                onMouseEnter={() => handleMouseEnter(product.id)}
                onMouseLeave={() => handleMouseLeave(product.id)}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={() => onTouchEnd(product.id, product.images.length)}
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
                
                {product.images.length > 1 && (
                  <div className="progress-bar">
                    {product.images.map((_, index) => (
                      <div
                        key={index}
                        className={`progress-dot ${currentImages[product.id] === index ? 'active' : ''}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className="px-2 py-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <h3 className="text-xs font-bold tracking-wide transition-opacity duration-300 text-neutral-900">
                    {product.title}
                  </h3>
                  <p className="text-xs font-bold tracking-wider transition-colors duration-300 text-neutral-900">
                    {product.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}