'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { usePassword } from '../components/PasswordProtection';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ShopPage() {
  const [currentImages, setCurrentImages] = useState({});
  const [sortOrder, setSortOrder] = useState('default');
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const { requestAccess } = usePassword();
  const router = useRouter();

  // ============================
  // SALE ITEMS
  // ============================
  const saleProducts = [
    {
      id: 9,
      images: ['/t10.png'],
      title: 'ADDITION T-SHIRT',
      price: '₹15,650',
      originalPrice: '₹45,675',
      inStock: true,
      collection: 'FROM "DRAFTS VAULT"',
      slug: 'addition-tshirt',
    },
    {
      id: 10,
      images: ['/t11.png'],
      title: 'COFFEE SPILL T-SHIRT',
      price: '₹12,650',
      originalPrice: '₹25,675',
      inStock: true,
      collection: 'FROM "DRAFTS VAULT"',
      slug: 'coffee-spill-tshirt',
    },
  ];

  const saleIds = new Set(saleProducts.map((p) => p.id));

  // ============================================
  // REGULAR PRODUCTS
  // ============================================
  const products = [
    {
      id: 12,
      images: ['/valen-blue.png'],
      title: 'BLUE VALEN T-SHIRT',
      price: '₹25,749',
      inStock: true,
      collection: 'FROM "DRAFTS VAULT"',
      slug: 'blue-valen-tshirt',
    },
    {
      id: 11,
      images: ['/t13.png','/t13-1.png'],
      title: 'KISSES TO VALEN T-SHIRT',
      price: '₹1,35,999',
      inStock: true,
      collection: 'FROM "DRAFTS VAULT"',
      slug: 'kisses-to-valen-tshirt',
    },
    {
      id: 1,
      images: ['/t1.png'],
      title: 'MAYBE EGYPT T-SHIRT',
      price: '₹35,799',
      inStock: true,
      collection: 'FROM "BLACK CHAPTER ONE"',
      slug: 'maybe-egypt-tshirt',
    },
    {
      id: 2,
      images: ['/t2.png'],
      title: 'IRONVEIL T-SHIRT',
      price: '₹35,799',
      inStock: true,
      collection: 'FROM "BLACK CHAPTER ONE"',
      slug: 'ironveil-tshirt',
    },
    {
      id: 3,
      images: ['/t3.png'],
      title: 'ONLY NAMES T-SHIRT',
      price: '₹49,799',
      inStock: false,
      collection: 'FROM "BLACK CHAPTER ONE"',
      slug: 'only-names-tshirt',
    },
    {
      id: 4,
      images: ['/t4.png'],
      title: 'OWL EYES T-SHIRT',
      price: '₹35,799',
      inStock: true,
      collection: 'FROM "BLACK CHAPTER ONE"',
      slug: 'owl-eyes-tshirt',
    },
    {
      id: 5,
      images: ['/t6.png'],
      title: 'VALEN VALENTINE T-SHIRT',
      price: '₹35,799',
      inStock: true,
      collection: 'FROM "BLACK CHAPTER ONE"',
      slug: 'valen-valentine-tshirt',
    },
    {
      id: 6,
      images: ['/t5.png'],
      title: 'DEAR MASIJMO T-SHIRT',
      price: '₹1,55,799',
      inStock: true,
      collection: 'FROM "BLACK CHAPTER ONE"',
      slug: 'dear-masijmo-tshirt',
    },
    {
      id: 7,
      images: ['/t8.png'],
      title: 'VALEN CLUB T-SHIRT',
      price: '₹65,799',
      inStock: false,
      collection: 'FROM "BLACK CHAPTER ONE"',
      slug: 'valen-club-tshirt',
    },
    {
      id: 8,
      images: ['/t7.png'],
      title: 'VALEN PICNIC T-SHIRT',
      price: '₹35,799',
      inStock: true,
      collection: 'FROM "BLACK CHAPTER ONE"',
      slug: 'valen-picnic-tshirt',
    },
  ];

  // Initialize currentImages for all items
  useEffect(() => {
    const initialImages = {};
    [...saleProducts, ...products].forEach((product) => {
      initialImages[product.id] = 0;
    });
    setCurrentImages(initialImages);
  }, []);

  const handleProductClick = (product) => {
    requestAccess(() => router.push(`/product/${product.slug}`));
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

  // Parse price string to number for sorting
  const parsePrice = (priceStr) => {
    return parseInt(priceStr.replace(/[₹,]/g, ''));
  };

  // Sort products
  const getSortedProducts = () => {
    const allProducts = [...saleProducts, ...products];
    
    if (sortOrder === 'low-to-high') {
      return [...allProducts].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    } else if (sortOrder === 'high-to-low') {
      return [...allProducts].sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    }
    
    return allProducts;
  };

  const sortedProducts = getSortedProducts();

  return (
  <>
    <Navbar />
    <main className="min-h-screen bg-gray-50 text-xs leading-[1.5]">
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
        `}</style>

        {/* Title, Paragraph & Sort */}
        <div className="flex flex-col items-center justify-center mt-16 mb-8 sm:mb-10 lg:mb-12 px-4 text-center">
          <h1 className="font-bold tracking-wider text-gray-900 text-xs mb-4">
            ALL PRODUCTS
          </h1>

          <p className="max-w-xl text-xs font-bold uppercase leading-relaxed text-neutral-600 tracking-wider mb-6">
            A curated selection of timeless essentials from our latest drops — crafted with precision,
            minimal detailing, and a quiet luxury spirit. Discover silhouettes that speak softly,
            yet stay forever.
          </p>

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

        {/* Product Grid */}
        <div className="product-grid mt-16">
          {sortedProducts.map((item) => (
            <div
              key={item.id}
              className="cursor-pointer w-full border-r border-b border-gray-200 last:border-r-0 bg-white"
              onClick={() => handleProductClick(item)}
              onMouseEnter={() => setHoveredProduct(item.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Image Container */}
              <div
                className="relative w-full bg-gray-50 image-container"
                style={{ paddingBottom: '150%' }}
              >
                {/* SALE badge */}
                {saleIds.has(item.id) && (
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

                {/* Carousel Controls */}
                {item.images.length > 1 && hoveredProduct === item.id && (
                  <>
                    <button
                      onClick={(e) => handlePrevImage(e, item.id, item.images.length)}
                      className="carousel-btn absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-black w-8 h-8 flex items-center justify-center z-10 text-xs font-bold"
                    >
                      ‹
                    </button>
                    <button
                      onClick={(e) => handleNextImage(e, item.id, item.images.length)}
                      className="carousel-btn absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-black w-8 h-8 flex items-center justify-center z-10 text-xs font-bold"
                    >
                      ›
                    </button>
                  </>
                )}
              </div>

              {/* Text Region */}
              <div className="text-center px-3 lg:px-4 py-4">
                <h3 className="font-bold tracking-wide text-neutral-900 mb-1 text-xs">
                  {item.title}
                </h3>

                <p className="font-bold tracking-wider text-neutral-500 mb-2 text-xs">
                  {item.collection}
                </p>

                {item.originalPrice ? (
                  <div className="font-bold tracking-wider mb-2 text-xs">
                    <span className="line-through text-neutral-400 mr-2">
                      {item.originalPrice}
                    </span>
                    <span className="text-green-600">{item.price}</span>
                  </div>
                ) : (
                  <p className="font-bold tracking-wider text-neutral-600 mb-2 text-xs">
                    {item.price}
                  </p>
                )}

                <div className="mt-2 flex items-center justify-center">
                  <span
                    className={`inline-block px-3 py-1 font-bold text-xs ${
                      item.inStock ? 'bg-gray-50 border text-neutral-900' : 'bg-red-800 text-white'
                    }`}
                  >
                    {item.inStock ? 'AVAILABLE' : 'SOLD OUT'}
                  </span>
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