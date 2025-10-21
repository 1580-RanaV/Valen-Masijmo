'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { PRODUCT_BY_SLUG } from '../../data/products';
import { usePassword } from "../../components/PasswordProtection";


// NEW: import centralized accordion content
import {
  PRODUCT_DETAILS,
  CARE_INSTRUCTIONS,
  WASHING_GUIDE,
  SHIPPING_AND_RETURNS,
  SIZE_GUIDE_ROWS,
} from '../../data/accordions';

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

  const { requestAccess } = usePassword();

  const product = PRODUCT_BY_SLUG[params.slug];

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

            {/* Gallery */}
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

            {/* Right column */}
            <div className="lg:sticky lg:top-24 lg:self-start space-y-8 lg:space-y-10 pb-12 font-bold">
              
              {/* Title / Price / Code */}
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

              {/* Stock */}
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

              {/* Sizes */}
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
                            ? 'border-neutral-900 bg-neutral-900 text-white'
                            : 'border-neutral-200 bg-white text-neutral-900 hover:border-neutral-400'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              {product.inStock && (
                <button
                  onClick={() => requestAccess(() => alert("We are currently not accepting any orders. Please try later."))}
                  className="w-full py-4 bg-neutral-900 text-white text-xs tracking-[0.2em] hover:bg-neutral-800 transition-colors uppercase font-bold"
                >
                  Contact Valen Masijmo Seller
                </button>
              )}


              {/* Accordions (now fed from centralized data) */}
              <div className="space-y-0 divide-y divide-neutral-200 font-bold">
                {/* DETAILS uses product-specific fields, but the *structure* stays here */}
                <Accordion title="DETAILS" defaultOpen={true}>
                <ul className="list-disc pl-5 space-y-1 text-xs text-left leading-relaxed text-neutral-900">
                  {PRODUCT_DETAILS.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </Accordion>

                <Accordion title="CARE INSTRUCTIONS" defaultOpen={true}>
                  <div className="space-y-2 text-xs text-left text-neutral-900">
                    {CARE_INSTRUCTIONS.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </Accordion>

                <Accordion title="WASHING GUIDE">
                  <div className="space-y-3 text-xs text-left text-neutral-900">
                    <p className="font-bold uppercase">{WASHING_GUIDE.heading}</p>
                    <div className="space-y-2">
                      {WASHING_GUIDE.points.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </div>
                </Accordion>

                <Accordion title="SHIPPING AND RETURNS">
                  <div className="space-y-4 text-xs text-left text-neutral-900">
                    <div>
                      <p className="font-bold uppercase mb-1">{SHIPPING_AND_RETURNS.shippingTitle}</p>
                      <p>{SHIPPING_AND_RETURNS.shipping}</p>
                    </div>
                    <div>
                      <p className="font-bold uppercase mb-1">{SHIPPING_AND_RETURNS.returnsTitle}</p>
                      <p>{SHIPPING_AND_RETURNS.returns}</p>
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
                        {SIZE_GUIDE_ROWS.map((row) => (
                          <tr key={row.size}>
                            <td className="py-3 pr-8">{row.size}</td>
                            <td className="py-3 pr-8">{row.chest}</td>
                            <td className="py-3">{row.length}</td>
                          </tr>
                        ))}
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
