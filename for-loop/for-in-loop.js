var person = { fname: "Kenny", lname: "James", age: 22 };
var text = "";
for (var x in person) {
    text += person[x] + " ";
}
console.log(person)
console.log(text)
/**{ fname: 'Kenny', lname: 'James', age: 22 }
Kenny James 22 
*/

var computer = { brand: "microsoft", laptop: "Surface Laptop", screen: "13.5\"" }
var sentence = "I have the: ";

for (var item in computer) {
    if (item == "brand") {
        sentence += computer.brand;
    } else if (item == "laptop") {
        sentence += computer.laptop + ".";
        break;
    }
    if (item == "brand") {
        sentence += " ";
    }
}
console.log(sentence);
//I have the: microsoft Surface Laptop.