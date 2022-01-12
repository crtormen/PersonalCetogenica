import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

import {StaticImage} from 'gatsby-plugin-image';
import * as S from '../styles/sales_page';
import * as C from '../styles/elements';

const MetodoEsbeltaWrapper = styled.section`
    grid-row: 4/5;
    grid-column: 1/-1;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin: 0 auto;
    padding: 4rem;
    background-color: var(--grey);

    h1 {
        max-width: 60rem;
    }

    ${media.lessThan("medium")`
        padding: 1rem;
    `}
`

const Pilares = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 1rem 1rem;
    padding: 0 1rem;

    .image {
        border-radius: 50%;
        border: 6px solid var(--purple);
        box-shadow: 5px 10px 1rem rgba(1,1,1, 0.5);
    }

    .pilar_image {
        border-radius: 50%;
        width: 90%;
        height: 100%;
    }

    span {
        margin-top: 1rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 600;
        padding-bottom: 2rem;
    }

    span.pilares {
        font-size: 1.5rem;
        color: var(--purple);
    }

    span.tecnicas {
        font-size: 2rem;
        color: var(--white);
        text-shadow: 1px 1px 5px var(--postColor);

    }
`


const MetodoEsbelta = () => (
    <MetodoEsbeltaWrapper>
        <S.Logo>
            <StaticImage src="../images/logoteste.png" alt="logo" />
        </S.Logo>
        <C.Title><C.Color color="var(--purple)">O Método Esbelta</C.Color><C.Divider /></C.Title>

        <C.Block>
            <C.Paragraph>
            <C.Bolder>O Método Esbelta é um programa de emagrecimento saudável <C.Underline>ÚNICO e INOVADOR</C.Underline> desenvolvido para mulheres, 
            que irá ensinar o seu corpo a utilizar a GORDURA como FONTE PRINCIPAL de energia, e assim emagrecer rapidamente, sem abrir mão da sua saúde. E o melhor, de forma prática, gostosa e sem passar fome. </C.Bolder>
            </C.Paragraph>
            <C.Paragraph>O Método Esbelta é fundamentado em técnicas nutricionais revolucionárias, com as descobertas científicas mais recentes da nutrição, que estimulam e aceleram o emagrecimento e trazem benefícios reais à saúde. 
            </C.Paragraph>
            <C.SubTitle>O Método Esbelta É Baseado Em 3 Pilares:<C.Divider /></C.SubTitle>
            <S.Grid>
                <Pilares>
                    <StaticImage src='../images/icons/hormones.jpg' className="pilar_image" alt="hormonios"/>
                    <span className="pilares">1. Regulação<br/>Hormonal</span>
                </Pilares>
                <Pilares>
                    <StaticImage src='../images/icons/metabolismo.jpg' className="pilar_image" alt="metabolismo" />
                    <span className="pilares">2. Aceleração do Metabolismo </span>
                </Pilares>
                <Pilares>
                    <StaticImage src='../images/icons/wellness-woman.jpg' className="pilar_image" alt="habitos" />
                    <span className="pilares">3. Aumento da Saciedade</span>
                </Pilares>
            </S.Grid>
            <C.Title style={{lineHeight: '1.2', maxWidth: '800px',  margin: '2rem auto'}}><C.BG color="var(--purple)"><C.Color color="yellow">Esses 3 Pilares Transformarão Seu Corpo em Uma Máquina de Queimar Gordura.</C.Color></C.BG></C.Title>
        </C.Block>
            
    </MetodoEsbeltaWrapper>
)

export default MetodoEsbelta;