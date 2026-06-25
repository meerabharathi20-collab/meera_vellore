const fs = require('fs');

const mappings = [
  {
    src: 'hero_3d_element_1781766106460.png',
    dest: 'hero_3d_element.png'
  },
  {
    src: 'fort_3d_placeholder_1781766121656.png',
    dest: 'fort_3d_placeholder.png'
  },
  {
    src: 'temple_3d_placeholder_1781766133594.png',
    dest: 'temple_3d_placeholder.png'
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
