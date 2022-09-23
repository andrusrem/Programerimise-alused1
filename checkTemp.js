let temp = prompt("Mis temperatuur on praegu? ")
let result = {-1:'Liiga külm',0:"Paras temperatuur",1:'Liiga kuum',2:'Kitjuta midagi muut'}
function checkTemp(temp, resoult) {
    if (temp <= 20){
        return result[-1]
    }
    else if (temp <= 40){
        return result[0]
    }
    else if (temp <= 60){
        return result[1]

    }
    else {
        return result[2]
    }
}
