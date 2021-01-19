function gerarNumeroNaoContido(min, max, array) {

    const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min;

    return array.includes(aleatorio) ?
        gerarNumeroNaoContido(min, max, array) :
        aleatorio;
}

function sorteado(qtde) {

    const numeros = Array(qtde)
        .fill(0)
        .reduce((nums) => {
            const novoNumero = gerarNumeroNaoContido(1, 60, nums);
            return [...nums, novoNumero]
        }, [])
        .sort((a, b) => a - b)
        ;

    return numeros;
}

console.log(sorteado(6))