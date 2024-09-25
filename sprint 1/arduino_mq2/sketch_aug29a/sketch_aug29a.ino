// Declarando o pino analógico que o sensor está conectado no Arduino UNO
const int PINO_MQ2 = A2;

// Declarando valores mínimos e máximos de leitura
const int VALOR_MINIMO = 100;
const int VALOR_MAXIMO = 1000;

void setup() {
  Serial.begin(9600);
}

void loop() {
  // Lendo os dados do sensor e atribuindo à uma variável
  int valor_sensor = analogRead(PINO_MQ2);

  // Conversão da leitura para porcentagem
  float porcentagem = ((float)(valor_sensor - VALOR_MINIMO) / (VALOR_MAXIMO - VALOR_MINIMO)) * 100;

  // Fazendo alguns tratamentos de dados, para caso a conversão dê 
  // menos que 0% (nesse caso setamos a porcentagem para 0)
  // ou mais que 100% (nesse caso setamos a porcentagem para 100)
  // uma vez que não existe nem porcentagem negativa, nem maior que 100
  if(porcentagem < 0){
    porcentagem = 0;
  }else if(porcentagem > 100){
    porcentagem = 100;
  }

  // Exibindo as mensagens com os valores
  Serial.print("Gás_Mínimo:");
  Serial.print(0);
  Serial.print(",");
  Serial.print("Gás_Máximo:");
  Serial.print(15);
  Serial.print(",");
  Serial.print("Gás_Atual:");
  Serial.println(porcentagem);

  // Dando um intervalo de 2s (2000ms) para que a função loop() seja executada novamente
  delay(500);
}
