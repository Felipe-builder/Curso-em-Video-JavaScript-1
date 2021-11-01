function contar() {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.querySelector('div#res')
    if (inicio.value.length == 0 || fim.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = `Contando: <br>`
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p == 0) {
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for (let index = i ; index <= f; index+=p) {
                res.innerHTML += `${index} \u{1F449} `
            }            
        } else if(i > f) {
            // Contagem decrescente
            for (let index = i ; index >= f; index-=p) {
                res.innerHTML += `${index} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}