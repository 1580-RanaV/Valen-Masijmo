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
    <div className="border-t border-gray-300 font-bold">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 md:py-6 flex items-center justify-center text-center gap-2 font-bold"
      >
        <span className="text-xs tracking-wider text-neutral-900 font-bold">{title}</span>
        <span className="text-xs text-neutral-900 font-bold">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="pb-4 md:pb-6 text-xs uppercase tracking-wider leading-relaxed text-neutral-900 text-center max-w-2xl mx-auto px-4 font-bold">
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

  const product = allProducts.find((p) => p.slug === params.slug);

  useEffect(() => {
    if (product) {
      document.title = `${product.title} | VALEN MASIJMO`;
    }
  }, [product]);

  if (!product) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center px-4 font-bold">
          <div className="text-center font-bold">
            <h1 className="text-xs tracking-wider mb-4 text-neutral-900 font-bold">PRODUCT NOT FOUND</h1>
            <button
              onClick={() => router.push('/shop')}
              className="text-xs tracking-wider px-6 py-3 bg-black text-neutral-900 hover:text-neutral-900 transition-colors font-bold"
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
    <main className="bg-white font-bold">
      <Head>
        <title>{product.title} | VALEN MASIJMO</title>
      </Head>
      <Navbar />

      <section className="mt-16 sm:mt-20 md:mt-24 lg:mt-28 font-bold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-bold">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 font-bold">

            <div className="space-y-4 font-bold">
              <div className="relative w-full aspect-[3/4] bg-neutral-50 overflow-hidden font-bold">
                <Image
                  src={product.images[selectedImage]}
                  alt={`${product.title}`}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 font-bold">
                  <p className="text-xs tracking-wider text-neutral-900 font-bold">
                    {selectedImage + 1} / {product.images.length}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-3 font-bold">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className="relative aspect-[3/4] bg-neutral-50 overflow-hidden transition-opacity hover:opacity-80 font-bold"
                  >
                    <Image
                      src={img}
                      alt={`View ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                    {selectedImage === idx && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center font-bold">
                        <div className="w-1 h-1 rounded-full bg-white font-bold" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:sticky lg:top-24 lg:self-start space-y-8 lg:space-y-10 pb-12 font-bold">
              
              <div className="space-y-4 pb-0 font-bold">
                <p className="text-xs tracking-[0.2em] text-neutral-900 uppercase font-bold">
                  {product.productCode}
                </p>
                
                <h1 className="text-base tracking-wide text-neutral-900 leading-tight sm:text-base font-bold">
                  {product.title}
                </h1>
                
                <div className="flex items-baseline gap-3 font-bold">
                  {product.originalPrice ? (
                    <>
                      <span className="text-base text-neutral-900 font-bold">{product.price}</span>
                      <span className="text-base line-through text-neutral-900 font-bold">{product.originalPrice}</span>
                      <span className="text-base px-2 py-1 bg-green-50 text-neutral-900 tracking-wider font-bold">SALE</span>
                    </>
                  ) : (
                    <span className="text-base text-neutral-900 font-bold">{product.price}</span>
                  )}
                </div>
              </div>

              <div className="font-bold">
                <div className={`inline-flex items-center gap-2 px-4 py-2 border font-bold ${
                  product.inStock 
                    ? 'border-neutral-200 bg-neutral-50' 
                    : 'border-red-200 bg-red-50'
                }`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${
                    product.inStock ? 'bg-green-500' : 'bg-red-500'
                  }`} />
                  <span className="text-xs tracking-wider text-neutral-900 font-bold">
                    {product.inStock ? 'IN STOCK' : 'SOLD OUT'}
                  </span>
                </div>
              </div>

              {product.inStock && (
                <div className="space-y-4 font-bold pt-4">
                  <p className="text-xs tracking-[0.2em] text-neutral-900 uppercase font-bold">
                    Select Size
                  </p>
                  <div className="grid grid-cols-3 gap-2 font-bold">
                    {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`py-3 text-xs tracking-wider border transition-all font-bold ${
                          selectedSize === size
                            ? 'border-neutral-900 bg-neutral-900 text-neutral-900'
                            : 'border-neutral-200 bg-white text-neutral-900 hover:border-neutral-400'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {product.inStock && (
                <button className="w-full py-4 bg-neutral-900 text-white text-xs tracking-[0.2em] hover:bg-neutral-800 transition-colors uppercase font-bold">
                  Contact Seller
                </button>
              )}

              <div className="space-y-0 divide-y divide-neutral-200 font-bold">
                {/* Accordions unchanged but all font-bold */}
                <Accordion title="DETAILS" defaultOpen={true}>
                  <div className="space-y-3 text-xs text-left leading-relaxed text-neutral-900">
                    <p>{product.description}</p>
                    <div className="pt-2 space-y-1 text-left">
                      <p className="font-bold">Fabric: <span className="font-bold">{product.fabric}</span></p>
                      <p className="font-bold">Fit: <span className="font-bold">{product.fit}</span></p>
                    </div>
                  </div>
                </Accordion>

                <Accordion title="CARE INSTRUCTIONS" defaultOpen={true}>
                  <div className="space-y-2 text-xs text-left text-neutral-900">
                    <p>• Machine wash cold with similar colors</p>
                    <p>• Do not bleach or use harsh detergents</p>
                    <p>• Tumble dry on low heat</p>
                    <p>• Iron on low heat if needed</p>
                    <p>• Do not dry clean</p>
                    <p>• Avoid direct sunlight when drying</p>
                  </div>
                </Accordion>

                <Accordion title="WASHING GUIDE">
                  <div className="space-y-3 text-xs text-left text-neutral-900">
                    <p className="font-bold uppercase">To maintain quality and longevity:</p>
                    <div className="space-y-2">
                      <p>• Turn garment inside out before washing</p>
                      <p>• Use cold water to prevent shrinkage</p>
                      <p>• Wash with similar colors only</p>
                      <p>• Remove promptly from washer</p>
                      <p>• Reshape while damp if needed</p>
                      <p>• Store in a cool, dry place</p>
                    </div>
                  </div>
                </Accordion>

                <Accordion title="SHIPPING AND RETURNS">
                  <div className="space-y-4 text-xs text-left text-neutral-900">
                    <div>
                      <p className="font-bold uppercase mb-1">Shipping</p>
                      <p>Free shipping on orders above ₹2,000. Standard delivery takes 5–7 business days.</p>
                    </div>
                    <div>
                      <p className="font-bold uppercase mb-1">Returns</p>
                      <p>30-day return policy. Items must be unworn, unwashed, and in original condition with tags attached.</p>
                    </div>
                  </div>
                </Accordion>

                <Accordion title="SIZE GUIDE">
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-neutral-900">
                      <thead>
                        <tr className="">
                          <th className="text-center py-3 pr-8 font-bold">Size</th>
                          <th className="text-center py-3 pr-8 font-bold">Chest</th>
                          <th className="text-center py-3 font-bold">Length</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-200">
                        <tr><td className="py-3 pr-8">XS</td><td className="py-3 pr-8">34"</td><td className="py-3">26"</td></tr>
                        <tr><td className="py-3 pr-8">S</td><td className="py-3 pr-8">36"</td><td className="py-3">27"</td></tr>
                        <tr><td className="py-3 pr-8">M</td><td className="py-3 pr-8">38"</td><td className="py-3">28"</td></tr>
                        <tr><td className="py-3 pr-8">L</td><td className="py-3 pr-8">40"</td><td className="py-3">29"</td></tr>
                        <tr><td className="py-3 pr-8">XL</td><td className="py-3 pr-8">42"</td><td className="py-3">30"</td></tr>
                        <tr><td className="py-3 pr-8">XXL</td><td className="py-3 pr-8">44"</td><td className="py-3">31"</td></tr>
                      </tbody>
                    </table>
                  </div>
                </Accordion>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-neutral-200 font-bold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center font-bold">
          <button
            onClick={() => router.push('/shop')}
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-neutral-900 hover:text-neutral-900 transition-colors uppercase font-bold"
          >
            <span>←</span> Back to Shop
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
