function SmartPlantEater() {
    this.energy = 20;
}

SmartPlantEater.prototype.act = function(view) {
    var width = view.world.grid.width;
    var height = view.world.grid.height;
    var size = (width * height)
    
    var space = view.find(" ");
    if (this.energy > 50 && space) {
		return {type: "reproduce", direction: space};
    }
    var plant = view.find("*");
    if (plant)
		return {type: "eat", direction: plant};
    if (space)
		return {type: "move", direction: space};
};

function Tiger() {
    this.energy = 99;
}

Tiger.prototype.act = function(view) {
    var space = view.find(" ");
    if (this.energy > 100 && space) {
		return {type: "reproduce", direction: space};
    }
    var planteater = view.find("O");
    if (planteater)
		return {type: "eat", direction: planteater};
    if (space)
		return {type: "move", direction: space};
};

animateWorld(new LifelikeWorld(
  ["####################################################",
   "#                 ####         ****              ###",
   "#   *  @  ##                 ########       OO    ##",
   "#   *    ##        O O                 ****       *#",
   "#       ##*                        ##########     *#",
   "#      ##***  *         ****                     **#",
   "#* **  #  *  ***      #########                  **#",
   "#* **  #      *               #   *              **#",
   "#     ##              #   O   #  ***          ######",
   "#*            @       #       #   *        O  #    #",
   "#*                    #  ######                 ** #",
   "###          ****          ***                  ** #",
   "#       O                        @         O       #",
   "#   *     ##  ##  ##  ##               ###      *  #",
   "#   **         #              *       #####  O     #",
   "##  **  O   O  #  #    ***  ***        ###      ** #",
   "###               #   *****                    ****#",
   "####################################################"],
  {"#": Wall,
   "@": Tiger,
   "O": SmartPlantEater, // from previous exercise
   "*": Plant}
));
