/*
  1) Observe o trecho de código:

  int INDICE = 12, SOMA = 0, K = 1;

  enquanto K < INDICE faça

  { K = K + 1; SOMA = SOMA + K;}
  
  imprimir(SOMA);
  
  Ao final do processamento, qual será o valor da variável SOMA?
*/

let INDICE = 12,
  SOMA = 0,
  K = 1;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log(`Questão 1: ${SOMA}`); // Retorna 77

// Resposta => Soma === 77

/*
  2) Descubra a lógica e complete o próximo elemento:

  a) 1, 3, 5, 7, ___

  b) 2, 4, 8, 16, 32, 64, ____

  c) 0, 1, 4, 9, 16, 25, 36, ____

  d) 4, 16, 36, 64, ____

  e) 1, 1, 2, 3, 5, 8, ____

  f) 2, 10, 12, 16, 17, 18, 19, ____
*/

// a) Sequência: 1, 3, 5, 7, ___
function nextInSequenceA(sequence) {
  const difference = sequence[1] - sequence[0]; // Diferença comum
  return sequence[sequence.length - 1] + difference;
}

// b) Sequência: 2, 4, 8, 16, 32, 64, ____
function nextInSequenceB(sequence) {
  const ratio = sequence[1] / sequence[0]; // Razão comum
  return sequence[sequence.length - 1] * ratio;
}

// c) Sequência: 0, 1, 4, 9, 16, 25, 36, ____
function nextInSequenceC(sequence) {
  const nextIndex = sequence.length; // Índice do próximo número
  return nextIndex * nextIndex;
}

// d) Sequência: 4, 16, 36, 64, ____
function nextInSequenceD(sequence) {
  const nextIndex = sequence.length + 2; // baseado nos quadrados dos números naturais a partir de 2
  return nextIndex * nextIndex;
}

// e) Sequência: 1, 1, 2, 3, 5, 8, ____
function nextInSequenceE(sequence) {
  return sequence[sequence.length - 1] + sequence[sequence.length - 2]; // Soma dos dois últimos números
}

// f) Sequência: 2, 10, 12, 16, 17, 18, 19, ____
function nextInSequenceF(sequence) {
  return sequence[sequence.length - 1] + 1;
}

const sequenceA = [1, 3, 5, 7];
const sequenceB = [2, 4, 8, 16, 32, 64];
const sequenceC = [0, 1, 4, 9, 16, 25, 36];
const sequenceD = [4, 16, 36, 64];
const sequenceE = [1, 1, 2, 3, 5, 8];
const sequenceF = [2, 10, 12, 16, 17, 18, 19];

console.log(`Questão 2 a): Próximo elemento em A: ${nextInSequenceA(sequenceA)}`); // 9
console.log(`Questão 2 b): Próximo elemento em B: ${nextInSequenceB(sequenceB)}`); // 128
console.log(`Questão 2 c): Próximo elemento em C: ${nextInSequenceC(sequenceC)}`); // 49
console.log(`Questão 2 d): Próximo elemento em D: ${nextInSequenceD(sequenceD)}`); // 100
console.log(`Questão 2 e): Próximo elemento em E: ${nextInSequenceE(sequenceE)}`); // 13
console.log(`Questão 2 f): Próximo elemento em F: ${nextInSequenceF(sequenceF)}`); // 20

// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora de todos os dias de um ano, faça um programa, na linguagem que desejar, que calcule e retorne:

// - O menor valor de faturamento ocorrido em um dia do ano;
// - O maior valor de faturamento ocorrido em um dia do ano;
// - Número de dias no ano em que o valor de faturamento diário foi superior à média anual.

// a) Considerar o vetor já carregado com as informações de valor de faturamento.

// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média.

// c) Utilize o algoritmo mais veloz que puder definir.

// Os dados dessa variável foi gerado pelo chatGPT
const dailyRevenue = [
  0, 200, 0, 150, 300, 0, 0, 250, 0, 400, 0, 0, // Janeiro
  100, 0, 0, 0, 200, 0, 0, 150, 0, 300, 0, 0, // Fevereiro
  0, 0, 250, 0, 400, 0, 0, 300, 0, 0, 0, 200, // Março
  0, 150, 0, 0, 250, 0, 0, 400, 0, 0, 300, 0, // Abril
  200, 0, 0, 150, 0, 250, 0, 0, 400, 0, 0, 0, // Maio
  300, 0, 0, 200, 0, 0, 150, 0, 0, 250, 0, 0, // Junho
  400, 0, 0, 300, 0, 0, 200, 0, 0, 150, 0, 0, // Julho
  250, 0, 0, 0, 400, 0, 0, 300, 0, 0, 200, 0, // Agosto
  0, 150, 0, 0, 250, 0, 0, 400, 0, 0, 300, 0, // Setembro
  0, 200, 0, 0, 0, 150, 0, 0, 250, 0, 0, 400, // Outubro
  0, 0, 300, 0, 0, 200, 0, 0, 150, 0, 0, 250, // Novembro
  0, 0, 400, 0, 300, 0, 0, 200, 0, 0, 150, 0   // Dezembro
];

function analyzeRevenue(dailyRevenue) {
  // Está variável irá filtrar os dias com faturamento (excluindo os dias com faturamento zero)
  const daysWithRevenue = dailyRevenue.filter((value) => value > 0);

  // Se não houver dias com faturamento mostramos uma mensagem e encerramos a função
  if (daysWithRevenue.length === 0) {
    console.log("Questão 3: Não há dias com faturamento para analisar.");
    return;
  }

  // Encontramos o menor valor de faturamento nos dias com receita
  const minRevenue = Math.min(...daysWithRevenue);

  // Encontramos o maior valor de faturamento nos dias com receita
  const maxRevenue = Math.max(...daysWithRevenue);

  // Calculamos a média de faturamento anual
  const totalRevenue = daysWithRevenue.reduce((acc, value) => acc + value, 0);
  const annualAverage = totalRevenue / daysWithRevenue.length;

  // Esta variável irá armazenar quantos dias tiveram um faturamento superior a média anual
  const daysAboveAverage = daysWithRevenue.filter(
    (value) => value > annualAverage
  ).length;

  // Aqui estão os logs com os valores do faturamento anual
  console.log(
    `Questão 3 a): O menor valor de faturamento ocorrido em um dia do ano foi: ${minRevenue}`
  );
  console.log(
    `Questão 3 b): O maior valor de faturamento ocorrido em um dia do ano foi: ${maxRevenue}`
  );
  console.log(
    `Questão 3 c): Número de dias em que o faturamento diário foi superior à média anual: ${daysAboveAverage}`
  );
}

// Chamando a função passando o vetor de faturamento ele irá mostrar os logs com os valores.
analyzeRevenue(dailyRevenue);

/*
  4) Banco de dados

  Uma empresa solicitou a você um aplicativo para manutenção de um cadastro de clientes. Após a reunião de definição dos requisitos, as conclusões foram as seguintes:

  - Um cliente pode ter um número ilimitado de telefones;
  - Cada telefone de cliente tem um tipo, por exemplo: comercial, residencial, celular, etc. O sistema deve permitir cadastrar novos tipos de telefone;
  - A princípio, é necessário saber apenas em qual estado brasileiro cada cliente se encontra. O sistema deve permitir cadastrar novos estados;

  Você ficou responsável pela parte da estrutura de banco de dados que será usada pelo aplicativo. Assim sendo:

  - Proponha um modelo lógico para o banco de dados que vai atender a aplicação. Desenhe as tabelas necessárias, os campos de cada uma e marque com setas os relacionamentos existentes entre as tabelas;
  - Aponte os campos que são chave primária (PK) e chave estrangeira (FK);
  - Faça uma busca utilizando comando SQL que traga o código, a razão social e o(s) telefone(s) de todos os clientes do estado de São Paulo (código “SP”);
*/

/*
  Resposta da questão 4

  Tabelas:
    Cliente: id (PK), nome, estado_id (FK)
    Telefone: id (PK), numero, tipo_id (FK), cliente_id (FK)
    TipoTelefone: id (PK), descricao
    Estado: id (PK), sigla, nome

  Codigo SQL:
    SELECT c.ID AS ClienteID, 
       c.RazaoSocial, 
       t.Numero AS Telefone
    FROM Clientes c
    JOIN Estados e ON c.EstadoID = e.ID
    JOIN Telefones t ON c.ID = t.ClienteID
    WHERE e.Sigla = 'SP';
    
    // Consulta SQL que lista clientes de SP e seus telefones, excluindo clientes sem telefone.
*/

/*
  5) Dois veículos, um carro e um caminhão, saem respectivamente de cidades opostas pela mesma rodovia. O carro, de Ribeirão Preto em direção a Barretos, a uma velocidade constante de 90 km/h, e o caminhão, de Barretos em direção a Ribeirão Preto, a uma velocidade constante de 80 km/h. Quando eles se cruzarem no percurso, qual estará mais próximo da cidade de Ribeirão Preto?

  a) Considerar a distancia de 125km entre a cidade de Ribeirão Preto <-> Barretos.
  b) Considerar 3 pedágios como obstáculo e que o carro leva 5 minutos a mais para passar em cada um deles, pois ele não possui dispositivo de cobrança de pedágio.
  c)Explique como chegou no resultado.
*/

const distanceBetweenCities = 125; // Distancia entre Ribeirão Preto e Barretos em km
const carSpeed = 90; // Velocidade do carro em km/h
const truckSpeed = 80; // Velocidade do caminhão em km/h
const numberOfTollBooths = 3; // Número de pedágios
const tollBoothDelay = 5; // Tempo adicional por pedágio em minutos

// Calcula a velocidade relativa
const relativeSpeed = carSpeed + truckSpeed; // km/h

// Calcula o tempo para o cruzamento
const crossingTimeHours = distanceBetweenCities / relativeSpeed; // Horas
const crossingTimeMinutes = crossingTimeHours * 60; // Convertendo para minutos

// Ajustando o tempo do carro pelo atraso nos pedágios
const totalDelay = numberOfTollBooths * tollBoothDelay; // Total de atraso em minutos
const adjustedCarTimeMinutes = crossingTimeMinutes + totalDelay; // Tempo total para o carro

// Calculando as distancias percorridas
const carDistance = (carSpeed * (adjustedCarTimeMinutes / 60)) / 60; // Distancia percorrida pelo carro
const truckDistance = (truckSpeed * (crossingTimeMinutes / 60)) / 60; // Distancia percorrida pelo caminhão

// Calculando a distancia de Ribeirão Preto para cada veículo
const carDistanceFromRibeiraoPreto = carDistance;
const truckDistanceFromRibeiraoPreto = distanceBetweenCities - truckDistance;

// Resultado
console.log(
  `Questão 5 a): Distancia do carro a partir de Ribeirão Preto: ${carDistanceFromRibeiraoPreto.toFixed(
    2
  )} km`
);
console.log(
  `Questão 5 b): Distancia do caminhão a partir de Ribeirão Preto: ${truckDistanceFromRibeiraoPreto.toFixed(
    2
  )} km`
);

// Verificando qual veiculo esta mais próximo de Ribeirão Preto
const closerVehicle =
  carDistanceFromRibeiraoPreto < truckDistanceFromRibeiraoPreto
    ? "Carro"
    : "Caminhão";
console.log(`Questão 5 c): O carro está mais próximo de Ribeirão Preto porque, apesar de ter uma velocidade maior, o tempo adicional causado pelos pedágios faz com que ele percorra uma distância menor antes do encontro.`);
console.log(`Questão 5: O veículo mais próximo de Ribeirão Preto é o ${closerVehicle}.`);
