// Define the display order using slugs (easier to read and manage)
export const PRODUCT_DISPLAY_ORDER = [
  'instructions-tshirt',
  'cup-of-ice-tshirt',
  'blue-valen-tshirt',
  'kisses-to-valen-tshirt',
  'valen-club-tshirt',
  'addition-tshirt',
  'valen-valentine-tshirt',
  'owl-eyes-tshirt',
  'ironveil-tshirt',
  'maybe-egypt-tshirt',
  'dear-masijmo-tshirt',
  'valen-picnic-tshirt',
  'only-names-tshirt',
  
  'coffee-spill-tshirt',
  // 'instructions-tshirt' appears twice in your data with different IDs (13 & 14)
  // You may want to fix the slug for the "A Cup Of Ice T-shirt"
]

export const PRODUCTS = [
  {
    id: 9,
    images: ['/t10/t10-4.png', '/t10/t10-new.png', '/t10/t10-2-new.png', '/t10/t10-3-new.png'],
    title: 'Addition T-shirt',
    price: 'Rs. 44,500',
    originalPrice: 'Rs. 49,675',
    inStock: true,
    collection: 'From "Drafts Vault"',
    slug: 'addition-tshirt',
    productCode: 'DRAFTS-ADDITIONQK',
    care: 'Machine wash cold. Do not bleach. Tumble dry low. Iron on low heat if needed. Do not dry clean.',
    fabric: '100% premium cotton',
    fit: 'Oversized fit',
    description:
      'A unique design from our Drafts Vault collection featuring bold graphics and premium construction.',
    isSale: true,
  },
  {
    id: 10,
    images: ['/t11/t11-4.png', '/t11/t11.png', '/t11/t11-2.png', '/t11/t11-3.png'],
    title: 'Coffee Spill T-shirt',
    price: 'Rs. 42,900',
    originalPrice: 'Rs. 47,675',
    inStock: true,
    collection: 'From "Drafts Vault"',
    slug: 'coffee-spill-tshirt',
    productCode: 'DRAFTS-COFFEESPILLNV',
    care: 'Machine wash cold. Do not bleach. Tumble dry low. Iron on low heat if needed. Do not dry clean.',
    fabric: '100% premium cotton',
    fit: 'Oversized fit',
    description:
      'Inspired by creative chaos, this design brings artistic energy to your wardrobe.',
    isSale: true,
  },
  {
    id: 13,
    images: ['/t13/t13-3.png', '/t13/t13-4.png', '/t13/t13-2.png', '/t13/t13.png'],
    title: 'Instructions T-shirt',
    price: 'Rs. 42,900',
    inStock: true,
    collection: 'From "Drafts Vault"',
    slug: 'instructions-tshirt',
    productCode: 'INSTRUCTIONS-PHONEXC',
    care: 'Machine wash cold. Do not bleach. Tumble dry low. Iron on low heat if needed. Do not dry clean.',
    fabric: '100% premium cotton',
    fit: 'Oversized fit',
    description:
      'Inspired by creative chaos, this design brings artistic energy to your wardrobe.',
    isSale: false,
  },
  {
    id: 14,
    images: ['/t14/t14-4.png', '/t14/t14-3.png', '/t14/t14-2.png', '/t14/t14.png'],
    title: 'A Cup Of Ice T-shirt',
    price: 'Rs. 1,42,900',
    inStock: true,
    collection: 'From "Drafts Vault"',
    slug: 'cup-of-ice-tshirt', // FIXED: Changed slug to be unique
    productCode: 'CUPOFICE-LXC',
    care: 'Machine wash cold. Do not bleach. Tumble dry low. Iron on low heat if needed. Do not dry clean.',
    fabric: '100% premium cotton',
    fit: 'Oversized fit',
    description:
      'Inspired by creative chaos, this design brings artistic energy to your wardrobe.',
    isSale: false,
  },
  {
    id: 12,
    images: ['/t9/t9-5.png', '/t9/t9.png', '/t9/t9-2.png', '/t9/t9-3.png'],
    title: 'Blue Valen T-shirt',
    price: 'Rs. 45,250',
    inStock: true,
    collection: 'From "Drafts Vault"',
    slug: 'blue-valen-tshirt',
    productCode: 'DRAFTS-BLUEVALENMS',
    care: 'Machine wash cold. Do not bleach. Tumble dry low. Iron on low heat if needed. Do not dry clean.',
    fabric: '100% premium cotton',
    fit: 'Oversized fit',
    description: 'A striking blue design that captures the essence of the Valen aesthetic.',
    isSale: false,
  },
  {
    id: 11,
    images: ['/t12/t12-5.png', '/t12/t12.png', '/t12/t12-2.png', '/t12/t12-3.png'],
    title: 'Kisses to Valen T-shirt',
    price: 'Rs. 47,999',
    inStock: true,
    collection: 'From "Drafts Vault"',
    slug: 'kisses-to-valen-tshirt',
    productCode: 'DRAFTS-KISSESTOVALENHP',
    care: 'Machine wash cold. Do not bleach. Tumble dry low. Iron on low heat if needed. Do not dry clean.',
    fabric: '100% premium cotton',
    fit: 'Oversized fit',
    description:
      'An exclusive piece celebrating the Valen legacy with premium craftsmanship.',
    isSale: false,
  },
  {
    id: 1,
    images: ['/t1/t1-4.png', '/t1/t1.png', '/t1/t1-2.png', '/t1/t1-3.png'],
    title: 'Maybe Egypt T-shirt',
    price: 'Rs. 44,499',
    inStock: true,
    collection: 'From "Black Chapter One"',
    slug: 'maybe-egypt-tshirt',
    productCode: 'BLACKCHAPTER-MAYBEEGYPTLD',
    care: 'Machine wash cold. Do not bleach. Tumble dry low. Iron on low heat if needed. Do not dry clean.',
    fabric: '100% premium cotton',
    fit: 'Oversized fit',
    description:
      'Egyptian-inspired graphics meet contemporary streetwear in this iconic piece.',
    isSale: false,
  },
  {
    id: 2,
    images: ['/t2/t2-4.png', '/t2/t2.png', '/t2/t2-2.png', '/t2/t2-3.png'],
    title: 'Ironveil T-shirt',
    price: 'Rs. 43,899',
    inStock: true,
    collection: 'From "Black Chapter One"',
    slug: 'ironveil-tshirt',
    productCode: 'BLACKCHAPTER-IRONVEILAX',
    care: 'Machine wash cold. Do not bleach. Tumble dry low. Iron on low heat if needed. Do not dry clean.',
    fabric: '100% premium cotton',
    fit: 'Oversized fit',
    description: 'Bold and mysterious, the Ironveil design commands attention.',
    isSale: false,
  },
  {
    id: 3,
    images: ['/t3/t3-4.png', '/t3/t3.png', '/t3/t3-2.png', '/t3/t3-3.png'],
    title: 'Only Names T-shirt',
    price: 'Rs. 46,499',
    inStock: false,
    collection: 'From "Black Chapter One"',
    slug: 'only-names-tshirt',
    productCode: 'BLACKCHAPTER-ONLYNAMESZT',
    care: 'Machine wash cold. Do not bleach. Tumble dry low. Iron on low heat if needed. Do not dry clean.',
    fabric: '100% premium cotton',
    fit: 'Oversized fit',
    description: 'A typographic masterpiece from the Black Chapter One collection.',
    isSale: false,
  },
  {
    id: 4,
    images: ['/t4/t4-4.png', '/t4/t4.png', '/t4/t4-2.png', '/t4/t4-3.png'],
    title: 'Owl Eyes T-shirt',
    price: 'Rs. 42,999',
    inStock: true,
    collection: 'From "Black Chapter One"',
    slug: 'owl-eyes-tshirt',
    productCode: 'BLACKCHAPTER-OWLEYESYQ',
    care: 'Machine wash cold. Do not bleach. Tumble dry low. Iron on low heat if needed. Do not dry clean.',
    fabric: '100% premium cotton',
    fit: 'Oversized fit',
    description: 'Featuring mesmerizing owl eye graphics that captivate and intrigue.',
    isSale: false,
  },
  {
    id: 5,
    images: ['/t6/t6-4.png', '/t6/t6.png', '/t6/t6-2.png', '/t6/t6-3.png'],
    title: 'Valen-tine T-shirt',
    price: 'Rs. 41,999',
    inStock: true,
    collection: 'From "Black Chapter One"',
    slug: 'valen-valentine-tshirt',
    productCode: 'BLACKCHAPTER-VALENTINERF',
    care: 'Machine wash cold. Do not bleach. Tumble dry low. Iron on low heat if needed. Do not dry clean.',
    fabric: '100% premium cotton',
    fit: 'Oversized fit',
    description: 'A romantic twist on the classic Valen aesthetic.',
    isSale: false,
  },
  {
    id: 6,
    images: ['/t5/t5-4.png', '/t5/t5.png', '/t5/t5-2.png', '/t5/t5-3.png'],
    title: 'Dear Masijmo T-shirt',
    price: 'Rs. 49,999',
    inStock: true,
    collection: 'From "Black Chapter One"',
    slug: 'dear-masijmo-tshirt',
    productCode: 'BLACKCHAPTER-DEARMASIJMOKP',
    care: 'Machine wash cold. Do not bleach. Tumble dry low. Iron on low heat if needed. Do not dry clean.',
    fabric: '100% premium cotton',
    fit: 'Oversized fit',
    description:
      'An exclusive limited edition piece with intricate detailing and craftsmanship.',
    isSale: false,
  },
  {
    id: 7,
    images: ['/t8/t8-4.png', '/t8/t8.png', '/t8/t8-2.png', '/t8/t8-3.png'],
    title: 'Valen Club T-shirt',
    price: 'Rs. 45,799',
    inStock: false,
    collection: 'From "Black Chapter One"',
    slug: 'valen-club-tshirt',
    productCode: 'BLACKCHAPTER-VALENCLUBCJ',
    care: 'Machine wash cold. Do not bleach. Tumble dry low. Iron on low heat if needed. Do not dry clean.',
    fabric: '100% premium cotton',
    fit: 'Oversized fit',
    description: 'Join the club with this exclusive members-only design.',
    isSale: false,
  },
  {
    id: 8,
    images: ['/t7/t7-4.png', '/t7/t7.png', '/t7/t7-2.png', '/t7/t7-3.png'],
    title: 'Valen Picnic T-shirt',
    price: 'Rs. 40,999',
    inStock: true,
    collection: 'From "Black Chapter One"',
    slug: 'valen-picnic-tshirt',
    productCode: 'BLACKCHAPTER-VALENPICNICWB',
    care: 'Machine wash cold. Do not bleach. Tumble dry low. Iron on low heat if needed. Do not dry clean.',
    fabric: '100% premium cotton',
    fit: 'Oversized fit',
    description: 'Casual comfort meets artistic expression in this relaxed design.',
    isSale: false,
  },
]

// Function to sort products based on the display order
export const getSortedProducts = () => {
  const orderMap = new Map(PRODUCT_DISPLAY_ORDER.map((slug, index) => [slug, index]))
  
  return [...PRODUCTS].sort((a, b) => {
    const orderA = orderMap.get(a.slug)
    const orderB = orderMap.get(b.slug)
    
    // If both products are in the order list, sort by their position
    if (orderA !== undefined && orderB !== undefined) {
      return orderA - orderB
    }
    
    // If only A is in the order list, it comes first
    if (orderA !== undefined) return -1
    
    // If only B is in the order list, it comes first
    if (orderB !== undefined) return 1
    
    // If neither is in the order list, maintain original order (by ID)
    return a.id - b.id
  })
}

// Backward compatibility - use this for your PRODUCT_BY_SLUG
export const PRODUCT_BY_SLUG = Object.fromEntries(PRODUCTS.map((p) => [p.slug, p]))

// Pre-sorted products for immediate use
export const SORTED_PRODUCTS = getSortedProducts()