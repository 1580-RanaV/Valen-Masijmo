'use client';
import Image from 'next/image';
import { usePassword } from './PasswordProtection';
import { useRouter } from 'next/navigation';

export default function Grid() {
  const { requestAccess } = usePassword();
  const router = useRouter();

  const products = [
    { id: 1, images: ['/grid-1.png'], slug: 'product-1' },
    { id: 2, images: ['/grid-2.png'], slug: 'product-2' },
    { id: 3, images: ['/grid-3.png'], slug: 'product-3' },
    { id: 4, images: ['/grid-4.png'], slug: 'product-4' }
  ];

  const handleProductClick = (product) => {
    requestAccess(() => router.push(`/product/${product.slug}`));
  };

  return (
    <section className="w-full py-16 md:py-24">
      <div className="max-w-full px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => handleProductClick(product)}
              className="group cursor-pointer text-left"
            >
              <div
                className="relative w-full overflow-hidden bg-gray-100"
                style={{ paddingBottom: '150%' }} // 2:3 aspect
                aria-label={`Open ${product.slug}`}
              >
                <Image
                  src={product.images[0]}
                  alt={`Product ${product.id}`}
                  fill
                  className="object-cover"
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
