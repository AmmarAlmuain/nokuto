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
    reviews: {name: string, comment: string}[]
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
  
  export type Review = {
    name: string, 
    comment: string
  }
  
  export const products: Product[] = [
    // Mens Formal
    {
      category: "Mens",
      subcategory: "Formal",
      availability: "In Stock",
      name: "DiBanGu Men's Formal Long Sleeve Button Down Shirts",
      price: "$30.99",
      images: [
        "https://m.media-amazon.com/images/I/61-CqaHdhKL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61SULEfAV4L._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/611I6bQv9VL._AC_SL1500_.jpg"
      ],
      material: "Cotton, Polyester, Spandex",
      fit: "Regular Fit",
      colors: ["yellow", "orange", "purple"],
      sizes: ["M", "L", "XL"],
      shippingInfo: [
        "Free delivery Sunday, March 2 on orders shipped by Amazon over $35 Or Prime members get free delivery Tomorrow, February 26. Order within 4 hrs 29 mins.",
        "Expedited shipping available. Delivered by Friday, February 28.",
        "Standard shipping takes 3-5 business days. Free for orders over $50."
      ],
      features: [
        "Long sleeve dress shirt with Formal button-down design.",
        "Regular fit, providing a comfortable and flattering silhouette.",
        "Made from a blend of cotton, polyester, and spandex for breathability and stretch.",
        "Inner contrast design adds a unique and stylish touch.",
        "Suitable for business meetings, parties, or Formal outings.",
        "Machine washable and easy to maintain.",
      ],
      reviews: [
        {
          name: "Kirito Kawakagi",
          comment: "Great shirt, very comfortable and stylish. Perfect for my Formal outings."
        },
        {
          name: "Carlos Martinez",
          comment: "The shirt fits well and looks great. Good value for the price."
        },
        {
          name: "Sophia Müller",
          comment: "Elegant shirt with a perfect fit. Highly recommend for any Formal occasion."
        }
      ],
      slug: "dibangu-mens-dress-shirt-long-sleeve"
    },
    {
      category: "Mens",
      subcategory: "Formal",
      availability: "In Stock",
      name: "Barry.Wang Men Flower Vest Paisley Silk Ties Set",
      price: "$27.99",
      images: [
        "https://m.media-amazon.com/images/I/81HbtTAkSaL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81xi-OzfMGL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/91t7PCG2jvL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81B9lFFy2SL._AC_SL1500_.jpg"
      ],
      material: "70% Silk, 30% Polyester",
      fit: "Regular Fit",
      colors: ["sky", "emerald", "violet", "red"],
      sizes: ["M", "L", "XL"],
      shippingInfo: [
        "Free delivery Sunday, March 2 on orders shipped by Amazon over $35 Or Prime members get free delivery Tomorrow, February 26. Order within 13 hrs 38 mins.",
        "Expedited shipping available. Delivered by Friday, February 28.",
        "Standard shipping takes 3-5 business days. Free for orders over $50."
      ],
      features: [
        "Formal vest set includes paisley jacquard silk ties and waistcoat.",
        "Made from a blend of 70% silk and 30% polyester for a luxurious feel.",
        "Regular fit design suitable for weddings and formal events.",
        "Beautiful flower pattern adds a touch of elegance.",
        "Available in multiple colors to suit various preferences.",
        "Easy to maintain with specified care instructions.",
      ],
      reviews: [
        {
          name: "Ryoichi Tanaka",
          comment: "The vest is absolutely stunning. The silk feels luxurious and the pattern is elegant."
        },
        {
          name: "Diego Ramirez",
          comment: "Good quality and value for the price. The colors are vibrant and the fit is perfect."
        },
        {
          name: "Emma Schmidt",
          comment: "Beautiful vest set, perfect for formal occasions. Highly recommend."
        }
      ],
      slug: "barry-wang-formal-men-flower-vest-set"
    }, 
    {
      category: "Mens",
      subcategory: "Formal",
      availability: "In Stock",
      name: "DiBanGu Mens Silk Paisley Dress Shirts",
      price: "$39.99",
      images: [
        "https://m.media-amazon.com/images/I/81Qd17vzEnL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81CiDVkop+L._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81DxxdeWQ3L._AC_SL1500_.jpg"
      ],
      material: "Silk, Polyester",
      fit: "Regular Fit",
      colors: ["amber", "blue", "emerald", "violet"],
      sizes: ["M", "L", "XL"],
      shippingInfo: [
        "Free delivery Sunday, March 2 Or Prime members get free delivery Tomorrow, February 26. Order within 13 hrs 33 mins.",
        "Expedited shipping available. Delivered by Friday, February 28.",
        "Standard shipping takes 3-5 business days. Free for orders over $50."
      ],
      features: [
        "Long sleeve dress shirt with paisley pattern and button-down design.",
        "Regular fit providing a comfortable and flattering silhouette.",
        "Made from a blend of silk and polyester for breathability and softness.",
        "Perfect for weddings, parties, and various formal occasions.",
        "Machine washable and hand wash only care instructions.",
        "Imported quality from a reputable manufacturer.",
      ],
      reviews: [
        {
          name: "Hiroshi Nakamura",
          comment: "Excellent quality shirt. The fabric feels luxurious and the fit is perfect."
        },
        {
          name: "Mateo Hernandez",
          comment: "Great shirt for both formal and casual occasions. The paisley pattern is unique."
        },
        {
          name: "Anastasia Ivanova",
          comment: "Beautiful shirt with a comfortable fit. Highly recommend for any special event."
        }
      ],
      slug: "dibangu-mens-silk-paisley-dress-shirts"
    },    
    {
      category: "Mens",
      subcategory: "Formal",
      availability: "In Stock",
      name: "Bruno Marc Men's Patent Tuxedo Dress Shoes Lace-up",
      price: "$42.99",
      images: [
        "https://m.media-amazon.com/images/I/71ICSbn0pEL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71Slj3qucIL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71O8AgQVpoL._AC_SL1500_.jpg"
      ],
      material: "Patent Leather",
      fit: "Regular Fit",
      colors: ["zinc", "stone"],
      sizes: ["8", "9", "10", "11"],
      shippingInfo: [
        "Free delivery Sunday, March 2 Or Prime members get free delivery Tomorrow, February 26. Order within 10 hrs 30 mins.",
        "Expedited shipping available. Delivered by Friday, February 28.",
        "Standard shipping takes 3-5 business days. Free for orders over $50."
      ],
      features: [
        "Classic lace-up design for a secure fit.",
        "Patent leather upper for a sleek and polished look.",
        "Perfect for formal occasions such as weddings and parties.",
        "Comfortable and cushioned insole for all-day wear.",
        "Non-slip outsole provides excellent traction.",
        "Imported quality from a reputable manufacturer."
      ],
      reviews: [
        {
          name: "Takahiro Sato",
          comment: "Excellent dress shoes for formal events. Comfortable and stylish."
        },
        {
          name: "Juan Perez",
          comment: "Great quality and fit. Perfect for my wedding day."
        },
        {
          name: "Emily Watson",
          comment: "These shoes look fantastic and feel great. Highly recommend."
        }
      ],
      slug: "bruno-marc-mens-patent-tuxedo-dress-shoes"
    },   
    {
      category: "Mens",
      subcategory: "Formal",
      availability: "In Stock",
      name: "Founders & C Mens Leather Ratchet Click Belt 2 Pack",
      price: "$31.99",
      images: [
        "https://m.media-amazon.com/images/I/61giwHvtjiL._AC_SL1001_.jpg",
        "https://m.media-amazon.com/images/I/61j3QwQPNgL._AC_SL1001_.jpg",
      ],
      material: "100% Leather",
      fit: "Size Adjustable",
      colors: ["brown", "zinc"],
      sizes: ["D"],
      shippingInfo: [
        "Free delivery Sunday, March 2 on orders shipped by Amazon over $35 Or Prime members get free delivery Tomorrow, February 26. Order within 3 hrs 59 mins.",
        "Expedited shipping available. Delivered by Friday, February 28.",
        "Standard shipping takes 3-5 business days. Free for orders over $50."
      ],
      features: [
        "2 pack of leather ratchet click belts with slide buckle.",
        "Made from 100% high-quality leather for durability.",
        "Adjustable size to provide a perfect fit for all.",
        "Comes in a gift set box, ideal for gifting.",
        "Stylish design suitable for both formal and casual occasions.",
      ],
      reviews: [
        {
          name: "Takashi Yamamoto",
          comment: "Excellent belts. The quality is top-notch and the buckle design is great."
        },
        {
          name: "Luis Fernandez",
          comment: "Very well-made belts. The leather is thick and the ratchet system works perfectly."
        },
        {
          name: "Isabella Rossi",
          comment: "Great value for money. The belts are stylish and easy to adjust."
        }
      ],
      slug: "founders-c-mens-belt-2-pack-leather-ratchet-click-belt"
    },    
    // Mens Casual        
    {
      category: "Mens",
      subcategory: "Casual",
      availability: "In Stock",
      name: "ZITY Men's Flannel Hoodie Shirts Long Sleeve Plaid",
      price: "$23.66",
      images: [
        "https://m.media-amazon.com/images/I/71qcdS6L8bL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71V9RF+mheL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71YZ7nl0mFL._AC_SL1500_.jpg",
      ],
      material: "Flannel",
      fit: "Regular Fit",
      colors: ["red", "blue", "green", "yellow"],
      sizes: ["M", "L", "XL"],
      shippingInfo: [
        "Free delivery Sunday, March 2 on orders shipped by Amazon over $35 Or Prime members get free delivery Tomorrow, February 26. Order within 3 hrs 59 mins.",
        "Expedited shipping available. Delivered by Friday, February 28.",
        "Standard shipping takes 3-5 business days. Free for orders over $50."
      ],
      features: [
        "Stylish hooded flannel shirt with long sleeves and button-down design.",
        "Made from high-quality flannel fabric for warmth and comfort.",
        "Regular fit suitable for casual outings and everyday wear.",
        "Features a plaid pattern and a convenient front pocket.",
        "Available in multiple colors to suit various preferences.",
        "Machine washable for easy care and maintenance.",
        "Durable stitching and construction for long-lasting wear.",
        "Perfect for layering or wearing on its own.",
        "Comfortable and cozy, ideal for cooler weather."
      ],
      reviews: [
        {
          name: "Hiroshi Nakamura",
          comment: "Great quality flannel shirt. Comfortable and stylish, perfect for casual wear."
        },
        {
          name: "Mateo Garcia",
          comment: "Excellent fit and fabric. The hood adds a nice touch."
        },
        {
          name: "Anastasia Ivanova",
          comment: "Beautiful shirt with a comfortable fit. Highly recommend for any casual occasion."
        }
      ],
      slug: "zity-mens-flannel-hoodie-shirts-long-sleeve"
    },
    {
      category: "Mens",
      subcategory: "Casual",
      availability: "In Stock",
      name: "Poriff Men's Casual Slim Fit Knitted Turtleneck Sweater",
      price: "$16.99",
      images: [
        "https://m.media-amazon.com/images/I/81wkLbG0uUL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/819pzfTzfTL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81slhNvJ+pL._AC_SL1500_.jpg",
      ],
      material: "95% Cotton, 5% Spandex",
      fit: "Slim Fit",
      colors: ["apricot", "black", "purple"],
      sizes: ["M", "L", "XL"],
      shippingInfo: [
        "Free delivery Monday, March 3 on orders shipped by Amazon over $35 Or fastest Same-Day delivery Today 5 PM - 10 PM. Order within 5 hrs 54 mins.",
        "Expedited shipping available for faster delivery.",
        "Standard shipping takes 3-5 business days. Free for orders over $50."
      ],
      features: [
        "Slim fit turtleneck sweater made from a blend of cotton and spandex.",
        "Lightweight and knitted for a comfortable and stylish look.",
        "Ideal for casual wear and can be layered for added warmth.",
        "Pull-on closure for easy wearing.",
        "Available in multiple colors to suit various preferences.",
        "Machine washable for easy care and maintenance.",
        "Durable construction ensures long-lasting wear.",
        "Soft and cozy, perfect for cooler weather.",
        "Imported quality from a reputable manufacturer."
      ],
      reviews: [
        {
          name: "Takashi Yamamoto",
          comment: "Stylish and comfortable turtleneck. Great for casual outings."
        },
        {
          name: "Luis Fernandez",
          comment: "Nice fit and fabric. The sweater looks great and feels soft."
        },
        {
          name: "Isabella Rossi",
          comment: "Highly recommend this sweater. It’s perfect for any casual occasion."
        }
      ],
      slug: "poriff-mens-casual-slim-fit-knitted-turtleneck-sweater"
    },  
    {
      category: "Mens",
      subcategory: "Casual",
      availability: "In Stock",
      name: "Men's KnitFlex Breeze Mesh Casual Walking Shoes",
      price: "$42.99",
      images: [
        "https://m.media-amazon.com/images/I/711lA5rk08L._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71cL-s+uiFL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71lG0nNNu7L._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71F9nxt7nkL._AC_SL1500_.jpg",
      ],
      material: "Mesh",
      fit: "Regular Fit",
      colors: ["black", "blue", "gray", "white"],
      sizes: ["8", "9", "10", "11"],
      shippingInfo: [
        "Free delivery Sunday, March 2 on orders shipped by Amazon over $35 Or Prime members get free delivery Tomorrow, February 26. Order within 3 hrs 59 mins.",
        "Expedited shipping available. Delivered by Friday, February 28.",
        "Standard shipping takes 3-5 business days. Free for orders over $50."
      ],
      features: [
        "Lightweight and breathable mesh upper for comfort.",
        "Lace-up design for a secure and adjustable fit.",
        "Perfect for casual walking and everyday wear.",
        "Comfortable and cushioned insole for all-day wear.",
        "Non-slip outsole provides excellent traction.",
        "Available in multiple colors to match various outfits.",
        "Durable construction ensures long-lasting wear.",
        "Easy to clean and maintain.",
        "Imported quality from a reputable manufacturer."
      ],
      reviews: [
        {
          name: "Takahiro Sato",
          comment: "Excellent casual shoes for everyday wear. Comfortable and stylish."
        },
        {
          name: "Juan Perez",
          comment: "Great quality and fit. Perfect for my daily walks."
        },
        {
          name: "Emily Watson",
          comment: "These shoes look fantastic and feel great. Highly recommend."
        }
      ],
      slug: "bruno-marc-mens-knitflex-breeze-casual-walking-shoes"
    },         
    {
      category: "Mens",
      subcategory: "Casual",
      availability: "In Stock",
      name: "Bruno Marc Men's Arch Support Casual Slip-on Shoes",
      price: "$36.99",
      images: [
        "https://m.media-amazon.com/images/I/81v+LfGP4tL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71e66rV6I0L._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/91979Qmg4bL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71x9UehhCRL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81m4CKsbSOL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81AIF3WmQwL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81YobMQwIEL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81tClhVFUmL._AC_SL1500_.jpg"
      ],
      material: "Mesh",
      fit: "Regular Fit",
      colors: ["black", "blue", "gray", "white"],
      sizes: ["8", "9", "10", "11"],
      shippingInfo: [
        "Free delivery Sunday, March 2 on orders shipped by Amazon over $35 Or Prime members get free delivery Tomorrow, February 26. Order within 3 hrs 59 mins.",
        "Expedited shipping available. Delivered by Friday, February 28.",
        "Standard shipping takes 3-5 business days. Free for orders over $50."
      ],
      features: [
        "Lightweight and breathable mesh upper for comfort.",
        "Slip-on design for easy wear and removal.",
        "Perfect for casual walking and everyday wear.",
        "Comfortable and cushioned insole for all-day wear.",
        "Non-slip outsole provides excellent traction.",
        "Available in multiple colors to match various outfits.",
        "Durable construction ensures long-lasting wear.",
        "Easy to clean and maintain.",
        "Imported quality from a reputable manufacturer."
      ],
      reviews: [
        {
          name: "Takashi Yamamoto",
          comment: "Stylish and comfortable slip-ons. Great for casual outings."
        },
        {
          name: "Luis Fernandez",
          comment: "Nice fit and fabric. The shoes look great and feel soft."
        },
        {
          name: "Isabella Rossi",
          comment: "Highly recommend these slip-ons. Perfect for any casual occasion."
        }
      ],
      slug: "bruno-marc-mens-arch-support-casual-slip-on-shoes"
    },
    {
      category: "Mens",
      subcategory: "Casual",
      availability: "In Stock",
      name: "Gesean Men's Color Block Pullover Casual Fleece Hoodie",
      price: "$29.99",
      images: [
        "https://m.media-amazon.com/images/I/71NtFwB6bIL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71ohnqy8D5L._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71PScPj3AKL._AC_SL1500_.jpg",
      ],
      material: "Fleece",
      fit: "Regular Fit",
      colors: ["black", "blue", "red", "yellow"],
      sizes: ["M", "L", "XL"],
      shippingInfo: [
        "Only 1 left in stock - order soon.",
        "Free delivery Sunday, March 2 on orders shipped by Amazon over $35 Or Prime members get free delivery Tomorrow, February 26. Order within 3 hrs 59 mins.",
        "Expedited shipping available. Delivered by Friday, February 28.",
        "Standard shipping takes 3-5 business days. Free for orders over $50."
      ],
      features: [
        "Pullover fleece hoodie with color block design.",
        "Long sleeves and a convenient front pocket.",
        "Made from high-quality fleece for warmth and comfort.",
        "Regular fit suitable for casual outings and everyday wear.",
        "Available in multiple colors to suit various preferences.",
        "Machine washable for easy care and maintenance.",
        "Durable stitching and construction for long-lasting wear.",
        "Perfect for layering or wearing on its own.",
        "Comfortable and cozy, ideal for cooler weather."
      ],
      reviews: [
        {
          name: "Hiroshi Nakamura",
          comment: "Great quality hoodie. Comfortable and stylish, perfect for casual wear."
        },
        {
          name: "Mateo Garcia",
          comment: "Excellent fit and fabric. The color block design is unique."
        },
        {
          name: "Anastasia Ivanova",
          comment: "Beautiful hoodie with a comfortable fit. Highly recommend for any casual occasion."
        }
      ],
      slug: "gesean-mens-color-block-pullover-casual-fleece-hoodie"
    },
    // Mens Sport       
    {
      category: "Mens",
      subcategory: "Sport",
      availability: "In Stock",
      name: "adidas Unisex Defender 4.0 Duffel Athletic Sports Gym Bag",
      price: "$31.42",
      images: [
        "https://m.media-amazon.com/images/I/81cpLO14-9L._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81+FOTk685S._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81LQ8LwxthL._AC_SL1500_.jpg",
      ],
      material: "Durable Fabric",
      fit: "Medium (66L)",
      colors: ["black/white", "blue", "red", "gray"],
      sizes: ["D"],
      shippingInfo: [
        "In Stock.",
        "Free delivery Sunday, March 2 on orders shipped by Amazon over $35 Or Prime members get free delivery Tomorrow, February 26. Order within 3 hrs 59 mins.",
        "Expedited shipping available. Delivered by Friday, February 28.",
        "Standard shipping takes 3-5 business days. Free for orders over $50."
      ],
      features: [
        "Lifetime Warranty, built to last.",
        "Water-resistant base material to keep your stuff dry.",
        "Multiple zippered pockets for plenty of storage space.",
        "Durable material - built to stand up to wear and tear.",
        "Adjustable shoulder strap - wear at the length that works for you.",
        "Plenty of room for team embroidery and branding.",
        "Perfect for gym, travel, and sports activities.",
        "Modern look with a durable design.",
        "Easy access to your personal essentials."
      ],
      reviews: [
        {
          name: "John Smith",
          comment: "Great duffel bag, very durable and spacious. Perfect for gym."
        },
        {
          name: "Emily Watson",
          comment: "Love the design and the water-resistant material. Highly recommended."
        },
        {
          name: "Michael Johnson",
          comment: "Excellent quality and plenty of pockets. Great for travel."
        }
      ],
      slug: "adidas-unisex-defender-4-0-duffel-athletic-sports-gym-bag"
    },
    {
      category: "Mens",
      subcategory: "Sport",
      availability: "In Stock",
      name: "Fishing Sunglasses UV400 with Hard Case",
      price: "$24.99",
      images: [
        "https://m.media-amazon.com/images/I/71JeXyXjOaL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61cq1aklDjL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61XymEKyvsL._AC_SL1500_.jpg",
      ],
      material: "FlexTuff Composite",
      fit: "One Size Fits Most",
      colors: ["gloss black"],
      sizes:  ["D"],
      shippingInfo: [
        "In Stock.",
        "Free delivery Sunday, March 2 on orders shipped by Amazon over $35 Or Prime members get free delivery Tomorrow, February 26. Order within 3 hrs 59 mins.",
        "Expedited shipping available. Delivered by Friday, February 28.",
        "Standard shipping takes 3-5 business days. Free for orders over $50."
      ],
      features: [
        "FlexTuff Composite frame for durability.",
        "Polarized lenses for reducing glare on water surfaces.",
        "Gloss Black Frame with Fire Mirror Amber Lens.",
        "Free Hard Case and Lens Cleaning Pouch included.",
        "UV400 means 100% UV Protection.",
        "Lightweight design to be worn all day.",
        "Wide sides to reduce side glare.",
        "Ideal for friends, fishermen, and family.",
        "Durable design perfect for all outdoor activities."
      ],
      reviews: [
        {
          name: "Takashi Yamamoto",
          comment: "Stylish and comfortable sunglasses. Great for fishing."
        },
        {
          name: "Luis Fernandez",
          comment: "Nice fit and quality. The polarization works well."
        },
        {
          name: "Isabella Rossi",
          comment: "Highly recommend these sunglasses. Perfect for outdoor activities."
        }
      ],
      slug: "fishoholic-polarized-fishing-sunglasses-uv400-hard-case"
    },   
    {
      category: "Mens",
      subcategory: "Sport",
      availability: "In Stock",
      name: "SIR7 Men's Gym Workout Long Sleeve Pullover Hoodie",
      price: "$25.99",
      images: [
        "https://m.media-amazon.com/images/I/91oZKwufTmL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/91NAGB1soVL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/91tzdBomBpL._AC_SL1500_.jpg",
      ],
      material: "65% Cotton, 35% Polyester",
      fit: "Regular Fit",
      colors: ["army green", "black", "grey", "blue", "white", "wine"],
      sizes: ["Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large"],
      shippingInfo: [
        "In Stock.",
        "Free delivery Monday, March 3 on orders shipped by Amazon over $35 Or Prime members get free delivery Friday, February 28. Order within 32 mins.",
        "Expedited shipping available. Delivered by Friday, February 28.",
        "Standard shipping takes 3-5 business days. Free for orders over $50."
      ],
      features: [
        "Lightweight and comfortable long sleeve pullover hoodie.",
        "Made from a blend of cotton and polyester for breathability.",
        "Regular fit suitable for gym workouts and casual wear.",
        "Drawstring hood and elastic cuffs for a secure fit.",
        "Available in multiple colors to suit various preferences.",
        "Machine washable for easy care and maintenance.",
        "Durable construction ensures long-lasting wear.",
        "Perfect for layering or wearing on its own.",
        "Soft and cozy, ideal for cooler weather."
      ],
      reviews: [
        {
          name: "Carlos Ramirez",
          comment: "Great quality hoodie, perfect for my gym workouts."
        },
        {
          name: "Emily Watson",
          comment: "Comfortable and stylish. Highly recommend for any sports activities."
        },
        {
          name: "Michael Johnson",
          comment: "Love the fit and fabric. The hoodie is durable and well-made."
        }
      ],
      slug: "sir7-mens-gym-workout-long-sleeve-pullover-hoodie"
    },
    {
      category: "Mens",
      subcategory: "Sport",
      availability: "In Stock",
      name: "ASICS Men's Gel-Contend 8 Running Shoes",
      price: "$49.95",
      images: [
        "https://m.media-amazon.com/images/I/61N+Ny8EVzL._AC_SL1200_.jpg",
        "https://m.media-amazon.com/images/I/61MulNaUMBL._AC_SL1200_.jpg",
        "https://m.media-amazon.com/images/I/51IPqfZUIOL._AC_SL1200_.jpg",
        "https://m.media-amazon.com/images/I/61n519hr6XL._AC_SL1200_.jpg",
        "https://m.media-amazon.com/images/I/61nnH8q9e3L._AC_SL1200_.jpg",
        "https://m.media-amazon.com/images/I/61wSIzi+mSL._AC_SL1024_.jpg",
        "https://m.media-amazon.com/images/I/61w2mRsx04L._AC_SL1200_.jpg",
      ],
      material: "100% Synthetic",
      fit: "Regular Fit",
      colors: ["black", "white", "blue"],
      sizes: ["8", "9", "10", "11", "12"],
      shippingInfo: [
        "In Stock.",
        "Free delivery March 15 - 28 Or fastest delivery March 11 - 18.",
        "Expedited shipping available. Delivered by Friday, February 28.",
        "Standard shipping takes 3-5 business days. Free for orders over $50."
      ],
      features: [
        "Lightweight and comfortable running shoes.",
        "Made from 100% synthetic materials.",
        "Rubber sole for durability and traction.",
        "Supportive fit with a comfortable toe box.",
        "Suitable for everyday wear and running.",
        "Machine washable for easy care and maintenance.",
        "Durable construction ensures long-lasting wear.",
        "Imported quality from a reputable manufacturer.",
        "Soft and cushioned for added comfort."
      ],
      reviews: [
        {
          name: "Takashi Yamamoto",
          comment: "Stylish and comfortable running shoes. Great for daily runs."
        },
        {
          name: "Luis Fernandez",
          comment: "Nice fit and quality. The shoes provide excellent support."
        },
        {
          name: "Isabella Rossi",
          comment: "Highly recommend these running shoes. Perfect for outdoor activities."
        }
      ],
      slug: "asics-mens-gel-contend-8-running-shoes"
    },
    {
      category: "Mens",
      subcategory: "Sport",
      availability: "Only 1 left in stock - order soon.",
      name: "FoxQ Men's Sweat Shorts with Secure Zipper Pockets",
      price: "$16.99",
      images: [
        "https://m.media-amazon.com/images/I/71Eso0MI44L._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71JkzOmHdNL._AC_SL1500_.jpg",
      ],
      material: "Sweat Fabric",
      fit: "Regular Fit",
      colors: ["black", "grey", "navy"],
      sizes: ["Small", "Medium", "Large", "X-Large", "XX-Large"],
      shippingInfo: [
        "Only 1 left in stock - order soon.",
        "Free delivery Sunday, March 2 on orders shipped by Amazon over $35 Or Prime members get free delivery Tomorrow, February 26. Order within 3 hrs 59 mins.",
        "Expedited shipping available. Delivered by Friday, February 28.",
        "Standard shipping takes 3-5 business days. Free for orders over $50."
      ],
      features: [
        "Comfortable and stylish sweat shorts.",
        "Secure zipper pockets for storing essentials.",
        "Elastic waist with drawstring for a secure fit.",
        "Made from sweat fabric for a comfortable feel.",
        "Available in multiple colors to suit various preferences.",
        "Machine washable for easy care and maintenance.",
        "Durable construction ensures long-lasting wear.",
        "Perfect for casual outings and gym workouts.",
        "Soft and cozy, ideal for everyday wear."
      ],
      reviews: [
        {
          name: "Carlos Ramirez",
          comment: "Great quality shorts, perfect for my gym workouts."
        },
        {
          name: "Emily Watson",
          comment: "Comfortable and stylish. Highly recommend for any casual activities."
        },
        {
          name: "Michael Johnson",
          comment: "Love the fit and fabric. The shorts are durable and well-made."
        }
      ],
      slug: "foxq-mens-sweat-shorts-with-secure-zipper-pockets"
    },          
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