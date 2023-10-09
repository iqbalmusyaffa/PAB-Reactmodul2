console.log("------Variable-----");

//var
for (var i = 0; i < 5; i++){
    console.log(i);
}
console.log(i);

console.log("------Variable 2-----");
//var
function looping() {
    for (var j = 0; j < 5; j++){
        console.log(j);
    }
}
looping();
console.log(j);


//let 
for (let k = 0; k < 5; k++){
    console.log(k);
}
console.log(k);

//let
for (let p = 0; 1 < 5; p++){
    console.log(p);
}
if (true){
    let p = 100;
    console.log("1 =",1);
}

//const
const phi = 3.14;
phi = 3.147;
console.log(phi);