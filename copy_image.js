const fs = require('fs');

const mappings = [
  {
    src: 'C:\\Users\\acer\\.gemini\\antigravity\\brain\\8578bd49-8346-434d-b62a-50b5b358d19a\\logo_new_1781246202397.png',
    dest: 'c:\\Users\\acer\\OneDrive\\Documents\\velloretravel\\images\\logo.png'
  },
  {
    src: 'C:\\Users\\acer\\.gemini\\antigravity\\brain\\8578bd49-8346-434d-b62a-50b5b358d19a\\travel_banner_vellore_fort_final.png',
    dest: 'c:\\Users\\acer\\OneDrive\\Documents\\velloretravel\\images\\travel_hero_banner.png'
  },
  {
    src: 'C:\\Users\\acer\\.gemini\\antigravity\\brain\\8578bd49-8346-434d-b62a-50b5b358d19a\\golden_temple_1781185332044.png',
    dest: 'c:\\Users\\acer\\OneDrive\\Documents\\velloretravel\\images\\golden-temple.jpg'
  },
  {
    src: 'C:\\Users\\acer\\.gemini\\antigravity\\brain\\8578bd49-8346-434d-b62a-50b5b358d19a\\golden_temple_1781185332044.png',
    dest: 'c:\\Users\\acer\\OneDrive\\Documents\\velloretravel\\slides\\p_0002.jpg'
  },
  {
    src: 'C:\\Users\\acer\\.gemini\\antigravity\\brain\\8578bd49-8346-434d-b62a-50b5b358d19a\\yelagiri_hills_1781185447853.png',
    dest: 'c:\\Users\\acer\\OneDrive\\Documents\\velloretravel\\slides\\p_0003.jpg'
  },
  {
    src: 'C:\\Users\\acer\\.gemini\\antigravity\\brain\\8578bd49-8346-434d-b62a-50b5b358d19a\\vellore_fort_1781185347048.png',
    dest: 'c:\\Users\\acer\\OneDrive\\Documents\\velloretravel\\images\\tourist-places\\vellorefort.png'
  },
  {
    src: 'C:\\Users\\acer\\.gemini\\antigravity\\brain\\8578bd49-8346-434d-b62a-50b5b358d19a\\jalakandeswarar_temple_1781185364123.png',
    dest: 'c:\\Users\\acer\\OneDrive\\Documents\\velloretravel\\images\\tourist-places\\vellore-fort.png'
  },
  {
    src: 'C:\\Users\\acer\\.gemini\\antigravity\\brain\\8578bd49-8346-434d-b62a-50b5b358d19a\\govt_museum_1781185380743.png',
    dest: 'c:\\Users\\acer\\OneDrive\\Documents\\velloretravel\\images\\tourist-places\\govtmuseum.png'
  },
  {
    src: 'C:\\Users\\acer\\.gemini\\antigravity\\brain\\8578bd49-8346-434d-b62a-50b5b358d19a\\amirthi_forest_1781185398976.png',
    dest: 'c:\\Users\\acer\\OneDrive\\Documents\\velloretravel\\images\\tourist-places\\amirthi-forest.png'
  },
  {
    src: 'C:\\Users\\acer\\.gemini\\antigravity\\brain\\8578bd49-8346-434d-b62a-50b5b358d19a\\jalagamparai_falls_1781185416860.png',
    dest: 'c:\\Users\\acer\\OneDrive\\Documents\\velloretravel\\images\\tourist-places\\jalgamparai-falls.png'
  },
  {
    src: 'C:\\Users\\acer\\.gemini\\antigravity\\brain\\8578bd49-8346-434d-b62a-50b5b358d19a\\media__1781503810835.png',
    dest: 'c:\\Users\\acer\\OneDrive\\Documents\\velloretravel\\images\\tourist-places\\observatory.png'
  },
  {
    src: 'C:\\Users\\acer\\.gemini\\antigravity\\brain\\8578bd49-8346-434d-b62a-50b5b358d19a\\yelagiri_hills_1781185447853.png',
    dest: 'c:\\Users\\acer\\OneDrive\\Documents\\velloretravel\\images\\tourist-places\\yelagiri-hills.png'
  }
];

mappings.forEach(mapping => {
  try {
    fs.copyFileSync(mapping.src, mapping.dest);
    console.log(`Copied: ${mapping.dest}`);
  } catch (err) {
    console.error(`Failed to copy: ${mapping.dest}`, err);
  }
});
