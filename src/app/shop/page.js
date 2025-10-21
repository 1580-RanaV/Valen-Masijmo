'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PRODUCTS } from '../data/products';

export default function ShopPage() {
  const [currentImages, setCurrentImages] = useState({});
  const [sortOrder, setSortOrder] = useState('default');
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const router = useRouter();

  const minSwipeDistance = 50;

  // Derive what you previously hardcoded as two arrays:
  const allListItems = PRODUCTS.map((p) => ({
    id: p.id,
    images: p.images,
    title: p.title,
    price: p.price,
    originalPrice: p.originalPrice, // undefined when not on sale
    slug: p.slug,
    isSale: !!p.originalPrice || !!p.isSale,
  }));

  useEffect(() => {
    const initial = {};
    allListItems.forEach((product) => {
      initial[product.id] = 0;
    });
    setCurrentImages(initial);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Direct navigation: no password modal
  const handleProductClick = (product) => {
    router.push(`/product/${product.slug}`);
  };

  const handlePrevImage = (e, productId, totalImages) => {
    e.stopPropagation();
    setCurrentImages((prev) => ({
      ...prev,
      [productId]: prev[productId] === 0 ? totalImages - 1 : prev[productId] - 1,
    }));
  };

  const handleNextImage = (e, productId, totalImages) => {
    e.stopPropagation();
    setCurrentImages((prev) => ({
      ...prev,
      [productId]: (prev[productId] + 1) % totalImages,
    }));
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

  const parsePrice = (priceStr) => {
    return parseInt(priceStr.replace(/[₹,]/g, ''), 10);
  };

  const getSortedProducts = () => {
    const list = [...allListItems];

    if (sortOrder === 'low-to-high') {
      return list.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    } else if (sortOrder === 'high-to-low') {
      return list.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    }

    return list;
  };

  const sortedProducts = getSortedProducts();

  return (
    <>
      <Navbar />
      <main className="min-h-screen text-xs leading-[1.5]">
        <section className="w-full py-8 sm:py-12 lg:py-16">
          <style jsx>{`
            .image-container {
              position: relative;
              overflow: hidden;
            }
            .product-grid {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 0;
              width: 100%;
            }
            @media (min-width: 640px) {
              .product-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }
            @media (min-width: 768px) {
              .product-grid {
                grid-template-columns: repeat(3, 1fr);
              }
            }
            @media (min-width: 1024px) {
              .product-grid {
                grid-template-columns: repeat(4, 1fr);
              }
            }
            .carousel-btn {
              opacity: 0;
              transition: opacity 0.2s ease;
            }
            .image-container:hover .carousel-btn {
              opacity: 1;
            }
            .image-slide {
              transition: transform 0.3s ease-in-out;
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

          <div className="flex flex-col items-center justify-center mt-16 mb-8 sm:mb-10 lg:mb-12 px-4 text-center">
            <h1 className="font-bold tracking-wider text-gray-900 text-xs mb-4">ALL PRODUCTS</h1>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="text-xs font-bold tracking-wider border px-3 py-2 appearance-none cursor-pointer hover:bg-neutral-900 hover:text-white transition-colors"
            >
              <option value="default">SORT BY: CHOOSE ONE</option>
              <option value="low-to-high">PRICE: LOW TO HIGH</option>
              <option value="high-to-low">PRICE: HIGH TO LOW</option>
            </select>
          </div>

          <div className="product-grid mt-16">
            {sortedProducts.map((item) => (
              <div
                key={item.id}
                className="cursor-pointer w-full border-r border-b border-gray-200 last:border-r-0 bg-white"
                onClick={() => handleProductClick(item)}
              >
                <div
                  className="relative w-full bg-gray-50 image-container"
                  style={{ paddingBottom: '150%' }}
                  onMouseEnter={() => setHoveredProduct(item.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                  onTouchStart={onTouchStart}
                  onTouchMove={onTouchMove}
                  onTouchEnd={() => onTouchEnd(item.id, item.images?.length ?? 0)}
                >
                  {item.isSale && (
                    <span className="absolute top-2 right-2 z-10 bg-black text-white px-2 py-1 font-bold tracking-widest text-[10px]">
                      SALE
                    </span>
                  )}

                  <Image
                    src={item.images[currentImages[item.id] ?? 0]}
                    alt={item.title}
                    fill
                    className="object-cover image-slide"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />

                  {item.images.length > 1 && hoveredProduct === item.id && (
                    <>
                      <button
                        onClick={(e) => handlePrevImage(e, item.id, item.images.length)}
                        className="carousel-btn absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-black w-8 h-8 flex items-center justify-center z-10 text-xs font-bold hidden sm:flex"
                      >
                        {'<'}
                      </button>
                      <button
                        onClick={(e) => handleNextImage(e, item.id, item.images.length)}
                        className="carousel-btn absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-black w-8 h-8 flex items-center justify-center z-10 text-xs font-bold hidden sm:flex"
                      >
                        {'>'}
                      </button>
                    </>
                  )}

                  {item.images.length > 1 && (
                    <div className="progress-bar">
                      {item.images.map((_, index) => (
                        <div
                          key={index}
                          className={`progress-dot ${currentImages[item.id] === index ? 'active' : ''}`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div className="px-3 lg:px-4 py-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                    <h3 className="font-bold tracking-wide text-neutral-900 text-xs">
                      {item.title}
                    </h3>

                    {item.originalPrice ? (
                      <div className="font-bold tracking-wider text-xs flex flex-col sm:flex-row sm:gap-2">
                        <span className="line-through text-neutral-400">{item.originalPrice}</span>
                        <span className="text-green-600">{item.price}</span>
                      </div>
                    ) : (
                      <p className="font-bold tracking-wider text-neutral-900 text-xs">
                        {item.price}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
