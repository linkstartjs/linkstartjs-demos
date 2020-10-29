var fs = require('fs');

var files = [
  '/home/jarvis/Backup/ElaAdmin/assets/js/jquery.min.js',
  '/home/jarvis/Backup/ElaAdmin/assets/js/jquery.matchHeight.min.js',
  '/home/jarvis/Backup/ElaAdmin/assets/js/popper.min.js',
  '/home/jarvis/Backup/ElaAdmin/assets/js/bootstrap.min.js',
  '/home/jarvis/Backup/ElaAdmin/assets/js/main.js',
];

var finalFile = "";

files.forEach(function(filePath){
  var contents = fs.readFileSync(filePath, 'utf8');
  finalFile = finalFile.concat(contents).concat("\n")
});

fs.writeFileSync('/home/jarvis/Backup/ElaAdmin/assets/js/vendor.js', finalFile);
