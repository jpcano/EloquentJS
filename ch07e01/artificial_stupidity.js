// Your code here
function SmartPlantEater() {}

animateWorld(new LifelikeWorld(
    ["############################",
     "#####                 ######",
     "##   ***                **##",
     "#   *##**         **  O  *##",
     "#    ***     O    ##**    *#",
     "#       O         ##***    #",
     "#                 ##**     #",
     "#   O       #*             #",
     "#*          #**       O    #",
     "#***        ##**    O    **#",
     "##****     ###***       *###",
     "############################"],
    {"#": Wall,
     "O": SmartPlantEater,
     "*": Plant}
));
