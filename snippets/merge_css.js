var fs = require('fs');

var files = [
  '/home/jarvis/Backup/ElaAdmin/assets/css/normalize.min.css',
  '/home/jarvis/Backup/ElaAdmin/assets/css/bootstrap.min.css',
  '/home/jarvis/Backup/ElaAdmin/assets/css/font-awesome.min.css',
  '/home/jarvis/Backup/ElaAdmin/assets/css/themify-icons.css',
  '/home/jarvis/Backup/ElaAdmin/assets/css/pe-icon-7-stroke.min.css',
  '/home/jarvis/Backup/ElaAdmin/assets/css/flag-icon.min.css',
  '/home/jarvis/Backup/ElaAdmin/assets/css/style.css'
];

var finalFile = "";

files.forEach(function(filePath){
  var contents = fs.readFileSync(filePath, 'utf8');
  finalFile = finalFile.concat(contents).concat("\n")
});

fs.writeFileSync('/home/jarvis/Backup/ElaAdmin/assets/css/vendor.css', finalFile);
