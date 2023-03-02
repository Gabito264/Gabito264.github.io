function devious(){
   document.getElementById("img").src = "https://media.tenor.com/pMhSj9NfCXsAAAAC/saul-goodman-better-call-saul.gif";
   document.getElementById("img2").src = "https://media.tenor.com/pMhSj9NfCXsAAAAC/saul-goodman-better-call-saul.gif";
   document.getElementById("img3").src = "https://media.tenor.com/pMhSj9NfCXsAAAAC/saul-goodman-better-call-saul.gif";
   const parrafo = document.getElementsByTagName("p");
   for(let i=0; i<parrafo.length;i++){
      parrafo[i].innerHTML="According to all known laws of aviation, there is no way a bee should be able to fly. It's wings are too small to get its fat little body off the ground. The bee, of course, flies anyway, because bees don't care what humans think is impossible."
   }

   const h6 = document.getElementsByTagName("h6");
   for(let i=0; i<h6.length;i++){
      h6[i].innerHTML="Killroy was here (▀̿Ĺ̯▀̿ ̿)";
   }

   const h5 = document.getElementsByTagName("h5");
   for(let i=0; i<h5.length;i++){
      h5[i].innerHTML="Secret Unlocked! (not really but eh)";
   }
   document.getElementById("butt_on").innerHTML = "ups";
   document.getElementById("up").innerHTML="SECRET!!";
   
   document.getElementById("down").innerHTML="ENCONTRASTE EL BOTÓN SECRETO!"
   

}

function NodeChange(){
   var myLinkList = document.getElementById("list");
   var myFirstLink = myLinkList.childNodes[1].childNodes[0];
   alert(myFirstLink);

   var newStuff = document.createElement("li");

   newStuff.innerHTML = "hola";
   
   myLinkList.appendChild(newStuff);
   myLinkList.lastChild.appendChild(myNewProd);
   

}

function NodeBack(){
   var myLinkList = document.getElementById("list");
   var myFirstLink = myLinkList.lastChild;
   myLinkList.removeChild(myFirstLink);
}

function attributed(){
   
   var parrafo = document.getElementById("ufas");
   alert("id del divisor: "+parrafo.getAttribute("id"));
   parrafo.setAttribute("style", "font-family: 'Gajraj One', sans-serif;color:blue ; font-size: 50px; ");
   
}

function checkBoxed(){
   var forma =document.forms["form_one"]["sopas"];
   if(forma.value==""){
      alert("La forma está vacía, revisa de nuevo porfas");
   }else{
      alert("No vacío! Yay!");
   }
}