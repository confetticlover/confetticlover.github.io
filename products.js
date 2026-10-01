// ============================================================
//  ConfettiClover — shop settings & product list
//  This is the only file you need to edit to update the site.
// ============================================================

// Your Etsy shop link. Leave it "" until the shop exists: the site then says
// "etsy shop coming soon". Once it's set, every Etsy button links here, e.g.
// "https://www.etsy.com/shop/YourShopName"
const ETSY_SHOP_URL = "";

// The big banner at the top of the page, plus the "our story" photo.
// Put photos in the images/ folder and add the paths here, e.g. "images/hero-1.jpg".
// Leave a photo "" to show a drawing instead.
const HERO = {
  title: "the clover collection",
  leftImage: "",
  rightImage: "",
  storyImage: "",
};

// One entry per piece. The first four show up under "new arrivals". To add a new piece:
//   1. Drop a photo into the images/ folder (square photos look best).
//   2. Copy one of the entries below and change the details.
//
//   name     – what the piece is called
//   type     – "bracelet" or "necklace" (used by the filter buttons)
//   price    – shown on the card, e.g. "$18" (leave "" to hide)
//   image    – path to the photo, e.g. "images/sunny-day.jpg"
//              (leave "" to show a colorful placeholder drawing)
//   etsyUrl  – link to this exact Etsy listing
//              (leave "" to link to the main shop instead)
//   colors   – only used for the placeholder drawing when there's no photo
//   soldOut  – true to show a "Sold out" tag
const PRODUCTS = [
  {
    name: "Sunny Side Up",
    type: "bracelet",
    price: "$16",
    image: "",
    etsyUrl: "",
    colors: ["#FFD166", "#FFFFFF", "#FF9F68"],
  },
  {
    name: "Lucky Clover",
    type: "necklace",
    price: "$24",
    image: "",
    etsyUrl: "",
    colors: ["#3FA66B", "#B8E6C1", "#FFFFFF"],
  },
  {
    name: "Cotton Candy",
    type: "bracelet",
    price: "$16",
    image: "",
    etsyUrl: "",
    colors: ["#FF8FB1", "#C3A6FF", "#FFFFFF"],
  },
  {
    name: "Ocean Breeze",
    type: "necklace",
    price: "$26",
    image: "",
    etsyUrl: "",
    colors: ["#7CC6FE", "#2E86C1", "#F4F1E8"],
  },
  {
    name: "Confetti Party",
    type: "bracelet",
    price: "$18",
    image: "",
    etsyUrl: "",
    colors: ["#FF8FB1", "#FFD166", "#7CC6FE", "#3FA66B", "#C3A6FF"],
  },
  {
    name: "Lavender Fields",
    type: "necklace",
    price: "$24",
    image: "",
    etsyUrl: "",
    colors: ["#C3A6FF", "#E9DFFF", "#9B7EDE"],
  },
  {
    name: "Berry Smoothie",
    type: "bracelet",
    price: "$16",
    image: "",
    etsyUrl: "",
    colors: ["#D63A6E", "#FF8FB1", "#6B2E5F"],
    soldOut: true,
  },
  {
    name: "Golden Hour",
    type: "necklace",
    price: "$28",
    image: "",
    etsyUrl: "",
    colors: ["#E8B04B", "#FFF1C9", "#C97B3B"],
  },
];
