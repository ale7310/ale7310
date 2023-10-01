// Menu Navegador //

var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
   if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
   }
   else{
      menu.style.display = 'none';
      menu_visible = false;
   }
}
// Ocultar menu navegador una vez elegida la opcion//

let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
   links[x].onclick = function(){
      menu.style.display = "none";
      menu_visible = "false";
   }
}

function mostrar(){
   document.getElementById("audio").style.display = "block";
}

function ocultar(){
   document.getElementById("audio").style.display = "none";
}