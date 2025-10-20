'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Centralized product data
const allProducts = [
  {
    id: 9,
    images: ['/t10/t10-new.png', '/t10/t10-2-new.png', '/t10/t10-3-new.png', '/t10/t10-4.png'],
    title: 'ADDITION T-SHIRT',
    price: '₹15,650',
    originalPrice: '₹45,675',
    inStock: true,
    collection: 'FROM "DRAFTS VAULT"',
    slug: 'addition-tshirt',
    productCode: 'DV-ADD-001',
    care: 'Machine wash cold. Do not bleach. Tumble dry low. Iron on low heat if needed. Do not dry clean.',
    fabric: '100% Premium Cotton',
    fit: 'Regular fit with ribbed crew neck',
    description: 'A unique design from our Drafts Vault collection featuring bold graphics and premium construction.',
  },
  {
    id: 10,
    images: ['/t11/t11.png', '/t11/t11-2.png', '/t11/t11-3.png', '/t11/t11-4.png'],
    title: 'COFFEE SPILL T-SHIRT',
    price: '₹12,650',
    originalPrice: '₹25,675',
    inStock: true,
    collection: 'FROM "DRAFTS VAULT"',
    slug: 'coffee-spill-tshirt',
    productCode: 'DV-CFS-002',
    care: 'Machine wash cold. Do not bleach. Tumble dry low. Iron on low heat if needed. Do not dry clean.',
    fabric: '100% Premium Cotton',
    fit: 'Regular fit with ribbed crew neck',
    description: 'Inspired by creative chaos, this design brings artistic energy to your wardrobe.',
  },
  {
    id: 12,
    images: ['/t9/t9.png', '/t9/t9-2.png', '/t9/t9-3.png', '/t9/t9-4.png'],
    title: 'BLUE VALEN T-SHIRT',
    price: '₹25,749',
    inStock: true,
    collection: 'FROM "DRAFTS VAULT"',
    slug: 'blue-valen-tshirt',
    productCode: 'DV-BLV-003',
    care: 'Machine wash cold. Do not bleach. Tumble dry low. Iron on low heat if needed. Do not dry clean.',
    fabric: '100% Premium Cotton',
    fit: 'Regular fit with ribbed crew neck',
    description: 'A striking blue design that captures the essence of the Valen aesthetic.',
  },
  {
    id: 11,
    images: ['/t12/t12.png', '/t12/t12-2.png', '/t12/t12-3.png', '/t12/t12-4.png'],
    title: 'KISSES TO VALEN T-SHIRT',
    price: '₹1,35,999',
    inStock: true,
    collection: 'FROM "DRAFTS VAULT"',
    slug: 'kisses-to-valen-tshirt',
    productCode: 'DV-KTV-004',
    care: 'Machine wash cold. Do not bleach. Tumble dry low. Iron on low heat if needed. Do not dry clean.',
    fabric: '100% Premium Cotton',
    fit: 'Regular fit with ribbed crew neck',
    description: 'An exclusive piece celebrating the Valen legacy with premium craftsmanship.',
  },
  {
    id: 1,
    images: ['/t1/t1.png', '/t1/t1-2.png', '/t1/t1-3.png', '/t1/t1-4.png'],
    title: 'MAYBE EGYPT T-SHIRT',
    price: '₹35,799',
    inStock: true,
    collection: 'FROM "BLACK CHAPTER ONE"',
    slug: 'maybe-egypt-tshirt',
    productCode: 'BC1-MEG-005',
    care: 'Machine wash cold. Do not bleach. Tumble dry low. Iron on low heat if needed. Do not dry clean.',
    fabric: '100% Premium Cotton',
    fit: 'Regular fit with ribbed crew neck',
    description: 'Egyptian-inspired graphics meet contemporary streetwear in this iconic piece.',
  },
  {
    id: 2,
    images: ['/t2/t2.png', '/t2/t2-2.png', '/t2/t2-3.png', '/t2/t2-4.png'],
    title: 'IRONVEIL T-SHIRT',
    price: '₹35,799',
    inStock: true,
    collection: 'FROM "BLACK CHAPTER ONE"',
    slug: 'ironveil-tshirt',
    productCode: 'BC1-IRV-006',
    care: 'Machine wash cold. Do not bleach. Tumble dry low. Iron on low heat if needed. Do not dry clean.',
    fabric: '100% Premium Cotton',
    fit: 'Regular fit with ribbed crew neck',
    description: 'Bold and mysterious, the Ironveil design commands attention.',
  },
  {
    id: 3,
    images: ['/t3/t3.png', '/t3/t3-2.png', '/t3/t3-3.png', '/t3/t3-4.png'],
    title: 'ONLY NAMES T-SHIRT',
    price: '₹49,799',
    inStock: false,
    collection: 'FROM "BLACK CHAPTER ONE"',
    slug: 'only-names-tshirt',
    productCode: 'BC1-ONM-007',
    care: 'Machine wash cold. Do not bleach. Tumble dry low. Iron on low heat if needed. Do not dry clean.',
    fabric: '100% Premium Cotton',
    fit: 'Regular fit with ribbed crew neck',
    description: 'A typographic masterpiece from the Black Chapter One collection.',
  },
  {
    id: 4,
    images: ['/t4/t4.png', '/t4/t4-2.png', '/t4/t4-3.png', '/t4/t4-4.png'],
    title: 'OWL EYES T-SHIRT',
    price: '₹35,799',
    inStock: true,
    collection: 'FROM "BLACK CHAPTER ONE"',
    slug: 'owl-eyes-tshirt',
    productCode: 'BC1-OWL-008',
    care: 'Machine wash cold. Do not bleach. Tumble dry low. Iron on low heat if needed. Do not dry clean.',
    fabric: '100% Premium Cotton',
    fit: 'Regular fit with ribbed crew neck',
    description: 'Featuring mesmerizing owl eye graphics that captivate and intrigue.',
  },
  {
    id: 5,
    images: ['/t6/t6.png', '/t6/t6-2.png', '/t6/t6-3.png', '/t6/t6-4.png'],
    title: 'VALEN VALENTINE T-SHIRT',
    price: '₹35,799',
    inStock: true,
    collection: 'FROM "BLACK CHAPTER ONE"',
    slug: 'valen-valentine-tshirt',
    productCode: 'BC1-VVT-009',
    care: 'Machine wash cold. Do not bleach. Tumble dry low. Iron on low heat if needed. Do not dry clean.',
    fabric: '100% Premium Cotton',
    fit: 'Regular fit with ribbed crew neck',
    description: 'A romantic twist on the classic Valen aesthetic.',
  },
  {
    id: 6,
    images: ['/t5/t5.png', '/t5/t5-2.png', '/t5/t5-3.png', '/t5/t5-4.png'],
    title: 'DEAR MASIJMO T-SHIRT',
    price: '₹1,55,799',
    inStock: true,
    collection: 'FROM "BLACK CHAPTER ONE"',
    slug: 'dear-masijmo-tshirt',
    productCode: 'BC1-DMS-010',
    care: 'Machine wash cold. Do not bleach. Tumble dry low. Iron on low heat if needed. Do not dry clean.',
    fabric: '100% Premium Cotton',
    fit: 'Regular fit with ribbed crew neck',
    description: 'An exclusive limited edition piece with intricate detailing and craftsmanship.',
  },
  {
    id: 7,
    images: ['/t8/t8.png', '/t8/t8-2.png', '/t8/t8-3.png', '/t8/t8-4.png'],
    title: 'VALEN CLUB T-SHIRT',
    price: '₹65,799',
    inStock: false,
    collection: 'FROM "BLACK CHAPTER ONE"',
    slug: 'valen-club-tshirt',
    productCode: 'BC1-VCL-011',
    care: 'Machine wash cold. Do not bleach. Tumble dry low. Iron on low heat if needed. Do not dry clean.',
    fabric: '100% Premium Cotton',
    fit: 'Regular fit with ribbed crew neck',
    description: 'Join the club with this exclusive members-only design.',
  },
  {
    id: 8,
    images: ['/t7/t7.png', '/t7/t7-2.png', '/t7/t7-3.png', '/t7/t7-4.png'],
    title: 'VALEN PICNIC T-SHIRT',
    price: '₹35,799',
    inStock: true,
    collection: 'FROM "BLACK CHAPTER ONE"',
    slug: 'valen-picnic-tshirt',
    productCode: 'BC1-VPC-012',
    care: 'Machine wash cold. Do not bleach. Tumble dry low. Iron on low heat if needed. Do not dry clean.',
    fabric: '100% Premium Cotton',
    fit: 'Regular fit with ribbed crew neck',
    description: 'Casual comfort meets artistic expression in this relaxed design.',
  },
];

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-t border-gray-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 md:py-6 flex items-center justify-center text-center gap-2"
      >
        <span className="text-xs font-bold tracking-wider text-neutral-900">{title}</span>
        <span className="text-xs font-bold text-neutral-900">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="pb-4 md:pb-6 text-xs font-bold uppercase tracking-wider leading-relaxed text-neutral-800 text-center max-w-2xl mx-auto px-4">
          {children}
        </div>
      )}
    </div>
  );
};

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');

  // Find product by slug
  const product = allProducts.find((p) => p.slug === params.slug);

  // Update document title (tab name)
  useEffect(() => {
    if (product) {
      document.title = `${product.title} | VALEN MASIJMO`;
    }
  }, [product]);

  // Handle product not found
  if (!product) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-xs font-bold tracking-wider mb-4">PRODUCT NOT FOUND</h1>
            <button
              onClick={() => router.push('/shop')}
              className="text-xs font-bold tracking-wider px-6 py-3 bg-black text-white hover:bg-neutral-800 transition-colors"
            >
              RETURN TO SHOP
            </button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <main>
      <Head>
        <title>{product.title} | VALEN MASIJMO</title>
      </Head>
      <Navbar />

      {/* Image Gallery Section - Responsive Layout */}
      <section className="flex items-center justify-center px-4 sm:px-6 lg:px-8 mt-20 sm:mt-24 md:mt-28 lg:mt-32 py-4 sm:py-6 md:py-8">
        <div className="w-full max-w-7xl">
          {/* Mobile & Tablet Layout (below lg) */}
          <div className="lg:hidden flex flex-col items-center gap-4">
            {/* Main Image */}
            <div className="relative w-full max-w-md">
              <div className="relative aspect-[2/3]">
                <Image
                  src={product.images[selectedImage]}
                  alt={`${product.title} view ${selectedImage + 1}`}
                  fill
                  className="object-contain"
                  priority
                />
                {/* Image Counter (no background) */}
                <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-bold tracking-wider text-white drop-shadow">
                  {selectedImage + 1} / {product.images.length}
                </div>
              </div>
            </div>

            {/* Thumbnails - Horizontal scroll */}
            <div className="w-full overflow-x-auto pb-2">
              <div className="flex gap-2 px-2 min-w-min justify-center">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative flex-shrink-0 w-20 h-28 sm:w-24 sm:h-32 md:w-28 md:h-36 group overflow-hidden ring-1 ${
                      selectedImage === idx ? 'ring-black' : 'ring-transparent'
                    }`}
                    aria-current={selectedImage === idx ? 'true' : 'false'}
                  >
                    <Image
                      src={img}
                      alt={`${product.title} thumbnail ${idx + 1}`}
                      fill
                      className="object-cover scale-90 transition-transform duration-200 group-hover:scale-105"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Layout (lg and above) */}
          <div className="hidden lg:flex flex-row items-start justify-center gap-4">
            {/* Main Image */}
            <div className="relative">
              <div className="relative">
                <Image
                  src={product.images[selectedImage]}
                  alt={`${product.title} view ${selectedImage + 1}`}
                  width={410}
                  height={614}
                  className="object-contain h-auto"
                  priority
                />
                {/* Image Counter (no background) */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 text-xs font-bold tracking-wider text-white drop-shadow">
                  {selectedImage + 1} / {product.images.length}
                </div>
              </div>
            </div>

            {/* Thumbnails - Vertical */}
            <div className="flex flex-col gap-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative flex-shrink-0 w-32 h-37 group overflow-hidden ring-1 ${
                    selectedImage === idx ? 'ring-black' : 'ring-transparent'
                  }`}
                  aria-current={selectedImage === idx ? 'true' : 'false'}
                >
                  <Image
                    src={img}
                    alt={`${product.title} thumbnail ${idx + 1}`}
                    fill
                    className="object-cover scale-90 transition-transform duration-200 group-hover:scale-105"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
          {/* Product Code */}
          <div>
            <p className="text-xs font-bold tracking-wider text-neutral-500 mb-1">PRODUCT CODE</p>
            <p className="text-xs font-bold tracking-wider text-neutral-900">{product.productCode}</p>
          </div>

          {/* Collection */}
          <div>
            <p className="text-xs font-bold tracking-wider text-neutral-500 mb-1">COLLECTION</p>
            <p className="text-xs font-bold tracking-wider text-neutral-900">{product.collection}</p>
          </div>

          {/* Title */}
          <div className="px-2">
            <h1 className="text-base sm:text-base md:text-base lg:text-base font-bold tracking-wider text-neutral-900">
              {product.title}
            </h1>
          </div>

          {/* Price */}
          <div>
            <p className="text-xs font-bold tracking-wider text-neutral-500 mb-2">PRICE</p>
            {product.originalPrice ? (
              <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
                <span className="text-base sm:text-base font-bold tracking-wider text-green-600">{product.price}</span>
                <span className="text-base sm:text-base font-bold tracking-wider line-through text-neutral-400">
                  {product.originalPrice}
                </span>
              </div>
            ) : (
              <p className="text-base sm:text-base font-bold tracking-wider text-neutral-900">{product.price}</p>
            )}
          </div>

          {/* Stock Status (no background color) */}
          <div className="flex justify-center">
            <span
              className={`inline-block px-4 sm:px-6 py-2 sm:py-3 text-xs font-bold tracking-wider border ${
                product.inStock
                  ? 'border-gray-300 text-neutral-900'
                  : 'border-red-600 text-red-600'
              }`}
            >
              {product.inStock ? 'IN STOCK' : 'SOLD OUT'}
            </span>
          </div>

          {/* Size Selection */}
          {product.inStock && (
            <div>
              <p className="text-xs font-bold tracking-wider text-neutral-500 mb-3 sm:mb-4">SELECT SIZE</p>
              <div className="flex flex-wrap justify-center gap-2 max-w-md mx-auto px-2">
                {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-14 sm:w-16 md:w-20 py-2 sm:py-3 text-xs font-bold tracking-wider border-2 transition-all ${
                      selectedSize === size
                        ? 'border-black bg-black text-white'
                        : 'border-gray-300 text-neutral-900 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Contact Seller CTA (kept black button) */}
          {product.inStock && (
            <div className="max-w-md mx-auto px-2">
              <p className="text-xs font-bold tracking-wider text-neutral-500 mb-3">
                CHECK AVAILABILITY
              </p>
              <button
                className="w-full px-6 py-3 text-xs font-bold tracking-wider bg-black text-white hover:bg-neutral-800 transition-colors"
              >
                CONTACT VALEN MASIJMO SELLER
              </button>
            </div>
          )}

          {/* Accordions */}
          <div className="space-y-0 border-b border-gray-200 max-w-2xl mx-auto">
            <Accordion title="PRODUCT DETAILS" defaultOpen={true}>
              <p className="mb-2 text-gray-500 text-left">{product.description}</p>
              <p className="mb-2 text-gray-500 text-left">FABRIC: {product.fabric}</p>
              <p className="text-gray-500 text-left">FIT: {product.fit}</p>
            </Accordion>

            <Accordion title="CARE INSTRUCTIONS">
              <div className="space-y-2 text-left">
                <p className="text-gray-500">• MACHINE WASH COLD WITH SIMILAR COLORS</p>
                <p className="text-gray-500">• DO NOT BLEACH OR USE HARSH DETERGENTS</p>
                <p className="text-gray-500">• TUMBLE DRY ON LOW HEAT</p>
                <p className="text-gray-500">• IRON ON LOW HEAT IF NEEDED</p>
                <p className="text-gray-500">• DO NOT DRY CLEAN</p>
                <p className="text-gray-500">• AVOID DIRECT SUNLIGHT WHEN DRYING</p>
              </div>
            </Accordion>

            <Accordion title="WASHING GUIDE">
              <p className="mb-4 text-gray-500 text-left">TO MAINTAIN THE QUALITY AND LONGEVITY OF YOUR GARMENT:</p>
              <div className="space-y-2 text-left">
                <p className="text-gray-500">• TURN GARMENT INSIDE OUT BEFORE WASHING</p>
                <p className="text-gray-500">• USE COLD WATER TO PREVENT SHRINKAGE</p>
                <p className="text-gray-500">• WASH WITH SIMILAR COLORS ONLY</p>
                <p className="text-gray-500">• REMOVE PROMPTLY FROM WASHER</p>
                <p className="text-gray-500">• RESHAPE WHILE DAMP IF NEEDED</p>
                <p className="text-gray-500">• STORE IN A COOL, DRY PLACE</p>
              </div>
            </Accordion>

            <Accordion title="SHIPPING & RETURNS">
              <p className="mb-3 text-gray-500 text-left">SHIPPING:</p>
              <p className="mb-4 text-gray-500 text-left">FREE SHIPPING ON ORDERS ABOVE ₹2,000. STANDARD DELIVERY TAKES 5–7 BUSINESS DAYS.</p>
              <p className="mb-3 text-gray-500 text-left">RETURNS:</p>
              <p>30-DAY RETURN POLICY. ITEMS MUST BE UNWORN, UNWASHED, AND IN ORIGINAL CONDITION WITH TAGS ATTACHED.</p>
            </Accordion>

            <Accordion title="SIZE GUIDE">
              <div className="overflow-x-auto">
                <table className="w-full text-[10px] sm:text-xs text-gray-600 border border-gray-200">
                  <thead>
                    <tr>
                      <th className="border border-gray-200 px-2 py-1 font-medium">Size</th>
                      <th className="border border-gray-200 px-2 py-1 font-medium">Chest</th>
                      <th className="border border-gray-200 px-2 py-1 font-medium">Length</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-2 py-1">XS</td>
                      <td className="border border-gray-200 px-2 py-1">34&amp;quot;</td>
                      <td className="border border-gray-200 px-2 py-1">26&amp;quot;</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-2 py-1">S</td>
                      <td className="border border-gray-200 px-2 py-1">36&amp;quot;</td>
                      <td className="border border-gray-200 px-2 py-1">27&amp;quot;</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-2 py-1">M</td>
                      <td className="border border-gray-200 px-2 py-1">38&amp;quot;</td>
                      <td className="border border-gray-200 px-2 py-1">28&amp;quot;</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-2 py-1">L</td>
                      <td className="border border-gray-200 px-2 py-1">40&amp;quot;</td>
                      <td className="border border-gray-200 px-2 py-1">29&amp;quot;</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-2 py-1">XL</td>
                      <td className="border border-gray-200 px-2 py-1">42&amp;quot;</td>
                      <td className="border border-gray-200 px-2 py-1">30&amp;quot;</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-2 py-1">XXL</td>
                      <td className="border border-gray-200 px-2 py-1">44&amp;quot;</td>
                      <td className="border border-gray-200 px-2 py-1">31&amp;quot;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Accordion>
          </div>

          {/* Back to Shop */}
          <div className="pt-6 sm:pt-8">
            <button
              onClick={() => router.push('/shop')}
              className="text-xs font-bold tracking-wider text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              ← BACK TO SHOP
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
