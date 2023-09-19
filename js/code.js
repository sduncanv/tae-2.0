var seg = document.querySelector("#seguimiento");
seg.onclick = function() {
  var code = prompt("Ingrese el código de acceso:");
  if(code=="5384"){
    seg.setAttribute("href", "https://drive.google.com/drive/folders/1CS_h_VX8fEVN2c_UJS7ZSJ5BpLb2hak9?usp=sharing");
  } else {
    alert("Código incorrecto");
    seg.setAttribute("target", "_self");
  }
}