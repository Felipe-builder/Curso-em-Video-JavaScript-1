let valores = [ 8, 1, 4, 56, 6,7 ,8, 6, 4, 3]

for (let index = 0; index < valores.length; index++) {
    console.log(`A posição ${index} tem o valor ${valores[index]}`);
}

console.log(`\n----------------------------`)

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}