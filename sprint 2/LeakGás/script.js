    function logar(){
        var usuario = "admin";
        var senha = "urubu100";

        var novaAnchor = ``;
        if (usuario == username.value && senha == password.value){
            window.open("home.html");
            window.localStorage.setItem("logado", "true");
        }
    }
    
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
        var patrimonial =  gastos_totais;
    
    
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
                                  <br>Com um consumo de queimador de ${consumo_queimador}Kg/h, utilizando-o por ${tempo_uso} minutos,
                                  usando um botijão de ${capacidade_botijao}kg e pagando em média R$${preco_botijao}
                                  <br>A estimativa de economia, considerando apenas um queimador e um botijão de ${capacidade_botijao}:
                                  <br>É de R$${(gasto_ano_25) - (gasto_ano)} com a redução de 25% do vazamento por ano`
                                  
        // Exibindo o resultado de multas e prejuízos em caso de acidente
        div_resultado.innerHTML += `<hr>
                                   <h3> Gastos com multas e prejuízo de equipamentos em caso de acidente: </h3>
                                   <br> Caso ocorra um acidente, a estimativa de gastos relacionados à
                                   prejuízo e multas do seu estabelecimento gira em torno de: R$${patrimonial}.`
    
        div_resultado.innerHTML += `<hr><br>
                                    Com a LeakGas, caso haja vazamento avisariamos você em menos de 5 minutos, podendo evitar todos esses gastos adicionais.`
                                
      }