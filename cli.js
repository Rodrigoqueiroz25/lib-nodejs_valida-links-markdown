import obtemArquivo from "./index.js";
import chalk from 'chalk';
import validaArray from "./http-validacoes.js";

const args = process.argv;

async function processaTexto(args){
    let caminho;
    let resultado;

    if(!args.includes('--path')){
        console.log(chalk.yellow("usage node cli.js [--validar] --path caminho/do/arquivo/completo"));
        return;
    }
    
    caminho = args[args.indexOf('--path') + 1];
    try{
        resultado = await obtemArquivo(caminho);
        if(args.includes('--validar')){
            console.log(chalk.yellow('links validados'), await validaArray(resultado));
        }
        else {
            console.log(chalk.yellow('lista de links'), resultado);
        }
    }
    catch(erro){
        console.log(chalk.yellow("usage node cli.js [--validar] --path caminho/do/arquivo/completo"));
        console.log(erro);
    }
        
}


processaTexto(args);
