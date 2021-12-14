import React from 'react';
import {StaticImage} from 'gatsby-plugin-image';

import * as S from '../styles/sales_page';
import * as C from '../styles/elements';

const MetodoEsbelta = () => (
    <S.MetodoEsbelta>
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
                <S.Pilares>
                    <StaticImage src='../images/icons/hormones.jpg' className="pilar_image" alt="hormonios"/>
                    <span className="pilares">1. Regulação<br/>Hormonal</span>
                </S.Pilares>
                <S.Pilares>
                    <StaticImage src='../images/icons/metabolismo.jpg' className="pilar_image" alt="metabolismo" />
                    <span className="pilares">2. Aceleração do Metabolismo </span>
                </S.Pilares>
                <S.Pilares>
                    <StaticImage src='../images/icons/wellness-woman.jpg' className="pilar_image" alt="habitos" />
                    <span className="pilares">3. Aumento da Saciedade</span>
                </S.Pilares>
            </S.Grid>
            <C.Title style={{lineHeight: '1.2', maxWidth: '800px',  margin: '2rem auto'}}><C.BG color="var(--purple)"><C.Color color="yellow">Esses 3 Pilares Transformarão Seu Corpo em Uma Máquina de Queimar Gordura.</C.Color></C.BG></C.Title>
        </C.Block>
            
    </S.MetodoEsbelta>
)

export default MetodoEsbelta;