import { encoding_for_model } from "tiktoken";
import { readFile } from 'fs/promises';

async function contarTokens() {
    try {
        // 1. Seleccionar el modelo
        const encoding = encoding_for_model('gpt-4');

        // 2. Leer el archivo local
        const texto = await readFile('./libro.txt', 'utf-8');

        // 3. Codificar el texto a tokens
        const generado = encoding.encode(texto);
        console.log(generado);

        // 4. Imprimir cantidad de tokens generados
        console.log('Cantidad de tokens generados: ' + generado.length);

        // 5. Calcular costos
        const costoPorMilTokens = 0.03; 
        const costoFinal = (generado.length * costoPorMilTokens) / 1000;
        console.log('Costo estimado: $' + costoFinal.toFixed(4));

        encoding.free();

    } catch (error) {
        console.error('Error:', error.message);
    }
}

contarTokens();




/*
import { encoding_for_model } from "tiktoken";

async function contarTokens() {
    // 1. Seleccionar el modelo a utilizar
    //gpt-4,gpt-3.5-turbo, entre otras. . .
    const encoding = encoding_for_model('gpt-4');

    //2. Ingresaremos el texto a utilizar
    const texto = "";

    //3. Condificar el texto a tokens
    const generado=encoding.encode(texto);
    console.log(generado);

    //4. Imprimir cúanto fue lo generado
    console.log('Cantidad de tokens generados:' +generado.length)

    //5. Calcular costos
    const costoPorMilTokens=0.03; //USD por 1000 Tokens(Gpt-4 Input)
    const costoFinal = (generado.length+costoPorMilTokens)/1000;
    console.log(`Costo estimado: ${costoFinal} USD.`);
}
contarTokens()
*/