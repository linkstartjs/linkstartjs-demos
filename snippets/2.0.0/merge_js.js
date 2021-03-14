var fs = require('fs');

var files = [
  '/home/jarvis/Sandbox/shop/js/modernizr-2.6.2.min.js',
  '/home/jarvis/Sandbox/shop/js/jquery.min.js',
  '/home/jarvis/Sandbox/shop/js/jquery.easing.1.3.js',
  '/home/jarvis/Sandbox/shop/js/bootstrap.min.js',
  '/home/jarvis/Sandbox/shop/js/jquery.waypoints.min.js',
  '/home/jarvis/Sandbox/shop/js/owl.carousel.min.js',
  '/home/jarvis/Sandbox/shop/js/jquery.countTo.js',
  '/home/jarvis/Sandbox/shop/js/jquery.flexslider-min.js',
  '/home/jarvis/Sandbox/shop/js/main.js',
];

var finalFile = "";

files.forEach(function(filePath){
  var contents = fs.readFileSync(filePath, 'utf8');
  finalFile = finalFile.concat(contents).concat("\n")
});

fs.writeFileSync('/home/jarvis/Sandbox/shop/js/vendor.js', finalFile);
