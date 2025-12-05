const pdfParse = require('pdf-parse');
const fs = require('fs');

(async () => {
  const data = await pdfParse(fs.readFileSync('seo_data/ShowmaxEquipmentInventory-Nov2025-V1.pdf'));
  const lines = data.text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  
  lines.forEach((line, i) => {
    if (line.includes('Camera') || line.includes('PTZ')) {
      console.log(`${i}: [${line}]`);
      console.log(`  Length: ${line.length}`);
      console.log(`  Chars: ${Array.from(line).map((c, idx) => `${c}(${c.charCodeAt(0)})`).slice(0, 30).join(' ')}`);
    }
  });
})();

