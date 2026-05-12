async function pais_API() 
{
    const nomePais = document.getElementById('nome_pais').value
    const resposta = await fetch(`https://restcountries.com/v3.1/name/${nomePais}`)
    const dados = await resposta.json()
    const pais = dados[0]

    const capital = document.getElementById('capital')
    const populacao = document.getElementById('populacao')
    const moeda = document.getElementById('moeda')
    const idioma = document.getElementById('idioma')
    const fuso_horario = document.getElementById('fuso_horario')
    const bandeira = document.getElementById('bandeira')

    capital.innerText = pais.capital[0]
    populacao.innerText = pais.population
    fuso_horario.innerText = pais.timezones[0]
    bandeira.src = pais.flags.png
    idioma.innerText = Object.values(pais.languages)
    moeda.innerText = Object.values(pais.currencies)[0].name


}