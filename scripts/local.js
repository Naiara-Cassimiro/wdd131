const temperature = 8;
const windSpeed = 6;

function calcularSensacaoTermica(temp, vento) {

    return (
        13.12 +
        (0.6215 * temp) -
        (11.37 * Math.pow(vento, 0.16)) +
        (0.3965 * temp * Math.pow(vento, 0.16))
    ).toFixed(1);

}

if (temperature <= 10 && windSpeed > 4.8){

document.getElementById("windchill").textContent =
`${calcularSensacaoTermica(temperature, windSpeed)} °C`;

}
else{

document.getElementById("windchill").textContent = "N/A";

}

document.getElementById("currentyear").textContent =
new Date().getFullYear();

document.getElementById("lastModified").textContent =
document.lastModified;