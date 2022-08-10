window.addEventListener('load', function () {

    console.log('PÁGINA CARREGADA')
    const nome = document.getElementById('nome')
    const sobrenome = document.getElementById('sobrenome')
    const cpf = document.getElementById('cpf')
    const telefone = document.getElementById('telefone')
    const celular = document.getElementById('celular')
    const email = document.getElementById('email')
    const email2 = document.getElementById('email2')
    const senha = document.getElementById('senha')
    const senha2 = document.getElementById('senha2')

    const endereco = document.getElementById('endereco')
    const numero = document.getElementById('numero')
    const bairro = document.getElementById('bairro')
    const cidade = document.getElementById('cidade')
    const estado = document.getElementById('estado')
    const uf = document.getElementById('uf')
    const uf2 = document.getElementById('uf2')

    const pais = document.getElementById('pais')
   
    const endereco2 = document.getElementById('endereco2')
    const numero2 = document.getElementById('numero2')
    const bairro2 = document.getElementById('bairro2')
    const cidade2 = document.getElementById('cidade2')
    const estado2 = document.getElementById('estado2')
    const pais2 = document.getElementById('pais2')
    const licenca = document.getElementById('licenca')
    
    const cep = document.getElementById('cep')
    const cep2 = document.getElementById('cep2')
    const err = document.getElementById('err')


    cep.addEventListener('input', function () {
        Validation.maskCep(cep)
        Validation.cepNumbers(cep)
        const cepDigitado = cep.value
        if (cepDigitado.length == 9) {
            endereco.value = ("")
            bairro.value = ("")
            cidade.value = ("")
            estado.value = ("")
            axios.get('https://viacep.com.br/ws/' + cepDigitado + '/json')
                .then(function (response) {
                    endereco.value = response.data.logradouro !== undefined ? response.data.logradouro : ""
                    bairro.value = response.data.bairro !== undefined ? response.data.bairro : ""
                    cidade.value = response.data.localidade !== undefined ? response.data.localidade : ""
                    
                    response.data.erro == undefined ? response.data.erro : alert('CEP não encontrado, busque novamente')
                })                
        }
    })

    cep2.addEventListener('input', function () {
        Validation.maskCep(cep2)
        Validation.cepNumbers(cep2)
        const cepDigitado2 = cep2.value
        if (cepDigitado2.length == 9) {
            endereco2.value = ("")
            bairro2.value = ("")
            cidade2.value = ("")
            
            axios.get('https://viacep.com.br/ws/' + cepDigitado2 + '/json')
                .then(function (response) {
                    endereco2.value = response.data.logradouro !== undefined ? response.data.logradouro : ""
                    bairro2.value = response.data.bairro !== undefined ? response.data.bairro : ""
                    cidade2.value = response.data.localidade !== undefined ? response.data.localidade : ""
                                           
                                                
                    response.data.erro == undefined ? response.data.erro : alert('CEP não encontrado, busque novamente')
                })
        }
    })
    const ibgeEstado = axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
    
    ibgeEstado.then(function (response) {
        const estados = response.data
        estados.forEach(estado => {
            const option = document.createElement('option')
            option.value = estado.sigla
            option.innerHTML = option.value
            uf.append(option)
        })
        
    })
    .catch((err) => {
        console.error(err);
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
   
    const ibgePais = axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/paises?orderBy=nome")

    ibgePais.then(function (response) {
            const paises = response.data
            paises.forEach((el) => {
                const option = document.createElement('option')
                option.innerHTML = el.nome
                pais.append(option)
            })
        })
        .catch((err) => {
            console.error(err);
        })
    ibgePais.then(function (response) {
            const paises = response.data
            paises.forEach((el) => {
                const option = document.createElement('option')
                option.innerHTML = el.nome
                pais2.append(option)
            })
        })
        .catch((err) => {
            console.error(err);
        })   

    const Validation = {

        maskTel: (tel) => {
            let strTel = tel.value;
            if (strTel.length == 2) {
                tel.value += ') '
                tel.value = '(' + tel.value
            } else if (strTel.length == 10) {
                tel.value += '-'
            }
        },
        maskCpf: (cpf) => {
            let strCpf = cpf.value
            if (strCpf.length == 3 || strCpf.length == 7) {
                cpf.value += '.'
            } else if (strCpf.length == 11) {
                cpf.value += '-'
            }
        },
        maskCep: (cep) => {
            let strCep = cep.value
            if (strCep.length == 5) {
                cep.value += '-'
            }
        },
        sameValues: (item, item2) => {
            item2.setCustomValidity('')
            item2.checkValidity()
            item.setCustomValidity('')
            item.checkValidity()
            if (item.value !== item2.value) {
                item2.setCustomValidity('Os campos  devem ser iguais!')
            } else if (item2.value !== item.value) {
                item.setCustomValidity('os campos  devem ser iguais')
            } else {
                item2.setCustomValidity('')
            }
        },
        samePasswords: (item, item2) => {
            item2.setCustomValidity('')
            item2.checkValidity()
            item.setCustomValidity('')
            item.checkValidity()
            if (item.value !== item2.value) {
                item2.setCustomValidity('')
                item2.setCustomValidity('Os campos  devem ser iguais! A senha deve conter, no minimo 8 digitos, 1 letra maiuscula, 1 letra minuscula e 1 numero')
            } else if (item2.value !== item.value) {
                item2.setCustomValidity('')

                item.setCustomValidity('Os campos  devem ser iguais! A senha deve conter, no minimo 8 digitos, 1 letra maiuscula, 1 letra minuscula e 1 numero')
            } else {
                item2.setCustomValidity('')
            }
        },

        errorStyled: (addStyle) => {
            addStyle.style.color = 'red'
            addStyle.value = ''
           
            addStyle.classList.add('erroDeInput')
        },
        errorStyled2: (addStyle) => {
            addStyle.style.color = 'red'
            
            addStyle.classList.add('erroDeInput')
        },
        onlyNumbers: (numero) => {
            numero.value = numero.value.replace(/[^0-9|\.|\-|( )/]/g, '')
        },
        onlyNumbers2: (numero) => {
            numero.value = numero.value.replace(/[^0-9]/g, '')
        },
        cepNumbers: (numero) => {
            numero.value = numero.value.replace(/[^0-9|\-]/g, '')
        },
        okValidation: (addStyle) => {
            addStyle.classList.remove('erroDeInput')
            addStyle.value.trim()
            addStyle.style.color = 'black'
            addStyle.classList.add('inputOk')
        }
    }
    nome.addEventListener('input', function () {
        if (nome.value.length > 20) {
            Validation.errorStyled(nome)
        } else if (nome.value.match(/\d|\W/) > 0) {
            Validation.errorStyled(nome)
        } else if (nome.value.match(/\s{3,}/)) {
            Validation.errorStyled(nome)
        } else {
            Validation.okValidation(nome)
        }
    })
    nome.addEventListener('blur', function () {
        if (nome.value.length < 3) {
            Validation.errorStyled(nome)
        } else if (nome.value.length > 20) {
            Validation.errorStyled(nome)
        } else if (nome.value.match(/\d|\W/) > 0) {
            Validation.errorStyled(nome)
        } else if (nome.value.match(/\s{3,}/g)) {
            Validation.errorStyled(nome)
        } else {
            Validation.okValidation(nome)
        }
    })

    sobrenome.addEventListener('input', function () {
        if (sobrenome.value.length > 20) {
            Validation.errorStyled(sobrenome)
        } else if (sobrenome.value.match(/\d|\W/) > 0) {
            Validation.errorStyled(sobrenome)
        } else if (sobrenome.value.match(/\s{3,}/)) {
            Validation.errorStyled(sobrenome)
        } else {
            Validation.okValidation(sobrenome)
        }
    })
    sobrenome.addEventListener('blur', function () {
        if (sobrenome.value.length < 3) {
            Validation.errorStyled(sobrenome)
        } else if (sobrenome.value.length > 20) {
            Validation.errorStyled(sobrenome)
        } else if (sobrenome.value.match(/\d|\W/) > 0) {
            Validation.errorStyled(sobrenome)
        } else if (sobrenome.value.match(/\s{3,}/g)) {
            Validation.errorStyled(sobrenome)
        } else {
            Validation.okValidation(sobrenome)
        }
    })

    cpf.addEventListener('input', function () {
        Validation.maskCpf(cpf)
        Validation.onlyNumbers(cpf)
    })
    cpf.addEventListener('blur', function () {
        if (cpf.value.length < 14) {
            Validation.errorStyled(cpf)

        } else {
            Validation.okValidation(cpf)
        }
    })
    
    telefone.addEventListener('input', function () {
        Validation.maskTel(telefone)
        Validation.onlyNumbers(telefone)
    })
    telefone.addEventListener('blur', function () {
        if (telefone.value.length < 15) {
            Validation.errorStyled(telefone)
        } else {
            Validation.okValidation(telefone)
        }
    })
    celular.addEventListener('input', function () {
        Validation.maskTel(celular)
        Validation.onlyNumbers(celular)
    })
    celular.addEventListener('blur', function () {
        if (celular.value.length < 15) {
            Validation.errorStyled(celular)
        } else {
            Validation.okValidation(celular)
        }
    })
    email.addEventListener('input', function () {
        Validation.sameValues(email, email2)
    })
    email.addEventListener('blur', function () {
        Validation.sameValues(email, email2)

        if (email.value == email2.value && email.value !== '') {
            Validation.okValidation(email)
            Validation.okValidation(email2)
        } else {
            Validation.errorStyled2(email)
            Validation.errorStyled2(email2)
        }
    })
    email2.addEventListener('input', function () {
        Validation.sameValues(email2, email)
    })
    email2.addEventListener('blur', function () {
        Validation.sameValues(email2, email)
        if (email2.value == email.value && email2.value !== '') {
            Validation.okValidation(email2)
            Validation.okValidation(email)
        } else {
            Validation.errorStyled(email2)
            Validation.errorStyled(email)
        }
    })
    senha.addEventListener('input', function () {
        Validation.samePasswords(senha, senha2)
    })
    senha.addEventListener('blur', function () {
        Validation.sameValues(senha, senha2)

        if (senha.value == senha2.value && senha.value !== '') {
            Validation.okValidation(senha)
            Validation.okValidation(senha2)
        } else {
            Validation.errorStyled2(senha)
            Validation.errorStyled2(senha2)
        }
    })
    senha2.addEventListener('input', function () {
        Validation.samePasswords(senha2, senha)
    })
    senha2.addEventListener('blur', function () {
        Validation.sameValues(senha2, senha)
        if (senha2.value == senha.value && senha2.value !== '') {
            Validation.okValidation(senha2)
            Validation.okValidation(senha)
        } else {
            Validation.errorStyled(senha2)
            Validation.errorStyled(senha)
        }
    })

    numero.addEventListener('input', function () {
        Validation.onlyNumbers2(numero)
    })
    numero2.addEventListener('input', function () {
        Validation.onlyNumbers2(numero2)
    })

})