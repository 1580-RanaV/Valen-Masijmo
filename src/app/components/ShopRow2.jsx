'use client';
import Image from 'next/image';
import { useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { PRODUCT_BY_SLUG } from '@/app/data/products';

export default function TopThree() {
  const router = useRouter();

  // Second row selection (by slug)
  const TOP_SLUGS = useMemo(
    () => ['valen-valentine-tshirt', 'dear-masijmo-tshirt', 'valen-club-tshirt', 'valen-picnic-tshirt'],
    []
  );

  const products = useMemo(() => {
    return TOP_SLUGS
      .map((slug) => PRODUCT_BY_SLUG[slug])
      .filter(Boolean)
      .map((p) => ({
        id: p.id,
        image: p.images?.[0], // first image only (static)
        title: p.title,
        price: p.price,
        slug: p.slug,
      }));
  }, [TOP_SLUGS]);

  const handleProductClick = () => {
    router.push('/shop');
  };

   return (
    <section className="w-full px-0 overflow-x-hidden">
      <h2 className="text-xs font-bold text-center mb-8 tracking-wider text-gray-50">
        TOP PICKS
      </h2>

      {/* 2-up on mobile, 4-up on large */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 w-full">
        {products.map((product) => (
          <div
            key={product.id}
            className="group cursor-pointer"
            onClick={handleProductClick}
          >
            <div
              className="bg-gray-100 relative w-full"
              style={{ aspectRatio: '2 / 3' }}
            >
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
                // since mobile is 2-up, each image ≈ 50vw
                sizes="(min-width: 1024px) 25vw, 50vw"
                priority
              />
            </div>

            <div className="px-2 py-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <h3 className="text-xs font-bold tracking-wide text-neutral-900">
                  {product.title}
                </h3>
                {/* <p className="text-xs font-bold tracking-wider text-neutral-900">
                  <span className="price">{product.price}</span>
                </p> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}