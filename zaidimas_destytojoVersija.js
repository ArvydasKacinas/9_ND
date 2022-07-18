"use-strict";



let kvadrateliai = Math.floor(Math.random()*82)+9;
let kvadrateliaiArray =[];

console.log(kvadrateliai)
for (let i=0; i<kvadrateliai; i++) {
    let kvadratelis = document.createElement("div");
    kvadratelis.classList.add("kvadratelis");
    document.querySelector(".zaidimas").appendChild(kvadratelis);

    //masyvo pildymas
    kvadrateliaiArray.push(0);
}
console.log(kvadrateliaiArray);

let akmenukas = Math.floor(Math.random()*(kvadrateliaiArray.length-1));

kvadrateliaiArray[akmenukas] = 1;
console.log(akmenukas);
console.log(kvadrateliaiArray);

let kvadrateliaiPaspaudimai = document.querySelectorAll(".kvadratelis");

for (let j=0; j<kvadrateliaiPaspaudimai.length; j++) {
    kvadrateliaiPaspaudimai[j].addEventListener("click",function(){
        console.log(j);
        if(kvadrateliaiArray[j]==1){
            console.log("laimejai");
            this.classList.add("geltona");
        } else {
            console.log("nelaimejai, speliok toliau");
            this.classList.add("raudona");
        }
    })
}

console.log(kvadrateliaiPaspaudimai.length);