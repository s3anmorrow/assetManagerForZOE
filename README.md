# assetManagerForZOE
An AssetManager to be used specifically with CreateJS (Easel / Preload / ZOE). Will preload all spritesheets, ZOE generated JSON, and sounds.

### USAGE:
> Construct AssetManager object once and give it a global scope (or pass it around to different game objects)
> Call loadAssets(manifest) method and provide loading manifest as argument
> AssetManager will handle preloading all assets (json, spritesheet images, or sound)
> This version is tailored to work with the JSON (and spritesheet png) produced by CreateJS ZOE

```
var manifest = [
 {
     src:"lib/gameAssets.json",
     spritesheet:"GameAssets"
 },
 {
     src:"lib/gameAssets.png",
     id:"GameAssets"
 },
 {
     src:"lib/genericAssets.json",
     spritesheet:"GenericAssets"
 },
 {
     src:"lib/genericAssets.png",
     id:"GenericAssets"
 },
 {
     src:"sounds/boing.ogg",
     id:"boing",
     data:4
 }
];
```

> IMPORTANT NOTE : the ZOE json file must be loaded BEFORE its partnered spritesheet image and linked together via the spritesheet property (see example above)
> supports multiple spritesheets (as demoed above) but will not handler a single spritesheet spread over several images (not tested)
> for using ZOE:
> generate all animations for single spritesheet on main timeline in Flash with frame labels
> you also want to include an empty movieclip with instance name "registrationPoint" to mark where reg point is located
> the JSON file produced outlines the frame sizes and animation sequences of the spritesheet

> to get a sprite at anytime call getSprite(id) to receive sprite object based off spritesheet - will need to gotoAndStop() to desired frame
> or call getSprite(id, framelabel) to jump to correct frame (stopped)

> sounds are listed in manifest as ogg format but you include mp3 (and possibly wav)
> use soundsJS to access preloaded sounds in code

> getProgress() returns the progress of the loading of all assets in manifest as a decimal number (progress=1 means everything loaded)