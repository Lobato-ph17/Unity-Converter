const valueUpper = document.getElementById('input-value-upper')

const valueBotton = document.getElementById('input-value-botton')

const convertBtn = document.getElementById('converter-btn')

const unitFrom = document.getElementById('unit-select-from')

const unitTo = document.getElementById('unit-select-to')


const unitToMeter = {
    m: 1,
    km: 1000,
    yd: 0.9144,
    ft: 0.3048,
    mi: 1609.34
};

// ---------------- EVENTOS DE CONVERSÃO ===================


convertBtn.addEventListener('click', function(){
    
    const inputValue = Number(valueUpper.value)
    const from = unitFrom.value
    const to = unitTo.value

    const valorEmMetros = inputValue * unitToMeter[from]
    const resultadoFinal = valorEmMetros / unitToMeter[to]

    valueBotton.value = resultadoFinal
    })


//  ------------------ Evento de clear ----------------------

function clearOnFocus(input) {
    input.addEventListener('focus', function () {
        if (input.value !== '') {
            input.value = '';
        }
    });
}

clearOnFocus(valueUpper);
clearOnFocus(valueBotton);