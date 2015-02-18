// AssetManager for ZOE
// Sean Morrow
// Feb 2015

// game variables
var stage = null;
var canvas = null;

// object to preload and handle all assets (spritesheet and sounds)
var assetManager, snake, bug1, bug2;

var gameConstants = {
	"FRAME_RATE":26
};

// ------------------------------------------------------------ event handlers
function onInit(e) {
	console.log(">> initializing");

	// get reference to canvas
	canvas = document.getElementById("stage");
	// set canvas to as wide/high as the browser window
	canvas.width = 600;
	canvas.height = 600;
	// create stage object
    stage = new createjs.Stage(canvas);

	// construct preloader object to load spritesheet and sound assets
	assetManager = new AssetManager();
    stage.addEventListener("onAssetLoaded", onProgress);
    stage.addEventListener("onAllAssetsLoaded", onReady);
    // load the assets
	assetManager.loadAssets(manifest);
}

function onProgress(e) {
    console.log("progress: " + assetManager.getProgress());
}

function onReady(e) {
	console.log(">> setup");
    // kill event listener
	stage.removeEventListener("onAssetLoaded", onProgress);
    stage.removeEventListener("onAllAssetsLoaded", onReady);

    // SIMPLE APPROACH Manifest
    // construct game objects
    snake = assetManager.getSprite("assets");
    snake.x = 200;
    snake.y = 200;
    snake.gotoAndPlay("snakeAlive");
    stage.addChild(snake);

    bug1 = assetManager.getSprite("assets");
    bug1.x = 300;
    bug1.y = 300;
    bug1.gotoAndPlay("bugDead");
    stage.addChild(bug1);

    bug2 = assetManager.getSprite("assets", "bugAlive");
    bug2.x = 400;
    bug2.y = 400;
    stage.addChild(bug2);

    // startup the ticker
    createjs.Ticker.setFPS(gameConstants.FRAME_RATE);
    createjs.Ticker.addEventListener("tick", onTick);
}

function onTick(e) {
    // TESTING FPS
    document.getElementById("fps").innerHTML = createjs.Ticker.getMeasuredFPS();

    // put your other stuff here!
    // ...

    // update the stage!
	stage.update();
}

