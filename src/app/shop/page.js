'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePassword } from '../components/PasswordProtection';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ShopPage() {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [currentImages, setCurrentImages] = useState({});
  
  const { requestAccess } = usePassword();
  const router = useRouter();

  // ============================================
  // ADD YOUR PRODUCTS HERE - Just edit this array!
  // ============================================
  const products = [
    {
      id: 1,
      images: ['/t1.png'],
      title: 'MAYBE EGYPT T-SHIRT',
      price: '₹35,799',
      inStock: true,
      collection: 'FROM: THE BLACK CHAPTER ONE',
      slug: 'maybe-egypt-tshirt'
    },
    {
      id: 2,
      images: ['/t2.png'],
      title: 'IRONVEIL T-SHIRT',
      price: '₹35,799',
      inStock: true,
      slug: 'ironveil-tshirt'
    },
    {
      id: 3,
      images: ['/t3.png'],
      title: 'ONLY NAMES T-SHIRT',
      price: '₹49,799',
      inStock: false,
      slug: 'only-names-tshirt'
    },
    {
      id: 4,
      images: ['/t4.png'],
      title: 'THE OWL IS WATCHING T-SHIRT',
      price: '₹35,799',
      inStock: true,
      slug: 'owl-watching-tshirt'
    },
    {
      id: 5,
      images: ['/t6.png'],
      title: 'VALEN VALENTINE T-SHIRT',
      price: '₹35,799',
      inStock: true,
      slug: 'maybe-egypt-tshirt'
    },
    {
      id: 6,
      images: ['/t5.png'],
      title: 'DEAR MASIJMO T-SHIRT',
      price: '₹1,55,799',
      inStock: true,
      slug: 'ironveil-tshirt'
    },
    {
      id: 7,
      images: ['/t8.png'],
      title: 'VALEN CLUB EXCLUSIVE T-SHIRT',
      price: '₹65,799',
      inStock: false,
      slug: 'only-names-tshirt'
    },
    {
      id: 8,
      images: ['/t7.png'],
      title: 'VALEN PICNIC T-SHIRT',
      price: '₹35,799',
      inStock: true,
      slug: 'owl-watching-tshirt'
    },
    {
      id: 9,
      images: ['/t9.png'],
      title: 'BIGGER PROBLEMS T-SHIRT',
      price: '₹14,659',
      inStock: true,
      slug: 'bigger-problems-tshirt'
    },
    {
      id: 10,
      images: ['/t11.png'],
      title: 'MASIJMO KISS T-SHIRT',
      price: '₹16,659',
      inStock: true,
      slug: 'kiss-tshirt'
    },
    {
      id: 11,
      images: ['/t10.png'],
      title: 'ADDITION T-SHIRT',
      price: '₹26,659',
      inStock: true,
      slug: 'addition-tshirt'
    }
  ];

  // Initialize currentImages state for all products
  useEffect(() => {
    const initialImages = {};
    products.forEach(product => {
      initialImages[product.id] = 0;
    });
    setCurrentImages(initialImages);
  }, []);

  // Handle image cycling on hover
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
    <>
      <Navbar />
      
      <main className="min-h-screen bg-gray-50">
        <section className="w-full py-16">
          <style jsx>{`
            @keyframes fadeIn {
              0% { opacity: 0; transform: translateY(0); }
              100% { opacity: 1; transform: translateY(0); }
            }
            @keyframes fadeImage {
              0% { opacity: 0; }
              100% { opacity: 1; }
            }
            @keyframes slideUp {
              0% { opacity: 0; transform: translateY(10px); }
              100% { opacity: 1; transform: translateY(0); }
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
            <h1 className="text-xs font-bold text-center mb-12 tracking-wider text-gray-900 px-4">
              ALL PRODUCTS
            </h1>
            
            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 lg:gap-2 px-4 lg:px-8">
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
                    className="relative w-full overflow-hidden bg-gray-50 mb-4 image-container" 
                    style={{ paddingBottom: '150%' }}
                  >
                    {currentImages[product.id] !== undefined && (
                      <Image
                        src={product.images[currentImages[product.id]]}
                        alt={product.title}
                        fill
                        className="object-cover image-slide"
                        key={currentImages[product.id]}
                        style={{ animation: 'fadeImage 0.8s ease-in-out' }}
                      />
                    )}
                  </div>
                  
                  {/* Product Info */}
                  <div className="text-center px-2 relative mb-4">
                    <h3 className="text-xs font-bold tracking-wide transition-all duration-300 group-hover:opacity-70 text-neutral-900 mb-1">
                      {product.title}
                    </h3>

                    <p className="text-xs font-bold tracking-wider transition-all duration-300 group-hover:text-neutral-500 text-neutral-500 mb-2">
                      {product.collection}
                    </p>
                    
                    <p className="text-xs font-bold tracking-wider transition-all duration-300 group-hover:text-neutral-500 text-neutral-500 mb-2">
                      {product.price}
                    </p>

                    {/* Uncomment if you want stock badges */}
                    <div className="mt-2 flex items-center justify-center">
                      <span 
                        className={`inline-block px-3 py-1 text-xs font-bold ${
                          product.inStock 
                            ? 'bg-black text-white' 
                            : 'bg-black text-white'
                        }`}
                      >
                        {product.inStock ? 'In Stock' : 'Sold Out'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}