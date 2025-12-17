let ville_ramassage= document.getElementById("ville_ramassage");
let ville_client= document.getElementById("ville_client");
let Nom= document.getElementById("Nom");
let Montant= document.getElementById("Montant");
let telephone= document.getElementById("telephone");
let Adreese= document.getElementById("Adreese");
let Produit= document.getElementById("Produit");
 /* if(localStorage.length>0){
   ville_ramassage.value=localStorage.getItem("ville_ramassage");
   console.log(ville_ramassage.value);
  }*/
   let data_array;
 if(localStorage.produits !=null){
   data_array=JSON.parse(localStorage.produits);
  }
 else{
    data_array=[];
 }

  // ou let submit.onclick = 
function ajouter(){
  const date = new Date();

let data = {
ville_ramassage:ville_ramassage.value,
ville_client:ville_client.value,
Nom:Nom.value,
Montantat:Montant.value,
telephone:telephone.value,
Adreese:Adreese.value,
Produit:Produit.value,
date: date,
}
data_array.push(data);
console.log(data.date);
console.log(data.date.getFullYear());
console.log(data.date.getDay());
console.log(data.date.getMonth());

localStorage.setItem('produits',JSON.stringify(data_array));
console.log(data_array);
ville_ramassage.value="";
ville_client.value ="";
Nom.value="";
Montant.value="";
telephone.value="";
Adreese.value="";
Produit.value="";
}

// crere le 13/3/244
// statue ...
// CODE 
// FRAIS DE LIVRASION 