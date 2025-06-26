const fs = require('fs');
const path = require('path');

function getAllRoutes(dir, basePath = '') {
  const routes = [];
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      routes.push(...getAllRoutes(fullPath, `${basePath}/${file}`));
    } else if (file === 'page.tsx' || file.match(/\.(tsx|js|jsx)$/)) {
      let route = basePath;
      if (file !== 'page.tsx') {
        route = `${basePath}/${file.replace(/\.(tsx|js|jsx)$/, '')}`;
      }
      if (route === '/index') route = '/';
      routes.push(route.replace(/\/index$/, '/'));
    }
  });

  return routes;
}

const routes = getAllRoutes(path.join(__dirname, 'pages'));
console.log('All routes:', routes);