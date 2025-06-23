const menu = document.getElementById('menu')
const divHBG = document.getElementById('menu2')
let menuAberto = document.createElement('div')
menuAberto.querySelector('a')
const body = document.body
const cor = document.querySelectorAll('.cor')

const BTNenviar = document.getElementById('ultima')
const total = document.getElementById('totalPontos')
const pergunta1 = document.getElementById('p1')
const pergunta2 = document.getElementById('p2')
const pergunta3 = document.getElementById('p3')
const pergunta4 = document.getElementById('p4')
const pergunta5 = document.getElementById('p5')
const pergunta6 = document.getElementById('p6')
const pergunta7 = document.getElementById('p7')
const pergunta8 = document.getElementById('p8')
const pergunta9 = document.getElementById('p9')
const pergunta10 = document.getElementById('p10')

divHBG.style.left = '1500px'
divHBG.style.transition = '2.5s'
menu.style.marginLeft = '1200px'

let contador = 1

function abrir() {
    menu.addEventListener('click', () => {
        contador++
        if (contador % 2 == 0) {
            menu.style.transition = '2s'
            menu.style.marginLeft = '1060px'
            menuAberto.innerHTML = `
            <h1>Menu</h1>
            
            <h4 id="info">Paginas Relacionadas:</h4>
            <a href="./../pages/index.html">Inicio</a>
            <br>
            <a href="https://brasilescola.uol.com.br/geografia/enchentes.htm">Informações</a>
            <br>
            <a href="./../pages/formulario.html">Enviar sugestão</a>
            <br>
            <a href="./../pages/index.html">Quiz</a>

            <h4> mudar tema:</h4>
            <button class='mudardecor' id='mudarTema'> mudar tema para noturno </button>
            <button class='mudardecor' id='mudarTema2'> mudar para tema claro </button>
            <button class='mudardecor' id='mudarTema3'> mudar para tema amarelo </button>
            
            `
            divHBG.append(menuAberto)
            menu.style.paddingRight = '130px'
            divHBG.style.zIndex = '2'
            divHBG.style.left = '1155px'
            divHBG.style.paddingLeft = '15px'
            divHBG.style.backgroundColor = '#21da5e'
            divHBG.style.position = 'fixed'
            divHBG.style.width = '200px'
            divHBG.style.height = '1000px'
            const Mudarpreto = document.getElementById('mudarTema')
        Mudarpreto.addEventListener('click', () => {
            body.style.backgroundColor = '#000'
            cor.forEach(el => {
            el.style.color = '#fff'
            });
        });
        const MudarBranco = document.getElementById('mudarTema2')
        MudarBranco.addEventListener('click', () => {
            body.style.backgroundColor = '#fff'
            cor.forEach(el => {
            el.style.color = '#000'
            });
        });
        const MudarAmarelo = document.getElementById('mudarTema3')
        MudarAmarelo.addEventListener('click', () => {
            body.style.backgroundColor = '#ffff99'
            cor.forEach(el => {
            el.style.color = '#000'
            });
        });

        }
        else if (contador % 2 != 0) {
            menu.style.paddingRight = '110px'
            menu.style.transition = '2s'
            menu.style.marginLeft = '1120px'
            divHBG.style.transition = '2s'
            divHBG.style.left = '1570px'
            divHBG.style.zIndex = '-2'
            divHBG.style.backgroundColor = 'white'
        }
    })
}

abrir()

function enviarquiz() {
    let resultado = 0
    BTNenviar.addEventListener('click', (event)=> {
        event.preventDefault()
        let resposta = pergunta1.querySelector('input[name="1"]:checked')
        let respostaSelecionada = resposta.value 
        if (respostaSelecionada === "c"){
            resultado += 1
            pergunta1.style.backgroundColor = 'green'
        }
        else {
            pergunta1.style.backgroundColor = 'red'
        }
        
        
        let resposta2 = pergunta2.querySelector('input[name="2"]:checked')
        let respostaSelecionada2 = resposta2.value 
        if (respostaSelecionada2 === "d"){
            resultado += 1
            pergunta2.style.backgroundColor = 'green'
        }
        else {
            pergunta2.style.backgroundColor = 'red'
        }
        
        let resposta3 = pergunta3.querySelector('input[name="3"]:checked')
        let respostaSelecionada3 = resposta3.value 
        if (respostaSelecionada3 === "b"){
            resultado += 1
            pergunta3.style.backgroundColor = 'green'
        }
        else {
            pergunta3.style.backgroundColor = 'red'
        }
        
        let resposta4 = pergunta4.querySelector('input[name="4"]:checked')
        let respostaSelecionada4 = resposta4.value 
        if (respostaSelecionada4 === "b"){
            resultado += 1
            pergunta4.style.backgroundColor = 'green'
        }
        else {
            pergunta4.style.backgroundColor = 'red'
        }
        
        let resposta5 = pergunta5.querySelector('input[name="5"]:checked')
        let respostaSelecionada5 = resposta5.value 
        if (respostaSelecionada5 === "a"){
            resultado += 1
            pergunta5.style.backgroundColor = 'green'
        }
        else {
            pergunta5.style.backgroundColor = 'red'
        }
       
        let resposta6 = pergunta6.querySelector('input[name="6"]:checked')
        let respostaSelecionada6 = resposta6.value 
        if (respostaSelecionada6 === "c"){
            resultado += 1
            pergunta6.style.backgroundColor = 'green'
        }
        else {
            pergunta6.style.backgroundColor = 'red'
        }

        let resposta7 = pergunta7.querySelector('input[name="7"]:checked')
        let respostaSelecionada7 = resposta7.value 
        if (respostaSelecionada7 === "a"){
            resultado += 1
            pergunta7.style.backgroundColor = 'green'
        }
        else {
            pergunta7.style.backgroundColor = 'red'
        }
        
        let resposta8 = pergunta8.querySelector('input[name="8"]:checked')
        let respostaSelecionada8 = resposta8.value 
        if (respostaSelecionada8 === "d"){
            resultado += 1
            pergunta8.style.backgroundColor = 'green'
        }
        else {
            pergunta8.style.backgroundColor = 'red'
        }
        

        let resposta9 = pergunta9.querySelector('input[name="9"]:checked')
        let respostaSelecionada9 = resposta9.value 
        if (respostaSelecionada9 === "a"){
            resultado += 1
            pergunta9.style.backgroundColor = 'green'
        }
        else {
            pergunta9.style.backgroundColor = 'red'
        }
        
        let resposta10 = pergunta10.querySelector('input[name="10"]:checked')
        let respostaSelecionada10 = resposta10.value 
        if (respostaSelecionada10 === "b"){
            resultado += 1
            pergunta10.style.backgroundColor = 'green'
        }
        else {
            pergunta10.style.backgroundColor = 'red'
        }
        
        let resultadoFinal = document.createElement('div')
        resultadoFinal.innerHTML = `
        <h3> Você acertou ${resultado} de 10 questões!</h3>
        `
        total.append(resultadoFinal)
    })

    
}

enviarquiz()