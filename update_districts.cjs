const fs = require('fs');
const content = fs.readFileSync('src/data/districtsData.js', 'utf8');

let newContent = content;

const pakyongPlaces = [
  "Kupup Lake",
  "Aritar Lake",
  "Zuluk",
  "Gnathang Valley",
  "Menmecho Lake",
  "Thambi Viewpoint",
  "Rolep Village"
];

const sorengPlaces = [
  "Soreng",
  "Rinchenpong",
  "Bermiok",
  "Heeyangthang",
  "Chakung Temple",
  "Varsey Sanctuary",
  "Kaluk"
];

function movePlaces(placesToMove) {
  let extracted = [];
  for (const place of placesToMove) {
    const regex = new RegExp(`\\s*\\{\\s*title:\\s*"${place}"[\\s\\S]*?\\},`, 'g');
    const match = newContent.match(regex);
    if (match) {
      extracted.push(match[0].trim());
      newContent = newContent.replace(regex, '');
    }
  }
  return extracted;
}

const extractedPakyong = movePlaces(pakyongPlaces);
const extractedSoreng = movePlaces(sorengPlaces);

const pakyongRegex = /(pakyong:\s*\{[\s\S]*?topAttractions:\s*\[)([\s\S]*?)(\]\s*\})/;
newContent = newContent.replace(pakyongRegex, (match, p1, p2, p3) => {
  return p1 + '\n      ' + extractedPakyong.join('\n      ') + '\n    ' + p3;
});

const sorengRegex = /(soreng:\s*\{[\s\S]*?topAttractions:\s*\[)([\s\S]*?)(\]\s*\}\s*\};)/;
newContent = newContent.replace(sorengRegex, (match, p1, p2, p3) => {
  return p1 + '\n      ' + extractedSoreng.join('\n      ') + '\n    ' + p3;
});

fs.writeFileSync('src/data/districtsData.js', newContent);
console.log("Done updating districtsData.js");
