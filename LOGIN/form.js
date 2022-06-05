function datos (e){
    e.preventDefault();
    
    var user =["gato@correo.com","perro@correo.com","tomate@correo.com"];
    var password=["A1234","B1234","C1234"];
    
    var correo = ducument.querySelector("#correo").value;
    var pass = document.querySelector("#password").value;
    
    for(var i=0;i<=2;i++){
       
        if(correo===password[i]){
            console.log("bienvenido");
        }else{
            console.log("incorrecto contra");
        }
    }
}

var boton =document.querySelector("#iniciar");

boton.addEventListener("click", datos);
