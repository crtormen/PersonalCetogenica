import React from 'react';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';
import Youtube from './youtube';
import CTAButton from './CTAButton';
import * as S from '../styles/sales_page';
import * as C from '../styles/elements';

const Cover = () => (
    <S.CoverWrapper>

        {/* <StaticImage
            loading="eager"
            layout="fullWidth"
            src="../images/background-gradient.jpg"
            alt="capa"
            className="coverImage"
        /> */}
        <S.CoverCopy>
            <S.CoverLogo>
                <StaticImage src="../images/logo-esbelta-desafio-branco.png" alt="logo" />
            </S.CoverLogo>
            <S.HeadlineWrapper>
                <S.Headline>
                    {/* <span className="bigger">Você, Mulher</span><br/>
                    Deseja Perder Até 10 Kg em 28 dias,
                    Sem Abrir Mão de Suas Comidas Favoritas, e Sem Passar Fome? */}
                O Único Método De Emagrecimento 100% Seguro Que Te Fará Perder de 5 a 10kg em Apenas 28 Dias, Sem Deixar de Comer o Que Você Gosta
                {/* Se Você é Mulher e Precisa Emagrecer, Mas Não Quer Passar Fome, Está No Lugar Certo */}
                {/* Perca de 5 a 10 Kg Em Apenas 4 Semanas - Sem Sofrer Nem Passar Fome */}
                </S.Headline>
                <S.SubHeadline>Descubra Como Você Irá Emagrecer, Ganhar Saúde e Se Tornar Uma Mulher Mais <span>Atraente, Saudável e Feliz</span>, Comendo Pizza, Chocolate e Outras Delícias. </S.SubHeadline>
                {/* Se Você Deseja Emagrecer, Ganhar Saúde e Se Tornar Uma Mulher Mais Atraente, Saudável e Feliz, Mas Não Quer Deixar de Comer Pizza, Chocolate e Outras Delícias, Você Encontrou o Que Procurava. */}
            </S.HeadlineWrapper>
            <S.VideoWrapper>
                <Youtube embedId="JTeOFC_g02Q" />
            </S.VideoWrapper>
            <S.CTAButtonWrapper>
                <CTAButton>QUERO EMAGRECER AGORA</CTAButton>
            </S.CTAButtonWrapper>
        </S.CoverCopy>
    </S.CoverWrapper>
)

export default Cover;