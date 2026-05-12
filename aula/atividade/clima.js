async function clima() {
    const cidade = document.getElementById('cidade').value
    const apiKey = "d289834203369e76cd6168f1230109b4"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`
    const response = await fetch(url)
    const dados = await response.json()
    console.log(dados)

    const temp = document.getElementById('temp')
    const tempMin = document.getElementById('tempMin')
    const tempMax = document.getElementById('tempMax')
    const umidade = document.getElementById('umidade')
    const vento = document.getElementById('vento')

    temp.innerText = dados.main.temp
    tempMin.innerText = dados.main.temp_min
    tempMax.innerText = dados.main.temp_max
    umidade.innerText = dados.main.humidity
    vento.innerText = dados.wind.speed
}