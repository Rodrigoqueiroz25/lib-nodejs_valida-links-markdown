import chalk from 'chalk';
import fs from 'fs';


function trataErro(erro){
    throw new Error(chalk.red(erro.code, ': Não há arquivo válido no caminho!'));
}

function extraiLinks(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResult = [];
    let temp;
    while((temp = regex.exec(texto)) !== null){
        arrayResult.push({
            [temp[1]]: temp[2]
        })
    }

    return arrayResult.length === 0 ? 'não há links' : arrayResult ;
}

export default async function obtemArquivo(caminho){
    try {
        const texto = await fs.promises.readFile(caminho, 'utf-8');
        return extraiLinks(texto);    
    } catch (error) {
        trataErro(error);
    }
}    

//obtemArquivo('./arquivos/texto1.md')

