const valueUpper = document.getElementById('input-value-upper')

const valueBotton = document.getElementById('input-value-botton')

const convertBtn = document.getElementById('converter-btn')

convertBtn.addEventListener('click', function(){
    let result = Number(valueUpper.value) * 2
    
    valueBotton.value = result
})