function megaSena() {
    let numeros = [];

    const numero = parseInt(Math.random() * (60 - 1)) + 1;

    for (let x = 0; x < 6; x++) {

        const sorteado = numeros.includes(numero) ?
            parseInt(Math.random() * (60 - 1)) + 1 :
            numero

        numeros.push(sorteado);
    }

    return numeros.sort((a, b) => a - b);
}

console.log(megaSena())