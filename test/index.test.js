
import obtemArquivo from '../index.js';

const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('pegaArquivo::', () => {
    it('deve ser uma função', () => {
        expect(typeof obtemArquivo).toBe('function');
    })
    it('deve retornar array com resultados', async () => {
        const result = await obtemArquivo('test/arquivos/texto1.md');
        expect(result).toEqual(arrayResult);
    })
    it('deve retornar mensagem informando que "não há links"', async () => {
        const result = await obtemArquivo('test/arquivos/texto2.md');
        expect(result).toEqual("não há links");
    })
    it('deve lançar um erro na falta de arquivo', async () => {
        await expect(obtemArquivo('test/arquivos'))
            .rejects.toThrow("EISDIR : Não há arquivo válido no caminho!")
    })
    it('deve resolver a função com sucesso', async () => {
        await expect(obtemArquivo('test/arquivos/texto1.md'))
            .resolves.toEqual(arrayResult)
    })

})


