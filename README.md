# StarblastModding
Has images etc. for Starblast mods, free to use.

## Importing my library
Use this code to import ModdingUtils.js so you can use its functions.
```
var scriptLoaded = false;

var notifyLoaded = function() {
  scriptLoaded = true;
  echo("Script Loaded");
};

var imported = document.createElement('script');
imported.type = 'text/javascript';
imported.src = 'https://cdn.jsdelivr.net/gh/GatoCreador887/StarblastModding/ModdingUtils.js';
imported.onload = notifyLoaded;
imported.onreadystatechange = notifyLoaded;
document.head.appendChild(imported);
```
**Note:** I switched the link to jsdelivr because rawgit is shutting down. If you want the old link, here it is:
'https://cdn.rawgit.com/GatoCreador887/StarblastModding/master/ModdingUtils.js'
