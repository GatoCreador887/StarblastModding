# StarblastModding
Has images etc. for Starblast mods, free to use.

## Importing my library
```
var scriptLoaded = false;

var notifyLoaded = function() {
  scriptLoaded = true;
};

var imported = document.createElement('script');
imported.type = 'text/javascript';
imported.src = 'https://cdn.rawgit.com/GatoCreador887/StarblastModding/master/ModdingUtils.js';
imported.onload = notifyLoaded;
imported.onreadystatechange = notifyLoaded;
document.head.appendChild(imported);

if (scriptLoaded) {
  //Dependent code here...
}
```
