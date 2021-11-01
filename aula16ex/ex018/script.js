let numero = document.querySelector('input#numero')
let table = document.querySelector('select#selarray')
let result = document.querySelector('div#res')
let array = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, a) {
    if (a.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(numero.value) && !inLista(numero.value, array)) {
        array.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado`
        table.appendChild(item)
       result.innerHTML = ''  
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    numero.value = ''
    numero.focus()
}

function finalizar(){
    if(array.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = array.length
        let maior = array[0]
        let menor = array[0]
        let soma = 0
        let media = 0        

        for (let index = 0; index < array.length; index++) {
            soma += array[index]
            if (array[index] > maior) {
                maior = array[index]
            }
            if (array[index] < menor) {
                menor = array[index]
            }
        }
        media = soma / tot
        result.innerHTML = ''
        result.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`
        result.innerHTML += `<p>O Maior valor informado foi ${maior}.</p>`
        result.innerHTML += `<p>O Maior valor informado foi ${menor}.</p>`
        result.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        result.innerHTML += `<p>A média dos valores é ${media}.</p>`
    }
}