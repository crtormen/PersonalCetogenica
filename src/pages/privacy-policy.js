import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import GlobalStyles from '../styles/global';

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: minmax(1em, 1fr) repeat(5,1fr) minmax(1em, 1fr);
    align-items: center;
`

const Title = styled.h1`
    text-align: center;
    grid-column: 3/-3;
    font-size: 2rem;
    font-weight: 700;
    color: var(--purple);
    font-family: 'Roboto', sans-serif;
    margin: 2rem auto 1rem;
    padding: 2rem;
`

const Paragraph = styled.p`
    grid-column: 2/-2;
    font-size: 1rem;
    font-weight: 400;
    color: var(--postColor);
    font-family: 'Roboto', sans-serif;
    padding: 0.5rem;

`

const SubTitle = styled.h2`
    grid-column: 3/-3;
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--pink);
    font-family: 'Roboto', sans-serif;
    margin: 2rem auto 1rem;
    padding: 1.5rem;
`

const PrivacyPolicy = () => 
<Wrapper>
    <GlobalStyles />

    <Title>POLÍTICA DE PRIVACIDADE</Title>
    <Paragraph>Nós do C Tormen & Cia LTDA nos preocupamos com sua privacidade e temos 
        o compromisso de preservá-la. Assim, além de aceitar os nossos Termos de Uso, 
        você precisa conhecer e estar de acordo com nossa Política de Privacidade, 
        que é válida tanto para nossos sites quanto para nossos eventos e treinamentos 
        online ou presenciais, que abrangem os eventos e cursos da C Tormen & CIA LTDA, que são: Desafio de 28 Dias do Método Esbelta e Esbelta Pra Vida.
        Nossa política de privacidade possui informações claras e completas sobre coleta, uso, armazenamento, tratamento e proteção de seus dados pessoais.
    </Paragraph>
    <Paragraph>
        Portanto, recomendamos que você leia com atenção nossos Termos de Uso e Política de Privacidade 
        antes de navegar em nossos sites. Ao utilizar nossos serviços, você concorda que a C Tormen & CIA LTDA 
        poderá usar esses dados de acordo com nossas políticas de privacidade.
    </Paragraph>

    <SubTitle>
        NAVEGAÇÃO
    </SubTitle>
    <Paragraph>
        O uso e navegação em qualquer um dos site da C Tormen & CIA LTDA ou de qualquer um de nossos cursos, 
        que abrangem Desafio de 28 Dias do Método Esbelta e Esbelta Pra Vida, pressupõe a aceitação deste Acordo 
        de privacidade. A equipe da C Tormen & CIA LTDA reserva-se ao direito de alterar este acordo a fim de 
        atualizá-lo sempre que necessário. Deste modo, recomendamos que consulte a nossa política de privacidade com regularidade 
        de forma a estar sempre atualizado.
    </Paragraph>
    <SubTitle>
        COMO COLETAMOS INFORMAÇÕES A SEU RESPEITO
    </SubTitle>
    <Paragraph>
        Todas as suas informações pessoais recolhidas serão usadas para ajudar a tornar sua visita em nossos
         sites o mais produtiva e agradável possível. A garantia da confidencialidade dos dados pessoais utilizados 
         no nosso site é muito importante para nós.
    </Paragraph>
    <Paragraph>
        Não usamos a prática de exibir anúncios ou propagandas em nosso site. Porém, assim como outros websites, 
        coletamos e utilizamos informações sobre os usuários. As informações incluem o seu endereço IP (Internet Protocol), 
        o seu ISP (Internet Service Provider), o browser que utilizou ao visitar o nosso website, o tempo da sua visita e 
        que páginas visitou dentro do nosso website.
    </Paragraph>
    <Paragraph>
        Você tem ciência que é de sua responsabilidade fornecer informações verdadeiras, exatas, atuais e completas quando 
        for realizar seu cadastro em qualquer um de nossos sites, cursos e eventos. Caso preencha alguma informação de forma errônea, 
        entre em contato enviando um e-mail para suporte@metodoesbelta.com, reportando qual informação está incorreta. O fornecimento 
        de dados incompletos ou falsos pode prejudicar sua experiência tanto em nossos sites quanto antes, durante e após nossos eventos.

    </Paragraph>
    <SubTitle>
        COMO UTILIZAMOS INFORMAÇÕES COLETADAS A SEU RESPEITO
    </SubTitle>
    <Paragraph>
        Nossa finalidade principal ao coletar informações pessoais é fornecer a você uma experiência segura, tranquila, eficiente e personalizada. 
        Para isso, utilizamos suas informações pessoais para fornecer os serviços e suporte ao cliente solicitados; processar transações e enviar 
        avisos sobre as suas transações; impedir atividades potencialmente proibidas ou ilegais; personalizar, avaliar e melhorar nossos serviços, 
        além do conteúdo e do layout do nosso site; enviar materiais de marketing direcionados, avisos de atualização no nosso serviço e ofertas 
        promocionais com base nas suas preferências de comunicação; facilitar seu acesso e check-in a nossos eventos presenciais.
    </Paragraph>
    <SubTitle>
        COMO USAMOS COOKIES
    </SubTitle>
    <Paragraph>
        Quando você acessa qualquer um de nossos sites, incluindo as empresas que contratamos para acompanhar como nosso site é usado, 
        utilizamos cookies para armazenar informações sobre você, tais como suas preferências pessoais e preenchimento automático de formulários. 
        Os cookies nos ajudam a reconhecê-lo se visitar várias páginas em nosso site durante a mesma sessão, para que não precisemos solicitar a 
        sua senha em todas as páginas. Depois que você sair ou fechar o seu navegador, esse cookie irá expirar e deixará de ter efeito. Também 
        usamos cookies mais permanentes para outras finalidades, como para exibir o seu endereço de e-mail em nosso formulário de acesso, para 
        que você não precise digitar novamente o endereço de e-mail sempre que entrar em sua conta. Codificamos nossos cookies para que apenas 
        nós possamos interpretar as informações armazenadas neles. Você está livre para recusar nossos cookies caso o seu navegador permita, mas 
        isso pode interferir no uso dos nossos sites. Nós e nossos prestadores de serviço também usamos cookies para personalizar nossos serviços, 
        conteúdo e publicidade, avaliar a eficiência das promoções e promover confiança e segurança. Você pode encontrar cookies de terceiros ao 
        usar nossos serviços em determinados sites que não estão sob nosso controle.
    </Paragraph>
    <SubTitle>
        MARKETING E DESCADASTRAMENTO DA LISTA DE E-MAIL
    </SubTitle>
    <Paragraph>
        Não vendemos nem alugamos suas informações pessoais para terceiros para fins de marketing sem seu consentimento 
        explícito. Se não desejar receber nossas mensagens de marketing nem participar de nossos programas de personalização de anúncios, 
        basta indicar sua preferência mandando-nos um e-mail ou simplesmente clicar no link Unsubscribe disponível em todos nossos e-mails.
    </Paragraph>
    <SubTitle>
        COMO COMPARTILHAMOS INFORMAÇÕES PESSOAS COM OUTRAS PARTES
    </SubTitle>
    <Paragraph>
        Para melhor experiência do usuário em nossos eventos e treinamentos online e presenciais, que abrangem os eventos e 
        cursos da C Tormen & CIA LTDA, que são: Desafio de 28 Dias do Método Esbelta e Esbelta Pra Vida, nós podemos 
        compartilhar suas informações pessoais com:
    </Paragraph>
    <Paragraph>
        – Fornecedores de serviços sob contrato que colaboram em partes de nossas operações comerciais (prevenção contra fraude, 
        marketing, serviços de tecnologia), sendo que suas informações serão utilizadas apenas aos serviços que os prestadores 
        realizar para nós, e não em benefício próprio; 
    </Paragraph>
    <Paragraph>
        – Autoridades policiais, oficiais do governo ou terceiros, quando houver intimação ou decisão judicial.
    </Paragraph>
    <SubTitle>
        LIGAÇÃO A SITES DE TERCEIROS
    </SubTitle>
    <Paragraph>
        A C Tormen & CIA LTDA possui ligações para outros sites, os quais, a nosso ver, podem conter informações/ferramentas 
        úteis para os nossos visitantes. A nossa política de privacidade não é aplicada aos sites de terceiros, razão pela qual, 
        caso visite outro site a partir do nosso, deverá ler a política de privacidade do mesmo. Por isso, não nos responsabilizamos
         pela política de privacidade ou conteúdo presente nesses mesmos sites.
    </Paragraph>

</Wrapper>

export default PrivacyPolicy;
