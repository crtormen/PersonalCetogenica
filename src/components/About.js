import React from 'react';
import {StaticImage} from 'gatsby-plugin-image';
import * as S from '../styles/sales_page';
import * as C from '../styles/elements';


const About = () => (
    <S.About>
        <S.AboutImage>
            <StaticImage 
                src='../images/char-nutri.png'
                // rounded={true}
                alt="Nutri Charline Tormen"
                // height="20vw"
                style={{ 
                    borderRadius: '50%'
                }}/>
        </S.AboutImage>
        <S.AboutText>
            <C.Title><C.Color color="var(--purple)">Eu Serei Sua Guia Rumo Ao Emagrecimento Saudável e Prazeroso</C.Color><C.Divider /></C.Title>
            <div style={{paddingLeft: '1rem'}}>
                <C.Paragraph>Olá, me chamo <C.Underline>Charline Tormen.</C.Underline> <br/>
                    Sou Mãe, Esposa, <C.Bolder>Nutricionista Especialista em Nutrição 
                    Esportiva e Emagrecimento há mais de 10 anos</C.Bolder>, Palestrante e Atleta de Fisiculturismo.
                </C.Paragraph>
                <C.Paragraph>Através da Nutrição Transformadora, <C.Underline><C.BG>já ajudei mais de 20.130 pessoas</C.BG></C.Underline> a conquistarem o corpo que sonhavam, a saúde que precisavam e a confiança que mereciam ter.</C.Paragraph>
            </div>
        </S.AboutText>
        <S.AboutHero>
            <StaticImage
                loading="eager"
                layout="fullWidth"
                src="../images/bg-grad-narrow.jpg"
                alt="capa"
                className="bgImage"
            />
            <div style={{maxWidth:"100ch"}}><C.SubTitle><C.Color>A Razão Nº 1 Que Faz Você Não Conseguir Emagrecer é Não Ter Prazer em Fazer Dieta.</C.Color></C.SubTitle></div>
            <div style={{maxWidth:"100ch"}}><C.Title><C.BG>Há Alguns Anos, Descobri os Segredos Do Emagrecimento Saudável e Prazeroso</C.BG></C.Title></div>
            <C.Paragraph><C.Bolder><C.Color>...que transformaram a forma como eu via a Nutrição.</C.Color></C.Bolder></C.Paragraph>
            {/* <C.Paragraph>
                <C.Color color="var(--postColor)"><C.BG>IMPORTANTE:</C.BG></C.Color> 
                <C.Color> Se alcançar um resultado impressionante desses, de forma tão rápida, assusta você, 
            pare de ler agora mesmo. <br/>O método que irei te apresentar não é para você.</C.Color>
            </C.Paragraph>
            <C.Paragraph><C.Color>Mas se é isso mesmo que você está procurando, e se está DETERMINADA a emagrecer de uma vez por todas, </C.Color></C.Paragraph> */}
            {/* <C.Paragraph><C.Color>Eu lhe apresento...</C.Color></C.Paragraph> */}
        </S.AboutHero>        
    </S.About>
)


export default About;