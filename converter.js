function temprature(C_or_F) {
    if (C_or_F === 'C') {
        const celsiusInput = document.getElementById('celsius');
        const celsius=parseFloat(celsiusInput.value);
        if (isNaN(celsius)) {
            celsiusInput.classList.add('border', 'border-danger');
        }
        else {
            celsiusInput.classList.remove('border', 'border-danger');
            document.getElementById('fahrenheit').classList.remove('border', 'border-danger');
        }
        const fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
    }
    else if (C_or_F === 'F') {
        const fahrenheitInput = document.getElementById('fahrenheit');
        const fahrenheit = parseFloat(fahrenheitInput.value);
        if (isNaN(fahrenheit)) {
            fahrenheitInput.classList.add('border', 'border-danger');
        }
        else {
            fahrenheitInput.classList.remove('border', 'border-danger');
            document.getElementById('celsius').classList.remove('border', 'border-danger');
        }
        const celsius = (fahrenheit - 32) * 5/9;
        document.getElementById('celsius').value = celsius.toFixed(2);
    }
}
function weight(K_or_P) {
    if (K_or_P === 'K') {
        const kiloInput = document.getElementById('kilo');
        const kilo = parseFloat(kiloInput.value);
        if (isNaN(kilo)) {
            kiloInput.classList.add('border', 'border-danger');
        }
        else {
            kiloInput.classList.remove('border', 'border-danger');
            document.getElementById('pounds').classList.remove('border', 'border-danger');
        }
        const pounds = kilo * 2.20462;
        document.getElementById('pounds').value = pounds.toFixed(2);
    }
    else if (K_or_P === 'P') {
        const poundsInput = document.getElementById('pounds');
        const pounds = parseFloat(poundsInput.value);
        if (isNaN(pounds)) {
            poundsInput.classList.add('border', 'border-danger');
        }
        else {
            poundsInput.classList.remove('border', 'border-danger');
            document.getElementById('kilo').classList.remove('border', 'border-danger');
        }
        const kilo = pounds / 2.20462;
        document.getElementById('kilo').value = kilo.toFixed(2);
    }
}
function distance(KM_or_M) {
    if (KM_or_M === 'KM') {
        const kmInput = document.getElementById('km');
        const km = parseFloat(kmInput.value);
        if (isNaN(km)) {
            kmInput.classList.add('border', 'border-danger');
        }
        else {
            kmInput.classList.remove('border', 'border-danger');
            document.getElementById('miles').classList.remove('border', 'border-danger');
        }
        const miles = km * 0.621371;
        document.getElementById('miles').value = miles.toFixed(2);
    }
    else if (KM_or_M === 'M') {
        const milesInput = document.getElementById('miles');
        const miles = parseFloat(milesInput.value);
        if (isNaN(miles)) {
            milesInput.classList.add('border', 'border-danger');
        }
        else {
            milesInput.classList.remove('border', 'border-danger');
            document.getElementById('km').classList.remove('border', 'border-danger');
        }
        const km = miles / 0.621371;
        document.getElementById('km').value = km.toFixed(2);
    }
}