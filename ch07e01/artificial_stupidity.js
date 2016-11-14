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

    // Rest after reproduce
    if (this.rest > 0) {
    	this.rest--;
      	return {type: "move", direction: view.vector};
    }
    var space = view.find(" ");
    // Reproduce if there are enough plants
    if (this.energy > 60 && space && view.countAll("*") > size / 2) {
		this.rest = 32;
		return {type: "reproduce", direction: space};
    }
    var plant = view.find("*");
    // Do no eat if there are few plants
    if (plant && view.countAll("*") > size / 10)
		return {type: "eat", direction: plant};
    if (space)
		return {type: "move", direction: space};
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
