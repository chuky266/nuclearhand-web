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
    
    content = content.replace('href="./css/telecito.css"', 'href="/css/telecito.css"');
    content = content.replace('src="./js/telecito.js"', 'src="/js/telecito.js"');
    
    fs.writeFileSync(filepath, content);
    console.log('Updated ' + file);
  } else {
    console.log('File not found: ' + file);
  }
});
