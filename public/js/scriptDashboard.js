


function calcular() {
  // 'Resetar' o conteúdo da div caso a gente queira fazer cálculos em sequência
  div_resultado.innerHTML = ''

  // Recebendo os valores dos inputs para cálculo de vazamento
  var consumo_queimador = Number(input_queimador.value);
  var tempo_uso = Number(input_minutos.value);
  var capacidade_botijao = Number(input_capacidade.value);
  var preco_botijao = Number(input_preco.value);

  // Recebendo os valores dos inputs para cálculo de multas e prejuízos
  var m2 = Number(inp_m2.value);
  var multaM2 = (5 * 1, 1 * m2 * 35.36)

  // multa por metro²: 5 (Infração Grave) * 1,1 (Carga de Incêndio Fator de Risco Grave)* 
  // àrea da edificação (m2) * R$35,36 (UFESP 2024) = R$ Valor da Multa

  var qtd_funcionarios = Number(input_funcionarios.value);
  var media_salarial = Number(input_media_salarial.value);

  // Fazendo as contas para calcular prejuízos e multas em caso de acidentes
  var salario_total = qtd_funcionarios * media_salarial;
  var multa = (salario_total * 2) / 3;
  var gastos_totais = multa + multaM2 + salario_total + preco_botijao;
  var patrimonial = gastos_totais.toFixed(2);


  // (((T/60) x Kg/h)/B) x PB -> fórmula para calcular o gasto por dia
  // Contas relacionadas ao vazamento
  var gasto_dia = (((tempo_uso / 60) * consumo_queimador) / capacidade_botijao) * preco_botijao;
  var gasto_mes = gasto_dia * 30;
  var gasto_ano = gasto_mes * 12;

  // Considerando que o gás esteja vazando e que o vazamento cause um aumento de 25%
  var consumo_queimador_25 = consumo_queimador + (consumo_queimador * 0.25);
  var gasto_dia_25 = (((tempo_uso / 60) * consumo_queimador_25) / capacidade_botijao) * preco_botijao;
  var gasto_mes_25 = gasto_dia_25 * 30;
  var gasto_ano_25 = gasto_mes_25 * 12;

  var multa_dobrada = patrimonial * 2

  var economia = (gasto_ano_25) - (gasto_ano)



  div_resultado.style.display = 'block'
  // Exibindo o resultado dos gastos adicionais esperados
  div_resultado.innerHTML += `
                                  <h3> Com um consumo de <span> ${consumo_queimador} </span> e um tempo de uso de <span> ${tempo_uso} </span>, 
                                  um botijão de <span> ${capacidade_botijao} </span> tem um custo médio de <span> ${preco_botijao} </span>, 
                                  com uma redução de <span> 25% no vazamento</span>, a economia estimada por ano é de R$<span> ${economia.toFixed(2)} </span>.`



  // Exibindo o resultado de multas e prejuízos em caso de acidente
  div_resultado.innerHTML += `
        <br><br>
                                   <h3> Gastos com multas e gastos em caso de acidentes: </h3>
                                    <p>Se o estabelecimento não tiver monitoramento de prevenção de incêndios, as multas podem chegar a <span> ${patrimonial}</span>.
                                   Em caso de reincidência, a multa pode dobrar, totalizando <span>${multa_dobrada} </span>. 
                                   Na terceira inspeção, há risco de <span> suspensão </span> temporária das atividades a
                                   té que as exigências sejam atendidas, gerando prejuízo diário e <span> perda total do patrimonio </span>.`

  div_resultado.innerHTML += `<br>
                                    Com a LeakGas, em caso de vazamento avisaremos à você <span>em menos de 5 minutos</span>, evitando prejuízos e dores de cabeça!`

}


const linha = document.getElementById('chart_linha');

new Chart(linha, {
  type: 'line',
  data: {
    labels: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00'],
    datasets: [
      {
        label: 'Presença de Gás',
        data: [0, 0, 0, 0, 10, 15, 15],
        borderColor: '#E5446D',
        backgroundColor: 'orange',
        borderWidth: 1
      },
      {
        label: 'Nível Crítico(2%)',
        data: [2, 2, 2, 2, 2, 2, 2],
        borderColor: 'red',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        borderWidth: 3,
        borderDash: [5, 5],
        pointRadius: 0
      }, {
        label: 'Limite de Segurança (0.1%)',
        data: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        borderWidth: 3,
        borderDash: [5, 5],
        pointRadius: 0
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 16,
        title: {
          display: true,
          text: 'Quantidade de Gás'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Horário'
        }
      }
    }
  }
});



// PARA NAVEGAR ENTRE A DASHBOARD

function cozinhaB() {
  todas_dash.style.display = 'none';
  dash_cozinhas.style.display = 'flex';
  cozinha_selecionada.innerHTML = ` B`
  inicio_vazamento.innerHTML = `10:00`
  dashboard_a.style.display = 'none';
  inicio_vazamento.style.color = 'red'

  termino_vazamento.innerHTML = `<img class='leak_vermelho' src="./assets/leak_vermelho.png">`
  status_mensagem.innerHTML = `Vazamento crítico ativo, risco de explosões!`
  status_mensagem.style.backgroundColor = 'rgba(150, 24, 24, 0.63)'

  dashboardB.style.display = 'flex';
  dashboard_safe.style.display = 'none';
  dashboard_warning.style.display = 'none';
}


// ADICIONAR A DASHBOARD DINÂNMINCA

function selecionarCozinhaB() {
  // todas_dash.style.display = 'none';
  // scroll_cozinhas.style.display = 'flex'
  // container_dash.style.display = 'flex'
  // sensores_cozinhas.style.display = 'flex'
  // container_sensores.style.display = 'flex'

  SecCozinhaB.style.backgroundColor = '#D9D9D9'
  SecCozinhaB.style.width = '75%'
  SecCozinhaB.style.height = '9vw'
  SecCozinhaB.style.border = '2px solid #002E52'

  SecCozinhaA.style.backgroundColor = 'white'
  SecCozinhaA.style.width = '80%'
  SecCozinhaA.style.height = '10vw'
  SecCozinhaA.style.border = 'none'

  SecCozinhaC.style.backgroundColor = 'white'
  SecCozinhaC.style.width = '80%'
  SecCozinhaC.style.height = '10vw'
  SecCozinhaC.style.border = 'none'

  SecCozinhaD.style.backgroundColor = 'white'
  SecCozinhaD.style.width = '80%'
  SecCozinhaD.style.height = '10vw'
  SecCozinhaD.style.border = 'none'

  SecCozinhaE.style.backgroundColor = 'white'
  SecCozinhaE.style.width = '80%'
  SecCozinhaE.style.height = '10vw'
  SecCozinhaE.style.border = 'none'
  

  box_sensores_a.style.display = 'none'
  box_sensores_b.style.display = 'none'
  box_sensores_c.style.display = 'none'
  box_sensores_d.style.display = 'none'
  box_sensores_e.style.display = 'none'

  todas_dash.style.display = 'none';
  scroll_cozinhas.style.display = 'flex'
  container_dash.style.display = 'none'
  container_sensores.style.display = 'flex'
  container_sessoes.style.margin = '1vw 1vw 0 0'
   scroll_cozinhas.style.margin = '0 0 0 8vw'

  cozinha_selecionada_sensor.innerHTML = ` B`
  ultimo_vazamento.innerHTML = 'Sensor A'
  horario_vazamento.innerHTML = '10:00'
  total_sensores.innerHTML = '4'
  sensores_vazamentos.innerHTML = '2'
  sensores_vazamentos.style.color = 'red'
  horario_vazamento.style.color = 'red'
  ultimo_vazamento.style.color = 'red'

  status_imagem_sensores.innerHTML = `<img class='leak_status' src="./assets/leak_vermelho.png">`
  status_mensagem_sensores.style.backgroundColor = 'rgba(150, 24, 24, 0.63)'
  status_mensagem_sensores.innerHTML = `Vazamento crítico ativo, risco de explosões!`

  sensores_cozinha_a.style.display = 'none'
  sensores_cozinha_b.style.display = 'flex'
  sensores_cozinha_c.style.display = 'none'
  sensores_cozinha_d.style.display = 'none'
  sensores_cozinha_e.style.display = 'none'

}
function selecionarCozinhaA() {
  container_sessoes.style.margin = '1vw 1vw 0 0'
  todas_dash.style.display = 'none';
  scroll_cozinhas.style.display = 'flex'
  container_dash.style.display = 'none'
  container_sensores.style.display = 'flex'
 scroll_cozinhas.style.margin = '0 0 0 8vw'
  cozinha_selecionada_sensor.innerHTML = ` A`
  ultimo_vazamento.innerHTML = 'Sem vazamentos ativos'

  SecCozinhaB.style.backgroundColor = 'white'
  SecCozinhaB.style.width = '80%'
  SecCozinhaB.style.height = '10vw'
  SecCozinhaB.style.border = 'none'

  SecCozinhaA.style.backgroundColor = '#D9D9D9'
  SecCozinhaA.style.width = '75%'
  SecCozinhaA.style.height = '9vw'
  SecCozinhaA.style.border = '2px solid #002E52'


  SecCozinhaC.style.backgroundColor = 'white'
  SecCozinhaC.style.width = '80%'
  SecCozinhaC.style.height = '10vw'
  SecCozinhaC.style.border = 'none'

  SecCozinhaD.style.backgroundColor = 'white'
  SecCozinhaD.style.width = '80%'
  SecCozinhaD.style.height = '10vw'
  SecCozinhaD.style.border = 'none'

  SecCozinhaE.style.backgroundColor = 'white'
  SecCozinhaE.style.width = '80%'
  SecCozinhaE.style.height = '10vw'
  SecCozinhaE.style.border = 'none'

  box_sensores_a.style.display = 'none'
  box_sensores_b.style.display = 'none'
  box_sensores_c.style.display = 'none'
  box_sensores_d.style.display = 'none'
  box_sensores_e.style.display = 'none'

  horario_vazamento.innerHTML = 'Sem vazamentos ativos'
  total_sensores.innerHTML = '2'
  sensores_vazamentos.innerHTML = 'Sem vazamentos ativos'
  sensores_vazamentos.style.color = 'green'
  horario_vazamento.style.color = 'green'
  ultimo_vazamento.style.color = 'green'

  status_imagem_sensores.innerHTML = `<img class='leak_status' src="./assets/leak_azul.png">`
  status_mensagem_sensores.style.backgroundColor = 'rgba(30, 105, 30, 0.479)'
  status_mensagem_sensores.innerHTML = `Nenhum vazamento ativo, ambiente seguro!`


  sensores_cozinha_a.style.display = 'flex'
  sensores_cozinha_b.style.display = 'none'
  sensores_cozinha_c.style.display = 'none'
  sensores_cozinha_d.style.display = 'none'
  sensores_cozinha_e.style.display = 'none'



}
function selecionarCozinhaD() {
  todas_dash.style.display = 'none';
  scroll_cozinhas.style.display = 'flex'
  container_dash.style.display = 'none'
  container_sensores.style.display = 'flex'
  container_sessoes.style.margin = '1vw 1vw 0 0'
  sensores_vazamentos.style.color = 'black'
  horario_vazamento.style.color = 'black'
  ultimo_vazamento.style.color = 'black'
 scroll_cozinhas.style.margin = '0 0 0 8vw'
  cozinha_selecionada_sensor.innerHTML = ` D`
  ultimo_vazamento.innerHTML = 'Sensor A'
  horario_vazamento.innerHTML = '10:00'
  total_sensores.innerHTML = '2'
  sensores_vazamentos.innerHTML = '1'

  SecCozinhaD.style.backgroundColor = '#D9D9D9'
  SecCozinhaD.style.width = '75%'
  SecCozinhaD.style.height = '9vw'
  SecCozinhaD.style.border = '2px solid #002E52'

  SecCozinhaA.style.backgroundColor = 'white'
  SecCozinhaA.style.width = '80%'
  SecCozinhaA.style.height = '10vw'
  SecCozinhaA.style.border = 'none'

  SecCozinhaC.style.backgroundColor = 'white'
  SecCozinhaC.style.width = '80%'
  SecCozinhaC.style.height = '10vw'
  SecCozinhaC.style.border = 'none'

  SecCozinhaB.style.backgroundColor = 'white'
  SecCozinhaB.style.width = '80%'
  SecCozinhaB.style.height = '10vw'
  SecCozinhaB.style.border = 'none'

  SecCozinhaE.style.backgroundColor = 'white'
  SecCozinhaE.style.width = '80%'
  SecCozinhaE.style.height = '10vw'
  SecCozinhaE.style.border = 'none'

  box_sensores_a.style.display = 'none'
  box_sensores_b.style.display = 'none'
  box_sensores_c.style.display = 'none'
  box_sensores_d.style.display = 'none'
  box_sensores_e.style.display = 'none'

  status_imagem_sensores.innerHTML = `<img class='leak_status' src="./assets/leak_amarelo.png">`
  status_mensagem_sensores.style.backgroundColor = 'rgba(145, 145, 28, 0.623)'
  status_mensagem_sensores.innerHTML = `Vazamento médio ativo, podendo se agravar!`


  sensores_cozinha_a.style.display = 'none'
  sensores_cozinha_b.style.display = 'none'
  sensores_cozinha_c.style.display = 'none'
  sensores_cozinha_d.style.display = 'flex'
  sensores_cozinha_e.style.display = 'none'



}
function selecionarCozinhaC() {
  todas_dash.style.display = 'none';
  scroll_cozinhas.style.display = 'flex'
  container_dash.style.display = 'none'
  container_sensores.style.display = 'flex'
 scroll_cozinhas.style.margin = '0 0 0 8vw'
  container_sessoes.style.margin = '1vw 1vw 0 0'
  cozinha_selecionada_sensor.innerHTML = ` C`
  ultimo_vazamento.innerHTML = 'Sem vazamentos ativos'
  ultimo_vazamento.style.color = 'green'
  horario_vazamento.innerHTML = 'Sem vazamentos ativos'
  total_sensores.innerHTML = '4'
  sensores_vazamentos.innerHTML = 'Sem vazamentos ativos'
  sensores_vazamentos.style.color = 'green'
  horario_vazamento.style.color = 'green'

  SecCozinhaC.style.backgroundColor = '#D9D9D9'
  SecCozinhaC.style.width = '75%'
  SecCozinhaC.style.height = '9vw'
  SecCozinhaC.style.border = '2px solid #002E52'

  SecCozinhaA.style.backgroundColor = 'white'
  SecCozinhaA.style.width = '80%'
  SecCozinhaA.style.height = '10vw'
  SecCozinhaA.style.border = 'none'

  SecCozinhaB.style.backgroundColor = 'white'
  SecCozinhaB.style.width = '80%'
  SecCozinhaB.style.height = '10vw'
  SecCozinhaB.style.border = 'none'

  SecCozinhaD.style.backgroundColor = 'white'
  SecCozinhaD.style.width = '80%'
  SecCozinhaD.style.height = '10vw'
  SecCozinhaD.style.border = 'none'

  SecCozinhaE.style.backgroundColor = 'white'
  SecCozinhaE.style.width = '80%'
  SecCozinhaE.style.height = '10vw'
  SecCozinhaE.style.border = 'none'

  status_imagem_sensores.innerHTML = `<img class='leak_status' src="./assets/leak_azul.png">`
  status_mensagem_sensores.style.backgroundColor = 'rgba(30, 105, 30, 0.479)'
  status_mensagem_sensores.innerHTML = `Nenhum vazamento ativo, ambiente seguro!`


  sensores_cozinha_a.style.display = 'none'
  sensores_cozinha_b.style.display = 'none'
  sensores_cozinha_c.style.display = 'flex'
  sensores_cozinha_d.style.display = 'none'
  sensores_cozinha_e.style.display = 'none'

  box_sensores_a.style.display = 'none'
  box_sensores_b.style.display = 'none'
  box_sensores_c.style.display = 'none'
  box_sensores_d.style.display = 'none'
  box_sensores_e.style.display = 'none'


}

function selecionarCozinhaE() {
  todas_dash.style.display = 'none';
  scroll_cozinhas.style.display = 'flex'
  container_dash.style.display = 'none'
  container_sensores.style.display = 'flex'
  container_sessoes.style.margin = '1vw 1vw 0 0'
  cozinha_selecionada_sensor.innerHTML = ` E`
  ultimo_vazamento.innerHTML = 'Sem vazamentos ativos'
  ultimo_vazamento.style.color = 'green'
  horario_vazamento.innerHTML = 'Sem vazamentos ativos'
  total_sensores.innerHTML = '2'
  sensores_vazamentos.innerHTML = 'Sem vazamentos ativos'
  sensores_vazamentos.style.color = 'green'
  horario_vazamento.style.color = 'green'

  status_imagem_sensores.innerHTML = `<img class='leak_status' src="./assets/leak_azul.png">`
  status_mensagem_sensores.style.backgroundColor = 'rgba(30, 105, 30, 0.479)'
  status_mensagem_sensores.innerHTML = `Nenhum vazamento ativo, ambiente seguro!`

  SecCozinhaE.style.backgroundColor = '#D9D9D9'
  SecCozinhaE.style.width = '75%'
  SecCozinhaE.style.height = '9vw'
  SecCozinhaE.style.border = '2px solid #002E52'

  SecCozinhaA.style.backgroundColor = 'white'
  SecCozinhaA.style.width = '80%'
  SecCozinhaA.style.height = '10vw'
  SecCozinhaA.style.border = 'none'

  SecCozinhaC.style.backgroundColor = 'white'
  SecCozinhaC.style.width = '80%'
  SecCozinhaC.style.height = '10vw'
  SecCozinhaC.style.border = 'none'

  SecCozinhaD.style.backgroundColor = 'white'
  SecCozinhaD.style.width = '80%'
  SecCozinhaD.style.height = '10vw'
  SecCozinhaD.style.border = 'none'

  SecCozinhaB.style.backgroundColor = 'white'
  SecCozinhaB.style.width = '80%'
  SecCozinhaB.style.height = '10vw'
  SecCozinhaB.style.border = 'none'

  sensores_cozinha_a.style.display = 'none'
  sensores_cozinha_b.style.display = 'none'
  sensores_cozinha_c.style.display = 'none'
  sensores_cozinha_d.style.display = 'none'
  sensores_cozinha_e.style.display = 'flex'

  box_sensores_a.style.display = 'none'
  box_sensores_b.style.display = 'none'
  box_sensores_c.style.display = 'none'
  box_sensores_d.style.display = 'none'
  box_sensores_e.style.display = 'none'

}


function cozinhaA() {
  todas_dash.style.display = 'none';
  dash_cozinhas.style.display = 'flex';
  dashboardB.style.display = 'none';
  dashboard_safe.style.display = 'none';
  dashboard_a.style.display = 'flex';
  dashboard_warning.style.display = 'none';

  inicio_vazamento.style.color = 'green'
  cozinha_selecionada.innerHTML = ` A`
  inicio_vazamento.innerHTML = `Sem vazamentos ativos`
  termino_vazamento.innerHTML = `Sem vazamentos ativos`

  termino_vazamento.innerHTML = `<img class='leak_azul' src="./assets/leak_azul.png">`
  status_mensagem.style.backgroundColor = 'rgba(30, 105, 30, 0.479)'
  status_mensagem.style.fontSize = `1.3vw`
  status_mensagem.innerHTML = `Nenhum vazamento ativo, ambiente seguro!`

  //  if( se o vazamento for == 0 ){
  //   termino_vazamento.innerHTML = `<img class='leak_azul' src="./assets/leak_azul.png">`
  //  }else if(se o vazamento for < 2){
  //   termino_vazamento.innerHTML = `<img class='leak_amarelo' src="./assets/leak_amarelo.png">`
  //  }else{
  //   termino_vazamento.innerHTML = `<img class='leak_vermelho' src="./assets/leak_vermelho.png">`
  //  }

}

function cozinhaC() {
  todas_dash.style.display = 'none';
  dash_cozinhas.style.display = 'flex';
  dashboardB.style.display = 'none';
  dashboard_a.style.display = 'none';
  dashboard_safe.style.display = 'flex';
  dashboard_warning.style.display = 'none';

  inicio_vazamento.style.color = 'green'
  cozinha_selecionada.innerHTML = ` C`
  inicio_vazamento.innerHTML = `Sem vazamentos ativos`
  termino_vazamento.innerHTML = `Sem vazamentos ativos`

  termino_vazamento.innerHTML = `<img class='leak_azul' src="./assets/leak_azul.png">`

  stativosus_mensagem.style.backgroundColor = 'rgba(30, 105, 30, 0.479)'
  status_mensagem.style.fontSize = `1.3vw`
  status_mensagem.innerHTML = `Nenhum vazamento ativo, ambiente seguro!`
}
function cozinhaD() {

  todas_dash.style.display = 'none';
  dash_cozinhas.style.display = 'flex';
  dashboard_a.style.display = 'none';
  dashboardB.style.display = 'none';
  dashboard_safe.style.display = 'none';
  dashboard_warning.style.display = 'flex';

  inicio_vazamento.style.color = 'rgb(145, 145, 28)'
  cozinha_selecionada.innerHTML = ` D`
  inicio_vazamento.innerHTML = `07:00`
  termino_vazamento.innerHTML = `<img class='leak_amarelo' src="./assets/leak_amarelo.png">`

  status_mensagem.style.backgroundColor = 'rgba(145, 145, 28, 0.623)'
  status_mensagem.style.fontSize = `1.3vw`
  status_mensagem.innerHTML = `Vazamento médio ativo, podendo se agravar!`
}
function cozinhaE() {
  todas_dash.style.display = 'none';
  dash_cozinhas.style.display = 'flex';
  dashboardB.style.display = 'none';
  dashboard_a.style.display = 'none';
  dashboard_safe.style.display = 'flex';
  dashboard_warning.style.display = 'none';

  inicio_vazamento.style.color = 'green'
  cozinha_selecionada.innerHTML = ` E`
  inicio_vazamento.innerHTML = `Sem vazamentos ativos`
  termino_vazamento.innerHTML = `Sem vazamentos ativos`

  termino_vazamento.innerHTML = `<img class='leak_azul' src="./assets/leak_azul.png">`

  status_mensagem.style.backgroundColor = 'rgba(30, 105, 30, 0.479)'
  status_mensagem.style.fontSize = `1.3vw`
  status_mensagem.innerHTML = `Nenhum vazamento ativo, ambiente seguro!`
}

//   const linha_safe = document.getElementById('chart_linha_safe');

//   new Chart(linha_safe, {
//       type: 'line',
//       data: {
//         labels: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00'],
//         datasets: [
//           {
//             label: 'Presença de Gás',
//             data: [0, 0, 0, 0, 0, 0, 0],
//             borderColor: 'green',
//             backgroundColor: 'green',
//             borderWidth: 1
//           },
//           {
//             label: 'Limite de Segurança (2%)',
//             data: [2, 2, 2, 2, 2, 2, 2],
//             borderColor: 'red',
//             backgroundColor: 'rgba(0, 0, 255, 0.1)',
//             borderWidth: 3,
//             borderDash: [5, 5],
//             pointRadius: 0
//           }, {
//             label: 'Limite de Segurança (0.1%)',
//             data: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
//             borderColor: 'blue',
//             backgroundColor: 'rgba(0, 0, 255, 0.1)',
//             borderWidth: 3,
//             borderDash: [5, 5],
//             pointRadius: 0
//           }
//         ]
//       },
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true,
//             max: 3,
//             title: {
//               display: true,
//               text: 'Quantidade de Gás'
//             }
//           },
//           x: {
//             title: {
//               display: true,
//               text: 'Horário'
//             }
//           }
//         }
//       }
//     });

//     // grafico pra deixar dinamico (calace)

//     const linha_a = document.getElementById('chart_linha_a');

//   new Chart(linha_a, {
//       type: 'line',
//       data: {
//         labels: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00'],
//         datasets: [
//           {
//             label: 'Presença de Gás',
//             data: [0, 0, 0, 0, 0, 0, 0],
//             borderColor: 'green',
//             backgroundColor: 'green',
//             borderWidth: 1
//           },
//           {
//             label: 'Limite de Segurança (2%)',
//             data: [2, 2, 2, 2, 2, 2, 2],
//             borderColor: 'red',
//             backgroundColor: 'rgba(0, 0, 255, 0.1)',
//             borderWidth: 3,
//             borderDash: [5, 5],
//             pointRadius: 0
//           },{
//             label: 'Limite de Segurança (0.1%)',
//             data: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
//             borderColor: 'blue',
//             backgroundColor: 'rgba(0, 0, 255, 0.1)',
//             borderWidth: 3,
//             borderDash: [5, 5],
//             pointRadius: 0
//           }
//         ]
//       },
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true,
//             max: 3,
//             title: {
//               display: true,
//               text: 'Quantidade de Gás'
//             }
//           },
//           x: {
//             title: {
//               display: true,
//               text: 'Horário'
//             }
//           }
//         }
//       }
//     });


// const linha_warning = document.getElementById('chart_linha_warning');

// new Chart(linha_warning, {
//     type: 'line',
//     data: {
//       labels: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00'],
//       datasets: [
//         {
//           label: 'Presença de Gás',
//           data: [0, 0.5, 1, 1.2, 1, 2, 2],
//           borderColor: 'yellow',
//           backgroundColor: 'yellow',
//           borderWidth: 1
//         },
//         {
//           label: 'Nível Crítico (2%)',
//           data: [2, 2, 2, 2, 2, 2, 2],
//           borderColor: 'red',
//           backgroundColor: 'rgba(0, 0, 255, 0.1)',
//           borderWidth: 3,
//           borderDash: [5, 5],
//           pointRadius: 0
//         },
//         {
//           label: 'Limite de Segurança (0.1%)',
//           data: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
//           borderColor: 'blue',
//           backgroundColor: 'rgba(0, 0, 255, 0.1)',
//           borderWidth: 3,
//           borderDash: [5, 5],
//           pointRadius: 0
//         }
//       ]
//     },
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true,
//           max: 3,
//           title: {
//             display: true,
//             text: 'Quantidade de Gás'
//           }
//         },
//         x: {
//           title: {
//             display: true,
//             text: 'Horário'
//           }
//         }
//       }
//     }
//   });

function barras() {
  todas_dash.style.display = 'none';
  cont_barras.style.display = 'flex';
  dash_cozinhas.style.display = 'none';
}

const barra = document.getElementById('chart_barra_mes').getContext('2d');

new Chart(barra, {
  type: 'bar',
  data: {
    labels: ['Cozinha A', 'Cozinha B', 'Cozinha C', 'Cozinha D', 'Cozinha E'],
    datasets: [{
      label: '', // Deixe vazio para não mostrar no gráfico
      data: [5, 3, 2, 4, 1], // Exemplo de dados para cada cozinha
      backgroundColor: [
        'rgba(75, 192, 192, 1)', // Cores sólidas
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 99, 132, 1)'
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)', // Cores sólidas
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 99, 132, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    indexAxis: 'y', // Define o gráfico como horizontal
    scales: {
      x: {
        beginAtZero: true,
        stepSize: 1, // Define o incremento para números inteiros
        title: {
          display: true,
          text: 'Vazamento em Litros'
        },
        ticks: {
          precision: 0 // Garante que exibe apenas números inteiros
        }
      },
      y: {
        title: {
          display: true,
          text: 'Cozinhas'
        }
      }
    },
    plugins: {
      legend: {
        display: false // Remove a legenda do gráfico
      },
      title: {
        display: true,
        text: 'Comparação de Vazamento nas Cozinhas - Outubro'
      }
    }
  }
});


const linha_ano = document.getElementById('chart_linha_ano');

new Chart(linha_ano, {
  type: 'line',
  data: {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro'],
    datasets: [
      {
        label: 'Quantidade de Vazamentos',
        data: [10, 9, 8, 12, 7, 13, 10, 5, 8, 14],
        borderColor: '#092B43',
        backgroundColor: '#092B43',
        borderWidth: 3
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 15,
        title: {
          display: true,
          text: 'Quantidade de Vazamentos'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Ano de 2024'
        }
      }
    }
  }
});



// Sensores :

//Sensores cozinha A
const linha_um_a = document.getElementById('chart_linha_um_a');

new Chart(linha_um_a, {
  type: 'line',
  data: {
    labels: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00'],
    datasets: [
      {
        label: 'Presença de Gás',
        data: [0, 0, 0, 0, 0, 0, 0],
        borderColor: 'green',
        backgroundColor: 'green',
        borderWidth: 1
      },
      {
        label: 'Limite de Segurança (2%)',
        data: [2, 2, 2, 2, 2, 2, 2],
        borderColor: 'red',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        borderWidth: 3,
        borderDash: [5, 5],
        pointRadius: 0
      }, {
        label: 'Limite de Segurança (0.1%)',
        data: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        borderWidth: 3,
        borderDash: [5, 5],
        pointRadius: 0
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 3,
        title: {
          display: true,
          text: 'Quantidade de Gás'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Horário'
        }
      }
    }
  }
});


const linha_dois_a = document.getElementById('chart_linha_dois_a');

new Chart(linha_dois_a, {
  type: 'line',
  data: {
    labels: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00'],
    datasets: [
      {
        label: 'Presença de Gás',
        data: [0, 0, 0, 0, 0, 0, 0],
        borderColor: 'green',
        backgroundColor: 'green',
        borderWidth: 1
      },
      {
        label: 'Limite de Segurança (2%)',
        data: [2, 2, 2, 2, 2, 2, 2],
        borderColor: 'red',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        borderWidth: 3,
        borderDash: [5, 5],
        pointRadius: 0
      }, {
        label: 'Limite de Segurança (0.1%)',
        data: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        borderWidth: 3,
        borderDash: [5, 5],
        pointRadius: 0
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 3,
        title: {
          display: true,
          text: 'Quantidade de Gás'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Horário'
        }
      }
    }
  }
});



// Sensores cozinha B

const linha_um_b = document.getElementById('chart_linha_um_b');

new Chart(linha_um_b, {
  type: 'line',
  data: {
    labels: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00'],
    datasets: [
      {
        label: 'Presença de Gás',
        data: [0, 0, 0, 0, 10, 15, 15],
        borderColor: '#E5446D',
        backgroundColor: 'orange',
        borderWidth: 1
      },
      {
        label: 'Nível Crítico(2%)',
        data: [2, 2, 2, 2, 2, 2, 2],
        borderColor: 'red',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        borderWidth: 3,
        borderDash: [5, 5],
        pointRadius: 0
      }, {
        label: 'Limite de Segurança (0.1%)',
        data: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        borderWidth: 3,
        borderDash: [5, 5],
        pointRadius: 0
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 16,
        title: {
          display: true,
          text: 'Quantidade de Gás'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Horário'
        }
      }
    }
  }
});


const linha_dois_b = document.getElementById('chart_linha_dois_b');

new Chart(linha_dois_b, {
  type: 'line',
  data: {
    labels: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00'],
    datasets: [
      {
        label: 'Presença de Gás',
        data: [0, 0, 0, 0, 0, 0, 0],
        borderColor: 'green',
        backgroundColor: 'green',
        borderWidth: 1
      },
      {
        label: 'Limite de Segurança (2%)',
        data: [2, 2, 2, 2, 2, 2, 2],
        borderColor: 'red',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        borderWidth: 3,
        borderDash: [5, 5],
        pointRadius: 0
      }, {
        label: 'Limite de Segurança (0.1%)',
        data: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        borderWidth: 3,
        borderDash: [5, 5],
        pointRadius: 0
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 3,
        title: {
          display: true,
          text: 'Quantidade de Gás'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Horário'
        }
      }
    }
  }
});

const linha_tres_b = document.getElementById('chart_linha_tres_b');

new Chart(linha_tres_b, {
  type: 'line',
  data: {
    labels: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00'],
    datasets: [
      {
        label: 'Presença de Gás',
        data: [0, 0, 0, 0, 0, 0, 0],
        borderColor: 'green',
        backgroundColor: 'green',
        borderWidth: 1
      },
      {
        label: 'Limite de Segurança (2%)',
        data: [2, 2, 2, 2, 2, 2, 2],
        borderColor: 'red',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        borderWidth: 3,
        borderDash: [5, 5],
        pointRadius: 0
      }, {
        label: 'Limite de Segurança (0.1%)',
        data: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        borderWidth: 3,
        borderDash: [5, 5],
        pointRadius: 0
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 3,
        title: {
          display: true,
          text: 'Quantidade de Gás'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Horário'
        }
      }
    }
  }
});

const linha_quatro_b = document.getElementById('chart_linha_quatro_b');

new Chart(linha_quatro_b, {
  type: 'line',
  data: {
    labels: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00'],
    datasets: [
      {
        label: 'Presença de Gás',
        data: [0, 0.5, 1, 1.2, 1, 2, 2],
        borderColor: 'yellow',
        backgroundColor: 'yellow',
        borderWidth: 1
      },
      {
        label: 'Nível Crítico (2%)',
        data: [2, 2, 2, 2, 2, 2, 2],
        borderColor: 'red',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        borderWidth: 3,
        borderDash: [5, 5],
        pointRadius: 0
      },
      {
        label: 'Limite de Segurança (0.1%)',
        data: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        borderWidth: 3,
        borderDash: [5, 5],
        pointRadius: 0
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 3,
        title: {
          display: true,
          text: 'Quantidade de Gás'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Horário'
        }
      }
    }
  }
});



// SENSORES COZINHA C

const linha_um_c = document.getElementById('chart_linha_um_c');

new Chart(linha_um_c, {
  type: 'line',
  data: {
    labels: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00'],
    datasets: [
      {
        label: 'Presença de Gás',
        data: [0, 0, 0, 0, 0, 0, 0],
        borderColor: 'green',
        backgroundColor: 'green',
        borderWidth: 1
      },
      {
        label: 'Limite de Segurança (2%)',
        data: [2, 2, 2, 2, 2, 2, 2],
        borderColor: 'red',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        borderWidth: 3,
        borderDash: [5, 5],
        pointRadius: 0
      }, {
        label: 'Limite de Segurança (0.1%)',
        data: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        borderWidth: 3,
        borderDash: [5, 5],
        pointRadius: 0
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 3,
        title: {
          display: true,
          text: 'Quantidade de Gás'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Horário'
        }
      }
    }
  }
});

const linha_dois_c = document.getElementById('chart_linha_dois_c');

new Chart(linha_dois_c, {
  type: 'line',
  data: {
    labels: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00'],
    datasets: [
      {
        label: 'Presença de Gás',
        data: [0, 0, 0, 0, 0, 0, 0],
        borderColor: 'green',
        backgroundColor: 'green',
        borderWidth: 1
      },
      {
        label: 'Limite de Segurança (2%)',
        data: [2, 2, 2, 2, 2, 2, 2],
        borderColor: 'red',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        borderWidth: 3,
        borderDash: [5, 5],
        pointRadius: 0
      }, {
        label: 'Limite de Segurança (0.1%)',
        data: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        borderWidth: 3,
        borderDash: [5, 5],
        pointRadius: 0
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 3,
        title: {
          display: true,
          text: 'Quantidade de Gás'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Horário'
        }
      }
    }
  }
});

const linha_tres_c = document.getElementById('chart_linha_tres_c');

new Chart(linha_tres_c, {
  type: 'line',
  data: {
    labels: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00'],
    datasets: [
      {
        label: 'Presença de Gás',
        data: [0, 0, 0, 0, 0, 0, 0],
        borderColor: 'green',
        backgroundColor: 'green',
        borderWidth: 1
      },
      {
        label: 'Limite de Segurança (2%)',
        data: [2, 2, 2, 2, 2, 2, 2],
        borderColor: 'red',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        borderWidth: 3,
        borderDash: [5, 5],
        pointRadius: 0
      }, {
        label: 'Limite de Segurança (0.1%)',
        data: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        borderWidth: 3,
        borderDash: [5, 5],
        pointRadius: 0
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 3,
        title: {
          display: true,
          text: 'Quantidade de Gás'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Horário'
        }
      }
    }
  }
});

const linha_quatro_c = document.getElementById('chart_linha_quatro_c');

new Chart(linha_quatro_c, {
  type: 'line',
  data: {
    labels: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00'],
    datasets: [
      {
        label: 'Presença de Gás',
        data: [0, 0, 0, 0, 0, 0, 0],
        borderColor: 'green',
        backgroundColor: 'green',
        borderWidth: 1
      },
      {
        label: 'Limite de Segurança (2%)',
        data: [2, 2, 2, 2, 2, 2, 2],
        borderColor: 'red',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        borderWidth: 3,
        borderDash: [5, 5],
        pointRadius: 0
      }, {
        label: 'Limite de Segurança (0.1%)',
        data: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        borderWidth: 3,
        borderDash: [5, 5],
        pointRadius: 0
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 3,
        title: {
          display: true,
          text: 'Quantidade de Gás'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Horário'
        }
      }
    }
  }
});

// SENSORES COZINHA D

const linha_um_d = document.getElementById('chart_linha_um_d');

new Chart(linha_um_d, {
  type: 'line',
  data: {
    labels: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00'],
    datasets: [
      {
        label: 'Presença de Gás',
        data: [0, 0.5, 1, 1.2, 1, 2, 2],
        borderColor: 'yellow',
        backgroundColor: 'yellow',
        borderWidth: 1
      },
      {
        label: 'Nível Crítico (2%)',
        data: [2, 2, 2, 2, 2, 2, 2],
        borderColor: 'red',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        borderWidth: 3,
        borderDash: [5, 5],
        pointRadius: 0
      },
      {
        label: 'Limite de Segurança (0.1%)',
        data: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        borderWidth: 3,
        borderDash: [5, 5],
        pointRadius: 0
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 3,
        title: {
          display: true,
          text: 'Quantidade de Gás'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Horário'
        }
      }
    }
  }
});


const linha_dois_d = document.getElementById('chart_linha_dois_d');

new Chart(linha_dois_d, {
  type: 'line',
  data: {
    labels: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00'],
    datasets: [
      {
        label: 'Presença de Gás',
        data: [0, 0, 0, 0, 0, 0, 0],
        borderColor: 'green',
        backgroundColor: 'green',
        borderWidth: 1
      },
      {
        label: 'Limite de Segurança (2%)',
        data: [2, 2, 2, 2, 2, 2, 2],
        borderColor: 'red',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        borderWidth: 3,
        borderDash: [5, 5],
        pointRadius: 0
      }, {
        label: 'Limite de Segurança (0.1%)',
        data: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        borderWidth: 3,
        borderDash: [5, 5],
        pointRadius: 0
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 3,
        title: {
          display: true,
          text: 'Quantidade de Gás'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Horário'
        }
      }
    }
  }
});

// Lógica para navegar entre os sensor  es
//Lógica da cozinha A

function sensorUmCozinhaA() {
  container_sensores.style.display = 'none'
  container_dash.style.display = 'flex'

scroll_cozinhas.style.margin = '1vw 1vw 0 0'
  box_sensores_a.style.display = 'flex'
  box_sensores_b.style.display = 'none'
  box_sensores_c.style.display = 'none'
  box_sensores_d.style.display = 'none'
  box_sensores_e.style.display = 'none'

  scroll_um_a.style.backgroundColor = '#D9D9D9'
  scroll_um_a.style.width = '73%'
  scroll_um_a.style.height = '8vw'
  scroll_um_a.style.border = '2px solid #002E52'

  scroll_dois_a.style.backgroundColor = 'white'
  scroll_dois_a.style.width = '80%'
  scroll_dois_a.style.height = '10vw'
  scroll_dois_a.style.border = 'none'


  section_sensores.style.display = 'flex'
  scroll_cozinhas.style.display = 'flex'
scroll_cozinhas.style.display = 'flex'

  sensores_a.style.display = 'block'
  
 sensores_b.style.display = 'none'  
 sensores_c.style.display = 'none'  
 sensores_d.style.display = 'none'  
 sensores_e.style.display = 'none'  


  sensor_um_a.style.display = 'block'
  sensor_dois_a.style.display = 'none'


  nome_cozinha_selecionada.innerHTML = `A`
  sensor_selecionado.innerHTML = `Um`
  inicio_vazamento.innerHTML = `Sem vazamentos recentes`
  inicio_vazamento.style.color = 'green'
  imagem_status.innerHTML = `<img class='leak_status' src="./assets/leak_azul.png">`
  status_mensagem.innerHTML = `Nenhum vazamento ativo, ambiente seguro!`
   status_mensagem.style.backgroundColor = 'rgba(30, 105, 30, 0.479)'

}

function sensorDoisCozinhaA() {
  container_sensores.style.display = 'none'
  container_dash.style.display = 'flex'

scroll_cozinhas.style.margin = '1vw 1vw 0 0'
  box_sensores_a.style.display = 'flex'
  box_sensores_b.style.display = 'none'
  box_sensores_c.style.display = 'none'
  box_sensores_d.style.display = 'none'
  box_sensores_e.style.display = 'none'

  scroll_dois_a.style.backgroundColor = '#D9D9D9'
  scroll_dois_a.style.width = '73%'
  scroll_dois_a.style.height = '8vw'
  scroll_dois_a.style.border = '2px solid #002E52'

  scroll_um_a.style.backgroundColor = 'white'
  scroll_um_a.style.width = '80%'
  scroll_um_a.style.height = '10vw'
  scroll_um_a.style.border = 'none'

  

  section_sensores.style.display = 'flex'
  scroll_cozinhas.style.display = 'flex'
  

  sensores_a.style.display = 'block'
  
 sensores_b.style.display = 'none'  
 sensores_c.style.display = 'none'  
 sensores_d.style.display = 'none'  
 sensores_e.style.display = 'none'  


  sensor_um_a.style.display = 'none'
  sensor_dois_a.style.display = 'block'


  nome_cozinha_selecionada.innerHTML = `A`
  sensor_selecionado.innerHTML = `Dois`
  inicio_vazamento.innerHTML = `Sem vazamentos recentes`
  inicio_vazamento.style.color = 'green'
  imagem_status.innerHTML = `<img class='leak_status' src="./assets/leak_azul.png">`
  status_mensagem.innerHTML = `Nenhum vazamento ativo, ambiente seguro!`
   status_mensagem.style.backgroundColor = 'rgba(30, 105, 30, 0.479)'

}


//Lógica da cozinha B
function sensorUmCozinhaB() {
  container_sensores.style.display = 'none'
  container_dash.style.display = 'flex'

  
  scroll_um_b.style.backgroundColor = '#D9D9D9'
  scroll_um_b.style.width = '73%'
  scroll_um_b.style.height = '8vw'
  scroll_um_b.style.border = '2px solid #002E52'

  scroll_dois_b.style.backgroundColor = 'white'
  scroll_dois_b.style.width = '80%'
  scroll_dois_b.style.height = '10vw'
  scroll_dois_b.style.border = 'none'

  scroll_tres_b.style.backgroundColor = 'white'
  scroll_tres_b.style.width = '80%'
  scroll_tres_b.style.height = '10vw'
  scroll_tres_b.style.border = 'none'

  scroll_quatro_b.style.backgroundColor = 'white'
  scroll_quatro_b.style.width = '80%'
  scroll_quatro_b.style.height = '10vw'
  scroll_quatro_b.style.border = 'none'
  
  box_sensores_a.style.display = 'none'
  box_sensores_b.style.display = 'flex'
  box_sensores_c.style.display = 'none'
  box_sensores_d.style.display = 'none'
  box_sensores_e.style.display = 'none'

  section_sensores.style.display = 'flex'
  scroll_cozinhas.style.display = 'flex'
scroll_cozinhas.style.margin = '1vw 1vw 0 0'

  sensores_b.style.display = 'block'

 sensores_a.style.display = 'none'  
 sensores_c.style.display = 'none'  
 sensores_d.style.display = 'none'  
 sensores_e.style.display = 'none'  


  sensor_um_b.style.display = 'block'

   sensor_dois_b.style.display = 'none'
    sensor_tres_b.style.display = 'none'
     sensor_quatro_b.style.display = 'none'
     
  


  nome_cozinha_selecionada.innerHTML = `B`
  sensor_selecionado.innerHTML = `Um`
  inicio_vazamento.innerHTML = `10:00`
  inicio_vazamento.style.color = 'red'
  imagem_status.innerHTML = `<img class='leak_status' src="./assets/leak_vermelho.png">`
 status_mensagem.innerHTML = `Vazamento crítico ativo, risco de explosões!`
  status_mensagem.style.backgroundColor = 'rgba(150, 24, 24, 0.63)'

  
}
function sensorDoisCozinhaB() {
  container_sensores.style.display = 'none'
  container_dash.style.display = 'flex'
scroll_cozinhas.style.margin = '1vw 1vw 0 0'
  
  box_sensores_a.style.display = 'none'
  box_sensores_b.style.display = 'flex'
  box_sensores_c.style.display = 'none'
  box_sensores_d.style.display = 'none'
  box_sensores_e.style.display = 'none'


  scroll_dois_b.style.backgroundColor = '#D9D9D9'
  scroll_dois_b.style.width = '73%'
  scroll_dois_b.style.height = '8vw'
  scroll_dois_b.style.border = '2px solid #002E52'

  scroll_um_b.style.backgroundColor = 'white'
  scroll_um_b.style.width = '80%'
  scroll_um_b.style.height = '10vw'
  scroll_um_b.style.border = 'none'

  scroll_tres_b.style.backgroundColor = 'white'
  scroll_tres_b.style.width = '80%'
  scroll_tres_b.style.height = '10vw'
  scroll_tres_b.style.border = 'none'

  scroll_quatro_b.style.backgroundColor = 'white'
  scroll_quatro_b.style.width = '80%'
  scroll_quatro_b.style.height = '10vw'
  scroll_quatro_b.style.border = 'none'
  
  box_sensores_a.style.display = 'none'
  box_sensores_b.style.display = 'flex'
  box_sensores_c.style.display = 'none'
  box_sensores_d.style.display = 'none'
  box_sensores_e.style.display = 'none'


  section_sensores.style.display = 'flex'
  scroll_cozinhas.style.display = 'flex'


  sensores_b.style.display = 'block'

 sensores_a.style.display = 'none'  
 sensores_c.style.display = 'none'  
 sensores_d.style.display = 'none'  
 sensores_e.style.display = 'none'  


  sensor_um_b.style.display = 'none'

   sensor_dois_b.style.display = 'block'
    sensor_tres_b.style.display = 'none'
     sensor_quatro_b.style.display = 'none'
     
  


  nome_cozinha_selecionada.innerHTML = `B`
  sensor_selecionado.innerHTML = `Dois`
  inicio_vazamento.innerHTML = `Sem vazamentos recentes`
  inicio_vazamento.style.color = 'green'
  imagem_status.innerHTML = `<img class='leak_status' src="./assets/leak_azul.png">`
  status_mensagem.innerHTML = `Nenhum vazamento ativo, ambiente seguro!`
   status_mensagem.style.backgroundColor = 'rgba(30, 105, 30, 0.479)'

}
function sensorTresCozinhaB() {
  container_sensores.style.display = 'none'
  container_dash.style.display = 'flex'
  
  box_sensores_a.style.display = 'none'
  box_sensores_b.style.display = 'flex'
  box_sensores_c.style.display = 'none'
  box_sensores_d.style.display = 'none'
  box_sensores_e.style.display = 'none'


  scroll_tres_b.style.backgroundColor = '#D9D9D9'
  scroll_tres_b.style.width = '73%'
  scroll_tres_b.style.height = '8vw'
  scroll_tres_b.style.border = '2px solid #002E52'

  scroll_dois_b.style.backgroundColor = 'white'
  scroll_dois_b.style.width = '80%'
  scroll_dois_b.style.height = '10vw'
  scroll_dois_b.style.border = 'none'

  scroll_um_b.style.backgroundColor = 'white'
  scroll_um_b.style.width = '80%'
  scroll_um_b.style.height = '10vw'
  scroll_um_b.style.border = 'none'

  scroll_quatro_b.style.backgroundColor = 'white'
  scroll_quatro_b.style.width = '80%'
  scroll_quatro_b.style.height = '10vw'
  scroll_quatro_b.style.border = 'none'
  
  box_sensores_a.style.display = 'none'
  box_sensores_b.style.display = 'flex'
  box_sensores_c.style.display = 'none'
  box_sensores_d.style.display = 'none'
  box_sensores_e.style.display = 'none'

  section_sensores.style.display = 'flex'
  scroll_cozinhas.style.display = 'flex'

scroll_cozinhas.style.margin = '1vw 1vw 0 0'

  sensores_b.style.display = 'block'

 sensores_a.style.display = 'none'  
 sensores_c.style.display = 'none'  
 sensores_d.style.display = 'none'  
 sensores_e.style.display = 'none'  


  sensor_um_b.style.display = 'none'

   sensor_dois_b.style.display = 'none'
    sensor_tres_b.style.display = 'block'
     sensor_quatro_b.style.display = 'none'

  nome_cozinha_selecionada.innerHTML = `B`
  sensor_selecionado.innerHTML = `Três`
  inicio_vazamento.innerHTML = `Sem vazamentos recentes`
  inicio_vazamento.style.color = 'green'
  imagem_status.innerHTML = `<img class='leak_status' src="./assets/leak_azul.png">`
  status_mensagem.innerHTML = `Nenhum vazamento ativo, ambiente seguro!`
   status_mensagem.style.backgroundColor = 'rgba(30, 105, 30, 0.479)'

}
function sensorQuatroCozinhaB() {
  container_sensores.style.display = 'none'
  container_dash.style.display = 'flex'
  
  box_sensores_a.style.display = 'none'
  box_sensores_b.style.display = 'flex'
  box_sensores_c.style.display = 'none'
  box_sensores_d.style.display = 'none'
  box_sensores_e.style.display = 'none'

  scroll_quatro_b.style.backgroundColor = '#D9D9D9'
  scroll_quatro_b.style.width = '73%'
  scroll_quatro_b.style.height = '8vw'
  scroll_quatro_b.style.border = '2px solid #002E52'

  scroll_dois_b.style.backgroundColor = 'white'
  scroll_dois_b.style.width = '80%'
  scroll_dois_b.style.height = '10vw'
  scroll_dois_b.style.border = 'none'

  scroll_tres_b.style.backgroundColor = 'white'
  scroll_tres_b.style.width = '80%'
  scroll_tres_b.style.height = '10vw'
  scroll_tres_b.style.border = 'none'

  scroll_um_b.style.backgroundColor = 'white'
  scroll_um_b.style.width = '80%'
  scroll_um_b.style.height = '10vw'
  scroll_um_b.style.border = 'none'
  
  box_sensores_a.style.display = 'none'
  box_sensores_b.style.display = 'flex'
  box_sensores_c.style.display = 'none'
  box_sensores_d.style.display = 'none'
  box_sensores_e.style.display = 'none'


  section_sensores.style.display = 'flex'
  scroll_cozinhas.style.display = 'flex'


scroll_cozinhas.style.margin = '1vw 1vw 0 0'
  sensores_b.style.display = 'block'

 sensores_a.style.display = 'none'  
 sensores_c.style.display = 'none'  
 sensores_d.style.display = 'none'  
 sensores_e.style.display = 'none'  


  sensor_um_b.style.display = 'none'
   sensor_dois_b.style.display = 'none'
    sensor_tres_b.style.display = 'none'
     sensor_quatro_b.style.display = 'block'

  nome_cozinha_selecionada.innerHTML = `B`
  sensor_selecionado.innerHTML = `Quatro`
  inicio_vazamento.innerHTML = `07:00`
  inicio_vazamento.style.color = 'black'
  imagem_status.innerHTML = `<img class='leak_status' src="./assets/leak_amarelo.png">`
  status_mensagem.innerHTML = `Vazamento médio ativo, podendo se agravar!`
   status_mensagem.style.backgroundColor = 'rgba(145, 145, 28, 0.623)'

}

//Lógica Cozinha C

function sensorUmCozinhaC() {
  container_sensores.style.display = 'none'
  container_dash.style.display = 'flex'
  
scroll_cozinhas.style.margin = '1vw 1vw 0 0'
  box_sensores_a.style.display = 'none'
  box_sensores_b.style.display = 'none'
  box_sensores_c.style.display = 'flex'
  box_sensores_d.style.display = 'none'
  box_sensores_e.style.display = 'none'

  section_sensores.style.display = 'flex'
  scroll_cozinhas.style.display = 'flex'

  scroll_um_c.style.backgroundColor = '#D9D9D9'
  scroll_um_c.style.width = '73%'
  scroll_um_c.style.height = '8vw'
  scroll_um_c.style.border = '2px solid #002E52'

  scroll_dois_c.style.backgroundColor = 'white'
  scroll_dois_c.style.width = '80%'
  scroll_dois_c.style.height = '10vw'
  scroll_dois_c.style.border = 'none'

  scroll_tres_c.style.backgroundColor = 'white'
  scroll_tres_c.style.width = '80%'
  scroll_tres_c.style.height = '10vw'
  scroll_tres_c.style.border = 'none'
  
  scroll_quatro_c.style.backgroundColor = 'white'
  scroll_quatro_c.style.width = '80%'
  scroll_quatro_c.style.height = '10vw'
  scroll_quatro_c.style.border = 'none'
  
  box_sensores_a.style.display = 'none'
  box_sensores_b.style.display = 'flex'
  box_sensores_c.style.display = 'none'
  box_sensores_d.style.display = 'none'
  box_sensores_e.style.display = 'none'


  sensores_b.style.display = 'none'
 sensores_a.style.display = 'none'  
 sensores_c.style.display = 'block'  
 sensores_d.style.display = 'none'  
 sensores_e.style.display = 'none'  


  sensor_um_c.style.display = 'block'

   sensor_dois_c.style.display = 'none'
    sensor_tres_c.style.display = 'none'
     sensor_quatro_c.style.display = 'none'

  nome_cozinha_selecionada.innerHTML = `C`
  sensor_selecionado.innerHTML = `Um`
  inicio_vazamento.innerHTML = `Sem vazamentos recentes`
  inicio_vazamento.style.color = 'green'
  imagem_status.innerHTML = `<img class='leak_status' src="./assets/leak_azul.png">`
  status_mensagem.innerHTML = `Nenhum vazamento ativo, ambiente seguro!`
   status_mensagem.style.backgroundColor = 'rgba(30, 105, 30, 0.479)'
}
function sensorDoisCozinhaC() {
  container_sensores.style.display = 'none'
  container_dash.style.display = 'flex'
  

scroll_cozinhas.style.margin = '1vw 1vw 0 0'
  section_sensores.style.display = 'flex'
  scroll_cozinhas.style.display = 'flex'

  scroll_dois_c.style.backgroundColor = '#D9D9D9'
  scroll_dois_c.style.width = '73%'
  scroll_dois_c.style.height = '8vw'
  scroll_dois_c.style.border = '2px solid #002E52'

  scroll_um_c.style.backgroundColor = 'white'
  scroll_um_c.style.width = '80%'
  scroll_um_c.style.height = '10vw'
  scroll_um_c.style.border = 'none'

  scroll_tres_c.style.backgroundColor = 'white'
  scroll_tres_c.style.width = '80%'
  scroll_tres_c.style.height = '10vw'
  scroll_tres_c.style.border = 'none'
  
  scroll_quatro_c.style.backgroundColor = 'white'
  scroll_quatro_c.style.width = '80%'
  scroll_quatro_c.style.height = '10vw'
  scroll_quatro_c.style.border = 'none'

  box_sensores_a.style.display = 'none'
  box_sensores_b.style.display = 'none'
  box_sensores_c.style.display = 'flex'
  box_sensores_d.style.display = 'none'
  box_sensores_e.style.display = 'none'


  sensores_b.style.display = 'none'
 sensores_a.style.display = 'none'  
 sensores_c.style.display = 'block'  
 sensores_d.style.display = 'none'  
 sensores_e.style.display = 'none'  


  sensor_um_c.style.display = 'none'

   sensor_dois_c.style.display = 'block'
    sensor_tres_c.style.display = 'none'
     sensor_quatro_c.style.display = 'none'

  nome_cozinha_selecionada.innerHTML = `C`
  sensor_selecionado.innerHTML = `Dois`
  inicio_vazamento.innerHTML = `Sem vazamentos recentes`
  inicio_vazamento.style.color = 'green'
  imagem_status.innerHTML = `<img class='leak_status' src="./assets/leak_azul.png">`
  status_mensagem.innerHTML = `Nenhum vazamento ativo, ambiente seguro!`
   status_mensagem.style.backgroundColor = 'rgba(30, 105, 30, 0.479)'
}
function sensorTresCozinhaC() {
  container_sensores.style.display = 'none'
  container_dash.style.display = 'flex'
  
  scroll_tres_c.style.backgroundColor = '#D9D9D9'
  scroll_tres_c.style.width = '73%'
  scroll_tres_c.style.height = '8vw'
  scroll_tres_c.style.border = '2px solid #002E52'

  scroll_um_c.style.backgroundColor = 'white'
  scroll_um_c.style.width = '80%'
  scroll_um_c.style.height = '10vw'
  scroll_um_c.style.border = 'none'

  scroll_dois_c.style.backgroundColor = 'white'
  scroll_dois_c.style.width = '80%'
  scroll_dois_c.style.height = '10vw'
  scroll_dois_c.style.border = 'none'
  
  scroll_quatro_c.style.backgroundColor = 'white'
  scroll_quatro_c.style.width = '80%'
  scroll_quatro_c.style.height = '10vw'
  scroll_quatro_c.style.border = 'none'

scroll_cozinhas.style.margin = '1vw 1vw 0 0'
  box_sensores_a.style.display = 'none'
  box_sensores_b.style.display = 'none'
  box_sensores_c.style.display = 'flex'
  box_sensores_d.style.display = 'none'
  box_sensores_e.style.display = 'none'

  section_sensores.style.display = 'flex'
  scroll_cozinhas.style.display = 'flex'


  sensores_b.style.display = 'none'
 sensores_a.style.display = 'none'  
 sensores_c.style.display = 'block'  
 sensores_d.style.display = 'none'  
 sensores_e.style.display = 'none'  


  sensor_um_c.style.display = 'none'

   sensor_dois_c.style.display = 'none'
    sensor_tres_c.style.display = 'block'
     sensor_quatro_c.style.display = 'none'

  nome_cozinha_selecionada.innerHTML = `C`
  sensor_selecionado.innerHTML = `Três`
  inicio_vazamento.innerHTML = `Sem vazamentos recentes`
  inicio_vazamento.style.color = 'green'
  imagem_status.innerHTML = `<img class='leak_status' src="./assets/leak_azul.png">`
  status_mensagem.innerHTML = `Nenhum vazamento ativo, ambiente seguro!`
   status_mensagem.style.backgroundColor = 'rgba(30, 105, 30, 0.479)'
}
function sensorQuatroCozinhaC() {
  container_sensores.style.display = 'none'
  container_dash.style.display = 'flex'

  
  scroll_quatro_c.style.backgroundColor = '#D9D9D9'
  scroll_quatro_c.style.width = '73%'
  scroll_quatro_c.style.height = '8vw'
  scroll_quatro_c.style.border = '2px solid #002E52'

  scroll_um_c.style.backgroundColor = 'white'
  scroll_um_c.style.width = '80%'
  scroll_um_c.style.height = '10vw'
  scroll_um_c.style.border = 'none'

  scroll_dois_c.style.backgroundColor = 'white'
  scroll_dois_c.style.width = '80%'
  scroll_dois_c.style.height = '10vw'
  scroll_dois_c.style.border = 'none'
  
  scroll_tres_c.style.backgroundColor = 'white'
  scroll_tres_c.style.width = '80%'
  scroll_tres_c.style.height = '10vw'
  scroll_tres_c.style.border = 'none'

  
scroll_cozinhas.style.margin = '1vw 1vw 0 0'
  box_sensores_a.style.display = 'none'
  box_sensores_b.style.display = 'none'
  box_sensores_c.style.display = 'flex'
  box_sensores_d.style.display = 'none'
  box_sensores_e.style.display = 'none'

  section_sensores.style.display = 'flex'
  scroll_cozinhas.style.display = 'flex'


  sensores_b.style.display = 'none'
 sensores_a.style.display = 'none'  
 sensores_c.style.display = 'block'  
 sensores_d.style.display = 'none'  
 sensores_e.style.display = 'none'  


  sensor_um_c.style.display = 'none'

   sensor_dois_c.style.display = 'none'
    sensor_tres_c.style.display = 'none'
     sensor_quatro_c.style.display = 'block'

  nome_cozinha_selecionada.innerHTML = `C`
  sensor_selecionado.innerHTML = `Três`
  inicio_vazamento.innerHTML = `Sem vazamentos recentes`
  inicio_vazamento.style.color = 'green'
  imagem_status.innerHTML = `<img class='leak_status' src="./assets/leak_azul.png">`
  status_mensagem.innerHTML = `Nenhum vazamento ativo, ambiente seguro!`
   status_mensagem.style.backgroundColor = 'rgba(30, 105, 30, 0.479)'
}

//Lógica dos sensores cozinha D
function sensorUmCozinhaD() {
  container_sensores.style.display = 'none'
  container_dash.style.display = 'flex'
  
scroll_cozinhas.style.margin = '1vw 1vw 0 0'
  box_sensores_a.style.display = 'none'
  box_sensores_b.style.display = 'none'
  box_sensores_c.style.display = 'none'
  box_sensores_d.style.display = 'flex'
  box_sensores_e.style.display = 'none'

  section_sensores.style.display = 'flex'
  scroll_cozinhas.style.display = 'flex'


  scroll_um_d.style.backgroundColor = '#D9D9D9'
  scroll_um_d.style.width = '73%'
  scroll_um_d.style.height = '8vw'
  scroll_um_d.style.border = '2px solid #002E52'

  scroll_dois_d.style.backgroundColor = 'white'
  scroll_dois_d.style.width = '80%'
  scroll_dois_d.style.height = '10vw'
  scroll_dois_d.style.border = 'none'

  sensores_b.style.display = 'none'
 sensores_a.style.display = 'none'  
 sensores_c.style.display = 'none'  
 sensores_d.style.display = 'block'  
 sensores_e.style.display = 'none'  


  sensor_um_d.style.display = 'block'
   sensor_dois_d.style.display = 'none'

  nome_cozinha_selecionada.innerHTML = `D`
  sensor_selecionado.innerHTML = `Um`
  inicio_vazamento.innerHTML = `07:00`
  inicio_vazamento.style.color = 'black'
  imagem_status.innerHTML = `<img class='leak_status' src="./assets/leak_amarelo.png">`
  status_mensagem.innerHTML = `Vazamento médio ativo, podendo se agravar!`
   status_mensagem.style.backgroundColor = 'rgba(145, 145, 28, 0.623)'

}
function sensorDoisCozinhaD() {
  container_sensores.style.display = 'none'
  container_dash.style.display = 'flex'
  box_sensores_a.style.display = 'none'
  box_sensores_b.style.display = 'none'
  box_sensores_c.style.display = 'none'
  box_sensores_d.style.display = 'flex'
  box_sensores_e.style.display = 'none'

  scroll_dois_d.style.backgroundColor = '#D9D9D9'
  scroll_dois_d.style.width = '73%'
  scroll_dois_d.style.height = '8vw'
  scroll_dois_d.style.border = '2px solid #002E52'

  scroll_um_d.style.backgroundColor = 'white'
  scroll_um_d.style.width = '80%'
  scroll_um_d.style.height = '10vw'
  scroll_um_d.style.border = 'none'

scroll_cozinhas.style.margin = '1vw 1vw 0 0'
  section_sensores.style.display = 'flex'
  scroll_cozinhas.style.display = 'flex'


  sensores_b.style.display = 'none'
 sensores_a.style.display = 'none'  
 sensores_c.style.display = 'none'  
 sensores_d.style.display = 'block'  
 sensores_e.style.display = 'none'  


  sensor_um_d.style.display = 'none'
   sensor_dois_d.style.display = 'block'

  nome_cozinha_selecionada.innerHTML = `D`
  sensor_selecionado.innerHTML = `Dois`
  inicio_vazamento.innerHTML = `Sem vazamentos recentes`
  inicio_vazamento.style.color = 'green'
  imagem_status.innerHTML = `<img class='leak_status' src="./assets/leak_azul.png">`
  status_mensagem.innerHTML = `Nenhum vazamento ativo, ambiente seguro!`
   status_mensagem.style.backgroundColor = 'rgba(30, 105, 30, 0.479)'

}

// lógica navegar entre os sensores cozinha E
function sensorUmCozinhaE() {
  container_sensores.style.display = 'none'
  container_dash.style.display = 'flex'
  box_sensores_a.style.display = 'none'
  box_sensores_b.style.display = 'none'
  box_sensores_c.style.display = 'none'
  box_sensores_d.style.display = 'none'
  box_sensores_e.style.display = 'flex'


  scroll_um_e.style.backgroundColor = '#D9D9D9'
  scroll_um_e.style.width = '73%'
  scroll_um_e.style.height = '8vw'
  scroll_um_e.style.border = '2px solid #002E52'

  scroll_dois_e.style.backgroundColor = 'white'
  scroll_dois_e.style.width = '80%'
  scroll_dois_e.style.height = '10vw'
  scroll_dois_e.style.border = 'none'

scroll_cozinhas.style.margin = '1vw 1vw 0 0'
  section_sensores.style.display = 'flex'
  scroll_cozinhas.style.display = 'flex'


  sensores_b.style.display = 'none'
 sensores_a.style.display = 'none'  
 sensores_c.style.display = 'none'  
 sensores_d.style.display = 'none'  
 sensores_e.style.display = 'block'  


  sensor_um_e.style.display = 'block'
   sensor_dois_e.style.display = 'none'

  nome_cozinha_selecionada.innerHTML = `E`
  sensor_selecionado.innerHTML = `Um`
  inicio_vazamento.innerHTML = `Sem vazamentos recentes`
  inicio_vazamento.style.color = 'green'
  imagem_status.innerHTML = `<img class='leak_status' src="./assets/leak_azul.png">`
  status_mensagem.innerHTML = `Nenhum vazamento ativo, ambiente seguro!`
   status_mensagem.style.backgroundColor = 'rgba(30, 105, 30, 0.479)'

}
function sensorDoisCozinhaE() {
  container_sensores.style.display = 'none'
  container_dash.style.display = 'flex'

  scroll_dois_e.style.backgroundColor = '#D9D9D9'
  scroll_dois_e.style.width = '73%'
  scroll_dois_e.style.height = '8vw'
  scroll_dois_e.style.border = '2px solid #002E52'

  scroll_um_e.style.backgroundColor = 'white'
  scroll_um_e.style.width = '80%'
  scroll_um_e.style.height = '10vw'
  scroll_um_e.style.border = 'none'

scroll_cozinhas.style.margin = '1vw 1vw 0 0'
  box_sensores_a.style.display = 'none'
  box_sensores_b.style.display = 'none'
  box_sensores_c.style.display = 'none'
  box_sensores_d.style.display = 'none'
  box_sensores_e.style.display = 'flex'

  section_sensores.style.display = 'flex'
  scroll_cozinhas.style.display = 'flex'


  sensores_b.style.display = 'none'
 sensores_a.style.display = 'none'  
 sensores_c.style.display = 'none'  
 sensores_d.style.display = 'none'  
 sensores_e.style.display = 'block'  


  sensor_um_e.style.display = 'none'
   sensor_dois_e.style.display = 'block'

  nome_cozinha_selecionada.innerHTML = `E`
  sensor_selecionado.innerHTML = `Dois`
  inicio_vazamento.innerHTML = `Sem vazamentos recentes`
  inicio_vazamento.style.color = 'green'
  imagem_status.innerHTML = `<img class='leak_status' src="./assets/leak_azul.png">`
  status_mensagem.innerHTML = `Nenhum vazamento ativo, ambiente seguro!`
   status_mensagem.style.backgroundColor = 'rgba(30, 105, 30, 0.479)'

}


// SENSORES COZINHA E

const linha_um_e = document.getElementById('chart_linha_um_e');

new Chart(linha_um_e, {
  type: 'line',
  data: {
    labels: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00'],
    datasets: [
      {
        label: 'Presença de Gás',
        data: [0, 0, 0, 0, 0, 0, 0],
        borderColor: 'green',
        backgroundColor: 'green',
        borderWidth: 1
      },
      {
        label: 'Limite de Segurança (2%)',
        data: [2, 2, 2, 2, 2, 2, 2],
        borderColor: 'red',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        borderWidth: 3,
        borderDash: [5, 5],
        pointRadius: 0
      }, {
        label: 'Limite de Segurança (0.1%)',
        data: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        borderWidth: 3,
        borderDash: [5, 5],
        pointRadius: 0
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 3,
        title: {
          display: true,
          text: 'Quantidade de Gás'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Horário'
        }
      }
    }
  }
});



const linha_dois_e = document.getElementById('chart_linha_dois_e');

new Chart(linha_dois_e, {
  type: 'line',
  data: {
    labels: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00'],
    datasets: [
      {
        label: 'Presença de Gás',
        data: [0, 0, 0, 0, 0, 0, 0],
        borderColor: 'green',
        backgroundColor: 'green',
        borderWidth: 1
      },
      {
        label: 'Limite de Segurança (2%)',
        data: [2, 2, 2, 2, 2, 2, 2],
        borderColor: 'red',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        borderWidth: 3,
        borderDash: [5, 5],
        pointRadius: 0
      }, {
        label: 'Limite de Segurança (0.1%)',
        data: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        borderWidth: 3,
        borderDash: [5, 5],
        pointRadius: 0
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 3,
        title: {
          display: true,
          text: 'Quantidade de Gás'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Horário'
        }
      }
    }
  }
});
