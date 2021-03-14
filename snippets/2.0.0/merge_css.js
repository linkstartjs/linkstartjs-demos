var fs = require('fs');

var files = [
  '/home/jarvis/Sandbox/shop/css/animate.css',
  '/home/jarvis/Sandbox/shop/css/icomoon.css',
  '/home/jarvis/Sandbox/shop/css/bootstrap.css',
  '/home/jarvis/Sandbox/shop/css/flexslider.css',
  '/home/jarvis/Sandbox/shop/css/owl.carousel.min.css',
  '/home/jarvis/Sandbox/shop/css/owl.theme.default.min.css',
  '/home/jarvis/Sandbox/shop/css/style.css'
];

var finalFile = "";

files.forEach(function(filePath){
  var contents = fs.readFileSync(filePath, 'utf8');
  finalFile = finalFile.concat(contents).concat("\n")
});

fs.writeFileSync('/home/jarvis/Sandbox/shop/css/vendor.css', finalFile);
