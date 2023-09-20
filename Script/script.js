// Carregar a biblioteca do Google Charts
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(desenharGrafico);

// Array de dados inicial
var dados = [
  ['Tarefa', 'Horas por Dia'],
];

let contador2 = 1;

function deletar(id) {
  var tarefa = document.getElementById(id);
  tarefa.remove();
  --contador2;
  ax5();
  deletararray(id);
}
function deletararray(id) {
  dados[id] =  [undefined, undefined]; // Remove o item do array com base no índice
  desenharGrafico(); // Atualiza a lista de itens na página
}

let contador = 0;
let i = 0;
let ValorMaxRanger = document.getElementById("valorinicial");
let ValorMaxRangerReal = ValorMaxRanger.max;


  // Função para adicionar um novo item ao array de dados
  function adicionarItem() {
    var box1valor = document.getElementById('box1').value;
    let input = document.getElementById("box2").value;
    let main = document.getElementById("arealista");
    let valorinicial = document.getElementById("valorinicial").value;
    let valorinicial2 = parseInt(valorinicial);
    let ValorMaxRanger = document.getElementById("valorinicial");
    let ValorMaxRangerReal = ValorMaxRanger.max;
    let resultado = ValorMaxRangerReal - valorinicial2;
    ValorMaxRanger.max = resultado;

    ++contador2;
    ++contador;
    ++i;

    if (box1valor.trim() !== '' && input !== '' && valorinicial2 !== 0) {
      dados.push([box1valor, valorinicial2]); // Adiciona um novo item com 2 horas (ou o valor desejado)
      desenharGrafico(); // Redesenha o gráfico com os dados atualizados
      document.getElementById('box1').value = ''; // Limpa o campo de entrada
      document.getElementById('box2').value = ''; // Limpa o campo de entrada
      document.getElementById('valorinicial').value = 0;
      document.getElementById('valor').textContent = '0';


      if (datavalor == "2") { datavalor = "1" };
      data5.dataset.aberto = datavalor;
      let novaatividade =`<div id="${contador}" class="tarefas">
          <div class="marcar"><box-icon class="marcar" name='radio-circle-marked'></box-icon></div>
          <tex-box class="texto">${input}</tex-box>
          <button id="${i}" onclick="deletar(${contador})" id="delete" class="deletar"><box-icon name='trash' color='#f9f9f9' ></box-icon></button>
          </div>`;

      main.innerHTML += novaatividade;
      ax5();
    }
  }

  function ax5(){
    if (contador2 >= 2 ){
      imgadd.style.display = "none";
      txt18.style.display = "none";
      imggrafico.style.display = "none";
    } else if (contador2 = 1){
      imgadd.style.display = "block";
      txt18.style.display = "block";
      imggrafico.style.display = "block";
    }
  }

// Função para desenhar o gráfico
function desenharGrafico() {
  var data = google.visualization.arrayToDataTable(dados);

  var options = {
    title: 'Minhas atividades diárias',
    pieHole: 0.4,
  };

  var chart = new google.visualization.PieChart(document.getElementById('chart'));
  chart.draw(data, options);
}

let valor1 = document.getElementById("valorinicial");
let valor2 = valor1.value;
let valor3 = document.getElementById("valor");
let valor4 = valor3.textContent;

valor4 = valor2;
valor3.innerHTML = valor4;

valor1.oninput = function () {
  let valor2 = valor1.value;
  valor3.innerHTML = valor2;
}

let data5 = document.getElementById("data");
let datavalor = data5.dataset.aberto;

function ax1() {
  if (datavalor == "1") { datavalor = "2" };

  data5.dataset.aberto = datavalor;
}
function ax2() {
  if (datavalor == "2") { datavalor = "1" };

  data5.dataset.aberto = datavalor;
}