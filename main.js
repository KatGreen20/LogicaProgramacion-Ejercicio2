let materia;
let nota1, nota2, nota3;
let prom, pro;
let controlador;
let mensaje1, mensaje2, error, decision;

function calculoPromedio(num1, num2, num3){
    pro = (num1 + num2 + num3) / 3;
    return pro;
}

alert("PROMEDIO DE NOTAS");
materia = prompt("Ingrese la materia");
nombre = prompt("Ingrese el nombre del alumno");

do {
    nota1 = parseFloat(prompt("Ingrese la primera nota"));
    if (nota1 >= 0 && nota1 <= 10) {
        nota2 = parseFloat(prompt("Ingrese la segunda nota"));
        if (nota2 >= 0 && nota2 <= 10) {
            nota3 = parseFloat(prompt("Ingrese la tercera nota"));
            if (nota3 >= 0 && nota3 <= 10) {
                prom = calculoPromedio(nota1, nota2, nota3);
                if (prom >= 7) {
                    document.write(nombre);
                    document.write(" , ¡Felicidades! Has aprobado con un promedio de ");
                    document.write(prom);
                    controlador = 0;
                }

                if (prom < 7) {
                    mensaje2 = alert(nombre + " ,gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es " + prom);
                    controlador = 0;
                }
            } else {
                error = alert("Ingrese notas entre 0 y 10");
                controlador = parseInt(prompt("¿Desea continuar? Si[1], No[0]"));
            }
        } else {
            error = alert("Ingrese notas entre 0 y 10");
            controlador = parseInt(prompt("¿Desea continuar? Si[1], No[0]"));
        }
    } else {
        error = alert("Ingrese notas entre 0 y 10");
        controlador = parseInt(prompt("¿Desea continuar? Si[1], No[0]"));
    }
} while (controlador === 1);
