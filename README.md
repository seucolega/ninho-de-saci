# Ninho de Saci

[Site desenvolvido](http://ninhodesaci.casabalea.com.br/) em React para o livro infantil *Ninho de Saci*, de Raoni Assis. Trata-se de uma aplicação simples, *front-end only*, pois a demanda do cliente não necessita de conteúdo dinâmico / atualizável. Utilizamos componentes funcionais por permitir códigos mais sintéticos e a reutilização de *hooks* personalizados no gerenciamento do estado / contexto de diferentes componentes. 

## Sumário

1. [Estrutura](#estrutura)
2. [Gerenciamento de estados](#gerenciamento-de-estados)
3. [Preloading de arquivos de mídia](#preloading-de-arquivos-de-mídia)
4. [Bibliotecas](#bibliotecas)
5. [Contato](#contato)

## Estrutura

O projeto buscou empregar princípios do [*atomic design*](https://bradfrost.com/blog/post/atomic-web-design/): *atoms < molecules < organisms < templates*. Partindo de elementos simples que formam conjuntos mais complexos e tentando, ao máximo, concentrar, nestes, a formatação do estilo daqueles. Isto permite o reaproveitamento de elementos genéricos em todo projeto.

## Gerenciamento de estados

Os estados individuais de componentes foram feitos com *hooks* do React. A [Context API](https://pt-br.reactjs.org/docs/context.html) deste framework foi utilizada para gerenciar estados compartilhados entre componentes. Sobre isso, salientamos que empregamos como solução um [padrão próprio baseado na separação de providers](https://github.com/pythaqua/ninho-de-saci/tree/main/src/context) tanto pelo objeto tratado quanto por sua função: fornecimento dos dados do estado (*data context*) e alteração destes (*action context*).

**Exemplo:**

```javascript
export const useReaderModeDataContext = () => useContext(ReaderModeDataContext);
export const useReaderModeActionContext = () => useContext(ReaderModeActionContext);
```

A adoção desse padrão, em nossa experiência com projetos pessoais e voltados para estudo, tem se demonstrado capaz de evitar renderizações excessivas e desnecessárias causadas pela atualização de estados não relacionados entre si. Ademais, esse padrão tem sido eficiente na manutenção do código e escalonamento de aplicações - colabora para isso o uso de algumas *factories* na centralização da criação de elementos recorrentes, tal é a razão da existência de um diretório `utils` específico para o contexto.

## Preloading de arquivos de mídia

Como a base do site é a leitura online do livro ilustrado, a preocupação com carregamento das imagens foi central já que sua execução no momento da montagem dos componentes é capaz de gerar *glitches* indesejáveis e prejudiciais tanto ao layout da página quanto à experiẽncia do usuário. Para isso, baseamos-nos na [solução apresentada neste artigo](https://jack72828383883.medium.com/how-to-preload-images-into-cache-in-react-js-ff1642708240) para realizar [o "cacheamento" dos arquivos antes da montagem dos componentes](https://github.com/pythaqua/ninho-de-saci/blob/main/src/utils/cacheFiles.js).

**Exemplo:**

```javascript
const cacheFiles = async (srcArray, toggleIsLoading) => {
  const promises = await srcArray.map((src) => {
    return new Promise(function (resolve, reject) {
      const file = new Image();
      file.src = src;
      file.onload = resolve();
      file.onerror = reject();
    });
  });

  await Promise.all(promises);

  toggleIsLoading();
};
```

A fim de lidar com possíveis problemas do tipo, a preferência pelo uso de *hooks* `useLayoutEffect` - ao invés de `useEffect` - para lógicas que interferem na renderização de componentes também foi essencial.

## Bibliotecas

Utilizamos a [Styled Components](https://styled-components.com/) para estilização. Além dos benefícios pela qual já é reconhecida na comunidade, como emprego de propriedades dinâmicas - baseadas na lógica de negócios - e facilitação da componentização - ao agregar a sintaxe CSS / SCSS de forma organizada, acoplada a componentes mas separada do JSX em si -, sua aplicação propiciou um código mais fiel à lógica do design atômico, como também mais semãntico.

A [GSAP/Greensock](https://greensock.com/gsap/) é empregada para animações devido à possibilidade de integrar estruturas de dados JavaScript na definição de propriedades, utilização dos `useRef` hooks do React na referência aos elementos animados, maior controle de *triggers* em animações encadeadas através de seu método `timeline` e possibilidade de ativar eventos baseados no progresso/conclusão das animações.

A reprodução de mídias, em background, é facilitada pela [React Player](https://github.com/CookPete/react-player), que viabiliza o controle dos pontos de início e parada do áudio fornecido pelo cliente de acordo com o modo de exibição em páginas simples ou duplas.

[React Spinners](https://www.npmjs.com/package/react-spinners), [React Icons](https://react-icons.github.io/react-icons/) e [React favicon](https://www.npmjs.com/package/react-favicon) foram outras bibliotecas utilizadas para agilizar a integração de elementos genéricos comuns ao desenvolvimento web.

## Contato

Sou alguém que valoriza o espírito de comunidade e experiências coletivas em torno do desenvolvimento de softwares - considero isso basilar para o progresso de projetos e a apredizagem / desenvolvimento individual. Por isso, feedbacks são sempre bem vindos. Você pode encontrar utilizar [os canais disponibilizados no meu perfil do Github](https://github.com/pythaqua) para entrar em contato comigo. 

![]()<a href="https://github.com/pythaqua">
  ![My Profile](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
</a>

Estou disponível para responder a dúvidas, atender a sugestões, compartilhamento de conhecimentos e propostas de colaborações em projetos.
