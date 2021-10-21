import React from 'react';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';
import Youtube from './youtube';
import CTAButton from './CTAButton';
import * as S from '../styles/sales_page';
import * as C from '../styles/elements';

const Cover = () => (
    <S.CoverWrapper>
        <StaticImage
            loading="eager"
            layout="fullWidth"
            src="../images/background-gradient.jpg"
            alt="capa"
            className="coverImage"
        />
        <S.CoverCopy>
            <S.HeadlineWrapper>
                <S.Headline>
                    <span className="bigger">Você, Mulher</span><br/>
                    Perca Até 10 Kg em 28 dias,
                    Sem Abrir Mão de Suas Comidas Favoritas, e Sem Passar Fome
                {/* Se Você é Mulher e Precisa De Ajuda Para Emagrecer, Mas Não Quer Passar Fome, Continue Lendo! */}
                {/* Perca de 5 a 10 Kg Em Apenas 4 Semanas - Sem Sofrer! */}
                </S.Headline>
                <S.SubHeadline>Descubra Como Você Irá Emagrecer, Ganhar Saúde e Se Tornar Uma Mulher Mais <span>Atraente, Saudável e Feliz</span>, Comendo Pizza, Chocolate e Outras Delícias. </S.SubHeadline>
                {/* <CTAButton title="Comprar" href="https://pay.hotmart.com/W18216290C">
                    Sim, Eu Quero Emagrecer Já!
                </CTAButton> */}
            </S.HeadlineWrapper>
            <S.VideoWrapper>
                <Youtube embedId="JTeOFC_g02Q" />
            </S.VideoWrapper>
        </S.CoverCopy>
        <CTAButton>QUERO EMAGRECER AGORA</CTAButton>
    </S.CoverWrapper>
)

export default Cover;