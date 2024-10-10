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