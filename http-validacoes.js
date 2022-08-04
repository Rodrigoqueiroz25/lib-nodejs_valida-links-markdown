
import fetch from 'node-fetch';


async function checaStatus(arrayURLs){
    try{
        const arrayStatus = await Promise
        .all(arrayURLs
            .map(async (url) => {
            const res = await fetch(url);
            return `${res.status} - ${res.statusText}`;
        }))
        return arrayStatus;
    }
    catch(erro){
        console.error(erro);
    }
}

export default async function validaArray(arrayLinks){
    const links = geraArrayURLs(arrayLinks);
    const statusLinks = await checaStatus(links);
    const resultados = arrayLinks.map((objeto, index) => ({
        ...objeto, 
        status: statusLinks[index]
    }))
    return resultados;
}


function geraArrayURLs(arrayLinks){
    return arrayLinks.map(objeto => Object.values(objeto).join());
}
