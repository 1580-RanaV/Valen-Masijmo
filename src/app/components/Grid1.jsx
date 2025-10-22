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

  const handleProductClick = (product) => {
    requestAccess(() => router.push(`/product/${product.slug}`))
  }

  return (
    <section className="w-full p-0 m-0">
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
      </div>
    </section>
  )
}
