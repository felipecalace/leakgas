
    function calcular(){
        // 'Resetar' o conteúdo da div caso a gente queira fazer cálculos em sequência
        div_resultado.innerHTML = ''
    
        // Recebendo os valores dos inputs para cálculo de vazamento
        var consumo_queimador = Number(input_queimador.value);
        var tempo_uso = Number(input_minutos.value);
        var capacidade_botijao = Number(input_capacidade.value);
        var preco_botijao = Number(input_preco.value);
    
        // Recebendo os valores dos inputs para cálculo de multas e prejuízos
        var m2 = Number(inp_m2.value);
        var multaM2 = (5 * 1,1 * m2 * 35.36)
    
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
        var gasto_dia = (((tempo_uso/60) * consumo_queimador) / capacidade_botijao) * preco_botijao;
        var gasto_mes = gasto_dia * 30;
        var gasto_ano = gasto_mes * 12;
    
        // Considerando que o gás esteja vazando e que o vazamento cause um aumento de 25%
        var consumo_queimador_25 = consumo_queimador + (consumo_queimador * 0.25);
        var gasto_dia_25 = (((tempo_uso/60) * consumo_queimador_25) / capacidade_botijao) * preco_botijao;
        var gasto_mes_25 = gasto_dia_25 * 30;
        var gasto_ano_25 = gasto_mes_25 * 12;


        
    
        div_resultado.style.display =  'block'
        // Exibindo o resultado dos gastos adicionais esperados
        div_resultado.innerHTML += `
                                  <h3> Gastos adicionais relacionados à vazamento: </h3>
                                  <br>Com um consumo de queimador de <span>${consumo_queimador} Kg/h</span> , utilizando-o por <span>${tempo_uso}</span>  minutos,
                                  usando um botijão de <span>${capacidade_botijao}  kg</span> e pagando em média <span>R$${preco_botijao}</span> 
                                  <br>A estimativa de economia, considerando apenas um queimador e um botijão de <span>${capacidade_botijao}</span> :
                                <br>É de <span>R$${(gasto_ano_25) - (gasto_ano)}</span> com a redução de 25% do vazamento por ano`
                                  
        // Exibindo o resultado de multas e prejuízos em caso de acidente
        div_resultado.innerHTML += `
        <br><br>
                                   <h3> Gastos com multas em caso de acidente: </h3>
                                   <br> Caso ocorra um acidente, a estimativa de gastos relacionados à
                                  multas do seu estabelecimento poderá chegar em torno de: <span>R$${patrimonial} <br><br>
                                  Isso sem contar com o prejuízo em relação à infraestrutura e investimentos relacionados à equipamentos! <br>
                                  
                                  
                                  </span>`
    
        div_resultado.innerHTML += `<br>
                                    Com a LeakGas, caso haja vazamento avisariamos você <span>em menos de 5 minutos</span>, podendo evitar todos esses gastos adicionais.`
                                
      }

      const linha = document.getElementById('chart_linha');

new Chart(linha, {
    type: 'line',
    data: {
      labels: ['06:00','07:00','08:00', '09:00', '10:00', '11:00', '12:00'],
      datasets: [{
        
        label: 'Presença de Gás',
        data: [0, 0, 0, 0, 10, 15, 15],
        borderColor: '#E5446D',
        backgroundColor: 'red',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });




 // PARA NAVEGAR ENTRE A DASHBOARD

  function cozinhaB(){
    todas_dash.style.display = 'none';
    dash_cozinhas.style.display = 'flex';
    cozinha_selecionada.innerHTML = ` B`
    inicio_vazamento.innerHTML = `10:00`
    termino_vazamento.innerHTML = `ATIVO`
    
    dashboardB.style.display = 'flex';
    dashboard_safe.style.display = 'none';
  }

  function cozinhaA(){
    todas_dash.style.display = 'none';
    dash_cozinhas.style.display = 'flex';
    dashboardB.style.display = 'none';
    dashboard_safe.style.display = 'flex';
    
    cozinha_selecionada.innerHTML = ` A`
    inicio_vazamento.innerHTML = `Sem vazamentos recentes`
    termino_vazamento.innerHTML = `Sem vazamentos recentes`
  }
  function cozinhaC(){
    todas_dash.style.display = 'none';
    dash_cozinhas.style.display = 'flex';
    dashboardB.style.display = 'none';
    dashboard_safe.style.display = 'flex';
    
    cozinha_selecionada.innerHTML = ` C`
    inicio_vazamento.innerHTML = `Sem vazamentos recentes`
    termino_vazamento.innerHTML = `Sem vazamentos recentes`
  }
  function cozinhaD(){
    todas_dash.style.display = 'none';
    dash_cozinhas.style.display = 'flex';
    dashboardB.style.display = 'none';
    dashboard_safe.style.display = 'flex';
    
    cozinha_selecionada.innerHTML = ` D`
    inicio_vazamento.innerHTML = `Sem vazamentos recentes`
    termino_vazamento.innerHTML = `Sem vazamentos recentes`
  }
  function cozinhaE(){
    todas_dash.style.display = 'none';
    dash_cozinhas.style.display = 'flex';
    dashboardB.style.display = 'none';
    dashboard_safe.style.display = 'flex';
    
    cozinha_selecionada.innerHTML = ` E`
    inicio_vazamento.innerHTML = `Sem vazamentos recentes`
    termino_vazamento.innerHTML = `Sem vazamentos recentes`
  }

  const linha_safe = document.getElementById('chart_linha_safe');

new Chart(linha_safe, {
    type: 'line',
    data: {
      labels: ['06:00','07:00','08:00', '09:00', '10:00', '11:00', '12:00'],
      datasets: [{
        
        label: 'Presença de Gás',
        data: [0, 0, 0, 0, 0, 0, 0],
        borderColor: 'green',
        backgroundColor: 'green',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


  // lógica para o login

  var logado = false;
  



  function logar(){

    var email_login = ipt_email_login.value 
    var senha_login = ipt_senha_login.value

    if(email_login == 'admin@admin' && senha_login == 'admin'){
      localStorage.setItem("logado", "true"); // Armazena o valor "true" no localStorage
      window.location.href = 'dashboard.html'

      p_mensagem_login.innerHTML = ''
    }else{
      p_mensagem_login.innerHTML = `&times; Usuário ou senha incorretos, tente novamente!<br><br>`
    }
  }
// Função que verifica algo quando a página é carregada
function verificarLogin() {
  
  if (localStorage.getItem("logado") !== "true") {
    box_loginCadastro.style.display = 'none';
  } 


  if (localStorage.getItem("logado") !== "true") {
    alert("Você precisa estar logado para acessar essa página.");
    window.location.href = 'login.html'; // Redireciona para a página de login, se não estiver logado
}
}




// Adiciona um listener para o evento 'DOMContentLoaded'
document.addEventListener('DOMContentLoaded', verificarLogin);



/*LÓGICA DO GUEST*/
// Obtendo elementos do DOM
const modal = document.getElementById('modal');
const guestCircle = document.getElementById('guestCircle');
const spanClose = document.getElementsByClassName('close')[0];

// Quando o mouse entra no círculo do guest, o modal é aberto
guestCircle.addEventListener('mouseover', function() {
    modal.style.display = 'block';
});

// Quando o mouse sai do círculo do guest, o modal é fechado
guestCircle.addEventListener('mouseout', function() {
    modal.style.display = 'none';
});

// Também fecha o modal ao clicar no "X"
spanClose.onclick = function() {
    modal.style.display = 'none';
};

// Quando o usuário clica fora do modal, ele também é fechado
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}