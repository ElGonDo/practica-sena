const prompt = require('prompt-sync')();

// Solicitar al usuario la cantidad de pacientes
let pacientes = parseInt(prompt("Ingrese el número de pacientes a calcular la hemoglobina: "));

// Crear la matriz de los registros de nivel de hemoglobina
const matriz = new Array(pacientes);
for (let f = 0; f < pacientes; f++) {
    matriz[f] = new Array(7);
}

// Función para imprimir la matriz
function imprimirMatriz(matriz) {
    // Calcular la longitud máxima de cada columna
    const columnWidths = matriz[0].map((_, columnIndex) =>
        Math.max(...matriz.map(row => String(row[columnIndex]).length))
    );

    // Imprimir la matriz con columnas alineadas
    for (let fila of matriz) {
        let filaStr = "";
        for (let i = 0; i < fila.length; i++) {
            filaStr += String(fila[i]).padEnd(columnWidths[i] + 2); // 2 espacios extra de margen
        }
        console.log(filaStr);
    }
}

 // Solicitar al usuario los registros
 for (let f = 0; f < pacientes; f++) {
    for (let c = 0; c < 7; c++) {
        let valor;
            console.log(`Ingrese los niveles de hemoglobina del paciente ${f+1}`);
            valor = prompt(`Ingrese el nivel hemoglobina del dia ${c+1}: `);
        matriz[f][c] = valor;
    }
}

// Imprimir la matriz 
console.log("Matriz inicial:");
imprimirMatriz(matriz);
