pm.test("Retorno OK Contagem", function() {
    pm.response.to.be.ok;
    pm.response.to.json;
    pm.response.to.be.withBody;
});

var result = pm.response.json();

pm.test("Verificar se o valor de contagem foi gerado", function() {
    pm.expect(result.valorAtual).not.undefined;
    pm.expect(result.valorAtual).not.null;
    pm.expect(result.valorAtual).greaterThan(0);
});