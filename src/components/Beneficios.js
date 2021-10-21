import React from 'react';
import {StaticImage} from 'gatsby-plugin-image';
import * as S from '../styles/sales_page';
import * as C from '../styles/elements';

const Beneficios = () => (
    <S.Beneficios>
        <S.BeneficiosLeftSide>
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
        </S.BeneficiosLeftSide>
        <S.BeneficiosRightSide>
                <StaticImage style={{ width: '85%'}} src='../images/evolucoes/evolucao-etiene.jpg' alt="AntesDepois" />
                <StaticImage style={{ width: '85%'}} src='../images/evolucoes/evolucao3.jpg' alt="AntesDepois" />
                <StaticImage style={{ width: '85%'}} src='../images/evolucoes/evolucao-mariadorneles.jpg' alt="AntesDepois" />
                <StaticImage style={{ width: '85%'}} src='../images/evolucoes/evolucao9.jpg' alt="AntesDepois" />
        </S.BeneficiosRightSide>
    </S.Beneficios>
)

export default Beneficios;