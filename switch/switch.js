var car = 0; 
var text = "";

switch(car){
    case 0:
    text = "off";
    break;
case 1:
    text = "on";
    break;
    default:
        text = "no value found";
}
console.log("The car is " + text);
//the car is off