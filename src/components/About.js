import React from 'react';
import {StaticImage} from 'gatsby-plugin-image';
import styled from 'styled-components';
import media from 'styled-media-query';

import * as C from '../styles/elements';

export const AboutSection = styled.section`
    grid-row: 3/4;
    grid-column: 1/-1;
    display: grid;
    grid-template-columns: minmax(1em, 0.5fr) repeat(2, minmax(300px,1fr)) minmax(1em, 0.5fr);
    grid-gap: 1rem;
    margin: 0 auto;  
    background: white;

    ${media.lessThan("medium")`
        grid-column: 1/-1;
        grid-template-columns: 1fr;
        margin: 1rem;
    `}
`

const AboutImage = styled.div`
    align-self: center;
    /* height: 100%; */
    margin: auto;
    grid-column: 2/3;
    ${media.lessThan("medium")`
        grid-column: 1/-1;
    `}
`

const AboutText = styled.div`
    align-self: center;
    background: var(--white);
    padding: 1rem;
    grid-column: 3/4;

    ${media.lessThan("medium")`
        grid-column: 1/-1;
    `}
`

const AboutHero = styled.section`
    /* grid-row: 4/5; */
    grid-column: 1 / -1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    text-align: center;
    margin: 3rem 0 0 0;

    background: rgb(91,34,102);
    background: linear-gradient(180deg, rgba(91,34,102,1) 0%, rgba(102,34,96,1) 35%, rgba(200,43,112,1) 100%);
    background-size: cover;

`

const About = () => (
    <AboutSection>
        <AboutImage>
            <StaticImage 
                src='../images/char-nutri.png'
                // rounded={true}
                alt="Nutri Charline Tormen"
                // height="20vw"
                style={{ 
                    borderRadius: '50%'
                }}/>
        </AboutImage>
        <AboutText>
            <C.Title><C.Color color="var(--purple)">Eu Serei Sua Guia Rumo Ao Emagrecimento Saudável e Prazeroso</C.Color><C.Divider /></C.Title>
            <div style={{paddingLeft: '1rem'}}>
                <C.Paragraph>Olá, me chamo <C.Underline>Charline Tormen.</C.Underline> <br/>
                    Sou Mãe, Esposa, <C.Bolder>Nutricionista Especialista em Nutrição 
                    Esportiva e Emagrecimento há mais de 10 anos</C.Bolder>, Palestrante e Atleta de Fisiculturismo.
                </C.Paragraph>
                <C.Paragraph>Através da alimentação prazerosa e saudável, <C.Underline><C.BG>já ajudei mais de 20.135 pessoas (e contando...)</C.BG></C.Underline> a conquistarem o corpo que sonhavam, a saúde que precisavam e a confiança que mereciam ter.</C.Paragraph>
            </div>
        </AboutText>
        <AboutHero>
            <div style={{maxWidth:"100ch"}}><C.SubTitle><C.Color>A Razão Nº 1 Que Faz Você Não Conseguir Emagrecer é Não Ter Prazer em Fazer Dieta.</C.Color></C.SubTitle></div>
            <div style={{maxWidth:"100ch"}}><C.Title><C.BG>Há Alguns Anos, Descobri os Segredos Do Emagrecimento Saudável e Prazeroso</C.BG></C.Title></div>
            <C.Paragraph><C.Bolder><C.Color>...que transformaram a forma como eu via a Nutrição, e melhoraram muito os resultados dos meus pacientes.</C.Color></C.Bolder></C.Paragraph>
            {/* <C.Paragraph>
                <C.Color color="var(--postColor)"><C.BG>IMPORTANTE:</C.BG></C.Color> 
                <C.Color> Se alcançar um resultado impressionante desses, de forma tão rápida, assusta você, 
            pare de ler agora mesmo. <br/>O método que irei te apresentar não é para você.</C.Color>
            </C.Paragraph>
            <C.Paragraph><C.Color>Mas se é isso mesmo que você está procurando, e se está DETERMINADA a emagrecer de uma vez por todas, </C.Color></C.Paragraph> */}
            {/* <C.Paragraph><C.Color>Eu lhe apresento...</C.Color></C.Paragraph> */}
        </AboutHero>        
    </AboutSection>
)


export default About;