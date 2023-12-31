// this file contains all specific categories corresponding to their
// general category button whichc are defined in "GeneralSection.tsx".
// this file is also imponted in the "SpecificItemsPage.tsx" form
// and used as a categoryToProductNames varaible there
const categoryToProductNames: Record<string, string[]> = {
  Travel: [
    "Baby Carrier",
    "Car Seat - Accessories",
    "Car Seat - Booster",
    "Car Seat - Infant",
    "Car Seat - Toddler",
    "Crib Mattress",
    "Stroller - Double",
    "Stroller - Single",
    "Stroller - Umbrella",
    "Stroller - Accessories ",
  ],
  Sleep: [
    "Bassinet",
    "Blankets",
    "Bed Rail",
    "Crib",
    "Crib Bedding",
    "Crib Mattress",
    "Pack n Play",
    "Swaddle/Sleep Sack",
  ],
  "Bath & Changing": [
    "Baby Bath",
    "Baby Bath Seat",
    "Baby Bath Towels",
    "Baby Bath Wash Cloths",
    "Changing Table",
    "Changing Table Pad",
    "Changing Table Pad Cover/Sheet",
    "Diaper Bag",
    "Diaper Genie",
    "Diaper Genie Refills",
    "Diapers",
    "Hygiene - Baby (Large)",
    "Hygiene - Baby (Small)",
    "Hygiene - Mother (Small)",
    "Hygine - Mother (Large)",
    "Potty",
    "Wipe Warmer",
    "Wipes",
  ],
  Clothing: [
    "Clothing",
    "Clothing - Accessories",
    "Coats",
    "Costumes",
    "Hats",
    "Mitten/Gloves",
    "Shoes",
    "Socks/Tights",
    "Underwear",
  ],
  Feeding: [
    "Baby Bottle",
    "Baby Bottle Nipples",
    "Baby Bottle Warmer",
    "Baby Food",
    "Bibs/Burp Cloths",
    "Booster Seat",
    "Breast Pump",
    "Cleaning Supplies",
    "Dishes/Sippy",
    "Feeding - Other",
    "Formula",
    "High Chair",
    "Nursing Accessories",
    "Nursing Supplies",
  ],
  Safety: [
    "Grocery Cart Covers",
    "Safety Gate",
    "Safety-Monitor",
    "Saftey Accessories",
  ],
  Play: [
    "Board Games",
    "Books",
    "Bouncer Seat",
    "Bumbo Seat",
    "Exersaucer",
    "Jolly Jumper",
    "Lovee",
    "Mobiles",
    "Pacifiers",
    "Puzzles",
    "Stuffed Animals",
    "Swing",
    "Teethers/Rattles",
    "Toys - Large",
    "Toys - Medium",
    "Toys - Small",
    "Tummy Time",
    "Walker",
  ],
  Other: [
    "Backpack",
    "Beauty Products",
    "Boppy Pillow",
    "Boppy Pillow Cover",
    "Décor",
    "School Supplies",
  ],
};

export default categoryToProductNames;
