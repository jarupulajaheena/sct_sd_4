function convertTemperature() {
    const temperature = parseFloat(
        document.getElementById("temperature").value
    );

    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    const result = document.getElementById("result");

    if (isNaN(temperature)) {
        result.textContent = "Please enter a temperature.";
        return;
    }

    let celsius;

    // Convert the input to Celsius first
    if (fromUnit === "Celsius") {
        celsius = temperature;
    } else if (fromUnit === "Fahrenheit") {
        celsius = (temperature - 32) * 5 / 9;
    } else if (fromUnit === "Kelvin") {
        celsius = temperature - 273.15;
    }

    let convertedTemperature;

    // Convert Celsius to the selected unit
    if (toUnit === "Celsius") {
        convertedTemperature = celsius;
    } else if (toUnit === "Fahrenheit") {
        convertedTemperature = (celsius * 9 / 5) + 32;
    } else if (toUnit === "Kelvin") {
        convertedTemperature = celsius + 273.15;
    }

    result.textContent =
        `${convertedTemperature.toFixed(2)} °${getSymbol(toUnit)}`;
}

function getSymbol(unit) {
    if (unit === "Celsius") {
        return "C";
    } else if (unit === "Fahrenheit") {
        return "F";
    } else {
        return "K";
    }
}

