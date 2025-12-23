const products = [
{
  id: 1,
  name: "Luminous Skin Barrier Repair Cream",
  description:
    "Advanced moisturizer to strengthen skin barrier and restore long-lasting hydration.",
  price: 480,
  category: "Barrier Repair + Hydration",
  image:
    "https://images.unsplash.com/photo-1598662972299-5408ddb8a3dc",
  additionalImages: [
    "https://images.unsplash.com/photo-1598662972299-5408ddb8a3dc",
    "https://images.unsplash.com/photo-1601049676869-702ea24cfa7a",
    "https://images.unsplash.com/photo-1556228578-8c89e6adf883"
  ],
  type: "skincare",
  longDescription:
    "This barrier-repair cream is formulated with ceramides, panthenol, and hyaluronic acid to deeply hydrate skin, repair damage, and protect against environmental stress. Ideal for daily use on stressed, dehydrated, or sensitive skin.",
  points: [
    "Strengthens skin barrier",
    "Provides 24-hour hydration",
    "Reduces dryness and irritation"
  ],
  application: [
    "Apply on clean face and neck.",
    "Use morning and night.",
    "Follow with sunscreen during daytime."
  ],
  ingredients: [
    "Ceramides — restore skin barrier.",
    "Panthenol — soothes and repairs.",
    "Hyaluronic acid — deep hydration."
  ],
  stylistNote:
    "Works best when layered after a hydrating serum.",
  tagnames:
    "Dermatologist-tested, fragrance-free, suitable for sensitive skin."
},
{
  id: 2,
  name: "Hydra Glow Face Cleanser",
  description: "Gentle foaming cleanser for everyday use.",
  price: 299,
  category: "Cleanser",
  image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883",
  additionalImages: [
    "https://images.unsplash.com/photo-1556228578-8c89e6adf883",
    "https://images.unsplash.com/photo-1585238342028-4a2f40a4bff8"
  ],
  type: "skincare",
  longDescription:
    "Removes dirt, oil, and makeup without stripping natural moisture.",
  points: [
    "Soap-free formula",
    "Suitable for sensitive skin",
    "Maintains skin pH"
  ],
  application: [
    "Apply on wet face.",
    "Massage gently.",
    "Rinse thoroughly."
  ],
  ingredients: [
    "Aloe vera — soothes skin.",
    "Glycerin — hydrates."
  ],
  stylistNote: "Use twice daily for best results.",
  tagnames: "pH-balanced, cruelty-free."
},
{
  id: 3,
  name: "Vitamin C Brightening Serum",
  description: "Serum to reduce dark spots and uneven tone.",
  price: 550,
  category: "Serum",
  image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be",
  additionalImages: [
    "https://images.unsplash.com/photo-1620916566398-39f1143ab7be"
  ],
  type: "skincare",
  longDescription:
    "Concentrated vitamin C formula for radiant, even-toned skin.",
  points: [
    "Reduces pigmentation",
    "Boosts collagen",
    "Fast-absorbing"
  ],
  application: [
    "Apply 2–3 drops on clean skin.",
    "Use before moisturizer."
  ],
  ingredients: [
    "Vitamin C",
    "Hyaluronic acid"
  ],
  stylistNote: "Use sunscreen after applying.",
  tagnames: "Paraben-free, vegan."
},
{
  id: 4,
  name: "Deep Moisture Night Cream",
  description: "Overnight repair cream for soft, plump skin.",
  price: 480,
  category: "Night Care",
  image: "https://images.unsplash.com/photo-1601049676869-702ea24cfa7a",
  additionalImages: [
    "https://images.unsplash.com/photo-1601049676869-702ea24cfa7a",
    "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908"
  ],
  type: "skincare",
  longDescription:
    "Rich night cream that repairs skin barrier and restores moisture while you sleep.",
  points: [
    "Repairs damaged skin barrier",
    "Deep hydration",
    "Improves skin elasticity"
  ],
  application: [
    "Apply at night on clean face.",
    "Massage gently until absorbed."
  ],
  ingredients: [
    "Shea butter",
    "Ceramides",
    "Niacinamide"
  ],
  stylistNote: "Wake up with soft, glowing skin.",
  tagnames: "Dermatologist-approved, non-comedogenic."
},
{
  id: 5,
  name: "Hydrating Gel Moisturizer",
  description: "Oil-free gel moisturizer for oily skin.",
  price: 350,
  category: "Moisturizer",
  image: "https://images.unsplash.com/photo-1598662972299-5408ddb8a3dc",
  additionalImages: [
    "https://images.unsplash.com/photo-1598662972299-5408ddb8a3dc"
  ],
  type: "skincare",
  longDescription:
    "Lightweight gel that hydrates without clogging pores.",
  points: [
    "Oil-free",
    "Quick absorbing",
    "Matt finish"
  ],
  application: [
    "Apply morning and evening.",
    "Use after cleansing."
  ],
  ingredients: [
    "Hyaluronic acid",
    "Green tea extract"
  ],
  stylistNote: "Best for oily and acne-prone skin.",
  tagnames: "Alcohol-free, cruelty-free."
},
{
  id: 6,
  name: "Gentle Exfoliating Face Scrub",
  description: "Removes dead skin cells gently.",
  price: 260,
  category: "Exfoliation",
  image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd",
  additionalImages: [
    "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd"
  ],
  type: "skincare",
  longDescription:
    "Mild exfoliant that smoothens texture and unclogs pores.",
  points: [
    "Removes dead skin",
    "Improves texture",
    "Non-abrasive"
  ],
  application: [
    "Use 2 times a week.",
    "Massage gently on wet face.",
    "Rinse thoroughly."
  ],
  ingredients: [
    "Walnut shell powder",
    "Aloe vera"
  ],
  stylistNote: "Avoid over-exfoliation.",
  tagnames: "Paraben-free."
},
{
  id: 7,
  name: "Soothing Rose Toner",
  description: "Calming toner for refreshed skin.",
  price: 240,
  category: "Toner",
  image: "https://images.unsplash.com/photo-1585386959984-a4155228f7e2",
  additionalImages: [
    "https://images.unsplash.com/photo-1585386959984-a4155228f7e2"
  ],
  type: "skincare",
  longDescription:
    "Alcohol-free toner that refreshes and balances skin.",
  points: [
    "Tightens pores",
    "Soothes redness",
    "Hydrates skin"
  ],
  application: [
    "Apply with cotton pad.",
    "Use after cleansing."
  ],
  ingredients: [
    "Rose water",
    "Chamomile"
  ],
  stylistNote: "Ideal for sensitive skin.",
  tagnames: "Alcohol-free."
},
{
  id: 8,
  name: "Acne Control Spot Gel",
  description: "Targeted treatment for pimples.",
  price: 210,
  category: "Acne Care",
  image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be",
  additionalImages: [
    "https://images.unsplash.com/photo-1620916566398-39f1143ab7be"
  ],
  type: "skincare",
  longDescription:
    "Fast-acting gel to reduce pimples and redness.",
  points: [
    "Reduces acne",
    "Controls oil",
    "Non-drying"
  ],
  application: [
    "Apply directly on acne.",
    "Use at night."
  ],
  ingredients: [
    "Salicylic acid",
    "Tea tree oil"
  ],
  stylistNote: "Use only on affected areas.",
  tagnames: "Non-comedogenic."
},
{
  id: 9,
  name: "Under Eye Repair Cream",
  description: "Reduces dark circles and puffiness.",
  price: 390,
  category: "Eye Care",
  image: "https://images.unsplash.com/photo-1556228720-195a672e8a03",
  additionalImages: [
    "https://images.unsplash.com/photo-1556228720-195a672e8a03"
  ],
  type: "skincare",
  longDescription:
    "Lightweight eye cream for brighter, refreshed eyes.",
  points: [
    "Reduces puffiness",
    "Lightens dark circles",
    "Hydrates delicate skin"
  ],
  application: [
    "Apply small amount around eyes.",
    "Tap gently with ring finger."
  ],
  ingredients: [
    "Caffeine",
    "Peptides"
  ],
  stylistNote: "Use morning and night.",
  tagnames: "Ophthalmologist-tested."
},
{
  id: 10,
  name: "Charcoal Detox Face Mask",
  description: "Deep cleansing mask for clear skin.",
  price: 320,
  category: "Face Mask",
  image: "https://images.unsplash.com/photo-1598662972299-5408ddb8a3dc",
  additionalImages: [
    "https://images.unsplash.com/photo-1598662972299-5408ddb8a3dc"
  ],
  type: "skincare",
  longDescription:
    "Draws out impurities and excess oil from pores.",
  points: [
    "Deep detox",
    "Removes blackheads",
    "Oil control"
  ],
  application: [
    "Apply evenly on face.",
    "Leave for 15 minutes.",
    "Rinse off."
  ],
  ingredients: [
    "Activated charcoal",
    "Clay"
  ],
  stylistNote: "Use once a week.",
  tagnames: "Oil-control formula."
},
{
  id: 11,
  name: "Daily Sunscreen SPF 50",
  description: "High protection sunscreen for daily use.",
  price: 430,
  category: "Sun Care",
  image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273",
  additionalImages: [
    "https://images.unsplash.com/photo-1596755389378-c31d21fd1273"
  ],
  type: "skincare",
  longDescription:
    "Lightweight sunscreen with broad-spectrum protection.",
  points: [
    "SPF 50 PA+++",
    "No white cast",
    "Water-resistant"
  ],
  application: [
    "Apply 15 minutes before sun exposure.",
    "Reapply every 3 hours."
  ],
  ingredients: [
    "Zinc oxide",
    "Vitamin E"
  ],
  stylistNote: "Essential for daytime routine.",
  tagnames: "Reef-safe."
},
{
  id: 12,
  name: "Nourishing Face Oil",
  description: "Light facial oil for radiant glow.",
  price: 520,
  category: "Face Oil",
  image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc",
  additionalImages: [
    "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc"
  ],
  type: "skincare",
  longDescription:
    "Blend of natural oils that deeply nourish skin.",
  points: [
    "Boosts glow",
    "Locks moisture",
    "Improves texture"
  ],
  application: [
    "Apply 2–3 drops after moisturizer.",
    "Massage gently."
  ],
  ingredients: [
    "Rosehip oil",
    "Jojoba oil"
  ],
  stylistNote: "Best for dry skin.",
  tagnames: "100% natural oils."
},
{
  id: 13,
  name: "Brightening Sheet Mask",
  description: "Instant glow sheet mask.",
  price: 180,
  category: "Sheet Mask",
  image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908",
  additionalImages: [
    "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908"
  ],
  type: "skincare",
  longDescription:
    "Infused mask that hydrates and brightens tired skin.",
  points: [
    "Instant hydration",
    "Brightens skin",
    "Cooling effect"
  ],
  application: [
    "Apply on clean face.",
    "Leave for 15–20 minutes.",
    "Massage excess serum."
  ],
  ingredients: [
    "Niacinamide",
    "Hyaluronic acid"
  ],
  stylistNote: "Perfect before events.",
  tagnames: "Single-use, vegan."
},
{
  id: 14,
  name: "Anti-Aging Retinol Serum",
  description: "Reduces fine lines and wrinkles.",
  price: 620,
  category: "Anti-Aging",
  image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be",
  additionalImages: [
    "https://images.unsplash.com/photo-1620916566398-39f1143ab7be"
  ],
  type: "skincare",
  longDescription:
    "Powerful retinol serum to improve skin texture.",
  points: [
    "Reduces wrinkles",
    "Improves firmness",
    "Boosts cell renewal"
  ],
  application: [
    "Use at night only.",
    "Apply 2–3 drops.",
    "Follow with moisturizer."
  ],
  ingredients: [
    "Retinol",
    "Squalane"
  ],
  stylistNote: "Use sunscreen during daytime.",
  tagnames: "Beginner-friendly retinol."
},
{
  id: 15,
  name: "Calming Aloe Face Mist",
  description: "Refreshing mist for instant hydration.",
  price: 220,
  category: "Face Mist",
  image: "https://images.unsplash.com/photo-1585386959984-a4155228f7e2",
  additionalImages: [
    "https://images.unsplash.com/photo-1585386959984-a4155228f7e2"
  ],
  type: "skincare",
  longDescription:
    "Cooling face mist that hydrates and soothes skin.",
  points: [
    "Instant refresh",
    "Soothes irritation",
    "Travel-friendly"
  ],
  application: [
    "Spray anytime on face.",
    "Pat gently."
  ],
  ingredients: [
    "Aloe vera",
    "Cucumber extract"
  ],
  stylistNote: "Great for summer use.",
  tagnames: "Alcohol-free, soothing."
},
{
  id: 16,
  name: "Strengthening Hair Conditioner",
  description: "Repairs weak and damaged hair strands.",
  price: 360,
  category: "Conditioner",
  image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273",
  additionalImages: [
    "https://images.unsplash.com/photo-1596755389378-c31d21fd1273",
    "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3"
  ],
  type: "haircare",
  longDescription:
    "Deep conditioning formula that strengthens hair and reduces breakage.",
  points: [
    "Reduces hair fall",
    "Improves smoothness",
    "Adds shine"
  ],
  application: [
    "Apply after shampoo.",
    "Leave for 2–3 minutes.",
    "Rinse thoroughly."
  ],
  ingredients: [
    "Keratin",
    "Argan oil"
  ],
  stylistNote: "Focus on mid-lengths and ends.",
  tagnames: "Sulfate-free, color-safe."
},
{
  id: 17,
  name: "Anti-Frizz Hair Serum",
  description: "Smoothens frizz and adds instant shine.",
  price: 310,
  category: "Serum",
  image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc",
  additionalImages: [
    "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc"
  ],
  type: "haircare",
  longDescription:
    "Lightweight serum that tames frizz without weighing hair down.",
  points: [
    "Instant smoothness",
    "Non-greasy",
    "Heat protection"
  ],
  application: [
    "Apply few drops on damp or dry hair.",
    "Avoid roots."
  ],
  ingredients: [
    "Silk proteins",
    "Argan oil"
  ],
  stylistNote: "Perfect finishing product.",
  tagnames: "Silicone-light formula."
},
{
  id: 18,
  name: "Herbal Hair Fall Control Oil",
  description: "Nourishing oil to reduce hair fall.",
  price: 280,
  category: "Hair Oil",
  image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",
  additionalImages: [
    "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6"
  ],
  type: "haircare",
  longDescription:
    "Traditional herbal oil that strengthens roots and improves scalp health.",
  points: [
    "Reduces hair fall",
    "Strengthens roots",
    "Improves blood circulation"
  ],
  application: [
    "Massage onto scalp.",
    "Leave for 1–2 hours.",
    "Wash off with mild shampoo."
  ],
  ingredients: [
    "Bhringraj",
    "Amla",
    "Coconut oil"
  ],
  stylistNote: "Use twice a week.",
  tagnames: "Ayurvedic-inspired."
},
{
  id: 19,
  name: "Scalp Detox Scrub",
  description: "Exfoliates scalp and removes buildup.",
  price: 420,
  category: "Scalp Care",
  image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd",
  additionalImages: [
    "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd"
  ],
  type: "haircare",
  longDescription:
    "Gentle scrub that cleanses scalp and promotes healthy hair growth.",
  points: [
    "Removes product buildup",
    "Refreshes scalp",
    "Boosts circulation"
  ],
  application: [
    "Apply on wet scalp.",
    "Massage gently.",
    "Rinse and shampoo."
  ],
  ingredients: [
    "Sea salt",
    "Peppermint oil"
  ],
  stylistNote: "Use once a week.",
  tagnames: "Paraben-free."
},
{
  id: 20,
  name: "Leave-In Conditioning Cream",
  description: "Moisturizes and softens hair all day.",
  price: 390,
  category: "Leave-In",
  image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
  additionalImages: [
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
  ],
  type: "haircare",
  longDescription:
    "Light leave-in cream for smooth, manageable hair.",
  points: [
    "All-day hydration",
    "Reduces frizz",
    "Improves manageability"
  ],
  application: [
    "Apply on damp hair.",
    "Style as usual."
  ],
  ingredients: [
    "Shea butter",
    "Aloe vera"
  ],
  stylistNote: "Great for daily use.",
  tagnames: "No-rinse formula."
},
{
  id: 21,
  name: "Curl Enhancing Mousse",
  description: "Adds volume and bounce to curls.",
  price: 360,
  category: "Styling",
  image: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3",
  additionalImages: [
    "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3"
  ],
  type: "haircare",
  longDescription:
    "Airy mousse that defines curls without stiffness.",
  points: [
    "Light hold",
    "Adds volume",
    "No crunch"
  ],
  application: [
    "Apply on damp hair.",
    "Scrunch curls.",
    "Air-dry or diffuse."
  ],
  ingredients: [
    "Rice protein",
    "Panthenol"
  ],
  stylistNote: "Ideal for fine curls.",
  tagnames: "Curly-hair friendly."
},
{
  id: 22,
  name: "Anti-Dandruff Shampoo",
  description: "Controls dandruff and itchy scalp.",
  price: 340,
  category: "Shampoo",
  image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883",
  additionalImages: [
    "https://images.unsplash.com/photo-1556228578-8c89e6adf883"
  ],
  type: "haircare",
  longDescription:
    "Cleanses scalp while reducing flakes and irritation.",
  points: [
    "Reduces dandruff",
    "Soothes itchiness",
    "Gentle cleansing"
  ],
  application: [
    "Massage onto wet scalp.",
    "Leave for 2 minutes.",
    "Rinse thoroughly."
  ],
  ingredients: [
    "Zinc pyrithione",
    "Tea tree oil"
  ],
  stylistNote: "Use 2–3 times a week.",
  tagnames: "Dermatologist-tested."
},
{
  id: 23,
  name: "Heat Protection Spray",
  description: "Protects hair from heat styling damage.",
  price: 300,
  category: "Heat Protection",
  image: "https://images.unsplash.com/photo-1601049676869-702ea24cfa7a",
  additionalImages: [
    "https://images.unsplash.com/photo-1601049676869-702ea24cfa7a"
  ],
  type: "haircare",
  longDescription:
    "Creates a protective barrier against heat tools.",
  points: [
    "Heat protection up to 230°C",
    "Prevents dryness",
    "Lightweight"
  ],
  application: [
    "Spray before heat styling.",
    "Comb through evenly."
  ],
  ingredients: [
    "Panthenol",
    "Silk amino acids"
  ],
  stylistNote: "Must-have before straightening.",
  tagnames: "Non-sticky."
},
{
  id: 24,
  name: "Intense Repair Hair Mask",
  description: "Deep repair mask for damaged hair.",
  price: 480,
  category: "Mask",
  image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908",
  additionalImages: [
    "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908"
  ],
  type: "haircare",
  longDescription:
    "Restores strength and softness to damaged hair.",
  points: [
    "Deep nourishment",
    "Repairs split ends",
    "Improves elasticity"
  ],
  application: [
    "Apply after shampoo.",
    "Leave for 10–15 minutes.",
    "Rinse thoroughly."
  ],
  ingredients: [
    "Shea butter",
    "Protein complex"
  ],
  stylistNote: "Use weekly.",
  tagnames: "Salon-inspired care."
},
{
  id: 25,
  name: "Volumizing Dry Shampoo",
  description: "Refreshes hair between washes.",
  price: 350,
  category: "Dry Shampoo",
  image: "https://images.unsplash.com/photo-1598662972299-5408ddb8a3dc",
  additionalImages: [
    "https://images.unsplash.com/photo-1598662972299-5408ddb8a3dc"
  ],
  type: "haircare",
  longDescription:
    "Absorbs oil and adds volume instantly.",
  points: [
    "Oil absorption",
    "Adds volume",
    "No residue"
  ],
  application: [
    "Spray on roots.",
    "Massage and brush."
  ],
  ingredients: [
    "Rice starch",
    "Clay"
  ],
  stylistNote: "Perfect for busy days.",
  tagnames: "Travel-friendly."
},
{
  id: 26,
  name: "Scalp Soothing Hair Tonic",
  description: "Cools and refreshes irritated scalp.",
  price: 270,
  category: "Scalp Care",
  image: "https://images.unsplash.com/photo-1585386959984-a4155228f7e2",
  additionalImages: [
    "https://images.unsplash.com/photo-1585386959984-a4155228f7e2"
  ],
  type: "haircare",
  longDescription:
    "Light tonic that calms scalp and boosts freshness.",
  points: [
    "Soothes irritation",
    "Cooling effect",
    "Non-greasy"
  ],
  application: [
    "Apply directly on scalp.",
    "Massage gently."
  ],
  ingredients: [
    "Menthol",
    "Witch hazel"
  ],
  stylistNote: "Great for hot weather.",
  tagnames: "Alcohol-free."
},
{
  id: 27,
  name: "Protein Repair Hair Ampoule",
  description: "Intensive treatment for weak hair.",
  price: 520,
  category: "Treatment",
  image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be",
  additionalImages: [
    "https://images.unsplash.com/photo-1620916566398-39f1143ab7be"
  ],
  type: "haircare",
  longDescription:
    "Concentrated protein treatment to rebuild hair structure.",
  points: [
    "Strengthens hair",
    "Reduces breakage",
    "Improves texture"
  ],
  application: [
    "Apply on towel-dried hair.",
    "Leave for 5–10 minutes.",
    "Rinse well."
  ],
  ingredients: [
    "Keratin proteins",
    "Amino acids"
  ],
  stylistNote: "Use once in 2 weeks.",
  tagnames: "Professional care."
},
{
  id: 28,
  name: "Natural Beard & Hair Oil",
  description: "Multi-use oil for hair and beard.",
  price: 330,
  category: "Oil",
  image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",
  additionalImages: [
    "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6"
  ],
  type: "haircare",
  longDescription:
    "Nourishes hair and beard with natural oils.",
  points: [
    "Softens hair",
    "Adds shine",
    "Non-greasy"
  ],
  application: [
    "Apply few drops.",
    "Massage gently."
  ],
  ingredients: [
    "Jojoba oil",
    "Argan oil"
  ],
  stylistNote: "Suitable for men.",
  tagnames: "100% natural oils."
},
{
  id: 29,
  name: "Daily Gentle Hair Cleanser",
  description: "Mild shampoo for everyday use.",
  price: 310,
  category: "Shampoo",
  image: "https://images.unsplash.com/photo-1556228720-195a672e8a03",
  additionalImages: [
    "https://images.unsplash.com/photo-1556228720-195a672e8a03"
  ],
  type: "haircare",
  longDescription:
    "Cleanses hair gently without stripping moisture.",
  points: [
    "Daily-use safe",
    "Maintains scalp balance",
    "Softens hair"
  ],
  application: [
    "Massage on wet scalp.",
    "Rinse thoroughly."
  ],
  ingredients: [
    "Oat extract",
    "Aloe vera"
  ],
  stylistNote: "Best for normal hair.",
  tagnames: "pH-balanced."
},
{
  id: 30,
  name: "Overnight Hair Repair Serum",
  description: "Repairs hair while you sleep.",
  price: 450,
  category: "Night Care",
  image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc",
  additionalImages: [
    "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc"
  ],
  type: "haircare",
  longDescription:
    "Leave-on serum that repairs and nourishes hair overnight.",
  points: [
    "Overnight repair",
    "Reduces split ends",
    "Adds softness"
  ],
  application: [
    "Apply before bed.",
    "Do not rinse."
  ],
  ingredients: [
    "Ceramides",
    "Natural oils"
  ],
  stylistNote: "Wake up to smoother hair.",
  tagnames: "No-rinse, night care."
}
];

export default products;
