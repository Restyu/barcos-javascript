
document.write("<table width='500' height='500' border='2'><th colspan= '7' >BARCOS</th><tr>");

var barco1 = Math.floor((Math.random() * 3*4) + 1);
var barco2 = Math.floor((Math.random() * 3*4) + 1);
var barco3 = Math.floor((Math.random() * 3*4) + 1);
var barco4 = Math.floor((Math.random() * 3*4) + 1);
var barco5 = Math.floor((Math.random() * 3*4) + 1);

var id = 1;

for(var fila = 0 ; fila < 3 ; fila++){

    document.write("<tr>");

    for(var col = 0 ; col < 4 ; col++){

        document.write("<td bgcolor='blue' id='"+ id +"' onclick='pulsar(this)'>");
        id++;

    }

}

document.write("</table>");

var aciertos = 7;
var hundidos = 0;

alert ("barco1: " + barco1 + " barco2: " + barco2 + " barco3: " + barco3 + " barco4: " + barco4 + " barco5: " + barco5);

function pulsar(id) {

    if(aciertos > 0 && hundidos != 5) {

        if (barco1 == id.id || barco2 == id.id || barco3 == id.id || barco4 == id.id || barco5 == id.id) {

            hundidos++;
            alert("HAS HUNDIDO EL BARCO !!!!!!!");
            id.style.backgroundColor = "black";

        } else {

            aciertos--;
            alert("HAS FALLADO TE QUEDAN: " + aciertos + " ACIERTOS");
            id.style.backgroundColor = "#58D3F7";

        }

    }else{

        if(aciertos == 0){
            alert("HAS PERDIDO");
        }else{
            alert("HAS GANADO !!!!");
        }
    }
}
