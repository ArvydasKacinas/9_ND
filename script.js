"use-strict";

document.querySelector("#reset").addEventListener("click", function (){
    window.location.reload();
})

let kvadrateliai=Math.floor(Math.random()*28)+3;
let kvadratai=[];

    for(let i=0; i<kvadrateliai; i++) {
        let kvadratas={
            pirmasStulpelis:"pirmasStulpelis",
            antrasStulpelis:"antrasStulpelis",
            treciasStulpelis:"treciasStulpelis",
        }
    
        kvadratai.push(kvadratas);
    }
    
    console.log(kvadratai);
    
    for(let i = 0; i<kvadratai.length; i++) {
    
        let tr;
        tr = document.createElement('tr');
        
        let td;
        td = document.createElement('td');  
        td.classList.add("testas")
        td.innerHTML = kvadratai[i]["pirmasStulpelis"]
    
        tr.appendChild(td);
    
        td = document.createElement('td');
        td.classList.add("testas")
        td.innerHTML = kvadratai[i]["antrasStulpelis"]
    
        tr.appendChild(td);
    
        td = document.createElement('td');
        td.classList.add("testas")
        td.innerHTML = kvadratai[i]["treciasStulpelis"]
    
        tr.appendChild(td);
    
        document.querySelector("#kvadratai").appendChild(tr);
    }

let akmenukas = Math.floor(Math.random()*(kvadratai.length-1));

kvadratai[akmenukas]=1;

let kvadrateliaiPaspaudimai = document.querySelectorAll(".testas");

for (let j=0; j<kvadrateliaiPaspaudimai.length; j++) {
    kvadrateliaiPaspaudimai[j].addEventListener("click",function(){
        console.log(j);
        if(kvadratai[j]==1){
            console.log("laimejai");
            this.classList.add("geltona");
        } else {
            console.log("nelaimejai, speliok toliau");
            this.classList.add("raudona");
        }
    })
}
