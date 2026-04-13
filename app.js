// 1
// const path = require('path');

// // Exibe o caminho da pasta onde o arquivo está
// console.log(__dirname);

// 2
// const path = require('path');

// // Cria o caminho completo unindo a pasta atual ao nome do arquivo
// const caminhoArquivo = path.join(__dirname, 'atendimentos.txt');

// console.log(caminhoArquivo);

// 3
// const fs = require('fs');
// const path = require('path');

// const caminhoArquivo = path.join(__dirname, 'atendimentos.txt');

// // Escreve o conteúdo no arquivo de forma síncrona
// fs.writeFileSync(caminhoArquivo, 'Cliente: Ana | Serviço: Troca de teclado');

// console.log('Arquivo criado.');

// 4
// const fs = require('fs');
// const path = require('path');

// const caminhoArquivo = path.join(__dirname, 'atendimentos.txt');

// // Lê o arquivo usando a codificação utf-8 para retornar texto legível
// const conteudo = fs.readFileSync(caminhoArquivo, 'utf-8');

// console.log(conteudo);

// 5
// const fs = require('fs');
// const path = require('path');

// const caminhoArquivo = path.join(__dirname, 'atendimentos.txt');

// // Ao usar writeFileSync novamente, o registro da Ana será apagado
// fs.writeFileSync(caminhoArquivo, 'Cliente: Bruno | Serviço: Impressora');

// console.log('Novo registro salvo.');

// 6
// const fs = require('fs');
// const path = require('path');

// const caminhoArquivo = path.join(__dirname, 'atendimentos.txt');

// // O \n serve para garantir que o novo registro comece em uma nova linha
// fs.appendFileSync(caminhoArquivo, '\nCliente: Carlos | Serviço: Formatação');

// console.log('Registro adicionado.');

//7
// const fs = require('fs');
// const path = require('path');

// // O path.join agora inclui a pasta 'registros' no caminho
// const caminhoArquivo = path.join(__dirname, 'registros', 'atendimentos.txt');

// // Grava o arquivo dentro da nova pasta
// fs.writeFileSync(caminhoArquivo, 'Cliente: Daniela | Serviço: Atualização\n');

// console.log('Arquivo salvo na pasta registros.');

// 8
// const fs = require('fs');
// const path = require('path');

// // Define o caminho exato onde o arquivo foi salvo no passo anterior
// const caminhoArquivo = path.join(__dirname, 'registros', 'atendimentos.txt');

// // Lê o arquivo
// const conteudo = fs.readFileSync(caminhoArquivo, 'utf-8');

// console.log('Histórico:');
// console.log(conteudo);

// Desafio Final 
const fs = require('fs');
const path = require('path');

// 1. Organizando os caminhos
const pastaRegistros = path.join(__dirname, 'registros');
const caminhoArquivo = path.join(pastaRegistros, 'atendimentos.txt');

// 2. Garantindo que a pasta 'registros' exista (evita erro se a pasta não estiver lá)
if (!fs.existsSync(pastaRegistros)) {
    fs.mkdirSync(pastaRegistros);
}

// 3. Adicionando os atendimentos (sem apagar os antigos)
// Usamos \n no final de cada string para que fiquem em linhas separadas
fs.appendFileSync(caminhoArquivo, 'Cliente: Felipe | Serviço: Driver\n');
fs.appendFileSync(caminhoArquivo, 'Cliente: Gabriela | Serviço: Backup\n');
fs.appendFileSync(caminhoArquivo, 'Cliente: Hugo | Serviço: Rede\n');

console.log('Registros salvos com sucesso na pasta "registros".');
console.log('---');

// 4. Lendo todo o conteúdo para exibir o histórico
const historicoCompleto = fs.readFileSync(caminhoArquivo, 'utf-8');

console.log('Histórico atualizado:');
console.log(historicoCompleto);