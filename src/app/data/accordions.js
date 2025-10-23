// app/data/accordions.js
// Reusable, centralized content for product accordions

export const PRODUCT_DETAILS = [
  'Relaxed fit tee',
  'Midweight pigment dyed 240gsm cotton jersey',
  'High ribbed crewneck',
  'Printed on garment',
  'Material: 100% cotton',
  'This garment has been individually dyed, producing a one-of-a-kind result. Color may fade or bleed after wash',
];

export const CARE_INSTRUCTIONS = [
  '• Machine wash cold with similar colors',
  '• Do not bleach or use harsh detergents',
  '• Tumble dry on low heat',
  '• Iron on low heat if needed',
  '• Do not dry clean',
  '• Avoid direct sunlight when drying',
];

export const WASHING_GUIDE = {
  heading: 'To maintain quality and longevity:',
  points: [
    '• Turn garment inside out before washing',
    '• Use cold water to prevent shrinkage',
    '• Wash with similar colors only',
    '• Remove promptly from washer',
    '• Reshape while damp if needed',
    '• Store in a cool, dry place',
  ],
};

export const SHIPPING_AND_RETURNS = {
  shippingTitle: 'Shipping',
  shipping: 'Free shipping on orders above ₹2,000. Standard delivery takes 5–7 business days.',
  returnsTitle: 'Returns',
  returns: '30-day return policy. Items must be unworn, unwashed, and in original condition with tags attached.',
};

// Shared size chart
export const SIZE_GUIDE_ROWS = [
  { size: 'XS', chest: '34"', length: '26"' },
  { size: 'S',  chest: '36"', length: '27"' },
  { size: 'M',  chest: '38"', length: '28"' },
  { size: 'L',  chest: '40"', length: '29"' },
  { size: 'XL', chest: '42"', length: '30"' },
  { size: 'XXL', chest: '44"', length: '31"' },
];

// Optional: helper to assemble accordion sections
export const PRODUCT_ACCORDIONS = () => ([
  { title: 'Product details', type: 'list', items: PRODUCT_DETAILS },
  { title: 'Care instructions', type: 'list', items: CARE_INSTRUCTIONS },
  { title: 'Washing guide', type: 'bullets', heading: WASHING_GUIDE.heading, items: WASHING_GUIDE.points },
  { title: 'Shipping & returns', type: 'split', ...SHIPPING_AND_RETURNS },
  { title: 'Size guide', type: 'table', rows: SIZE_GUIDE_ROWS },
]);
