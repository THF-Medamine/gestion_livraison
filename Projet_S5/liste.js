
 let data_array;

if(localStorage.produits !=null){
   data_array=JSON.parse(localStorage.produits);
/*let td = document.createElement("td");
let td_remplir=document.createTextNode("kljsd");   
td.appendChild(td_remplir);                                         
console.log(td.appendChild(td_remplir));
let tr = document.createElement("tr");
tr.appendChild(td);
console.log(tr.appendChild(td));



let tr =document.createElement("tr");
tr.innerHTML=`<td>jdkqsh</td>`;
let tbody = document.getElementsByTagName("tbody")[0];
tbody.appendChild(tr);
console.log(tbody.appendChild(tr));
*/
let tbody = document.querySelector("table tbody"); // premier tbody qui se trouve dans table  presque getElementsByTagName("tbody")[0] mais tbody en quelconque
   for(j= 0;j<data_array.length;j++){
   let tr = document.createElement("tr");
  Object.values(data_array[j]).forEach(element => {
     let td = document.createElement("td");
        td.textContent = element;
        tr.appendChild(td);
   });
        tbody.appendChild(tr);
  }
const aujourdhui = new Date();
console.log(aujourdhui); 

  }
 else{
console.log("La liste est vide !!!")    
 }


//localStorage.clear();

console.log(data_array);