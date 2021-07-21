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
            src="../images/bg-grad-colorful.jpg"
            alt="capa"
            className="coverImage"
        />
        <S.CoverCopy>
            <S.HeadlineWrapper>
                <S.Headline>
                    <span className="bigger">Você, Mulher</span><br/>
                    Perca Até 10 Kg em 30 dias,<br/>
                    Sem Abrir Mão de Suas Comidas Favoritas, e Sem Passar Fome
                {/* Se Você é Mulher e Precisa De Ajuda Para Emagrecer, Mas Não Quer Passar Fome, Continue Lendo! */}
                {/* Perca de 5 a 10 Kg Em Apenas 4 Semanas - Sem Sofrer! */}
                </S.Headline>
                <S.SubHeadline>Descubra Como Você Irá Emagrecer e Ganhar Saúde, Comendo Pizza, Chocolate e Outras Delícias, e Se Tornar Uma Mulher Mais <br /><span>Atraente, Saudável e Feliz</span>. </S.SubHeadline>
                {/* <CTAButton title="Comprar" href="https://pay.hotmart.com/W18216290C">
                    Sim, Eu Quero Emagrecer Já!
                </CTAButton> */}
            </S.HeadlineWrapper>
            <S.VideoWrapper>
                <Youtube embedId="JTeOFC_g02Q" />
            </S.VideoWrapper>
        </S.CoverCopy>
    </S.CoverWrapper>
)

export default Cover;