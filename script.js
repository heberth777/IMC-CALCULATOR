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
