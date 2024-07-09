
//Chave do site:https://openweathermap.org

let chave = "76903cbc0fcbde79526838ccbc961611"

function colocarNaTela(dados) {

    console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name + " - " + dados.sys.country

    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + " °C"

    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description

    document.querySelector(".umidade").innerHTML = dados.main.humidity + " % de Umidade"

    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade) {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" +
        chave + "&lang=pt_br" + "&units=metric")
        .then(resposta => resposta.json())
    colocarNaTela(dados)
}

function cliqueiNoBotao() {

    let cidade = document.querySelector(".input-cidade").value
    buscarCidade(cidade)
}