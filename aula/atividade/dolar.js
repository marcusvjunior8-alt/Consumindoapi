async function dolarApi() {
    const dolar = document.getElementById('dolar')
    const real = document.getElementById('real')
    const euro = document.getElementById('euro')

    if (isNaN(dolar.value) || dolar.value.trim() === "") {
        alert("Erro! Digite um valor numérico.");
        return;
    }
    alert("Valor válido: $" + dolar.value);
    try {
        /* Cotação Dolar -> Real*/
        const resposeBRL = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL")
        const dadosBRL = await resposeBRL.json();

        /* Cotação Dolar -> Euro  */
        const resposeEUR = await fetch("https://economia.awesomeapi.com.br/json/last/USD-EUR");
        const dadosEUR = await resposeEUR.json();

        const valorDolar = Number(dolar.value);

        const cotacaoBRL = Number(dadosBRL.USDBRL.bid);
        const cotacaoEUR = Number(dadosEUR.USDEUR.bid);

        real.value = (valorDolar * cotacaoBRL).toFixed(2);
        euro.value = (valorDolar * cotacaoEUR).toFixed(2);

        const cotacao = document.getElementById('cotacao')
        cotacao.innerText = "1 Dolár = " + cotacaoBRL + " reais";
    } catch (error) {
        console.log(error);
        alert("Error ao buscar cotação")
    }

}