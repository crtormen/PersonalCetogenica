import React from 'react';
import {StaticImage} from 'gatsby-plugin-image';
import styled from 'styled-components';
import media from 'styled-media-query';
import * as C from '../styles/elements';

const BeneficiosWrapper = styled.section`
    grid-row: 12/13;
    grid-column: 1/-1;
    display: grid;
    grid-template-columns: minmax(1em, 1fr) repeat(5, 1fr) minmax(1em, 1fr);
    margin-bottom: 3rem;

    ${media.lessThan("medium")`
        grid-template-columns: 1fr;
    `}
`

const BeneficiosLeftSide = styled.div`
    grid-column: 1/5;
    grid-row: 1/2;
    padding: 2rem 2rem 2rem 6rem;

    ${media.lessThan("medium")`
        grid-column: 1/-1;
        padding: 2rem;
    `}
`;

const BeneficiosRightSide = styled.div`
    grid-row: 1/2;
    grid-column:5/8;
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: var(--orange);
    padding: 2rem;

    ${media.lessThan("medium")`
        grid-column: 1/-1;
        grid-row: 2/3; 
        align-items: center;       
        `}
        `;


const BeneficiosFullPage = styled.div`
    grid-row: 2/3;
    grid-column: 1/-1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    height: auto;
    background: rgb(91,34,102);
    background: linear-gradient(183deg, rgba(91,34,102,1) 0%, rgba(102,34,96,1) 35%, rgba(200,43,112,1) 100%);
    color: white;
    padding: 2rem;

    ${media.lessThan("medium")`
        grid-row: 3/4;        
    `}
`

const Beneficios = () => (
    <BeneficiosWrapper>
        <BeneficiosLeftSide>
            <C.SubTitle>Eu acredito que se você chegou até aqui, não foi por acaso.</C.SubTitle> 
            <C.Paragraph>
                Você quer ou precisa emagrecer! E eu te garanto que se você seguir minha estratégia e aplicar passo a passo todas as minhas recomendações, você será capaz de:
            </C.Paragraph>
        <br />
        <C.List>
            <ul>
                <li>Emagrecer de 5 a 10 kg em apenas 28 dias, de maneira fácil, rápida e saudável</li>
                <li>Se tornar uma mulher mais bonita e atraente</li>
                <li>Entrar naquele vestido que não te serve mais</li>
                <li>Passar a escolher suas roupas ao invés de ser escolhida por elas</li>
                <li>Recuperar o corpo que tinha antes de sua gestação</li>
                <li>Reduzir ou acabar com sua celulite</li>
                <li>Ganhar confiança para conquistar aquela pessoa que você gosta, ou aquela vaga de emprego</li>
                <li>Se sentir mais livre</li>
            </ul>
        </C.List>
        <C.Paragraph>Mas nutri, eu preciso perder mais do que 10kg. O Método Esbelta serve para mim?</C.Paragraph>
        <C.Paragraph>Sim! Caso você precise perder mais peso, conseguirá emagrecer tanto o quanto precisar. 
            Seja 20, 30 ou 40kg, só levará um pouco mais de tempo. Você poderá seguir o método para o resto da sua vida se quiser. 
        </C.Paragraph>
        <C.Paragraph>E de quebra você ainda <C.BG>ganhará muito MAIS SAÚDE</C.BG>, o que te ajudará a:</C.Paragraph>
        <br/>
        <C.List>
            <ul>
                <li>Realizar suas atividades diárias com maior disposição</li>
                <li>Viver mais tempo com sua família</li>
                <li>Reduzir risco de doenças causadas por maus hábitos</li>
                <li>Ter menos dores nas articulações</li>
                <li>Ter um sono de melhor qualidade</li>
                <li>Reduzir ou acabar com o ronco à noite</li>
            </ul>
        </C.List>
        <br /><br /><br/>
        <C.Paragraph>Mesmo que você:</C.Paragraph>
        <br/>
        <C.List>
            <ul>
                <li>Pense que não tem genética para ser magra</li>
                <li>Acredite que já tenha tentado de tudo</li>
                <li>Pense que fazer dieta é chato e sofrido</li>
                <li>Tenha aprendido que para emagrecer é preciso passar fome</li>
                <li>Diga para si mesma que não tem tempo para fazer dieta</li>
            </ul>
        </C.List>
        <br /><br /><br/>
        <C.Paragraph>E, até mesmo, caso você se sabote, secretamente,  por acreditar (lá no fundo) que você não é capaz de conquistar os seus sonhos.
        </C.Paragraph>
        </BeneficiosLeftSide>
        <BeneficiosRightSide>
                <StaticImage style={{ width: '85%'}} src='../images/evolucoes/evolucao-etiene.jpg' alt="AntesDepois" />
                <StaticImage style={{ width: '85%'}} src='../images/evolucoes/evolucao3.jpg' alt="AntesDepois" />
                <StaticImage style={{ width: '85%'}} src='../images/evolucoes/evolucao-mariadorneles.jpg' alt="AntesDepois" />
                <StaticImage style={{ width: '85%'}} src='../images/evolucoes/evolucao9.jpg' alt="AntesDepois" />
        </BeneficiosRightSide>
    </BeneficiosWrapper>
)

export default Beneficios;