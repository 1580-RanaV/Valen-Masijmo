'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { usePassword } from './PasswordProtection';

export default function Grid() {
  const { requestAccess } = usePassword();
  const router = useRouter();

  const products = [
    { id: 1, images: ['/grid-5.png'], slug: 'product-1' },
    { id: 2, images: ['/grid-6.png'], slug: 'product-2' },
    { id: 3, images: ['/grid-7.png'], slug: 'product-3' },
    { id: 4, images: ['/grid-8.png'], slug: 'product-4' },
  ];

  const handleProductClick = (product) => {
    requestAccess(() => router.push(`/product/${product.slug}`));
  };

  return (
    <section className="w-full p-0 m-0">
      <div className="max-w-full p-0 m-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
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
                  className="object-cover p-0 m-0"
                  priority={product.id === 1}
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
