function listaCartBagde(){
  let cart = JSON.parse(window.localStorage.getItem("cartComprados"));
  if(cart){
   document.getElementById("cart").innerHTML = cart.length;
  }else{
   document.getElementById("cart").innerHTML = 0;
  }
}
function totalProdutos(){
  let produtos = JSON.parse(window.localStorage.getItem("produtos"));
  if(produtos){
   document.getElementById("totalprodutos").innerHTML = produtos.length;
  }else{
   document.getElementById("totalprodutos").innerHTML = 0;
  }
}
function totalUsuarios(){
  let usuarios = JSON.parse(window.localStorage.getItem("usuarios"));
  if(usuarios){
   document.getElementById("totalusuarios").innerHTML = usuarios.length;
  }else{
   document.getElementById("totalusuarios").innerHTML = 0;
  }
}

listaCartBagde();
totalProdutos();
totalUsuarios();

const themeMap = {
  dark: "light",
  light: "solar",
  solar: "dark"
};

const theme = localStorage.getItem('theme')
  || (tmp = Object.keys(themeMap)[0],
      localStorage.setItem('theme', tmp),
      tmp);
const bodyClass = document.body.classList;
bodyClass.add(theme);

function toggleTheme() {
  const current = localStorage.getItem('theme');
  const next = themeMap[current];

  bodyClass.replace(current, next);
  localStorage.setItem('theme', next);
}

document.getElementById('themeButton').onclick = toggleTheme;
