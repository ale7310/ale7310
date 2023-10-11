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

//BARRAS SKILLS //

function efectoHabilidades(){
   var skills = document.getElementById("skills");
   var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
   if(distancia_skills >= 300){
       let habilidades = document.getElementsByClassName("progreso");
       habilidades[0].classList.add("javascript");
       habilidades[1].classList.add("htmlcss");
       habilidades[2].classList.add("photoshop");
       habilidades[3].classList.add("wordpress");
       habilidades[4].classList.add("drupal");
       habilidades[5].classList.add("comunicacion");
       habilidades[6].classList.add("trabajo");
       habilidades[7].classList.add("creatividad");
       habilidades[8].classList.add("dedicacion");
       habilidades[9].classList.add("proyect");
   }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
   efectoHabilidades();
} 