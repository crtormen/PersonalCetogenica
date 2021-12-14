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

const TermsOfUse = () => 
<Wrapper>
    <GlobalStyles />

    <Title>TERMOS DE USO</Title>
    <Paragraph>Ao participar dos nossos treinamentos, sejam online ou presencial, 
        você necessariamente estará aceitando e concordando incondicionalmente com 
        todos os Termos e Condições de Uso aqui apresentados. Concorda, também, 
        que os termos, condições e notificações podem ser alterados ao longo do tempo 
        m respeito às normas e legislações aplicáveis aos eventos e cursos, 
        sejam online ou presencial.
    </Paragraph>

    <SubTitle>PRODUTOS E SERVIÇOS</SubTitle>
    <Paragraph>
        Os Termos de Uso aqui citados abrangem os eventos e cursos da empresa 
        C Tormen & Cia LTDA, que são: Desafio de 28 Dias do Método Esbelta e Esbelta Pra Vida.
    </Paragraph>

    <SubTitle>LOGIN </SubTitle>
    <Paragraph>
        Todos os cursos online, que abrangem Desafio de 28 Dias do Método Esbelta e Esbelta Pra Vida,
         são para seu uso pessoal e não para uso comercial. Salvo se expressamente permitido por algum 
         dos sócios da empresa C Tormen & Cia LTDA, você não poderá modificar, copiar, 
         distribuir, transmitir, exibir, executar, reproduzir, publicar, licenciar, 
         criar trabalhos derivados, transferir ou vender as informações, produtos ou 
         serviços obtidos nestes cursos online.
    </Paragraph>
    <Paragraph>
        Todos os cursos supracitados aos quais você tiver acesso, por meio de nossas plataformas, são de acesso 
        ÚNICO E INTRANSFERÍVEL, ou seja, permitido APENAS A VOCÊ, não devendo ser cedidos a nenhuma outra pessoa. 
        Sua senha pessoal de acesso não deverá ser emprestada, cedida ou doada a nenhuma outra pessoa.
    </Paragraph>

    <SubTitle>
        SENHAS
    </SubTitle>
    <Paragraph>
        Se você recebeu uma senha ou um nome de usuário para acessar a área de membros dos nossos cursos online, 
        que abrange Desafio de 28 Dias do Método Esbelta e Esbelta Pra Vida, você tem a responsabilidade de proteger 
        a confidencialidade de sua senha, inclusive para prevenir o uso não autorizado da mesma. 
        Qualquer reprodução, distribuição, publicação, transmissão por quaisquer meios a terceiros, ou o uso de qualquer
         informação aqui contida por qualquer usuário, através do uso de nomes de usuários ou senhas, de qualquer maneira ou forma, 
         sem a nossa autorização expressa, é estritamente proibido.
    </Paragraph>
    <SubTitle>
        USO ILEGAL OU PROIBIDO
    </SubTitle>
    <Paragraph>
        Como condição para realização dos nossos cursos online, que abrange Desafio de 28 Dias do Método Esbelta e Esbelta Pra Vida,
         você garante e reconhece que todo o conteúdo não poderá ser utilizado para nenhum propósito que seja ilegal ou proibido por
          esses Termos e Condições, notificações ou por qualquer legislação aplicável.
    </Paragraph>
    <SubTitle>
        LINK PARA SITES DE TERCEIROS
    </SubTitle>
    <Paragraph>
        Nossos cursos podem conter links para sites operados por terceiros, não relacionados com o material produzido 
        por C Tormen & Cia LTDA. Tais links são fornecidos somente para sua conveniência e informação. 
        C Tormen & Cia LTDA não controla esses sites e não assume qualquer responsabilidade em relação ao conteúdo ou ao uso dos mesmos.
    </Paragraph>
    <SubTitle>
        USO DE IMAGEM
    </SubTitle>
    <Paragraph>
        Não é permitido o uso da imagem e nome dos diretores da empresa, Charline Tormen, sem a prévia autorização expressa de nossa parte. 
        Caso ocorra, você será notificado e poderá sofrer as punições cabíveis.
    </Paragraph>
    <SubTitle>
        PROPRIEDADE INTELECTUAL
    </SubTitle>
    <Paragraph>
        Todos os cursos e eventos do C Tormen & Cia LTDA, que abrangem o Desafio de 28 Dias do Método Esbelta e Esbelta Pra Vida, suas páginas, 
        telas que apresentam as páginas, vídeos, slides, informações, áudios e materiais nelas contidos, além de sua distribuição e composição, 
        salvo se indicado de outra forma, são de propriedade do C Tormen & Cia LTDA.
    </Paragraph>
    <Paragraph>
        Todos os direitos são protegidos por direitos autorais, marcas registradas e marcas de serviços, 
        tratados internacionais e outros direitos exclusivos firmados e registrados no Brasil e em outros países. 
        Você concorda em observar todas as leis aplicáveis, assim como quaisquer notificações ou restrições adicionais 
        contidas em nossos eventos ou em algum dos nossos treinamentos online ou presencial.
    </Paragraph>
    <Paragraph>
        O uso de nossos Serviços não lhe confere a propriedade dos direitos de propriedade intelectual sobre os nossos 
        Serviços ou sobre o conteúdo que você acessar. Você não pode usar conteúdos de nossos Serviços a menos que obtenha 
        permissão expressa do proprietário de tais conteúdos, ou de algum dos sócios de C Tormen & Cia LTDA. Estes termos 
        não conferem a você o direito de usar quaisquer marcas ou logotipos utilizados em nossos Serviços. Não remova, oculte 
        ou altere quaisquer avisos legais exibidos em ou junto a nossos Serviços.
    </Paragraph>
    <Paragraph>
        Nossos cursos e eventos exibem alguns conteúdos que não são de C Tormen & Cia LTDA. Esses conteúdos são de exclusiva 
        responsabilidade da entidade que os disponibiliza. Podemos revisar conteúdo para determinar se é ilegal ou se infringe
         nossas políticas, e podemos remover ou nos recusar a exibir conteúdos que razoavelmente acreditamos violar nossas políticas ou a lei. 
         Mas isso não significa, necessariamente, que revisaremos conteúdos, portanto por favor, não presuma que o faremos.
    </Paragraph>
    <SubTitle>
        REEMBOLSO
    </SubTitle>
    <Paragraph>
        O reembolso referente a qualquer um de nossos treinamentos online ou presenciais, que abrangem o Desafio de 28 Dias do Método Esbelta e Esbelta Pra Vida, 
        pode ser solicitado em até 7 (sete) dias corridos após a compra do ingresso ou treinamento, sem justificativa. Qualquer pedido de reembolso deverá ser 
        protocolado no prazo citado acima, sendo considerada a data da compra como a data de início da contagem do prazo, através do envio de e-mail para suporte@metodoesbelta.com, 
        sendo estipulado um prazo de 5 (cinco) dias corridos para que você obtenha uma resposta.
    </Paragraph>
    <Paragraph>
        Passado o prazo do período de reembolso, C Tormen & Cia LTDA reserva-se ao direito da retenção do valor integral pago, 
        sem direito a reembolso, para cobrir custos operacionais e fiscais.
    </Paragraph>
    <Paragraph>
        Em se tratando de eventos realizados presencialmente por nossa empresa, zelamos pela rigorosidade da agenda e programação divulgada. 
        Porém, por se tratar de pessoas e terceiros, ficamos sujeitos a condições que nem sempre estão sob nosso controle. Em casos extremos 
        de não comparecimento de um dos palestrantes em nossos eventos, nossa empresa se compromete a realizar o evento ou treinamento substituindo 
        aqueles que eventualmente não possam comparecer, não podendo o participante pedir reembolso por esse motivo. Além disso, o participante não 
        poderá pedir reembolso após a realização do evento por qualquer que seja o motivo, abrangendo motivos de saúde, deslocamento ou de qualquer outra natureza.
    </Paragraph>
    <SubTitle>
        AVAIS E GARANTIAS
    </SubTitle>
    <Paragraph>
        Todos nossos produtos, eventos e cursos são validados por alunos e profissionais de diferentes mercados. Todos os depoimentos citados não apenas 
        em nossos sites, mas também em nossos meios de comunicação, cursos e redes sociais, são reais e de pessoas que participaram, em algum momento, 
        dos nossos eventos e cursos Desafio de 28 Dias do Método Esbelta e Esbelta Pra Vida.
    </Paragraph>
    <Paragraph>
        Apesar disso, os resultados podem variar de pessoa para pessoa, de acordo com o mercado, ramo de atuação, dedicação, comprometimento, verba investida, sazonalidade dos custos de plataformas 
        digitais e disponibilidade das mesmas. Você concorda e tem ciência que todo investimento envolve riscos e particularidades que não podem ser garantidas pelos criadores dos eventos e treinamentos 
        online e à distância. Além disso, você concorda que nossa empresa não é responsável por seu sucesso ou fracasso, ganha ou perda de receita ou renda, estresse, estado emocional e similares.
    </Paragraph>
    <SubTitle>
        COPYRIGHT, DIREITOS AUTORAIS E MARCAS REGISTRADAS
    </SubTitle>
    <Paragraph>
        Todos nossos eventos e treinamentos online e à distância citados, que abrangem os eventos e cursos 
        Desafio de 28 Dias do Método Esbelta e Esbelta Pra Vida, são protegidos por direitos autorais. 
        Logo, o uso de indevido de qualquer uma das nossas marcas, logos, nomes dos cursos ou eventos será 
        passível de punição, independente do meio que seja veiculado.
    </Paragraph>
    <Paragraph>
        Não é permitido, também, a gravação de áudio e vídeo de nossos cursos e eventos para divulgação a terceiros, 
        bem como divulgar na íntegra nossas palestras, eventos e cursos supracitados.
    </Paragraph>
    <SubTitle>
        SEGURANÇA
    </SubTitle>
    <Paragraph>
        Toda senha usada para este site é somente para uso individual. Você é responsável pela segurança de sua senha 
        (se for o caso). A C Tormen & Cia LTDA tem o direito de monitorar a segurança de sua senha e ao seu critério 
        pode pedir que você a mude. Se você usar qualquer senha que o C Tormen & Cia LTDA considere insegura, ele tem 
        o direito de requisitar que a senha seja modificada e/ou cancelar a sua conta.
    </Paragraph>
    <Paragraph>
        É proibido usar qualquer serviço ou ferramenta conectada a este site para comprometer a segurança ou mexer com 
        os recursos do sistema e/ou contas. O uso ou distribuição de ferramentas destinadas para comprometer a segurança 
        são estritamente proibidos. Se você estiver envolvido em qualquer violação da segurança do sistema, a C Tormen & Cia LTDA 
        se reserva o direito de fornecer suas informações para os administradores de sistema de outros sites para ajudá-los a resolver 
        incidentes de segurança. A C Tormen & Cia LTDA se reserva o direito de investigar potenciais violações a esse Termo de Uso.
    </Paragraph>
    <Paragraph>
        A C Tormen & Cia LTDA se reserva no direito de cooperar totalmente com as autoridades competentes ou pedidos da justiça 
        para que a C Tormen & Cia LTDA revele a identidade de qualquer pessoa que publique e-mail, mensagem ou 
        disponibilize qualquer material que possa violar esse Termo de Uso.
    </Paragraph>
    <SubTitle>
        ACORDO INTEGRAL
    </SubTitle>
    <Paragraph>
        O presente contrato constitui o entendimento integral entre o usuário e a C Tormen & Cia LTDA e de todos os nossos 
        eventos e treinamentos online ou presenciais. Com respeito a estes, substitui todas as comunicações e propostas anteriores ou simultâneas, eletrônicas, 
        verbais ou por escrito. Uma versão impressa deste contrato e de qualquer notificação por forma eletrônica será admissível em procedimentos judiciais ou 
        administrativos, baseados neste contrato ou a este relativos, na mesma extensão e sujeitos às mesmas condições que outros documentos e registros 
        comerciais originalmente gerados e mantidos em forma impressa.
    </Paragraph>
    <SubTitle>
        DIVISIBILIDADE
    </SubTitle>
    <Paragraph>
        Se qualquer parte deste contrato for considerada inválida ou inexequível de acordo com a legislação aplicável, 
        então (I) primeiro, a cláusula inválida ou inexequível será substituída por uma cláusula válida e exequível que 
        seja mais próxima da intenção da cláusula original, e o restante do contrato continuará em vigor; ou (II) segundo, 
        as cláusulas determinadas como inválidas, nulas ou inexequíveis por qualquer tribunal de jurisdição competente serão 
        separadas e as cláusulas remanescentes continuarão exequíveis dentro dos limites permitidos por lei.
    </Paragraph>
    <SubTitle>
        JURISDIÇÃO
    </SubTitle>
    <Paragraph>
        Este contrato será regido e interpretado de acordo com as leis da República Federativa do Brasil, sem referência à 
        doutrina que possibilita a escolha de foro. Você, neste ato, consente em submeter-se à jurisdição exclusiva do 
        Foro da Comarca de Porto Alegre/RS, em relação ao início, prosseguimento ou continuação de qualquer reivindicação.
    </Paragraph>
    <Paragraph>
        Todos os direitos não declarados expressamente neste material estão reservados.
    </Paragraph>

</Wrapper>

export default TermsOfUse;