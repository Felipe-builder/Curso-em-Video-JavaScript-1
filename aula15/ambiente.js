let num = [5,4, 8, 4, 2, 9]

num.sort()

console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)

// num[6] = 7
num.push(7)

console.log(`Nosso vetor agora é ${num}`)
console.log(`O vetor tem ${num.length} posições`)


let pos = num.indexOf(8)
if (pos == -1) {
    console.log(`O valor ${pos} não foi encontrado!`)
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}