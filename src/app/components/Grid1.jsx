'use client'
import Image from 'next/image'
import { usePassword } from './PasswordProtection'
import { useRouter } from 'next/navigation'

export default function Grid() {
  const { requestAccess } = usePassword()
  const router = useRouter()

  const products = [
    { id: 1, images: ['/grid-11.png'], slug: 'product-1' },
    { id: 2, images: ['/grid-22.png'], slug: 'product-2' },
    { id: 3, images: ['/grid-33.png'], slug: 'product-3' },
    { id: 4, images: ['/grid-44.png'], slug: 'product-4' },
    { id: 5, images: ['/grid-55.png'], slug: 'product-1' },
    { id: 6, images: ['/grid-66.png'], slug: 'product-2' },
    { id: 7, images: ['/grid-88.png'], slug: 'product-3' },
    { id: 8, images: ['/grid-77.png'], slug: 'product-4' },
  ]

  // Text overlays in zigzag pattern (left-right-left-right-left)
  const textOverlays = [
    { text: '"DESIGN DIGNITY"', position: 'top-[12%] left-[5%]' },
    { text: 'HOUSE OF VALEN', position: 'top-[30%] right-[8%]' },
    { text: 'DRAFTS OF MASIJMO—', position: 'top-[48%] left-[10%]' },
    { text: '{AЯTS OFFICE}', position: 'top-[66%] right-[5%]' },
    { text: 'VAL3N CLUB', position: 'bottom-[8%] left-[8%]' },
  ]

  const handleProductClick = (product) => {
    requestAccess(() => router.push(`/product/${product.slug}`))
  }

  return (
    <section className="w-full p-0 m-0 relative">
      <div className="max-w-full p-0 m-0">
        {/* 2 per row on all small screens, 4 per row on large */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => handleProductClick(product)}
              className="group cursor-pointer text-left p-0 m-0"
              aria-label={`Open ${product.slug}`}
            >
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: '2 / 3' }}
              >
                <Image
                  src={product.images[0]}
                  alt={`Product ${product.id}`}
                  fill
                  className="object-cover m-0 p-0"
                  priority={product.id === 1}
                />
              </div>
            </button>
          ))}
        </div>
        
        {/* Text Overlays */}
        <div className="absolute inset-0 pointer-events-none">
          {textOverlays.map((overlay, idx) => (
            <div
              key={idx}
              className={`absolute ${overlay.position} text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white/90 mix-blend-color-dodge tracking-wider`}
              style={{ 
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              {overlay.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}