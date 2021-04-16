let taulaMultiplicar = () => {

    let text1;

    let nombre1 = parseInt(document.getElementById("n1").value);
    //Validacio per veure que el nombre sigui valid
    if(isNaN(nombre1) || nombre1<1 || nombre1>10) {
        text1 = "Input no valid";
    }else{
        text1 = "Input ok";
    }
    document.getElementById("validation1").innerHTML= text1;


    let text2;

    let nombre2 = parseInt(document.getElementById("n2").value);
    //Validacio per veure que el nombre sigui valid
    if(isNaN(nombre2) || nombre2<1 || nombre2>10) {
        text2 = "Input no valid";
    }else{
        text2 = "Input ok";
    }
    document.getElementById("validation2").innerHTML= text2;


    
    if (text1=="Input ok" & text2=="Input ok"){

    let missatgeResultant = "";

        for(i=1; i<=nombre2; i++){
            resultat = nombre1 * i;

            let missatge = `${nombre1} x ${i} = ${resultat}`;
            missatgeResultant += missatge + "<br>";

            console.log(missatge);
            document.getElementById("resultat").innerHTML=missatgeResultant;
        }
}

}
