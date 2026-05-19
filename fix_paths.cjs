const fs = require('fs');
const path = require('path');

const files = [
  'index.html',
  'nuclearband-x.html',
  'nuclear-vision-x.html',
  'tecnologia.html',
  'manifiesto.html',
  'investor-access.html',
  'napur.html',
  'blog.html',
  'blog-1.html',
  'privacy.html',
  'terms.html'
];

files.forEach(file => {
  const filepath = path.join(__dirname, file);
  if (fs.existsSync(filepath)) {
    let content = fs.readFileSync(filepath, 'utf8');
    
    content = content.replace(/href="\/css\/telecito\.css"/g, 'href="./css/telecito.css"');
    content = content.replace(/src="\/js\/telecito\.js"/g, 'src="./js/telecito.js"');
    
    fs.writeFileSync(filepath, content);
    console.log('Fixed paths in ' + file);
  }
});
