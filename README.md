# ASPNETCore6-REST_API-Postman_ContagemAcessos
 Exemplo de implementação de testes de uma API REST criada com .NET 6 (e protegida com autenticação via JWT) para contagem de acessos utilizando Postman + Newman. Inclui Dockerfile com build desta aplicação formada por 2 projetos (ASP.NET Core + Class Library) e visando a geração de imagem Docker para Linux.

 Para criar um container da API REST a ser testada execute (utilizando a imagem **renatogroffe/apicontagemjwt**):

 ```
 docker run --name testeapicontagem01 -p 5000:80 -d renatogroffe/apicontagemjwt:1
 ```

 Para instalar o **Newman** execute:

 ```
 npm install -g newman
 ```

Para instalar o **gerador de relatórios HTML com Newman** execute:

 ```
 npm install -g newman-reporter-htmlextra
 ```

 No diretório **/Tests** utilize a instrução a seguir para executar os testes de validação da API REST (no parâmetro **-n** foram configuradas **2 iterações/execuções**):

 ```
 newman run APIContagemJWT.postman_collection.json -d data-authentication.json -n 2
 ```

 Para gerar o relatório execute então (o **arquivo HTML** será gerado em uma pasta chamada **newman**):

 ```
 newman run APIContagemJWT.postman_collection.json -d data-authentication.json -n 2 -r htmlextra
 ```