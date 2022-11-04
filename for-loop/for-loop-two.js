var text ="";
var total = 0;

for(var i = 0; i < 6; i++){
    if (i == 3) {
        text = "finished";
        break;
    } else if (i == 5) {
        i++;
    } else {
        //
    }
    total += i;
}
console.log(text + " at the number " + i + " with the total of " + total);
//finished at the number 7 with the total of 16 (without break)

//finished at the number 3 with the total of 3 (with break)