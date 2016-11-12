// Your code here
function Tiger() {}

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