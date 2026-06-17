const fs = require('fs');
const path = require('path');

const filesToConvert = [
  'index',
  'tourist-places',
  'vellore-hotels',
  'vellore-atm',
  'vellore-banks',
  'vellore-taxiservice',
  'contactus',
  'sitemap',
  'tour-operator',
  'golden-temple',
  'vellore-fort',
  'govt-museum',
  'observatory',
  'yelagiri',
  'amrithi-forest',
  'jalagamparai-falls',
  'testimonials',
  'thanks'
];

filesToConvert.forEach(fileBase => {
  const htmlPath = path.join(__dirname, `${fileBase}.html`);
  const phpPath = path.join(__dirname, `${fileBase}.php`);

  if (fs.existsSync(htmlPath)) {
    let content = fs.readFileSync(htmlPath, 'utf8');

    // Replace all .html references with .php references in links
    content = content.replace(/\.html/g, '.php');

    // Write to the .php file
    fs.writeFileSync(phpPath, content, 'utf8');
    console.log(`Converted: ${fileBase}.html -> ${fileBase}.php`);

    // Delete the old .html file
    fs.unlinkSync(htmlPath);
    console.log(`Deleted: ${fileBase}.html`);
  } else {
    console.warn(`File not found: ${fileBase}.html`);
  }
});
