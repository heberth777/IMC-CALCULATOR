# IMC-CALCULATOR
<h1 align="center"> IMC-CALCULATOR </h1>

O projeto foi desenvolvido com o intuito de calcular o seu índice de massa corporal - IMC, para dessa forma avaliar o grau de sobrepeso ou obesidade.





Atribuindo os elementos do html nas variáveis.
~~~javascript
  var nome = document.getElementById('nome').value;
  var altura = document.getElementById('altura').value;
  var peso = document.getElementById('peso').value;
  var resultado = document.getElementById('resultado');
~~~

Para calcular, utilizei a variável de mesmo nome, e adicionei um evento (click), que ao ser notado, executa a função imc que eu criei mais adiante.
~~~javascript
calcular.addEventListener('click',imc)
~~~

Nessa função criada, adicionei as variaveis: nome, altura, peso e resultado, pois eu só necessito delas ao clicar no botão calcular, outro detalhe
é que adicionei o .value ao final das variaveis (exceto do resultado), pois eu preciso dos valores inseridos, já no resultado, a minha intenção foi
de atribuir um valor específico para cada caso, que será exibido mais abaixo, então temos:
~~~javascript
function imc(){
  var nome = document.getElementById('nome').value;
  var altura = document.getElementById('altura').value;
  var peso = document.getElementById('peso').value;
  var resultado = document.getElementById('resultado');
~~~


Criando a variável para o cálculo (arredondei o resultado para apenas 1 casa depois da vírgula):
~~~javascript
var valorIMC = (peso / (altura * altura)).toFixed(1)
~~~


Agora eu adicionei valores diferentes para a var resultado, que irá variar conforme o IMC calculado (através da variavel let), da seguinte maneira:
~~~javascript
let classificacao = ''
      if (valorIMC < 18.5){
        classificacao = 'abaixo de seu peso ideal'
      }else if (valorIMC < 25) {
        classificacao = 'com o peso ideal. Parabéns!!!'
      }else if (valorIMC < 30) {
        classificacao = 'levemente acima de seu peso ideal'
      }else if (valorIMC < 35) {
        classificacao = 'com obesidade grau 1'
      }else if (valorIMC < 40) {
        classificacao = 'com obesidade grau 2'
      }else if (valorIMC > 40) {
        classificacao = 'com obesidade grau 3. CUIDADO!!!'
      }
  resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`
~~~

<h4 align="center"> 
    :construction:  Projeto Finalizado :construction:
</h4>


Código js completo:
~~~javascript
var calcular = document.getElementById('calcular');


function imc(){
  
  var nome = document.getElementById('nome').value;
  var altura = document.getElementById('altura').value;
  var peso = document.getElementById('peso').value;
  var resultado = document.getElementById('resultado');

  if(nome.value !== '' && altura !== '' && peso !== ''){
    var valorIMC = (peso / (altura * altura)).toFixed(1)
    
    
    let classificacao = ''
      if (valorIMC < 18.5){
        classificacao = 'abaixo de seu peso ideal'
      }else if (valorIMC < 25) {
        classificacao = 'com o peso ideal. Parabéns!!!'
      }else if (valorIMC < 30) {
        classificacao = 'levemente acima de seu peso ideal'
      }else if (valorIMC < 35) {
        classificacao = 'com obesidade grau 1'
      }else if (valorIMC < 40) {
        classificacao = 'com obesidade grau 2'
      }else if (valorIMC > 40) {
        classificacao = 'com obesidade grau 3. CUIDADO!!!'
      }
  resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`
    

  }else  {
    resultado.textContent = 'Altura e Peso devem ser preenchidos'
  }
}


calcular.addEventListener('click',imc)
~~~


