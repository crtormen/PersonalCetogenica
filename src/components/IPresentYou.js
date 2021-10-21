import React from 'react';
import {StaticImage} from 'gatsby-plugin-image';

import CTAButton from './CTAButton';
import * as S from '../styles/sales_page';
import * as C from '../styles/elements';

const IPresentYou = () => (
    <S.IPresentYou>
        <S.Logo>
            <StaticImage src="../images/logoteste.png" alt="logo" />
        </S.Logo>
        <C.Title><C.Color color="var(--purple)">O Método Esbelta</C.Color><C.Divider /></C.Title>

        <C.Block>
            <C.Paragraph>
            <C.Bolder>O Método Esbelta é um programa de emagrecimento saudável <C.Underline>ÚNICO e INOVADOR</C.Underline> desenvolvido para você, mulher, 
            emagrecer em apenas 28 dias o que levaria 6 meses para conseguir com qualquer outro método. E o melhor, de forma prática, gostosa e sem passar fome. </C.Bolder>
            </C.Paragraph>
            {/* <C.Paragraph>
                <C.Bolder>
                    Mas não somente isso, ele é a solução definitiva para você emagrecer tudo o que precisar, 
                    no tempo que precisar, e para o resto da sua vida.
                </C.Bolder>
            </C.Paragraph> */}
            <C.Paragraph>O Método Esbelta é baseado em técnicas revolucionárias, comprovadas científicamente nos últimos anos, que estimulam e aceleram o emagrecimento e trazem benefícios reais à saúde. 
            </C.Paragraph>
            <C.Title style={{lineHeight: "1.2", color: 'white'}}><C.BG color="var(--pink)">Emagrecer De 5 a 10 Kg Em Apenas 28 Dias É Mais Fácil Do Que Se Imagina, Mas Você Precisa Começar Agora!</C.BG></C.Title>
            <br /><br /><C.Paragraph>Você deseja ser uma pessoa mais bonita e saudável?</C.Paragraph>
            <C.Paragraph>Ser elogiada, atrair olhares, ou ser uma inspiração para outras mulheres?</C.Paragraph>
            <C.Paragraph>Eu te garanto que isso é totalmente possível!</C.Paragraph>
            <C.Paragraph>Porém, não conquistamos nada sem atitude. Para alcançar o sucesso, é necessário agir <C.Bolder>AGORA.</C.Bolder></C.Paragraph>
            <C.Paragraph>A boa notícia é que: <C.Bolder><C.BG>É MAIS SIMPLES DO QUE VOCÊ IMAGINA.</C.BG></C.Bolder></C.Paragraph>
            <S.Icons>
                <S.Icon>
                    <StaticImage src='../images/icons/healthy2.png' alt="método seguro" height={300} width={300} />
                    <h3>Método Seguro</h3>
                    <p>Sem dietas radicais nem uso de medicamentos</p>
                </S.Icon>
                <S.Icon>
                    <StaticImage src='../images/icons/happier.png' alt="sem sofrimento" height={300} width={300} />
                    <h3>Sem Sofrimento</h3>
                    <p>Sem se matar na esteira nem se privar de comer com prazer</p>
                </S.Icon>
                <S.Icon>
                    <StaticImage src='../images/icons/online2.png' alt="100% online" height={300} width={300} />
                    <h3>100% Online</h3>
                    <p>Acesse a qualquer hora pelo smartphone, tablet ou PC.</p>
                </S.Icon>
                <S.Icon>
                    <StaticImage src='../images/icons/online.png' alt="100% online" height={300} width={300} />
                    <h3>Acesso Imediato</h3>
                    <p>Comece agora mesmo, de onde estiver.</p>
                </S.Icon>
            </S.Icons>
        </C.Block>
        <CTAButton title="Comprar" href="https://pay.hotmart.com/W18216290C">
            Quero Emagrecer Agora
        </CTAButton>
    </S.IPresentYou>
)

export default IPresentYou;