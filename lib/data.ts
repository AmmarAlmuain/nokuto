export type Product = {
    category: string;
    subcategory: string;
    availability: string;
    name: string;
    price: string | null;
    images: string[];
    material: string;
    fit: string;
    colors: string[];
    sizes: string[];
    shippingInfo: string[];
    features: string[];
    slug: string;
  };

  export type Question = {
    title:string
    category: string
    description: string
  }

  export type Instruction = {
    title: string
    description: string
  }

  export type Testimonial = {
    name: string, 
    comment: string
  }
  
  export const products: Product[] = [
      {
        category: "Kids",
        subcategory: "Casual",
        availability: "In Stock",
        name: "Disney Frozen Elsa Anna Toddler Girl Dress",
        price: "$19.99",
        images: [
          "https://m.media-amazon.com/images/I/71rvbt7cGoL._AC_SL1500_.jpg",
          "https://m.media-amazon.com/images/I/71K-0WrwUgL._AC_SL1500_.jpg"
        ],
        material: "Polyester, spandex, acetate",
        fit: "A Line",
        colors: ["Dark Blue-frozen", "Purple-elsa", "White-elsa", "Blue-elsa"],
        sizes: ["S", "M", "L", "XL"],
        shippingInfo: [
          "FREE delivery Friday, February 21 on orders shipped by Amazon over $35 Or Prime members get FREE delivery Tuesday, February 18"
        ],
        features: ["Bowknot Tulle Lace", "Long-Sleeve", "Crew Neck", "Imported"],
        slug: "disney-frozen-elsa-anna-toddler-girl-dress"
      },
      {
        category: "Kids",
        subcategory: "Casual",
        availability: "In Stock",
        name: "LOKTARC Boys Camo Pants",
        price: "$28.98",
        images: [
          "https://m.media-amazon.com/images/I/61x-42v3mRL._AC_SL1005_.jpg",
          "https://m.media-amazon.com/images/I/61B31HJt9QL._AC_SL1005_.jpg"
        ],
        material: "97% Cotton, 3% Spandex",
        fit: "Regular Fit",
        colors: [
          "Army Green", "Green", "Black", "Grey", "Grey (Regular Fit)", "Khaki", "Navy"
        ],
        sizes: ["S", "M", "L", "XL"],
        shippingInfo: [
          "FREE delivery Friday, February 21 on orders shipped by Amazon over $35 Or Prime members get FREE delivery Tuesday, February 18"
        ],
        features: ["Drawstring Closure", "Machine Wash", "Imported"],
        slug: "loktarc-boys-camo-pants"
      },
      {
        category: "Kids",
        subcategory: "Casual",
        availability: "In Stock",
        name: "2Pcs Kids Boys Flannel Plaid Shirt Tops Pants Set Hoodie Sweatsuit",
        price: "$29.89",
        images: [
          "https://m.media-amazon.com/images/I/71ZIIDgg41L._AC_SL1500_.jpg",
          "https://m.media-amazon.com/images/I/71JfTZCOslL._AC_SL1500_.jpg"
        ],
        material: "Polyester/cotton",
        fit: "Regular Fit",
        colors: ["Black", "Yellow", "Blue", "Red"],
        sizes: ["S", "M", "L", "XL"],
        shippingInfo: [
          "FREE delivery Friday, February 21 on orders shipped by Amazon over $35 Or fastest delivery Thursday, February 20"
        ],
        features: ["Machine Wash", "Hand Wash Only", "Imported"],
        slug: "2pcs-kids-boys-flannel-plaid-shirt-tops-pants-set-hoodie-sweatsuit"
      },
      {
        category: "Kids",
        subcategory: "Casual",
        availability: "In Stock",
        name: "Boys Clothes Shorts Sets Plaid Short Sleeve Hooded Button Shirt and Jogger Shorts",
        price: "$24.89",
        images: [
          "https://m.media-amazon.com/images/I/71kgbGPdR2L._AC_SL1500_.jpg",
          "https://m.media-amazon.com/images/I/71ASknkrX5L._AC_SL1500_.jpg"
        ],
        material: "Polyester/cotton",
        fit: "Regular Fit",
        colors: ["Green", "Red", "Yellow", "Black", "Blue"],
        sizes: ["S", "M", "L", "XL"],
        shippingInfo: [
          "FREE delivery Friday, February 21 on orders shipped by Amazon over $35 Or Prime members get FREE delivery Tomorrow, February 17"
        ],
        features: ["Machine Wash", "Hand Wash Only", "Imported"],
        slug: "boys-clothes-shorts-sets-plaid-short-sleeve-hooded-button-shirt-and-jogger-shorts"
      },
      {
        category: "Kids",
        subcategory: "Casual",
        availability: "In Stock",
        name: "PATPAT Little Toddler Girls Clothes Butterfly Sleeveless Dress Top and Floral Print Short Set",
        price: "$19.99",
        images: [
          "https://m.media-amazon.com/images/I/71hz7W-AZAL._AC_SL1500_.jpg"
        ],
        material: "Polyester/cotton",
        fit: "Regular Fit",
        colors: ["Butterfly/Floral"],
        sizes: ["S", "M", "L", "XL"],
        shippingInfo: [
          "FREE delivery Friday, February 21 on orders shipped by Amazon over $35 Or Prime members get FREE delivery Tomorrow, February 17"
        ],
        features: ["Sleeveless", "Machine Wash", "Imported"],
        slug: "patpat-little-toddler-girls-clothes-butterfly-sleeveless-dress-top-and-floral-print-short-set"
    },    
    {
        category: "Kids",
        subcategory: "Formal",
        availability: "Available",
        name: "IZOD Boys' 4-Piece Set with Collared Dress Shirt, Tie, Vest, and Pants",
        price: "$9.99",
        images: [
          "https://m.media-amazon.com/images/I/61yxz1UBmTL._AC_SL1500_.jpg",
          "https://m.media-amazon.com/images/I/61huLEvFgaL._AC_SL1500_.jpg"
        ],
        material: "Vest: 100% Cotton; Shirt: 55% Cotton, 45% Polyester; Pants: 100% Cotton; Tie: 100% Polyester",
        fit: "Regular Fit",
        colors: [
          "English Blue", "Black/Red", "Medium Blue", "Medium Blue/Grey", "Tanzanite",
          "Blue Seersucker", "Green Ash", "Light Khaki", "Blue/Yellow", "Plaid Blue"
        ],
        sizes: ["S", "M", "L", "XL"],
        shippingInfo: ["Delivery date not specified"],
        features: ["Machine Wash", "Imported"],
        slug: "izod-boys-4-piece-set-with-collared-dress-shirt-tie-vest-and-pants"
      },
      {
        category: "Kids",
        subcategory: "Formal",
        availability: "In Stock",
        name: "A&J DESIGN 5pcs Toddler Baby Boys Suit Set",
        price: "$40.99",
        images: [
          "https://m.media-amazon.com/images/I/71-Wo7mpLkL._AC_SL1500_.jpg"
        ],
        material: "Cotton blend",
        fit: "Regular Fit",
        colors: ["White", "Grey", "Black"],
        sizes: ["S", "M", "L", "XL"],
        shippingInfo: [
          "FREE delivery Friday, February 21 Or Prime members get FREE delivery Tomorrow, February 17"
        ],
        features: ["Machine Wash", "Imported"],
        slug: "aj-design-5pcs-toddler-baby-boys-suit-set"
      },
      {
        category: "Kids",
        subcategory: "Formal",
        availability: "In Stock",
        name: "Nautica Boys 4 piece Formal Suit Set, Vest, Pants, Collared Dress Shirt, and Tie",
        price: "$35.99",
        images: [
          "https://m.media-amazon.com/images/I/71vmvEs95NL._AC_SL1500_.jpg",
          "https://m.media-amazon.com/images/I/61244Yvg2AL._AC_SL1500_.jpg"
        ],
        material: "Shirt: 60% Cotton, 40% Polyester; Pant: 84% Polyester, 16% Rayon; Tie: 100% Polyester",
        fit: "Regular Fit",
        colors: ["Light Grey Deco Sharkskin", "Bright Blue", "Khaki/Navy", "Light Gray"],
        sizes: ["S", "M", "L", "XL"],
        shippingInfo: [
          "FREE delivery Friday, February 21 Or Prime members get FREE delivery Tomorrow, February 17"
        ],
        features: ["Machine Wash", "Imported"],
        slug: "nautica-boys-4-piece-formal-suit-set"
      },
      {
        category: "Kids",
        subcategory: "Formal",
        availability: "Only 2 left in stock - order soon.",
        name: "Boys Slim Fit Suit Tuxedo for Boy Check Plaid 3 Piece Suit Set",
        price: "$71.99",
        images: [
          "https://m.media-amazon.com/images/I/71rk0NKht9L._AC_SL1500_.jpg",
          "https://m.media-amazon.com/images/I/71FBPz+dQML._AC_SL1500_.jpg",
          "https://m.media-amazon.com/images/I/71qd67j188L._AC_SL1500_.jpg"
        ],
        material: "Polyester Blend",
        fit: "Slim Fit",
        colors: [
          "Black", "Blue", "Fuchsia Plaid", "Green Plaid", "Grey", "Light Grey",
          "Royal Blue Plaid", "Yellow"
        ],
        sizes: ["S", "M", "L", "XL"],
        shippingInfo: [
          "FREE delivery Friday, February 21 Or Prime members get FREE delivery Tuesday, February 18"
        ],
        features: ["Dry Clean Only", "Imported"],
        slug: "boys-slim-fit-suit-tuxedo-for-boy-check-plaid-3-piece-suit-set"
      },
      {
        category: "Kids",
        subcategory: "Formal",
        availability: "Only 5 left in stock - order soon.",
        name: "Volunboy Boys Clothes Set Toddler Gentlemen Wedding Suit Long Sleeve Bowtie Formal Dress Shirts Suspenders Pants Outfits",
        price: "$32.99",
        images: [
          "https://m.media-amazon.com/images/I/81y1p2+YDzL._AC_SL1500_.jpg"
        ],
        material: "95% cotton and 5% spandex",
        fit: "Regular Fit",
        colors: [
          "Bluewhite", "Green", "Purple", "Blue Grey", "Deep Green", "Beige", "Black"
        ],
        sizes: ["S", "M", "L", "XL"],
        shippingInfo: [
          "FREE delivery Friday, February 21 on orders shipped by Amazon over $35 Or Prime members get FREE delivery Wednesday, February 19"
        ],
        features: ["Machine Wash", "Imported"],
        slug: "volunboy-boys-clothes-set-toddler-gentlemen-wedding-suit"
    },
    {
        category: "Kids",
        subcategory: "Sport",
        availability: "In Stock",
        name: "New Balance Girls' Jogger Set - 2 Piece Pullover Fleece Hoodie Sweatshirt and Jogger Sweatpants",
        price: "$32.99",
        images: [
          "https://m.media-amazon.com/images/I/61HgN4Q4DgL._AC_SL1500_.jpg",
          "https://m.media-amazon.com/images/I/81yTXBCMiaL._AC_SL1500_.jpg"
        ],
        material: "60% Cotton, 40% Polyester",
        fit: "Regular Fit",
        colors: [
          "Clay Ash", "Pine", "Real Pink", "Dark Grey/Dark Grey", "Rick Oak",
          "Shadow Black", "Team Grey", "Ice Wine Black", "Rose"
        ],
        sizes: ["S", "M", "L", "XL"],
        shippingInfo: [
          "FREE delivery Friday, February 21 on orders shipped by Amazon over $35 Or Prime members get FREE delivery Tomorrow, February 17"
        ],
        features: ["Machine Wash", "Imported"],
        slug: "new-balance-girls-jogger-set"
      },
      {
        category: "Kids",
        subcategory: "Sport",
        availability: "In Stock",
        name: "Reebok Girls' Active Leggings Set - 3 Piece Performance T-Shirt and Yoga Pants Leggings",
        price: "$24.99",
        images: [
          "https://m.media-amazon.com/images/I/719bdGlAR0L._AC_SL1500_.jpg"
        ],
        material: "Shirt/Sweater: 60% Cotton, 40% Polyester; Bottoms: 90% Cotton, 5% Polyester, 5% Elastane",
        fit: "Regular Fit",
        colors: [
          "Black/Purple/Grey", "Blue/Peach/White", "Grey/Pink/White",
          "Black", "Crystal Blue", "Lavender", "Light Grey Heather",
          "Peach", "Pink"
        ],
        sizes: ["S", "M", "L", "XL"],
        shippingInfo: [
          "FREE delivery Friday, February 21 on orders shipped by Amazon over $35 Or Prime members get FREE delivery Wednesday, February 19"
        ],
        features: ["Machine Wash", "Imported"],
        slug: "reebok-girls-active-leggings-set"
      },
      {
        category: "Kids",
        subcategory: "Sport",
        availability: "In Stock",
        name: "Hilinker Girls Long Sleeve 3 Piece Outfits Graphic Crop Tee and Cami Top with Pants Set",
        price: "$29.99",
        images: [
          "https://m.media-amazon.com/images/I/61dfdaAHl3L._AC_SL1500_.jpg",
          "https://m.media-amazon.com/images/I/61Si8lutJEL._AC_SL1500_.jpg"
        ],
        material: "95% Polyester, 5% Spandex",
        fit: "Regular Fit",
        colors: ["Black Smile", "Blue Smile", "Green Smile", "Pink Smile"],
        sizes: ["S", "M", "L", "XL"],
        shippingInfo: [
          "FREE delivery Friday, February 21 on orders shipped by Amazon over $35 Or Prime members get FREE delivery Tomorrow, February 17"
        ],
        features: ["Machine Wash", "Imported"],
        slug: "hilinker-girls-long-sleeve-3-piece-outfits"
      },
      {
        category: "Kids",
        subcategory: "Sport",
        availability: "In Stock",
        name: "Fila Girls' Active Leggings Set - 3 Piece Performance T-Shirt, Yoga Pants, and Bike Shorts",
        price: "$9.99",
        images: [
          "https://m.media-amazon.com/images/I/714lRLPjBFL._AC_SL1500_.jpg",
          "https://m.media-amazon.com/images/I/71CWQ1IIq2L._AC_SL1500_.jpg",
          "https://m.media-amazon.com/images/I/71pgrYdXxIL._AC_SL1500_.jpg",
          "https://m.media-amazon.com/images/I/618qXyTCxiL._AC_SL1500_.jpg"
        ],
        material: "Legging/Short: 95% Cotton, 5% Elastane; Shirt: 100% Cotton",
        fit: "Regular Fit",
        colors: [
          "Aquarius/Pink", "Coral Pink/Navy", "Lavander/Grey", "Pink Glow/Black"
        ],
        sizes: ["S", "M", "L", "XL"],
        shippingInfo: [
          "FREE delivery Friday, February 21 on orders shipped by Amazon over $35 Or Prime members get FREE delivery Tomorrow, February 17"
        ],
        features: ["Machine Wash", "Imported"],
        slug: "fila-girls-active-leggings-set"
    },    
    {
        category: "Mens",
        subcategory: "Casual",
        availability: "Only 3 left in stock - order soon.",
        name: "MAGCOMSEN Men's Polo Shirts Short Sleeve Dry Fit Golf Shirts Moisture Wicking Performance Athletic Casual Collared Shirt",
        price: "$24.98",
        images: [
          "https://m.media-amazon.com/images/I/31blYvFNvHL.jpg"
        ],
        material: "77% Nylon, 23% Spandex",
        fit: "Regular Fit",
        colors: [
          "Army Green", "Black", "Dark Grey", "Light Grey",
          "Navy", "Sky Blue", "White", "Wine Red"
        ],
        sizes: ["S", "M", "L", "XL"],
        shippingInfo: [
          "FREE delivery Saturday, February 22 on orders shipped by Amazon over $35 Or Prime members get FREE delivery Thursday, February 20. Order within 11 hrs 5 mins. Join Prime"
        ],
        features: ["Machine Wash", "Imported"],
        slug: "magcomsen-mens-polo-shirts"
      },
      {
        category: "Mens",
        subcategory: "Casual",
        availability: "In Stock",
        name: "Mylldey Mens Casual Full Zip Cardigan Sweaters Cable Knit Jacket Sweater Men, US Size",
        price: "$25.99",
        images: [
          "https://m.media-amazon.com/images/I/71orZQrSO7L._AC_SL1500_.jpg",
          "https://m.media-amazon.com/images/I/71q9UaQa9AL._AC_SL1500_.jpg",
          "https://m.media-amazon.com/images/I/71ArqhB7CjL._AC_SL1500_.jpg"
        ],
        material: "100% Polyester",
        fit: "Regular Fit",
        colors: ["Black", "Darkgrey", "Navy", "Off-white"],
        sizes: ["S", "M", "L", "XL"],
        shippingInfo: [
          "FREE delivery Saturday, February 22 on orders shipped by Amazon over $35 Or Prime members get FREE delivery Thursday, February 20. Order within 10 hrs 55 mins. Join Prime"
        ],
        features: ["Machine Wash", "Hand Wash", "Imported"],
        slug: "mylldey-mens-casual-full-zip-cardigan-sweaters"
      },
      {
        category: "Mens",
        subcategory: "Casual",
        availability: "In Stock",
        name: "MAGCOMSEN Men's Sweaters 1/4 Zip Cotton Sweater Pullover Polo Sweaters Striped Fall Winter Warm Sweatshirts",
        price: "$39.98",
        images: [
          "https://m.media-amazon.com/images/I/81tWHgjfTlL._AC_SL1500_.jpg"
        ],
        material: "100% Cotton",
        fit: "Regular Fit",
        colors: [
          "Black", "Dark Grey", "Dark Grey Black", "Light Grey",
          "Navy Lack Blue", "Navy Light Grey", "Navy Wine Red",
          "Wine Red", "Dark Black"
        ],
        sizes: ["S", "M", "L", "XL"],
        shippingInfo: [
          "FREE delivery Saturday, February 22 Or Prime members get FREE delivery Tomorrow, February 18. Order within 2 hrs 22 mins. Join Prime"
        ],
        features: ["Machine Wash", "Imported"],
        slug: "magcomsen-mens-sweaters-1-4-zip-cotton"
      },
      {
        category: "Mens",
        subcategory: "Casual",
        availability: "Only 2 left in stock - order soon.",
        name: "Boladeci Men's Sweaters Quarter Zip Pullover Premium Cotton Comfort Mock Neck Striped Fall Winter Fashion Thermal Sweaters",
        price: "$39.98",
        images: [
          "https://m.media-amazon.com/images/I/81d8Qc8wJDL._AC_SL1500_.jpg"
        ],
        material: "100% Cotton",
        fit: "Regular Fit",
        colors: [
          "Black Light Grey", "Dark Grey", "Light Grey",
          "Navy Blue Lake Blue", "Navy Blue Light Grey",
          "Navy Blue Wine Red", "Wine Red Black", "Black"
        ],
        sizes: ["S", "M", "L", "XL"],
        shippingInfo: [
          "FREE delivery Saturday, February 22 Or fastest delivery Friday, February 21. Order within 10 hrs 51 mins"
        ],
        features: ["Hand Wash Only", "Imported"],
        slug: "boladeci-mens-sweaters-quarter-zip-pullover"
      },
      {
        category: "Mens",
        subcategory: "Casual",
        availability: "In stock (Usually ships within 4 to 5 days.)",
        name: "TACVASEN Mens Sweater Quarter Zip Pullover Cotton Long Sleeve Sweaters Striped Casual Pullovers Fall Winter Sweatshirt",
        price: "$39.99",
        images: [
          "https://m.media-amazon.com/images/I/81FjqXralRL._AC_SL1500_.jpg"
        ],
        material: "100% Cotton",
        fit: "Regular Fit",
        colors: [
          "Black", "Dark Grey", "Dark Grey Black",
          "Light Grey", "Navy Lack Blue", "Navy Light Grey",
          "Navy Wine Red", "Wine Red"
        ],
        sizes: ["S", "M", "L", "XL"],
        shippingInfo: [
          "$1.99 delivery March 4 - 17. Details"
        ],
        features: ["Machine Wash", "Imported"],
        slug: "tacvasen-mens-sweater-quarter-zip-pullover"
    },
    {
        category: "Mens",
        subcategory: "Formal",
        availability: "In Stock",
        name: "MAGE MALE Men's 3 Pieces Suit Elegant Solid One Button Slim Fit Single Breasted Party Blazer Vest Pants Set",
        price: "$72.59",
        images: [
          "https://m.media-amazon.com/images/I/61Ysy6IFE3L._AC_SL1500_.jpg"
        ],
        material: "80% Polyester and 20% Viscose",
        fit: "Regular Fit",
        colors: ["Black", "Brilliant Black", "Brown"],
        sizes: ["S", "M", "L", "XL"],
        shippingInfo: [
          "FREE delivery Saturday, February 22 Or Prime members get FREE delivery Tomorrow, February 18. Order within 10 hrs 48 mins. Join Prime"
        ],
        features: ["Dry Clean Only", "Imported"],
        slug: "mage-male-mens-3-pieces-suit"
      },
      {
        category: "Mens",
        subcategory: "Formal",
        availability: "",
        name: "WULFUL Men’s Slim Fit Suit One Button 3-Piece Blazer Dress Business Wedding Party Jacket Vest & Pant",
        price: "$72.59",
        images: [
          "https://m.media-amazon.com/images/I/61hV5GfKiYL._AC_SL1500_.jpg"
        ],
        material: "80% Polyester and 20% Viscose",
        fit: "Regular Fit",
        colors: [
          "Black", "Blue", "Brown", "Coffee-054", "Coffee-055", "Dark Grey", "Dark Red",
          "Grey-054", "Light Blue", "Light Brown", "Light Brown-054", "Light Grey",
          "New-blue(5pcs/Set)", "New-orange(5pcs/Set)", "Royal Blue", "Sage Green(5pcs/Set）",
          "Sage Green-new", "Teal Blue", "Black-056", "Grey-0127", "Hbl-0127", "Navy Blue-055",
          "Purple", "New-khaki(5pcs/Set)", "Wine Red", "Light Coffee-056", "Light Khaki",
          "White-0127", "Bkdg-0233", "New-light Brown(5pcs/Set)"
        ],
        sizes: ["S", "M", "L", "XL"],
        shippingInfo: [
          "FREE delivery February 24 - March 2 Or fastest delivery February 24 - 27"
        ],
        features: ["Dry Clean Only", "Imported"],
        slug: "wulful-mens-slim-fit-suit"
      },
      {
        category: "Mens",
        subcategory: "Formal",
        availability: "In Stock",
        name: "Gioberti Men's Formal Suit Vest Fit for Business or Casual Dress",
        price: "$26.99",
        images: [
          "https://m.media-amazon.com/images/I/91JLc+ZAs7L._AC_SL1500_.jpg",
          "https://m.media-amazon.com/images/I/71lPTWr0f3L._AC_SL1500_.jpg",
          "https://m.media-amazon.com/images/I/616Tk4yE0dL._AC_SL1500_.jpg"
        ],
        material: "70% Polyester, 30% Viscose",
        fit: "Regular Fit",
        colors: [
          "Black", "Blue", "Brown", "Dark Grey", "Light Grey", "Navy", "Wine Red"
        ],
        sizes: ["S", "M", "L", "XL"],
        shippingInfo: [
          "FREE delivery Saturday, February 22 Or Prime members get FREE delivery Tomorrow, February 18. Order within 10 hrs 48 mins. Join Prime"
        ],
        features: ["Dry Clean Only", "Imported"],
        slug: "gioberti-mens-formal-suit-vest"
      },
      {
        category: "Mens",
        subcategory: "Formal",
        availability: "In Stock",
        name: "COOFANDY Men's Suit Vest Slim Fit Formal Dress Waistcoat Business Vests for Suit or Tuxedo",
        price: "$29.74",
        images: [
          "https://m.media-amazon.com/images/I/71sO7MTqTuL._AC_SL1500_.jpg"
        ],
        material: "80% Polyester, 20% Viscose",
        fit: "Slim Fit",
        colors: [
          "Black", "Navy Blue", "Light Grey", "Dark Grey", "Burgundy", "White"
        ],
        sizes: ["S", "M", "L", "XL"],
        shippingInfo: [
          "FREE delivery Saturday, February 22 Or Prime members get FREE delivery Tomorrow, February 18. Order within 10 hrs 48 mins. Join Prime"
        ],
        features: ["Dry Clean Only", "Imported"],
        slug: "coofandy-mens-suit-vest"
      },
      {
        category: "Mens",
        subcategory: "Formal",
        availability: "In Stock",
        name: "COOFANDY Mens Floral Tuxedo Jacket Paisley Shawl Lapel Suit Blazer Jacket for Dinner, Prom, Wedding",
        price: "$69.99",
        images: [
          "https://m.media-amazon.com/images/I/71BteJpCbeL._AC_SL1500_.jpg"
        ],
        material: "100% Polyester",
        fit: "Slim Fit",
        colors: [
          "Black", "Navy Blue", "White", "Red", "Gold", "Silver"
        ],
        sizes: ["S", "M", "L", "XL"],
        shippingInfo: [
          "FREE delivery Saturday, February 22 Or Prime members get FREE delivery Tomorrow, February 18. Order within 10 hrs 48 mins. Join Prime"
        ],
        features: ["Dry Clean Only", "Imported"],
        slug: "coofandy-mens-floral-tuxedo-jacket"
    },    
    {
        category: "Mens",
        subcategory: "Sport",
        availability: "In Stock",
        name: "TELALEO 5 Pack Men's Athletic Compression Shirts Sleeveless Workout Tank Top Sports Base Layer Running Basketball",
        price: "$28.99",
        images: [
          "https://m.media-amazon.com/images/I/61BAbRy-v3L._AC_SL1500_.jpg"
        ],
        material: "85% Polyester, 15% Elastane",
        fit: "Regular Fit",
        colors: [
          "Black/Charcoal/White(five Pack)", "Black/White(five Pack)"
        ],
        sizes: ["S", "M", "L", "XL"],
        shippingInfo: [
          "FREE delivery Saturday, February 22 on orders shipped by Amazon over $35 Or Prime members get FREE delivery Tomorrow, February 18. Order within 10 hrs 34 mins. Join Prime"
        ],
        features: ["Machine Wash", "Imported"],
        slug: "telaleo-5-pack-mens-athletic-compression-shirts"
      },
      {
        category: "Mens",
        subcategory: "Sport",
        availability: "In Stock",
        name: "adidas Men's Essentials 3-Stripes Tricot Jogger Pants",
        price: "$31.50",
        images: [
          "https://m.media-amazon.com/images/I/71KAsomUw8S._AC_SL1500_.jpg"
        ],
        material: "100% Polyester",
        fit: "Regular Fit",
        colors: [
          "Black", "Navy Blue", "Grey", "White"
        ],
        sizes: ["S", "M", "L", "XL"],
        shippingInfo: [
          "FREE delivery Saturday, February 22 Or Prime members get FREE delivery Tomorrow, February 18. Order within 10 hrs 34 mins. Join Prime"
        ],
        features: ["Machine Wash", "Imported"],
        slug: "adidas-mens-essentials-3-stripes-tricot-jogger-pants"
      },
      {
        category: "Mens",
        subcategory: "Sport",
        availability: "In Stock",
        name: "Under Armour Men's HeatGear Leggings",
        price: "$31.58",
        images: [
          "https://m.media-amazon.com/images/I/41XJtzfXqZL._AC_SL1000_.jpg",
          "https://m.media-amazon.com/images/I/41M3IWPdS-L._AC_SL1000_.jpg"
        ],
        material: "84% Polyester, 16% Elastane",
        fit: "Compression Fit",
        colors: ["Black", "Graphite", "White"],
        sizes: ["S", "M", "L", "XL"],
        shippingInfo: [
          "FREE delivery Saturday, February 22 Or Prime members get FREE delivery Tomorrow, February 18. Order within 10 hrs 34 mins. Join Prime"
        ],
        features: ["Machine Wash", "Imported"],
        slug: "under-armour-mens-heatgear-leggings"
      },
      {
        category: "Mens",
        subcategory: "Sport",
        availability: "In Stock",
        name: "3 Pack Polarized Sports Sunglasses for Men, Mens Sunglasses Wrap Around UV400 Protection for Cycling Fishing Driving",
        price: "$16.89",
        images: [
          "https://m.media-amazon.com/images/I/71Nr7iG0ZQL._AC_SL1500_.jpg"
        ],
        material: "Plastic",
        fit: "Regular Fit",
        colors: ["Black", "Blue", "Red"],
        sizes: ["One Size Fits All"],
        shippingInfo: [
          "FREE delivery Saturday, February 22 on orders shipped by Amazon over $35 Or Prime members get FREE delivery Tomorrow, February 18. Order within 10 hrs 34 mins. Join Prime"
        ],
        features: ["UV400 Protection", "Polarized Lenses", "Lightweight", "Imported"],
        slug: "3-pack-polarized-sports-sunglasses-for-men"
      },
      {
        category: "Womens",
        subcategory: "Casual",
        availability: "In Stock",
        name: "PRETTYGARDEN Womens Summer Jumpsuits Dressy Casual One Piece Outfits Sleeveless Mock Neck Wide Leg Pants Rompers with Pockets",
        price: "$39.99",
        images: [
          "https://m.media-amazon.com/images/I/61jEud+VHvL._AC_SL1500_.jpg"
        ],
        material: "95% Polyester, 5% Spandex",
        fit: "Regular Fit",
        colors: ["Black", "Navy Blue", "Wine Red", "Dark Green", "Beige"],
        sizes: ["S", "M", "L", "XL"],
        shippingInfo: [
          "FREE delivery Saturday, February 22 Or Prime members get FREE delivery Tomorrow, February 18. Order within 10 hrs 34 mins. Join Prime"
        ],
        features: ["Machine Wash", "Imported"],
        slug: "prettygarden-womens-summer-jumpsuits"
    }                          
  ];


export const questions: Question[] = [
  {
    title: "Can I modify my order after confirming it?",
    category: "purchasing",
    description:
      "Absolutely! You can adjust your order within 24 hours by getting in touch with our customer care team.",
  },
  {
    title: "How do I start a return process?",
    category: "returns",
    description:
      "To return an item, please navigate to our Returns page and follow the step-by-step guide provided there.",
  },
  {
    title: "How do I unsubscribe from the newsletter?",
    category: "customer care",
    description:
      "To unsubscribe, simply click the 'Unsubscribe' link found at the bottom of any of our newsletter emails.",
  },
  {
    title: "Do you accept exchanges for products?",
    category: "customer care",
    description:
      "Yes, we offer exchanges for products within a 30-day window. For more details, please check our Exchanges page.",
  },
  {
    title: "How do I make a purchase on Nokuto?",
    category: "purchasing",
    description:
      "To make a purchase, just add items to your shopping cart and proceed to checkout. You can either log in or checkout as a guest.",
  },
  {
    title: "What payment options are available?",
    category: "customer care",
    description:
      "We accept several payment methods, including credit/debit cards, PayPal, and other secure online payment options.",
  },
  {
    title: "How can I monitor my order status?",
    category: "purchasing",
    description:
      "You can track your order by logging into your Nokuto account and going to the 'Order History' section.",
  },
  {
    title: "What is your shipping procedure?",
    category: "delivery",
    description:
      "We offer a variety of shipping methods. For full details, please visit our Shipping Information page.",
  },
  {
    title: "Are there additional fees for returns?",
    category: "returns",
    description:
      "No, there are no extra charges for returns, as long as you follow the instructions on our Returns page.",
  },
  {
    title: "How can I create an account with Nokuto?",
    category: "customer care",
    description:
      "To create an account, click on the 'Sign Up' button at the top right corner of our homepage and complete the registration form.",
  },
  {
    title: "Is it possible to update my account details?",
    category: "customer care",
    description:
      "Yes, you can update your account details at any time by logging into your profile and accessing 'Account Settings'.",
  },
  {
    title: "Is my personal information safe with Nokuto?",
    category: "customer care",
    description:
      "Absolutely! We prioritize the security of your personal information and use state-of-the-art measures to safeguard your data.",
  },
];

export const instructions: Instruction[]  = [
  {
    title: "Explore New Styles",
    description: "Browse through 1000+ exclusive fashion pieces.",
  },
  {
    title: "Safe and Easy Checkout",
    description: "Add items to your cart and enjoy secure checkout.",
  },
  {
    title: "Fast Delivery",
    description: "Enjoy fast dispatch with 95% same-day shipping.",
  },
  {
    title: "Unwrap Joy",
    description: "Receive your thoughtfully packaged Nokuto order.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Ava Thompson",
    comment:
      "Nokuto exceeded my expectations! The dress was stunning and arrived quickly.",
  },
  {
    name: "Ethan Williams",
    comment: "The jacket is perfect! Stylish, warm, and ideal for any weather.",
  },
  {
    name: "Sophia Lee",
    comment:
      "My daughter loves her new outfit from Nokuto. It's cute, comfy, and great quality.",
  },
];