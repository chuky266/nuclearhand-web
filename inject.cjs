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
    
    // Inject CSS
    if (!content.includes('telecito.css')) {
      content = content.replace('</head>', '  <link rel=\"stylesheet\" href=\"./css/telecito.css\" />\n</head>');
    }
    
    // Inject JS
    if (!content.includes('telecito.js')) {
      content = content.replace('</body>', '  <script src=\"./js/telecito.js\" type=\"module\"></script>\n</body>');
    }
    
    fs.writeFileSync(filepath, content);
    console.log('Updated ' + file);
  } else {
    console.log('File not found: ' + file);
  }
});
