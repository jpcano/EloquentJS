// Your code here
function dirPlus(dir, n) {
    var index = directionNames.indexOf(dir);
    return directionNames[(index + n + 8) % 8];
}

View.prototype.countAll = function(ch) {
    var n = 0;
    this.world.grid.forEach(function(critter, vector) {
    	if (critter.originChar == ch) n++;
    }, this);
    return n;
}

function SmartPlantEater() {
    this.energy = 20;
    this.rest = 0;
}

SmartPlantEater.prototype.act = function(view) {
    var width = view.world.grid.width;
    var height = view.world.grid.height;
    var size = (width * height)
    
    if (this.rest > 0) {
  	this.rest--;
	return null;
    }
    var space = view.find(" ");
    if (this.energy > 60 && space && view.countAll("*") > size / 2) {
	this.rest = 16;
	return {type: "reproduce", direction: space};
    }
    var plant = view.find("*");
    if (plant)
	return {type: "eat", direction: plant};
    if (space)
	return {type: "move", direction: space};
    console.log(view.countAll("*"));
};

animateWorld(new LifelikeWorld(
    ["############################",
     "#####                 ######",
     "##   ***                **##",
     "#   *##**         **  O  *##",
     "#    ***          ##**    *#",
     "#                 ##***    #",
     "#                 ##**     #",
     "#   O       #*             #",
     "#*          #**            #",
     "#***        ##**         **#",
     "##****     ###***       *###",
     "############################"],
    {"#": Wall,
     "O": SmartPlantEater,
     "*": Plant}
));
