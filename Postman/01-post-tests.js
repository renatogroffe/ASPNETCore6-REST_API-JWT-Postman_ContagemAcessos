pm.test("Retorno OK Login", function() {
    pm.response.to.be.ok;
    pm.response.to.json;
    pm.response.to.be.withBody;
});

var result = pm.response.json();

pm.test("Verificar se token foi gerado", function() {
    pm.expect(result.accessToken).not.undefined;
    pm.expect(result.accessToken).not.null;
    pm.collectionVariables.set("tokenApiContagem", result.accessToken)
});