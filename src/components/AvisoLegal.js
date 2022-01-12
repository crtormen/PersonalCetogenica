import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const AvisoLegalWraper = styled.section`
    grid-row: 13/14;
    grid-column: 1/-1;
    text-align: center;
    padding: 2rem;
    background: var(--postColor);
    color: var(--borders);
    font-size: 12px;
    margin-bottom: 0;

    p {
        margin: 1rem;
    }
`

const AvisoLegal = () => (
    <AvisoLegalWraper>
        <p>Aviso Legal</p>

        <p>É aconselhável consultar seu médico antes de iniciar qualquer atividade física ou plano nutricional.</p>

        <p>Os produtos e serviços vendidos neste site não devem ser interpretados como uma promessa ou garantia de resultados.</p>

        <p>Os resultados variam para cada pessoa. Seu nível de sucesso em alcançar os resultados divulgados com o uso desse programa depende da sua dedicação, periodicidade dos treinos, conhecimento e disciplina em seguir todas as sugestões.</p>

        <p>Como esses fatores diferem entre cada indivíduo, não podemos garantir o sucesso ou o nível de resultado, nem somos responsáveis por qualquer de suas ações.</p>

        <p>Todas e quaisquer declarações prospectivas contidas neste site ou em qualquer um de nossos produtos destinam-se a expressar a nossa opinião sobre os resultados potenciais que algumas pessoas podem alcançar.</p>

        <p>Para sua segurança oferecemos uma garantia de 7 dias. Caso você não goste ou se adapte ao programa, basta solicitar ao nosso suporte o reembolso em até 7 dias contados à partir da data da compra que devolvemos 100% do valor pago.</p>

        <p>Todos os direitos desta página reservados a Charline Tormen Nutricionista.</p>
        <p>Dúvidas ou sugestões, enviar email para: suporte@metodoesbelta.com</p>
        <p><Link to="privacy-policy">Política de Privacidade</Link> - <Link to="terms-of-use">Termos de Uso</Link></p>
    </AvisoLegalWraper>
);

export default AvisoLegal;