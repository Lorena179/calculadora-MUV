function calcularPosicao() {

    // Pegando os valores digitados pelo usuário
    let S0 = Number(document.getElementById("posicaoInicial").value);
    let V0 = Number(document.getElementById("velocidadeInicial").value);
    let t = Number(document.getElementById("tempo").value);
    let a = Number(document.getElementById("aceleracao").value);

    // Fórmula da posição no MUV
    let S = S0 + V0 * t + (a * t ** 2) / 2;

    // Mostrando o resultado
    document.getElementById("resultado").innerHTML =
        "A posição final é: " + S + " m";
}


function limparCampos() {

    // Apagando os valores dos campos
    document.getElementById("posicaoInicial").value = "";
    document.getElementById("velocidadeInicial").value = "";
    document.getElementById("tempo").value = "";
    document.getElementById("aceleracao").value = "";

    // Apagando o resultado
    document.getElementById("resultado").innerHTML = "";
}