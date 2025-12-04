# Contador de Tokens con Tiktoken

Este proyecto es un script en JavaScript (Node.js) que permite:

Contar tokens generados a partir de un archivo de texto, estimar costos según un modelo de OpenAI (en este caso gpt-4) y ademas imprimir los tokens generados y su cantidad total.
El script utiliza la librería tiktoken para obtener la codificación compatible con el modelo seleccionado.

### Características

- Lee un archivo de texto local (libro.txt).

- Codifica su contenido en tokens utilizando la librería oficial tiktoken.

- Calcula cuántos tokens contiene el texto.

- Estima el costo según un precio por cada 1000 tokens.

- Manejo básico de errores.

### Requisitos

Antes de ejecutar el script, asegúrate de tener:

- Node.js 18+

- Archivo de texto llamado libro.txt en la misma carpeta del script.

Las siguientes dependencias instaladas:

- npm install tiktoken

### Código

```js
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

```

### Cómo ejecutarlo

Coloca tu archivo libro.txt en el mismo directorio.

Ejecuta:

node tu_archivo.js

### Cálculo del costo

El script usa:

Costo por cada 1000 tokens = $0.03


Por lo tanto:

Costo final = (tokens_generados * 0.03) / 1000


Puedes modificar el valor en la línea:

const costoPorMilTokens = 0.03;

### Notas

Puedes cambiar el modelo fácilmente modificando la línea:

const encoding = encoding_for_model('gpt-4');


Algunos modelos tienen precios distintos, por lo que deberás ajustar el costo manualmente.