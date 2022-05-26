// //while 
 let repetir = true;



function menu (){
    while(repetir)
    {
        let num=prompt('Este es un menu interactivo del desafio 99\n 1 : para pelear\n 2 : para escapar \n (tienes que seleccionar una valida)');

        switch(num)
        {
            case"1": 
                alert("Has seleccionado Pelea, pelearas hasta el final !!!!!!!!!!!!");
                alert("Moriste, era mejor escapar JaJa.Pista 9+");
                menu();
                break;
            case "2" :
                alert("Has seleccionado Escape, corre!!!!!!!");
                alert("Has muerto porque escapaste y te callo un meteorito JaJa.Pista 9");
                menu();
                break;
            case "99" :
                alert("Has descubierto un secreto Felicidades!!!!!");
                break;
            default:
                alert("Selecciona algo valido -.-");
                alert("mueres porque no seleccionas algo valido!!!");
                menu();
                break;
            

        }
    
    }
}
menu();

//while     
// let repetir = false;

// do
// {
//     let num=parseInt(prompt('dame el numero 5'));
//     num==5?repetir=false:console.log('numero es',num);
// }while(repetir)