# Funções Javascript
***

## Introdução
***

* Função é um conjunto de instruções que executa uma tarefa ou calcula um valor.

* Para usar uma função, você deve defini-la em algum lugar no âmbito do qual você quiser chamá-la.

* Existem dois tipos de função: Função de execução e função de retorno

***
#### Criando uma função:
***

* Existem três sintaxes diferentes para se criar funções em JavaScript:

* **Com o uso da declaração function**:

    ```javascript
    function nomeDaFuncao(parametros) {
      // Código da função
    }
    ```

* **Com o objeto construtor precedido de neww**:

    ```javascript
    var nomeDaFuncao = new function(parametros) {
      // Código da função
    }
    ```

* **Com o uso da sintaxe literal**:

    ```javascript
    var nomeDaFuncao = function() {
      // Código da função
    }
    ```

* **Dica**: Quando for nomear uma função, prefira usar o nome composto de verbo + nome.

***
#### Funções com declaração function
***

* Neste tipo de declaração usamos a palavra-chave **function** seguida do nome da função e dos sinais de abre e fecha parênteses, contendo
opcionalmente um ou uma lista de argumentos (ou parâmetros) separados por vírgula.

* A seguir vem o corpo da função que deverá estar contido entre sinais de chaves

* Este tipo de função é denominada funções estáticas

    ```javascript
    function nomeDaFuncao(parametros) {
      // Código da função
    }
    ```

    ```javascript
    function calcularSoma(a, b) {
      return a + b;
    }
    ```

***
#### Expressão de função
***

* Criar funções utilizando o primeiro método é o mais comum, porém também podemos criar funções por uma expressão de função

* A sintaxe básica é:

    ```javascript
    var nomeDaFuncao = function() {
      // Código da função
    }
    ```

    ```javascript
    var soma = function(a, b) {
      return a + b;
    }
    ```

* Observe que a declaração function não define, explicitamente, um nome para a função.

* A função é armazenada em uma variável cujo nome é de livre escolha do programador.

* Quando temos funções declaradas com este tipo de sintaxe chamamos de **funções anônimas**.

***
#### Chamando uma função
***

* A definição de uma função não a executa.

* Definir uma função é simplesmente nomear a função e especificar o que fazer quando a função é chamada.

* Para executar uma função ou uma expressão de função usamos os sinais de (), sempre que passamos uma expressão de função por parâmetro, esta
fica esperando o momento em que será chamada sua execução através do (), esse contexto de passar funções como parâmetros é conhecido como
**call-back** e é muito comum em desenvolvimento JavaScript

* Exemplo:

    ```javascript
    var somar = function(valor1, valor2) {
      return valor1 + valor2;
    }

    console.log(somar(10, 20))
    ```

***
#### Escopo da função
***

* O corpo de uma função cria um escopo local para variáveis nele declaradas com o uso da palavra-chave **var**.

* Além disso, os argumentos de uma função também pertencem ao escopo local.

* Tais variáveis e os argumentos pertencem ao escopo da função e não podem ser acessados fora dela.

* As variáveis declaradas fora do escopo de uma função, pertencem ao escopo global e podem ser acessadas de qualquer lugar do script, inclusive
de dentro do corpo das funções

* Exemplo:

    ```javascript
    var a = 10;
    function soma() {
      var b = 20;
      return a + b
    }
    console.log(soma()) // 30
    console.log(a)      // 10
    console.log(b)      // erro, var b morreu na função
    ```

***
#### Funções aninhadas
***

* Você pode aninhar uma função dentro de outra.

* A função aninhada (interna) é acessível apenas para a função que a contém (exterior).

* Isso constitui também uma closure, uma closure é uma expressão que pode ter variáveis livres em conjunto com um ambiente que conecta estas
variáveis (que fecha a expressão)

* Uma vez que uma função aninhada é uma closure, isto significa que uma função aninhada pode **herdar** os argumentos e variáveis de sua função
de contenção, em outras palavras, a função interior contém o escopo da função exterior.

* Exemplo:

    ```javascript
    function calculadora(a,b) {
      function quadrado(x) {
        return x * x;
      }
      return quadrado(a) + quadrado(b);
    }
    console.log(calculadora(2,3)); // 13
    ```

## Funções Globais
***
#### encodeURI(uri)
***

* Destina-se a reescrever um URI.

* Substituindo alguns caracteres especiais por sua codificação UTF-8 e transformando essa codificação em uma sequência hexadecimal escapada de
um, dois ou três bytes da forma %xx.

* Codificar um URI pode ser necessário quando dados são passados por ele.

* A maioria dos navegadores modernos faz a conversão automaticamente, mas em determinadas situações uma aplicação poderá requerer a codificação

* Os seguintes caracteres não são codificados: ```,/?:@=+$-_.!~*''()#```

***
#### decodeURI(uri)
***

* Destina-se a recuperar um URI que tenha sido codificado com a função **encodeURI(uri)**

***
#### encodeURIComponent(uri)
***

* Esta função é semelhante à função encodeURI(), com a diferença de que se destina a codificar partes de um URI e também codificar alguns dos
caracteres não codificados por tal função.

* Os seguintes caracteres não são codificados: ```-_.!~''()```

***
### decodeURIComponent(uri)
***

* Destina-se a recuperar um URI que tenha sido codificado com a função **encodeURIComponent(uri)**

***
### isFinite(valor)
***

* A função determina se o valor passado é um número finito.

* Se necessário, o parâmetro é primeiro convertido para um número

* Esta função retorna os booleanos true caso seja um número e false caso contrário

* Um caso muito comum de retornar false é divisão por zero

***
### isNaN(valor)
***

* Esta função tem comportamento contrário ao da função **isFinite()**.

* Retorna os booleanos true caso valor não seja um número ou false caso contrário

***
### Number(valor)
***

* Destina-se a converter em um número o valor passado como argumento da função.

* Não sendo possível fazer a conversão, o valor retornado pela função é NaN (Not a Number, ou seja, não é um número)

***
### parseFloat(string, [,base])
***

* Destina-se a converter em um número a string passada como argumento da função.

* admite um argumento opcional, que é a base na qual o número deverá ser retornado

* Omitindo-se esse argumento, a conversão é feita para a base 10.

* Caso a string não comece com um número, o valor retornado pela função é NaN e a conversão não pode ser feita.

* A função percorre a string até que seja encontrado um caractere que não seja parte válida de um número.

* Encontrado tal caractere, a função retorna o número

***
### parseInt(string, [,base])
***

* A função analisa um argumento do tipo string e retorna um inteiro da base especificada

***
### String(valor)
***

* Destina-se a converter em string o valor passado como argumento da função
