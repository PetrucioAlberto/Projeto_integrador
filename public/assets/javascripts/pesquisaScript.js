window.addEventListener('load', function () {

    console.log('PÁGINA CARREGADA')

    
    const pesquisa =  axios.get('') 
        pesquisa.then((response) => {
            const acessorios = response.data
        })
        
    const ibgeEstado2 = axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
    
    ibgeEstado2.then(function (response) {
        const estados2 = response.data
        estados2.forEach(estado => {
            const option = document.createElement('option')
            option.value = estado.sigla
            option.innerHTML = option.value
            uf2.append(option)
        })
        
    })
    .catch((err) => {
        console.error(err);
    })























})