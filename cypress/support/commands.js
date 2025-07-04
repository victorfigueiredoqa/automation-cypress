import 'cypress-file-upload';

// Commands para acessar a página inicial
Cypress.Commands.add('acessarPagina', () => {
  cy.visit('/')
})

// Commands para preencher o cadastro
Cypress.Commands.add('preencherCadastro', (nome, email, senha) => {
  cy.get('[data-qa="signup-name"]').type(nome);
  cy.get('[data-qa="signup-email"]').type(email);
  cy.get('[data-qa="signup-button"]').click();

  cy.get('#id_gender1').click();
  cy.get('[data-qa="name"]').should('have.value', nome);
  cy.get('[data-qa="email"]').should('have.value', email);
  cy.get('[data-qa="password"]').type(senha);
  cy.get('#days').select('11');
  cy.get('#months').select('February');
  cy.get('#years').select('1989');
  cy.get('label[for="newsletter"]').click();
  cy.get('label[for="optin"]').click();

  cy.get('[data-qa="first_name"]').type('Victor');
  cy.get('[data-qa="last_name"]').type('Victor');
  cy.get('[data-qa="company"]').type('Victor QA Automation');
  cy.get('[data-qa="address"]').type('Rua Josino Antunes da Silva');
  cy.get('[data-qa="address2"]').type('Nº 95. Curva do Rio');
  cy.get('[data-qa="country"]').select('United States');
  cy.get('[data-qa="state"]').type('Minas Gerais');
  cy.get('[data-qa="city"]').type('Unai');
  cy.get('[data-qa="zipcode"]').type('38.620-874');
  cy.get('[data-qa="mobile_number"]').type('(38) 9.9970-6879');
  cy.get('[data-qa="create-account"]').click();
});

// Commands para preencher o login
Cypress.Commands.add('preencherLogin', (email, senha) => {
  cy.get('[data-qa="login-email"]').type(email);
  cy.get('[data-qa="login-password"]').type(senha);
  cy.get('[data-qa="login-button"]').click();
});

// Commands para preencher o usuário e email
Cypress.Commands.add('preencherUsuarioEmail', (nome, email) => {
  cy.get('[data-qa="signup-name"]').type(nome);
  cy.get('[data-qa="signup-email"]').type(email);
  cy.get('[data-qa="signup-button"]').click();
});

// Commands para navegar para a página de produtos
Cypress.Commands.add('navegarParaProdutos', () => {
  cy.get('a[href="/products"]').click();
  cy.contains('All Products').should('be.visible');
});

// Commands para buscar produto
Cypress.Commands.add('buscarProduto', (termoBusca) => {
  cy.get('#search_product').should('be.visible').type(termoBusca);
  cy.get('#submit_search').click();
  cy.contains('Searched Products').should('be.visible');
});

// Commands para verificar se o produto foi encontrado
Cypress.Commands.add('verificarProdutoEncontrado', (nomeProduto) => {
  cy.contains(nomeProduto).should('be.visible');
});

// Commands para verificar a página inicial
Cypress.Commands.add('verificarHomePage', () => {
  cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible');
});

// Commands para navegar para página de login
Cypress.Commands.add('navegarParaLogin', () => {
  cy.contains('Signup / Login').click();
  cy.contains('New User Signup!').should('be.visible');
});

// Commands para verificar a mensagem de email existente
Cypress.Commands.add('verificarMensagemEmailExistente', () => {
  cy.contains('Email Address already exist!').should('be.visible');
});

// Commands para página de produtos
Cypress.Commands.add('acessarDetalhesPrimeiroProduto', () => {
  cy.get('.product-image-wrapper').first().find('a[href^="/product_details"]').click();
});

// Commands para verificar detalhes do produto
Cypress.Commands.add('verificarDetalhesProduto', () => {
  cy.get('.product-information > h2').should('be.visible');
  cy.get('.product-information p').contains('Category').should('be.visible');
  cy.get('.product-information span span').contains('Rs. 500').should('be.visible');
  cy.get('.product-information p').contains('Availability:').should('be.visible');
  cy.get('.product-information p').contains('Condition:').should('be.visible');
  cy.get('.product-information p').contains('Brand:').should('be.visible');
});

// Commands para subscrição ao final da página
Cypress.Commands.add('realizarSubscricao', (email) => {
  cy.scrollTo('bottom');
  cy.contains('Subscription').should('be.visible');
  cy.get('#susbscribe_email').type(email);
  cy.get('#subscribe').click();
});

// Commands para subscrição na página de carrinho
Cypress.Commands.add('realizarSubscricaoCart', (email) => {
  cy.get('a[href="/view_cart"]').contains('Cart')
  cy.contains('Subscription').should('be.visible');
  cy.get('#susbscribe_email').type(email);
  cy.get('#subscribe').click();
});

// Commands para verificar a mensagem de sucesso da subscrição
Cypress.Commands.add('verificarSubscricaoSucesso', () => {
  cy.contains('You have been successfully subscribed!').should('be.visible');
});

// Commands para página de contato
Cypress.Commands.add('navegarParaContato', () => {
  cy.get('a[href="/contact_us"]').click();
  cy.get('div.contact-form > .title').should('be.visible');
});

// Commands para preencher o formulário de contato
Cypress.Commands.add('preencherFormularioContato', (dados) => {
  cy.get('[data-qa="name"]').type(dados.nome);
  cy.get('[data-qa="email"]').type(dados.email);
  cy.get('[data-qa="subject"]').type(dados.assunto);
  cy.get('[data-qa="message"]').type(dados.mensagem);
});

// Commands para anexar arquivo no formulário de contato
Cypress.Commands.add('anexarArquivo', (nomeArquivo) => {
  cy.get('input[name="upload_file"]').attachFile(nomeArquivo);
});

//Commands para enviar o formulário de contato
Cypress.Commands.add('enviarFormularioContato', () => {
  cy.get('[data-qa="submit-button"]').click();
});

// Commands para verificar a mensagem de sucesso do contato
Cypress.Commands.add('verificarMensagemContatoSucesso', () => {
  cy.contains('Success! Your details have been submitted successfully.').should('be.visible');
});

// Commands para login
Cypress.Commands.add('verificarLoginSucesso', (nomeUsuario) => {
  cy.contains('a', 'Logged in as', { timeout: 10000 })
    .should('be.visible')
    .find('b')
    .should('contain', nomeUsuario);
});

//Commands para excluir conta
Cypress.Commands.add('excluirConta', () => {
  cy.get('a[href="/delete_account"]').click();
  cy.contains('Your account has been permanently deleted!').should('be.visible');
});

// Commands para verificar login inválido
Cypress.Commands.add('verificarLoginInvalido', () => {
  cy.contains('Your email or password is incorrect!').should('be.visible');
});

// Commands para logout
Cypress.Commands.add('realizarLogout', () => {
  cy.get('a[href="/logout"]').click();
    
  cy.contains('Login to your account').should('be.visible');
});

// Commands para registro de usuário
Cypress.Commands.add('verificarCadastroSucesso', () => {
  cy.contains('Congratulations! Your new account has been successfully created!').should('be.visible');
  cy.get('[data-qa="continue-button"]').click();
});

// Commands para página de casos de teste
Cypress.Commands.add('navegarParaTestCases', () => {
  cy.contains('a[href="/test_cases"]', 'Test Cases').click();
});

// Commands para verificar a página de casos de teste
Cypress.Commands.add('verificarPaginaTestCases', () => {
  cy.get('h2.title.text-center b')
    .should('be.visible')
    .and('have.text', 'Test Cases');
});

// Commands para verificar adicionar ao carrinho
Cypress.Commands.add('addProdutoCarrinho', () => {
  cy.get('a[href="/products"]').contains(' Products').click();
  // Adiciona o primeiro produto ao carrinho (Blue Top)
  cy.get('.productinfo:contains("Blue Top")').parent().parent().trigger('mouseover');
  cy.get('a[data-product-id="1"]').filter(':visible').click();

  // Fecha o modal
  cy.get('.modal-content').should('be.visible');
  cy.contains('button', 'Continue Shopping').click();

  // Adiciona o segundo produto ao carrinho (Men Tshirt)
  cy.get('.productinfo:contains("Men Tshirt")').parent().parent().trigger('mouseover');
  cy.get('a[data-product-id="2"]').filter(':visible').click();

  // Vai para o carrinho
  cy.get('a[href="/view_cart"]').contains('View Cart').click();

  // Valida se os produtos estão no carrinho
  cy.get('a[href="/product_details/1"]').contains('Blue Top').should('be.visible');
  cy.get('a[href="/product_details/2"]').contains('Men Tshirt').should('be.visible');

  // Verificar preço, quantidade e total
  cy.get('td.cart_price > p').should('contain.text', 'Rs. 500');
  cy.get('td.cart_quantity > button.disabled').should('contain.text', '1');
  cy.get('p.cart_total_price').should('contain.text', 'Rs. 500');
});

// Commands para verificar a quantidade do produto no carrinho
Cypress.Commands.add('verificarQuantidade', () => {
  cy.get('a[href="/product_details/1"]').contains('View Product').click();
  cy.get('h2').should('contain.text', 'Blue Top');
  cy.get('.product-information span').contains('Rs. 500').should('be.visible');
  cy.get('.product-information').should('contain.text', 'Availability: In Stock');
  cy.get('.product-information').should('contain.text', 'Condition: New');
  cy.get('.product-information').should('contain.text', 'Brand: Polo');
  cy.get('#quantity').clear().type('4');
  cy.get('button.btn.btn-default.cart').click();
  cy.get('a[href="/view_cart"]').contains('View Cart').click();
  cy.get('td.cart_quantity > button.disabled').should('have.text', '4');

});

// Commands para adicionar produtos ao carrinho e registrar durante a finalização da compra
Cypress.Commands.add('registrarFinalizandoCompra', (nome, email, senha) => {
  cy.intercept('POST', '/payment').as('finalizarPagamento');

  cy.get('.btn.check_out').click();
  cy.get('a[href="/login"]').contains('Register / Login').click();
  cy.get('[data-qa="signup-name"]').type(nome);
  cy.get('[data-qa="signup-email"]').type(email);
  cy.get('[data-qa="signup-button"]').click();

  cy.get('#id_gender1').click();
  cy.get('[data-qa="password"]').type(senha);
  cy.get('#days').select('11');
  cy.get('#months').select('February');
  cy.get('#years').select('1989');
  cy.get('label[for="newsletter"]').click();
  cy.get('label[for="optin"]').click();

  cy.get('[data-qa="first_name"]').type('Victor QA');
  cy.get('[data-qa="last_name"]').type('Teste Registro');
  cy.get('[data-qa="company"]').type('Victor QA Registrar');
  cy.get('[data-qa="address"]').type('Rua Francisco R. da Silva');
  cy.get('[data-qa="address2"]').type('Nº 204. Centro');
  cy.get('[data-qa="country"]').select('United States');
  cy.get('[data-qa="state"]').type('Minas Gerais');
  cy.get('[data-qa="city"]').type('Unai');
  cy.get('[data-qa="zipcode"]').type('38.620-000');
  cy.get('[data-qa="mobile_number"]').type('(38) 9.9970-6879');
  cy.get('[data-qa="create-account"]').click();

  cy.get('[data-qa="continue-button"]').click();

  cy.contains('a', 'Logged in as', { timeout: 10000 })
    .should('be.visible')
    .find('b')
    .should('contain', nome);

  cy.get('a[href="/view_cart"]').first().click();
  cy.get('.btn.check_out').click();
  cy.get('h2.heading').contains('Address Details')
  cy.get('#ordermsg textarea').type('Pedido realizado com sucesso! | Víctor QA');
  cy.get('a[href="/payment"]').contains('Place Order').click();
  cy.get('[data-qa="name-on-card"]').type('VICTOR FIGUEIREDO');
  cy.get('[data-qa="card-number"]').type('4242 4242 4242 4242');
  cy.get('[data-qa="cvc"]').type('123');
  cy.get('[data-qa="expiry-month"]').type('12');
  cy.get('[data-qa="expiry-year"]').type('2025');

  cy.get('[data-qa="pay-button"]').click();
  cy.wait('@finalizarPagamento');
  cy.get('body').then(($body) => {
    if ($body.find('#success_message').text().includes('Your order has been placed successfully!')) {
      cy.log('Mensagem encontrada!');
    } else {
      cy.log('Mensagem não encontrada.');
    }

    cy.get('a[href="/delete_account"]').click();
    cy.get('[data-qa="account-deleted"]').should('contain', 'Account Deleted!');
    cy.get('[data-qa="continue-button"]').click();
  });
});

// Commands para registrar antes de finalizar a compra
Cypress.Commands.add('registrarAntesDeFinalizarCompra', (nome, email, senha) => {
  cy.intercept('POST', '/payment').as('finalizarPagamento');

  cy.get('a[href="/login"]').contains(' Signup / Login').click();
  cy.get('[data-qa="signup-name"]').type(nome);
  cy.get('[data-qa="signup-email"]').type(email);
  cy.get('[data-qa="signup-button"]').click();

  cy.get('#id_gender1').click();
  cy.get('[data-qa="password"]').type(senha);
  cy.get('#days').select('11');
  cy.get('#months').select('February');
  cy.get('#years').select('1989');
  cy.get('label[for="newsletter"]').click();
  cy.get('label[for="optin"]').click();

  cy.get('[data-qa="first_name"]').type('Victor QA');
  cy.get('[data-qa="last_name"]').type('Teste Registro');
  cy.get('[data-qa="company"]').type('Victor QA Registrar');
  cy.get('[data-qa="address"]').type('Rua Francisco R. da Silva');
  cy.get('[data-qa="address2"]').type('Nº 204. Centro');
  cy.get('[data-qa="country"]').select('United States');
  cy.get('[data-qa="state"]').type('Minas Gerais');
  cy.get('[data-qa="city"]').type('Unai');
  cy.get('[data-qa="zipcode"]').type('38.620-000');
  cy.get('[data-qa="mobile_number"]').type('(38) 9.9970-6879');
  cy.get('[data-qa="create-account"]').click();
  cy.get('[data-qa="account-created"]').should('contain', 'Account Created!');
  cy.get('[data-qa="continue-button"]').click();
  cy.contains('a', 'Logged in as', { timeout: 10000 })
    .should('be.visible')
    .find('b')
    .should('contain', nome);
});

//Commands para finalizar a compra e excluir conta
Cypress.Commands.add('finalizarCompraExcluirConta', () => {
  cy.get('.btn.check_out').click();
  cy.get('h2.heading').contains('Address Details')
  cy.get('#ordermsg textarea').type('Pedido realizado com sucesso! | Víctor QA');
  cy.get('a[href="/payment"]').contains('Place Order').click();

  cy.intercept('POST', '/payment').as('finalizarPagamento');

  cy.get('[data-qa="name-on-card"]').type('VICTOR FIGUEIREDO');
  cy.get('[data-qa="card-number"]').type('4242 4242 4242 4242');
  cy.get('[data-qa="cvc"]').type('123');
  cy.get('[data-qa="expiry-month"]').type('12');
  cy.get('[data-qa="expiry-year"]').type('2025');

  cy.get('[data-qa="pay-button"]').click();
  cy.wait('@finalizarPagamento');
  cy.get('body').then(($body) => {
    if ($body.find('#success_message').text().includes('Your order has been placed successfully!')) {
      cy.log('Mensagem encontrada!');
    } else {
      cy.log('Mensagem não encontrada.');
    }

    cy.get('a[href="/delete_account"]').click();
    cy.get('[data-qa="account-deleted"]').should('contain', 'Account Deleted!');
    cy.get('[data-qa="continue-button"]').click();
  });
});

// Commands para remover produtos do carrinho
Cypress.Commands.add('removerProdutos', () => {
  cy.get('a.cart_quantity_delete[data-product-id="1"]').click();
  cy.get('a.cart_quantity_delete[data-product-id="2"]').click();
  cy.get('#empty_cart').should('be.visible');
});

// Commands para exibir produtos da categoria
Cypress.Commands.add('exibirProdutosCategoria', () => {
  cy.get('.left-sidebar').contains('Category').should('be.visible');
  cy.get('a[href="#Women"]').click();
  cy.get('a[href="/category_products/1"]').contains('Dress').click();
  cy.get('.title.text-center').should('contain.text', 'Women - Dress Products');
  cy.get('a[href="#Men"]').click();
  cy.get('a[href="/category_products/6"]').contains('Jeans ').click();
  cy.get('.title.text-center').should('contain.text', 'Men - Jeans Products');
});

// Commands para visualizar e adicionar produtos da marca no carrinho
Cypress.Commands.add('visualizarAddProdutosMarcaCarrinho', () => {
  cy.get('a[href="/products"]').contains(' Products').click();
  cy.get('.brands_products').contains('Brands').should('be.visible');
  cy.get('a[href="/brand_products/Polo"]').contains('Polo').click();
  cy.get('.title.text-center').should('contain.text', 'Brand - Polo Products');
  cy.get('a[href="/brand_products/Madame"]').contains('Madame').click();
  cy.get('.title.text-center').should('contain.text', 'Brand - Madame Products');
});

// Commands para pesquisar produtos e verificar o carrinho
Cypress.Commands.add('pesquisarProdutosVerificarCarrinho', () => {
  cy.get('a[href="/products"]').contains(' Products').click();
  cy.contains('All Products').should('be.visible');
  cy.get('#search_product').type('Blue Top');
  cy.get('#submit_search').click();
  cy.contains('Searched Products').should('be.visible');
  cy.get('.productinfo.text-center').should('contain.text', 'Blue Top');

  cy.get('a[data-product-id="1"]').filter(':visible').click();
  cy.get('a[href="/view_cart"]').contains('View Cart').click();
  cy.get('a[href="/product_details/1"]').contains('Blue Top').should('be.visible');
  cy.get('a[href="/login"]').contains(' Signup / Login').click();
});

// Commands para verificar o carrinho
Cypress.Commands.add('verificarCarrinho', () => {
  cy.get('header a[href="/view_cart"]').should('contain.text', 'Cart').click();
  cy.get('a[href="/product_details/1"]').contains('Blue Top').should('be.visible');
});

// Commands para avaliar produto
Cypress.Commands.add('avaliarProduto', () => {
  cy.get('a[href="/products"]').contains(' Products').click();
  cy.contains('All Products').should('be.visible');
  cy.get('a[href="/product_details/1"]').contains('View Product').click();
  cy.get('a[href="#reviews"]').contains('Write Your Review').should('be.visible');
  cy.get('#name').type('Victor QA');
  cy.get('#email').type('victorfernando.bsi@gmail.com');
  cy.get('#review').type('Teste!');
  cy.get('#button-review').click();
  cy.get('.alert-success').should('contain.text', 'Thank you for your review.');
});

// Commands para adicionar ao carrinho a partir de itens selecionados
Cypress.Commands.add('addCarrinhoItensSelecionados', () => {
  cy.scrollTo('bottom');
  cy.contains('.title.text-center', 'recommended items').should('be.visible');
  cy.get('a[data-product-id="1"]').filter(':visible').click();
  cy.get('a[href="/view_cart"]').contains('View Cart').click();
  cy.get('a[href="/product_details/1"]').contains('Blue Top').should('be.visible');
});

// Commands para logar e verificar usuário logado
Cypress.Commands.add('logarVerificarUsuarioLogado', (nome, email, senha) => {

  cy.get('a[href="/logout"]').contains(' Logout').click();
  cy.get('a[href="/login"]').contains(' Signup / Login').click();
  cy.get('[data-qa="login-email"]').type(email);
  cy.get('[data-qa="login-password"]').type(senha);
  cy.get('[data-qa="login-button"]').click();

  cy.contains('a', 'Logged in as', { timeout: 10000 })
    .should('be.visible')
    .find('b')
    .should('contain', nome);
});

// Commands para verificar endereço ao finalizar compra
Cypress.Commands.add('verificaEnderecoFinalizarCompra', (nome, email, senha) => {

  cy.get('.btn.check_out').click();

  // Variáveis de endereço
  const empresa = 'Victor QA Registrar';
  const endereco = 'Rua Francisco R. da Silva';
  const complemento = 'Nº 204. Centro';
  const cidadeEstadoCep = 'Unai Minas Gerais 38.620-000';
  const pais = 'United States';
  const telefone = '(38) 9.9970-6879';

  // Validação endereço de entrega
  cy.get('#address_delivery')
    .should('exist')
    .within(() => {
      cy.get('.address_address1.address_address2')
        .eq(0)
        .invoke('text')
        .should('include', empresa);
      cy.get('.address_address1.address_address2')
        .eq(1)
        .invoke('text')
        .should('include', endereco);
      cy.get('.address_address1.address_address2')
        .eq(2)
        .invoke('text')
        .should('include', complemento);
      cy.get('.address_city.address_state_name.address_postcode')
        .invoke('text')
        .then(text => {
          const textoNormalizado = text.replace(/\s+/g, ' ').trim();
          expect(textoNormalizado).to.equal(cidadeEstadoCep);
        });
      cy.get('.address_country_name')
        .invoke('text')
        .should('include', pais);
      cy.get('.address_phone')
        .invoke('text')
        .should('include', telefone);
    });

  //Validação endereço de cobrança
  cy.get('#address_invoice')
    .should('exist')
    .within(() => {
      cy.get('.address_address1.address_address2')
        .eq(0)
        .invoke('text')
        .should('include', empresa);
      cy.get('.address_address1.address_address2')
        .eq(1)
        .invoke('text')
        .should('include', endereco);
      cy.get('.address_address1.address_address2')
        .eq(2)
        .invoke('text')
        .should('include', complemento);
      cy.get('.address_city.address_state_name.address_postcode')
        .invoke('text')
        .then(text => {
          const textoNormalizado = text.replace(/\s+/g, ' ').trim();
          expect(textoNormalizado).to.equal(cidadeEstadoCep);
        });
      cy.get('.address_country_name')
        .invoke('text')
        .should('include', pais);
      cy.get('.address_phone')
        .invoke('text')
        .should('include', telefone);
    });

  cy.get('a[href="/delete_account"]').click();
  cy.contains('Your account has been permanently deleted!').should('be.visible');
  cy.get('[data-qa="continue-button"]').click();
});


//Commands para finalizar a compra, baixar fatura e excluir conta
Cypress.Commands.add('finalizarCompraBaixarFaturaExcluirConta', () => {
  cy.get('a[href="/view_cart"]').first().click();
  cy.get('.btn.check_out').click();
  cy.get('h2.heading').contains('Address Details')
  cy.get('#ordermsg textarea').type('Pedido realizado com sucesso! | Víctor QA');
  cy.get('a[href="/payment"]').contains('Place Order').click();

  cy.intercept('POST', '/payment').as('finalizarPagamento');

  cy.get('[data-qa="name-on-card"]').type('VICTOR FIGUEIREDO');
  cy.get('[data-qa="card-number"]').type('4242 4242 4242 4242');
  cy.get('[data-qa="cvc"]').type('123');
  cy.get('[data-qa="expiry-month"]').type('12');
  cy.get('[data-qa="expiry-year"]').type('2025');

  cy.get('[data-qa="pay-button"]').click();
  cy.wait('@finalizarPagamento');
  cy.get('body').then(($body) => {
    if ($body.find('#success_message').text().includes('Your order has been placed successfully!')) {
      cy.log('Mensagem encontrada!');
    } else {
      cy.log('Mensagem não encontrada.');
    }

    //cy.get('a[href="/download_invoice/900"]').should('contain', 'Download Invoice').should('be.visible');
    cy.intercept('GET', '/download_invoice/900').as('downloadInvoice');
    cy.get('a[href="/download_invoice/900"]').click();
    cy.wait('@downloadInvoice').its('response.statusCode').should('eq', 200);

    cy.get('[data-qa="continue-button"]').click();

    cy.get('a[href="/delete_account"]').click();
    cy.get('[data-qa="account-deleted"]').should('contain', 'Account Deleted!');
    cy.get('[data-qa="continue-button"]').click();
  });
});

// Commands para verificar rolagem com botão
Cypress.Commands.add('verificarRolagemComBotao', () => {
  cy.scrollTo('bottom');
  cy.contains('.single-widget', 'Subscription').should('be.visible');
  cy.get('#scrollUp').should('be.visible').click();
  cy.contains('.col-sm-6', 'Full-Fledged practice website for Automation Engineers').should('be.visible');
});

// Commands para verificar rolagem sem botão
Cypress.Commands.add('verificarRolagemSemBotao', () => {
  cy.scrollTo('bottom');
  cy.contains('.single-widget', 'Subscription').should('be.visible');
  cy.scrollTo('top');
  cy.contains('.col-sm-6', 'Full-Fledged practice website for Automation Engineers').should('be.visible');
});
