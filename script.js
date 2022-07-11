"use-strict";

document.querySelector("#reset").addEventListener("click", function (){
    window.location.reload();
})

let kvadratai=[];

// document.querySelector("#pradeti").addEventListener("click", function(){
//     let ivestasLygis,suma;
//     ivestasLygis=document.getElementById("#skaiciai").value;
//     suma=ivestasLygis*3;
    for(let i=0; i<3; i++) {
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
// });

