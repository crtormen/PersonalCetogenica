import React from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import CTAButton from './CTAButton';
import * as C from '../styles/elements';
import * as S from '../styles/sales_page';

const AntesEDepois = () => (
    <S.AntesEDepois>
        <StaticImage
            loading="eager"
            layout="fullWidth"
            src="../images/background-gradient.jpg"
            alt="capa"
            className="bgImage"
        />
        <C.Title className="title"><C.Color>Veja Alguns Resultados Obtidos Com o Método Esbelta</C.Color><C.Divider /></C.Title>
        <S.Grid>
            <StaticImage
                src='../images/evolucoes/evolucao17.jpg'
                alt="Evolução 1"
                className="img1"
                />
            <StaticImage
                src='../images/evolucoes/evolucao2.jpg'
                alt="Evolução 2"
                className="img2"
                />
            <StaticImage
                src='../images/evolucoes/evolucao18.jpg'
                alt="Evolução 3"
                className="img3"
                />
            <StaticImage
                src='../images/evolucoes/evolucao4.jpg'
                alt="Evolução 4"
                className="img4"
                />
            <StaticImage
                src='../images/evolucoes/evolucao7.jpg'
                alt="Evolução 7"
                className="img7"
                />
            <StaticImage
                src='../images/evolucoes/evolucao6.jpg'
                alt="Evolução 6"
                className="img6"
                />
            <StaticImage
                src='../images/evolucoes/evolucao15.jpg'
                alt="Evolução 9"
                className="img9"
            />
            <StaticImage
                src='../images/evolucoes/evolucao16.jpg'
                alt="Evolução 8"
                className="img8"
                />
            <StaticImage
                src='../images/evolucoes/evolucao19.jpg'
                alt="Evolução 5"
                className="img5 hidden"
                />
        </S.Grid>
        <CTAButton
            title="Comprar" 
            href="https://pay.hotmart.com/W18216290C">
                Quero Emagrecer Agora 
        </CTAButton>
    </S.AntesEDepois>
)

export default AntesEDepois;