const fs = require('fs');

const mappings = [
  {
    src: 'C:\\Users\\acer\\.gemini\\antigravity-ide\\brain\\09fc1fa6-b6fb-473f-b896-f146283b7b10\\hero_3d_element_1781766106460.png',
    dest: 'c:\\Users\\acer\\OneDrive\\Documents\\velloretravel\\hero_3d_element.png'
  },
  {
    src: 'C:\\Users\\acer\\.gemini\\antigravity-ide\\brain\\09fc1fa6-b6fb-473f-b896-f146283b7b10\\fort_3d_placeholder_1781766121656.png',
    dest: 'c:\\Users\\acer\\OneDrive\\Documents\\velloretravel\\fort_3d_placeholder.png'
  },
  {
    src: 'C:\\Users\\acer\\.gemini\\antigravity-ide\\brain\\09fc1fa6-b6fb-473f-b896-f146283b7b10\\temple_3d_placeholder_1781766133594.png',
    dest: 'c:\\Users\\acer\\OneDrive\\Documents\\velloretravel\\temple_3d_placeholder.png'
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
