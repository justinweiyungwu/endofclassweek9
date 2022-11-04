var cables= ["hdmi", "microb", "type-c", "type-a"];
var container = "";
for (var electronics of cables) {
container += electronics + "\n";
}
//"\n" will push to the next line for each iteration
console.log(container);

/**
 * hdmi
 * microb
 * type-c
 * type-a
 */

var weathers = ["sunny", "rainy", "cloudy"];
var word = "";
for (var weather of weathers) {
    word += weather + "\n";

}
console.log(word);
/**
 * sunny
*rainy
*cloudy
*/