//A - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.

const fs = require('fs').promises;
const { join } = require('path');

async function readingJson () {

        const readSimpsons = await fs.readFile(join(__dirname,'./simpsons.json', 'utf-8'));
        const simp = JSON.parse(readSimpsons);
        const strings = simp.map(({ id, name }) => `${id} - ${name}`);
        strings.forEach(element => console.log(element));
};

async function main () {
    await readingJson();
}

main()

//B - Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo “id não encontrado”.