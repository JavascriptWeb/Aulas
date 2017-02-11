# Javascript

## Introdução
***

#### Programação Web

* O programador web é responsável pelo desenvolvimento de sites, portais, foruns e aplicações voltadas para o ambiente da internet.

* Normalmente estes serviços podem ser acessados por meio de um navegador e ficam hospedados em servidores web

* Na programação web temos o cliente e o servidor

  - **Front-end ou Lado do cliente**: O front-end representa a interface entre o usuário e o servidor (back-end). É no front-end que os usuários
    interagem com o seu aplicativo, representa a parte visual, geralmente formado por imagens, links, formulários, botões e etc, para desenvolver
    o front-end você não precisa ser um programador

  - **Back-end ou Lado do servidor**: O backend é onde as regras de negócio, onde acontece acesso ao banco de dados, verificação de usuários
    logados, envio de email, upload de imagem, enfim todas as tarefas que exigem processamentos a nível de servidor. A parte do back-end é onde
    de fato o programador web atual.

  - **Banco de dados**: Os banco de dados servem para armazenar informações importantes para a execução da aplicação e isto é feito no lado do
    servidor.

* Front-end:

  - **HTML**: É responsável pela marcação do conteúdo, por exemplo, quero um paragrafo, logo usa a tag \<p\>\</p\> para marcar um paragrafo
  - **CSS**: É responsável pela formatação do conteúdo, deixar o layout mais agradavel e bonito, tendo alguns frameworks como materialize e
    bootstrap que ajuda nessa funcionalidades
  - **Javascript**: É responsável pelo comportamento da página e interação com o usuário, por exemplo um formulário, validações, ou uma animação e etc...

#### O que é Javascript

* Javascript é uma linguagem de script de programação que roda do lado cliente (navegador do usuário) e nos permite realizar ações dentro de uma
página web, melhorando a interatividade com o usuário. Javascript não tem nada a ver com o Java

* Javascript não é uma linguagem compilada e sim interpretada, ou seja, para que ela seja executada, é necessário que o navegador a interprete.
Dessa maneira, é fundamental que o navegador seja compatível com a linguagem de script

* Osprincipais browsers do mercado: Firefox, Opera, Safari, Internet Explorer, Google Chrome suportam a linguagem

#### O que se pode fazer com JavaScript?

* Atualmente o javascript se popularizou bastante e já não se limita mais ao desenvolvimento WEB, podemos desenvolver código do lado servidor ou
desenvolver extensões de aplicações com javascript

* Ainda é possível utilizar javascript para desenvolvimento multiplataforma juntamente com HTML e CSS e criar aplicações para celulares ou para
desktops

* Com o JavaScript você tem em suas mãos o pode de modificar o DOM (Document Object Model) - Pode manipular elementos HTML

* O JavaScript dá aos designers uma ferramenta de programação HTML

* JavaScript pode reagir a eventos, passando o mouse, clica no botão e etc...

* JavaScript pode validar dados

* JavaScript pode ser usado para detectar o navegador do visitante

* E muitas outras coisas

### Como executar um Código JavaScript

* Para inserirmos o JavaScript em uma página HTML, fazemos uso da tag \<script\>\</script\> e do atributo type com o valor text/javascript

    ```html
    <script src="caminho do javascript.js">
      //Código JavaScript
    </script>
    ```

#### Formas de inserir javascript:

  - Dentro da tag \<head\>
  - No final da tag \<body\>
  - Através de um arquivo externo, declarando no \<head\> através do **src** da tag \<script\>

#### Vantage de usar o arquivo externo

* **Facilidade de manutenção**: Uma vez que o script está localizado em apenas um arquivo, facilita a edição ou correção dos códigos

* **Carregamento mais rápido da página**: O arquivo externo é armazenado no cache do navegador. Assim, evita-se carregá-lo toda vez que a página
for chamada

* **Semântica**: O arquivo externo separa a camada de comportamento (javascript) da camada de conteúdo (HTML)

#### A tag \<noscript\>

* A tag **\<noscript\>** nos permite disponibilizar um conteúdo alternativo ao disposto via script. Isso significa dizer que, se o usuário não
tiver suporte ao javascript em seu browser, ele verá o conteúdo inserido dentro dela e, caso tenha suporte, o seu conteúdo é omitido

    ```html
    <script>
      alert("Parabéns, você está aprendendo JavaScript");
    </script>

    <noscript>
      <p>Esta página não usa recursos javascript, ative-a por favor</p>
    </noscript>
    ```

## Variáveis
***

* Variável, no sentido de programação, é uma região previamente identificada que tem por finalidade armazenar informaçòes (dados) de umprograma
temporariamente.
* Uma variável armazena apenas um valor por vez.
* Sendo considerado com valor o conteúdo de uma variável
* Variáveis devem receber nomes para poderem ser referênciadas e modificadas quando necessário

#### Regras para nome de variáveis

* Nunca se começa o nome de uma variável com números: 2grau
* Os nomes devem começar por uma letra seguida de uma sequência de letras ('a'...'z', 'A'...'Z'), números (0-9) ou caracteres do tipo sublinhado
(_)
* O javascript é case sensitive, desta forma uma variável com o nome **idade** é diferente de: Idade, IDADE ou IDade, ...
* Não é permitido colocar caracteres de espaço em branco dentro de nomes de variáveis: Nome Aluno
* Não é permitido colocar acentos e caracteres especiais em nomes de variáveis: Média_final
* Nomeie sua variável de acordo com a sua utilização, isto facilitará a identificação por parte do programador

#### Declarando variáveis

* No javascript uma variável não precisa receber um tipo, porém antes de ser utilizada em seu programa você deve declar-a-la, as variáveis são
declaradas com a palavra-chave **var**

    ```javascript
    var i;
    var soma;
    var nome;
    var endereco;
    ```

* Você também pode declarar múltiplas variáveis com a mesma palavra-chave **var**

    ```javascript
    var i, some, nome, endereco;
    ```

* E você pode combinar a declaração de uma variável com sua inicialização

    ```javascript
    var idade = 23;                 // Tipo Number
    var nome = "Victor"             // Tipo String
    var preco = 20.5                // Tipo Number
    var is_favorite = true          // Tipo Booleano
    var endereco = {                // Tipo Array
      rua = "rua 30",
      bairro = "Cohama",
      cidade = "São Luis"
    }
    var soma = calculaSoma(a, b) {  // Tipo Function
      return a + b;
    };
    ```

## Tipos de dados
***

* Os dados são representados pelas informaçòes a serem processadas por um computador.

* Um tipo de dado especifica as características, ou seja, os valores e operações possíveis de serem utilizados com um dado desse tipo

* Toda variável usada em um programa tem um tipo associado a ela.

* Javascript possui poucos tipos de dados, são eles:

  - Number
  - String
  - Boolean
  - Object
  - Function
  - Array
  - Date
  - RegExp
  - Null
  - NaN
  - Undefined


* Os dados Object, Array e RegExp sã objetos

* Function é uma função e o que vai importar é o tipo de seu retorno

#### Numbers

* Os números contituem o tipo mais básico de dados, o javascript difere de linguagens de programação como C e Java na medida em que não faz
distinção entre valores inteiros e valores de ponto flutuante.

* Em javascript todos os números são representados como valores de ponto flutuante

* Quando um número aparece diretamente em um programa JavaScript é chamado **literal numérico**.

* O javascript suporta literais numericos em vários formatos, vejamos:

* **Literais Inteiros**:

  - Em um programa javascript, um inteiro de base 10 é escrito como uma sequência de algarismos, por exemplo: 0, 15, 20, 1000...
  - O formato numérico de JavaScript permite representar exatamente todos os inteiros entre -2^53 até 2^53


* **Literias Hexadecimais e Octais**:

  - Além de literais inteiros de base 10, javascript reconhece valores hexadecimais (de base 16).
  - Os hexadecimais começam com **0x** ou **0X**, seguido por um string de algarismos hexadecimais.
  - O algarismo hexadecimal é um dos algarismo de 0 a 9, ou as letras de A a F, que são utilizadas para representar valores de 10 e 15
  - Exemplo: 0xFF, 0xCAFE91, ...


* **Literais de ponto flutuante**:

  - Os literais de ponto flutuante podem apresentar casas decimais e usam a sintaxe tradicional para números reais.
  - O valor real é representado com a parte integral do número seguido pelo ponto decimal.
  - Este literal também chamado de notação científica é representado da seguinte maneira: 2.34e4
  - O número 2.34 é multiplicado por dez à quarta potênciam ou 2.34*10000


* **NaN (Not a Number)**:

  - É o erro que ocorre sempre que se espera por um número e acabamos por receber outros valores

#### Strings

* Os strings são sequências de letras, dígitos e caracteres de pontuação unicode.

* É o tipo de dados de JavaScript usado para representar texto.

* As strings são valores delimitados por apóstrofo ou por aspas, ex: "Texto" ou 'Texto'.

* O JavaScript não tem um tipo de dados de caracter como char, como C, C++ e Java.

* Para representar um único caractere, você simplesmente usa um string com comprimento de 1

* Os caracteres de aspas duplas podem estar contidos dentro de strings delimitado por caracteres de aspas simples, e os caracteres de aspas
simples podem estar contidos dentro de strings delimitados por aspas duplas.

* Os literais de strings devem ser escritos em uma uníca linha, ele não podem ser divididos por duas linhas.

* Se você precisar incluir um caractere de nova linha em um literal string, user a sequência de caracter **\n**

* Exemplo: "Várias linhas:\nSegunda linha\tMesma linha com 'tabulação'"

* Caracteres especiais:

|Caracteres|Descrição|
|:--------:|:--------|
**\0**| Caractere NULL |
**\b**| Backspace |
**\n**| Quebra de linha |
**\t**| Tabulação horizontal |
**\v**| Tabulação vertical |
**\r**| Insere um retorno |
**\'**| Aspas simples' |
**\"**| Aspas duplas" |
**\\**| Barra invertida |

#### Booleanos

* Este tipo de literal representa valores lógicos que podem ser: true(1) ou false(0)

* Undefined = false

* String vazia = false

#### Undefined e null

* **Undefined**: é uma variável inicializada sem atribuição de valor, não indicando somente a ausência de valor, mas sim a não existência de
algo, ele pode ser declarado como false, assim como uma string vazia e o 0

* A principal diferença entre null e undefined é que a palavra-chave null indica ausência de valor, seja numa string ou em um objeto, é como se
ela não existisse na memória.

* Já a variável global predefinida undefined é algo mais profundo, significando que a variável não foi inicializada, ou indicando uma consulta ao
valor de um objeto ou array que não existe.

* O valor undefined também é retornado por funções que não tem valor de retorno, e o valor de parâmetro de função quando nenhum argumento é
fornecido.

## Operadores
***

* Um programa tem como característica fundamental a capacidade de processar dados.

* Processar dados significa realizar operações com estes dados.

* Os operadores são meios pelos quais incrementamos, decrementamos, comparamos e avaliamos dados dentro do computador, vamos conhecer os seguinte operadores:

  - Operadores Aritmeticos
  - Operadores de comparação
  - Operadores Lógicos
  - Operadores de atribuição
  - Operadores de incremento e decremento

#### Operadores Matemáticos ou Aritméticos

* Os operadores aritméticos são utilizados para obter resultados numéricos.

* Além da adição, subtração, multiplicação e divisão, os símbolos para os operadores aritméticos são:

|Operador|Descrição|
|:------:|:--------|
|+|Adição|
|-|Subtração|
|*|Multiplicação|
|/|Divisão|
|%|Modulo ou resto da divisão|

#### Operadores de Atribuição

* Atribuição é o termo utilizado para representar a colocação de um valor em uma variável.

* A variável que receberá a atribuição encontra-se sempre do lado esquerdo do operador, e esta recebendo o valor gerado pela expressão ou
operador que está a direita.

* Além disso temos diversas variações dos comandos de atribuição, que podemos utilizar para facilitar a programação.

* Veja os operadores de atribuição na tabela abaixo:

|Operador|Exemplo|Relação|
|:------:|:------|-------|
| = |a = b|a = b: Atribui o valor da variável b para a variável a|
| += |a += b| a = a + b|
| -= |a -= b| a = a - b|
| *= |a *= b| a = a * b|
| /= |a /= b| a = a / b|
| %= |a %= b| a = a % b|

#### Operadores de comparação

* Também chamados de condicionais.

* São aqueles que executam comparações entre o valor de duas variáveis, ou de uma variável e um texto, ou uma variável e um número.

* Com eles podemos testar, por exemplo, se uma variável possui um valor maior que a outra ou se possui um valor menor que determinado número ou
se o retorno dado pela chamada de uma função é verdadeiro ou falso.

* veja a tabela abaixo:

|Operador|Descrição|
|:------:|:--------|
| == | Igual |
| != | Igual |
| > | Maior que |
| < | Menor que |
| >= | Maior ou igual a |
| <= | Menor ou igual a |
| === | Identidade, verdadeiro se os valores são iguais e do mesmo tipo |
| !== | Identidade, verdadeiro se os valores não são iguais e do mesmo tipo |

#### Operadores de incremento e decremento

* O operador de incremento aumenta o operando em um

* O perador de decremento diminui o operando em um

|Exemplo|Nome| Efeito |
|:-----:|:-----|:-------|
|++a|Pré-incremento|Incrementa **a** em um, e então retorna **a**|
|--a|Pré-decremento|Decrementa **a** em um, e então retorna **a**|
|a++|Pós-incremento|Retorna **a**, e então incrementa **a** em um|
|a--|Pós-decremento|Retorna **a**, e então decrementa **a** em um|



