# StarblastModding
Has images etc. for Starblast mods, free to use.

## Importing my library
```
var scriptLoaded = false;

var notifyLoaded = function() {
  scriptLoaded = true;
  echo("Script Loaded");
};

var imported = document.createElement('script');
imported.type = 'text/javascript';
imported.src = 'https://cdn.jsdelivr.net/gh/GatoCreador887/StarblastModding@fdd95237c3ea81633d006244e607324134ea9652/ModdingUtils.js';
imported.onload = notifyLoaded;
imported.onreadystatechange = notifyLoaded;
document.head.appendChild(imported);
```
For dependent code, use
```
if (scriptLoaded) {
  var vel = randomVelocity(0.25);
}
```
or
```
var vel = scriptLoaded ? randomVelocity(0.25) : undefined;
```
**Note:** I switched the link to jsdelivr because rawgit is shutting down. If you want the old link, here it is:
'https://cdn.rawgit.com/GatoCreador887/StarblastModding/master/ModdingUtils.js'
