function calcular() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        for (let index = 0; index < 11; index++) {
            let item = document.createElement('option')            
            item.text = `${n} x ${index} = ${n*index}`
            item.value = `tab${index}`
            tab.appendChild(item)
        }
    }
}