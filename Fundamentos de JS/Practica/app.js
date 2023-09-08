function calculatePrice(producto, precio){
    let costoEnvio = 0;
    let precioFinal = 0;
    if(precio > 1 && precio <= 2000){
        costoEnvio = 300;
    }
    else if(precio > 2001 && precio < 4000){
        costoEnvio = 500;
    }
    else if(precio > 4000){
        costoEnvio = 700;
    }
    precioFinal = precio + costoEnvio;
    console.log("El producto "+producto+" cuesta "+precio+". Su costo de envio es de "+costoEnvio+". Por lo tanto, el precio final es de "+precioFinal);
    
}

calculatePrice("Macbook",2500);
calculatePrice("Celular",500);
calculatePrice("Playstation",4500);

