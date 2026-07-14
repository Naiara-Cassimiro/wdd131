```javascript id="5k8q2m"
// ===============================
// Rodapé
// ===============================

const year = document.querySelector("#year");
const lastModified = document.querySelector("#lastModified");

year.textContent = new Date().getFullYear();
lastModified.textContent = document.lastModified;

// ===============================
// Dados do Clima
// ===============================

const temperatura = 8;      // °C
const velocidadeVento = 10; // km/h

// ===============================
// Função para calcular a sensação térmica
// Fórmula para Celsius
// ===============================

function calcularSensacaoTermica(temperatura, velocidadeVento) {
    return (
        13.12 +
        (0.6215 * temperatura) -
        (11.37 * Math.pow(velocidadeVento, 0.16)) +
        (0.3965 * temperatura * Math.pow(velocidadeVento, 0.16))
    );
}

// ===============================
// Exibir resultado
// ===============================

const windChill = document.querySelector("#windchill");

if (temperatura <= 10 && velocidadeVento > 4.8) {
    const sensacao = calcularSensacaoTermica(
        temperatura,
        velocidadeVento
    ).toFixed(1);

    windChill.textContent = `${sensacao} °C`;
} else {
    windChill.textContent = "N/A";
}
```
