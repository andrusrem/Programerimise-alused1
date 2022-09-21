let temp = prompt("Mis temperatuur on praegu? ")
function checkTemp(temp) {
    if (temp <= 20){
        alert('Liiga külm')
    }
    else if (temp <= 40){
        alert("Paras temperatuur")
    }
    else if (temp <= 60){
        alert('Liiga kuum')
    }
    else {
        alert('Kitjuta midagi muut')
    }
}
checkTemp(temp)
