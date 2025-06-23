describe('Página de Contato', () => {
    const DADOS_CONTATO = {
        nome: 'Victor Figueiredo',
        email: 'victorfernando.bsi@gmail.com',
        assunto: 'Automação com Cypress',
        mensagem: 'Projeto de automação completo de página WEB com cypress! Segue arquivo em anexo...'
    };

    const ARQUIVO_ANEXO = 'exemplo.txt';

    beforeEach(() => {
        cy.acessarPagina();
    });

    it('Deve validar página de contato', () => {
        cy.verificarHomePage();
        cy.navegarParaContato();
        cy.preencherFormularioContato(DADOS_CONTATO);
        cy.anexarArquivo(ARQUIVO_ANEXO);
        cy.enviarFormularioContato();
        cy.verificarMensagemContatoSucesso();
        cy.acessarPagina();
        cy.verificarHomePage();
    });
});

