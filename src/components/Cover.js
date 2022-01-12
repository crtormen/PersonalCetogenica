import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

import { StaticImage } from 'gatsby-plugin-image';
import Youtube from './youtube';
import CTAButton from './CTAButton';

const CoverCopy = styled.div`
    display: grid;
    grid-template-columns: repeat(6,1fr);
    margin: 1rem 0;
    height: 100%;

    ${media.lessThan("large")`
        /* flex-direction: column; */
        align-items: center;
        justify-content: space-between;
    `}


`
const CoverLogo = styled.div`
    grid-row: 1/2;
    grid-column: 3/5;
    height: auto;
    width: 20rem;
    margin: 0 auto 2rem;
    
    ${media.lessThan("medium")`
        width: 10rem;
    `}
`

const HeadlineWrapper = styled.div`
    grid-column: 1/4;
    grid-row: 2/5;
    z-index: 100;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    padding: 0 2rem;
    color: white;

    ${media.lessThan("large")`
        margin-bottom: 2rem;
        grid-column: 2/-2;
        grid-row: 2/3;
    `}
        
        ${media.lessThan('700px')`
        margin: 0 1rem;
        grid-column: 1/-1;
        grid-row: 2/3;
        padding: 0;
    `}
`

const Headline = styled.h1`
    font-size: 5.5vmin;
    font-weight: 600;
    font-family: 'Proxima Nova Bold','Roboto', sans-serif;
    line-height: 1;
    margin-bottom: 2rem;
    color: white;
    text-shadow: 2px 3px 0 rgb(34 30 31 / 75%); //1px 1px 1px var(--postColor);

    span.bigger {
        text-transform: uppercase;
        color: white;
        background: var(--orange);
    }

    ${media.lessThan("large")`
        text-align: center;
    `}

    ${media.lessThan("370px")`
        margin-bottom: 1rem;
    `}
`

const SubHeadline = styled.h2`
    font-size: 3vmin;
    font-weight: 500;
    line-height: 1.4;
    font-family: 'Open Sans', sans-serif;
    /* text-align: center; */
    span {
        background: var(--pink);
        color: var(--white);
        font-weight: 700;
        font-size: 1.8rem;
    }


    ${media.lessThan("large")`
        text-align: center;
        font-size: 3.5vmin;

        span {
            line-height: 1.6;
        }
    `}

    ${media.lessThan("medium")`
        /* font-size: 1.1rem; */

        span {
            font-size: 3.2vmin;
            line-height: 1.6;
        }
    `}

    ${media.lessThan("400px")`
        /* font-size: 14px; */

        span {''
            font-size: 3.1vmin;
            line-height: 1.4;
        }
    `}
`
const VideoWrapper = styled.div`
    grid-column: 4/-1;
    grid-row: 2/5;
    margin: 2rem;
    
    ${media.lessThan("large")`
        grid-column: 1/-1;
        grid-row: 3/4;
    `}
        
    ${media.lessThan("medium")`
        grid-column: 1/-1;
        grid-row: 3/4;
        margin: 2rem 0;
    `}
`

const CTAButtonWrapper = styled.div`
    grid-column: 1/-1; 
    grid-row: 5/6;
    z-index: 100;
    margin: 0 auto;
    
    ${media.lessThan("large")`
        grid-row: 4/5;
    `}
`


const Cover = ({headline, subheadline}) => (
        <CoverCopy>
            <CoverLogo>
                <StaticImage src="../images/logo-esbelta-desafio-branco.png" alt="logo" />
            </CoverLogo>
            <HeadlineWrapper>
                { headline ? 
                    <Headline>
                        {headline} 
                    </Headline> :
                    <Headline>
                            O Único Método De Emagrecimento 100% Seguro Que Te Fará Perder de 5 a 10kg em Apenas 28 Dias, Sem Deixar de Comer o Que Você Gosta
                    </Headline>
                }
                    {/*"Quer Perder Até 10 Kg em 28 dias, Sem Abrir Mão de Suas Comidas Favoritas, e Sem Passar Fome?" */}
                    {/* Se Você é Mulher e Precisa Emagrecer, Mas Não Quer Passar Fome, Está No Lugar Certo */}
                    {/* Perca de 5 a 10 Kg Em Apenas 4 Semanas - Sem Sofrer Nem Passar Fome */}
                {subheadline ? 
                    <SubHeadline>
                            {subheadline}
                    </SubHeadline> :
                    <SubHeadline>
                        Se Você Deseja Emagrecer, Ganhar Saúde e Se Tornar Uma Mulher Mais Atraente, Saudável e Feliz, Mas Não Quer Deixar de Comer Pizza, Chocolate e Outras Delícias, Você Encontrou o Que Procurava.
                    </SubHeadline> 
                }
            </HeadlineWrapper>
            <VideoWrapper>
                <Youtube embedId="JTeOFC_g02Q" />
            </VideoWrapper>
            <CTAButtonWrapper>
                <CTAButton>Quero Ser Magra Com 81 centavos Por Dia</CTAButton>
            </CTAButtonWrapper>
        </CoverCopy>
)

export default Cover;