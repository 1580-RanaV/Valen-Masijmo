'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { usePassword } from '../components/PasswordProtection';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ShopPage() {
  const [currentImages, setCurrentImages] = useState({});
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
      slug: 'addition-limited',
      soldCount: 10,
      soldTotal: 21,
    },
    {
      id: 10,
      images: ['/t11.png'],
      title: 'MASIJMO KISS T-SHIRT',
      price: '₹10,650',
      originalPrice: '₹25,675',
      inStock: true,
      collection: 'FROM "DRAFTS VAULT"',
      slug: 'kiss-limited',
      soldCount: 2,
      soldTotal: 21,
    },
  ];

  const saleIds = new Set(saleProducts.map((p) => p.id));

  // ============================================
  // REGULAR PRODUCTS
  // ============================================
  const products = [
    {
      id: 11,
      images: ['/t13-1.png'],
      title: 'KISSES TO VALEN T-SHIRT',
      price: '₹1,35,999',
      inStock: true,
      collection: 'FROM "DRAFTS VAULT"',
      slug: 'owl-watching-tshirt',
      soldCount: 9,
      soldTotal: 21,
    },
    {
      id: 1,
      images: ['/t1.png'],
      title: 'MAYBE EGYPT T-SHIRT',
      price: '₹35,799',
      inStock: true,
      collection: 'FROM "BLACK CHAPTER ONE"',
      slug: 'maybe-egypt-tshirt',
      soldCount: 2,
      soldTotal: 21,
    },
    {
      id: 2,
      images: ['/t2.png'],
      title: 'IRONVEIL T-SHIRT',
      price: '₹35,799',
      inStock: true,
      collection: 'FROM "BLACK CHAPTER ONE"',
      slug: 'ironveil-tshirt',
      soldCount: 5,
      soldTotal: 21,
    },
    {
      id: 3,
      images: ['/t3.png'],
      title: 'ONLY NAMES T-SHIRT',
      price: '₹49,799',
      inStock: false,
      collection: 'FROM "BLACK CHAPTER ONE"',
      slug: 'only-names-tshirt',
      soldCount: 21,
      soldTotal: 21,
    },
    {
      id: 4,
      images: ['/t4.png'],
      title: 'OWL EYES T-SHIRT',
      price: '₹35,799',
      inStock: true,
      collection: 'FROM "BLACK CHAPTER ONE"',
      slug: 'owl-watching-tshirt',
      soldCount: 7,
      soldTotal: 21,
    },
    {
      id: 5,
      images: ['/t6.png'],
      title: 'VALEN VALENTINE T-SHIRT',
      price: '₹35,799',
      inStock: true,
      collection: 'FROM "BLACK CHAPTER ONE"',
      slug: 'maybe-egypt-tshirt',
      soldCount: 3,
      soldTotal: 21,
    },
    {
      id: 6,
      images: ['/t5.png'],
      title: 'DEAR MASIJMO T-SHIRT',
      price: '₹1,55,799',
      inStock: true,
      collection: 'FROM "BLACK CHAPTER ONE"',
      slug: 'ironveil-tshirt',
      soldCount: 1,
      soldTotal: 21,
    },
    {
      id: 7,
      images: ['/t8.png'],
      title: 'VALEN CLUB T-SHIRT',
      price: '₹65,799',
      inStock: false,
      collection: 'FROM "BLACK CHAPTER ONE"',
      slug: 'only-names-tshirt',
      soldCount: 21,
      soldTotal: 21,
    },
    {
      id: 8,
      images: ['/t7.png'],
      title: 'VALEN PICNIC T-SHIRT',
      price: '₹35,799',
      inStock: true,
      collection: 'FROM "BLACK CHAPTER ONE"',
      slug: 'owl-watching-tshirt',
      soldCount: 9,
      soldTotal: 21,
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

  const allProducts = [...saleProducts, ...products];

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
          `}</style>

          {/* Title */}
          <h1 className="font-bold text-center mt-16 mb-8 sm:mb-10 lg:mb-12 tracking-wider text-gray-900 px-4">
            ALL PRODUCTS
          </h1>

          {/* Product Grid */}
          <div className="product-grid">
            {allProducts.map((item) => (
              <div
                key={item.id}
                className="cursor-pointer w-full border-r border-b border-gray-200 last:border-r-0 bg-white"
                onClick={() => handleProductClick(item)}
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
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Text Region */}
                <div className="text-center px-3 lg:px-4 py-4">
                  <h3 className="font-bold tracking-wide text-neutral-900 mb-1">
                    {item.title}
                  </h3>

                  <p className="font-bold tracking-wider text-neutral-500 mb-2">
                    {item.collection}
                  </p>

                  {item.originalPrice ? (
                    <div className="font-bold tracking-wider mb-2">
                      <span className="line-through text-neutral-400 mr-2">
                        {item.originalPrice}
                      </span>
                      <span className="text-green-600">{item.price}</span>
                    </div>
                  ) : (
                    <p className="font-bold tracking-wider text-neutral-600 mb-2">
                      {item.price}
                    </p>
                  )}

                  {/* <div className="mb-2">
                    <span className="font-bold tracking-widest text-neutral-500">
                      [{item.soldCount ?? 0}/{item.soldTotal ?? 0}] SOLD
                    </span>
                  </div> */}

                  <div className="mt-2 flex items-center justify-center">
                    <span
                      className={`inline-block px-3 py-1 font-bold ${
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
