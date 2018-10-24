/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

const inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
const initialTX = parseInt(inputs[2]); // Thor's starting X position
const initialTY = parseInt(inputs[3]); // Thor's starting Y position

// game loop
var x = 0;
var Xneed = initialTX;
var Yneed = initialTY;
var choix;
var choixX;
var choixY;
    
while (true) {
    const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.
    
    choixX = 0;
    choixY = 0;
    
    if(lightX !== Xneed) {
        if(Xneed - lightX > 0) {
            Xneed--;
            choixX = -1;
        }else if(Xneed - lightX < 0) {
            Xneed++;
            choixX = 1;
        }
    }
    if(lightY !== Yneed) {
        if(Yneed - lightY > 0) {
            Yneed--;
            choixY = -1;
        }else if(initialTY - lightY  < 0) {
            Yneed++;
            choixY = 1;
        }
    }
    if ( choixX === 1 && choixY === 1) {
        choix = "SE";
    } else if ( choixX === 0 && choixY === 1) {
        choix = "S";
    } else if ( choixX === 1 && choixY === 0) {
        choix = "E";
    } else if ( choixX === 1 && choixY === -1) {
        choix = "NE";
    } else if ( choixX === 0 && choixY === -1) {
        choix = "N";
    } else if ( choixX === -1 && choixY === -1) {
        choix = "NW";
    } else if ( choixX === -1 && choixY === 0) {
        choix = "W";
    } else if ( choixX === -1 && choixY === 1) {
        choix = "SW";
    }


    // A single line providing the move to be made: N NE E SE S SW W or NW
    print(choix);
}