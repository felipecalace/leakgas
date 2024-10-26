var sensorAnalogico = new Chart(document.getElementById('sensorAnalogico').getContext('2d'), {
    type: 'line',
    data: {
        datasets: [{
            label: 'Quantidade de Gás',
            borderColor: '#63B1BC',
            backgroundColor: '#ED145B'
        }]
    },
    options: {
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                title: {
                    display: true,
                    text: '(%)'
                },
                beginAtZero: true,
            },
        },
    }
});

var paginacao = {};
var tempo = {};

function obterDados(grafico, endpoint) {
    fetch('http://localhost:3300/sensores/' + endpoint)
        .then(response => response.json())
        .then(valores => {
            if (paginacao[endpoint] == null) {
                paginacao[endpoint] = 0;
            }
            if (tempo[endpoint] == null) {
                tempo[endpoint] = 0;
            }

            var ultimaPaginacao = paginacao[endpoint];
            paginacao[endpoint] = valores.length;
            valores = valores.slice(ultimaPaginacao);

            valores.forEach((valor) => {
                if (grafico.data.labels.length == 10 && grafico.data.datasets[0].data.length == 10) {
                    grafico.data.labels.shift();
                    grafico.data.datasets[0].data.shift();
                }

                grafico.data.labels.push(tempo[endpoint]++);
                grafico.data.datasets[0].data.push(parseFloat(valor));
                grafico.update();
            });
        })
        .catch(error => console.error('Erro ao obter dados:', error));
}

setInterval(() => {
    obterDados(sensorAnalogico, 'analogico')
}, 1000);

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

