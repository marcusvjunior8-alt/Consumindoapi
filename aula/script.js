async function consumindoApi() {

    const cep = document.getElementById('cep')

    if (cep.value.legth < 8) {
        alert("Informe no máximo 8 números");
        return;
    }
    try {
        const respose = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
        const dados = await respose.json();

        if (!respose.ok) {
            alert("CEP não encontrado");
            return;
        }

        document.getElementById('rua').value = dados.logradouro;
        document.getElementById('estado').value = dados.estado;
        document.getElementById('cidade').value = dados.localidade;

    } catch (error) {
        console.log(error);
    }
}