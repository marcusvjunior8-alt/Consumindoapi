async function gerarImagem() 
{
    const img = document.getElementById('img')
    const imgAPI = await fetch('https://dog.ceo/api/breeds/image/random')
    const dados = await imgAPI.json()
    /* console.log */
    img.src = dados.message
}