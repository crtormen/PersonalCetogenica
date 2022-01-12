import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { StaticImage } from 'gatsby-plugin-image';
import * as C from '../styles/elements';


const BonusWrapper = styled.section``

const BonusDiv = styled.div`
    display: grid;
    padding: 1.5rem 0;
    grid: auto / repeat(5, 1fr);
    gap: 0 2rem;
    grid-template-areas: 'title title title title .' 'img img desc desc desc' 'img img desc desc desc';

    ${media.lessThan("medium")`
        grid-template-areas: 'title title title title title' '. img img img .' 'desc desc desc desc desc';
    `}
    
`

const BonusImage = styled.div`
    grid-area: img;
    margin: auto;
` 

const BonusTitle = styled.div`
    grid-area: title;
    padding: 1rem;
`

const BonusDescription = styled.div`
    grid-area: desc;

    ${media.lessThan("medium")`
        margin: 1rem;
    `}
`

const Bonus = () =>
    <BonusWrapper> 
        <BonusDiv>
            <BonusImage>
                <StaticImage src='../images/grupo.jpg' alt="grupo secreto" />
            </BonusImage>
            <BonusTitle>
                <C.SubTitle color="var(--purple)">Presente #1 - Acesso ao Grupo Secreto das Alunas</C.SubTitle></BonusTitle>
            <BonusDescription>
                <C.Paragraph>Você terá acesso ao Grupo Secreto das Alunas do Desafio.</C.Paragraph>
                <C.Paragraph>Esse é um grupo de apoio, onde você poderá tirar suas dúvidas comigo, compartilhar suas fotos, suas vitórias e dificuldades com mulheres que estão no mesmo processo que você.</C.Paragraph>
                <C.Paragraph>Muito importante para buscar motivação, e também para motivar.</C.Paragraph>
                <C.Paragraph><C.Color color="red">VALOR DA COMUNIDADE: <C.Bolder style={{ textDecoration: 'line-through'}}>NÃO ESTÁ À VENDA</C.Bolder></C.Color></C.Paragraph>
            </BonusDescription>
        </BonusDiv>
        <C.Divider/>
        <BonusDiv>
            <BonusImage>
                <StaticImage src='../images/capaslivros3.png' alt="ebooks receitas" />
            </BonusImage>
            <BonusTitle>
                <C.SubTitle color="var(--purple)">Presente #2 - 4 Livros De Receitas Deliciosas CALCULADAS</C.SubTitle></BonusTitle>
            <BonusDescription>
                <C.Paragraph>Você terá acesso a 4 Livros de Receitas deliciosas, desenvolvidos por mim, com todas as receitas contendo o cálculo de calorias, proteínas, gorduras e carboidratos.</C.Paragraph>
                <C.Paragraph>As receitas também possuem sugestão de uso por refeição. Com os dados de calorias e macronutientes, você poderá facilmente incorporar essas receitas na sua dieta. </C.Paragraph>
                <C.Paragraph>O esforço envolvido na elaboração desses 4 livros foi imenso. Mas você receberá gratuitamente.</C.Paragraph>
                <C.Paragraph><C.Color color="red">VALOR NORMAL: <C.Bolder style={{ textDecoration: 'line-through'}}>R$119</C.Bolder> (Ou  <C.Bolder style={{ textDecoration: 'line-through'}}>R$29</C.Bolder> cada livro)</C.Color></C.Paragraph>
                <C.Paragraph>NESTA OFERTA: <C.Bolder><C.Color color="var(--green)">GRÁTIS</C.Color></C.Bolder></C.Paragraph>
            </BonusDescription>
        </BonusDiv>
        <C.Divider/>
        <BonusDiv>
            <BonusImage>
                <StaticImage src='../images/digo.jpg' alt="detox40" />
            </BonusImage>
            <BonusTitle>
                <C.SubTitle color="var(--purple)">Presente #3 - Semana de Treinos Metabólicos do Programa Detox40</C.SubTitle></BonusTitle>
            <BonusDescription>
                <C.Paragraph>Você terá acesso a uma semana de treinos do Programa de Treinamento Detox40, do treinador Rodrigo Piano.</C.Paragraph>
                <C.Paragraph>São treinos de 15 minutos, que você poderá fazer do conforto da sua casa para potencializar seus resultados.</C.Paragraph>
                <C.Paragraph><C.Color color="red">VALOR NORMAL: <C.Bolder style={{ textDecoration: 'line-through'}}>R$119</C.Bolder> (Ou  <C.Bolder style={{ textDecoration: 'line-through'}}>R$29</C.Bolder> cada)</C.Color></C.Paragraph>
                <C.Paragraph>NESTA OFERTA: <C.Bolder><C.Color color="var(--green)">GRÁTIS</C.Color></C.Bolder></C.Paragraph>
            </BonusDescription>
        </BonusDiv>
        <C.Divider/>
        <BonusDiv>
            <BonusImage>
                <StaticImage src='../images/manureis.jpg' alt="ebooks" />
            </BonusImage>
            <BonusTitle>
                <C.SubTitle color="var(--purple)">Presente #4 - Semana de Treinos com a Personal Manu Reis</C.SubTitle></BonusTitle>
            <BonusDescription>
                <C.Paragraph>Nesse presente incrível, a treinadora Manu Reis passará treinos para membros inferiores e membros superiores.
                    Para você fazer de casa, e ficar com o corpo ainda mais durinho e definido.</C.Paragraph>
                <C.Paragraph><C.Color color="red">VALOR NORMAL: <C.Bolder style={{ textDecoration: 'line-through'}}>R$90</C.Bolder> </C.Color></C.Paragraph>
                <C.Paragraph>NESTA OFERTA: <C.Bolder><C.Color color="var(--green)">GRÁTIS</C.Color></C.Bolder></C.Paragraph>
            </BonusDescription>
        </BonusDiv>
        <C.Divider/>
        <BonusDiv>
            <BonusImage>
                <StaticImage src='../images/manipulados.jpg' alt="ebooks" />
            </BonusImage>
            <BonusTitle>
                <C.SubTitle color="var(--purple)">Presente #5 - Fórmulas de Suplementos Manipulados</C.SubTitle></BonusTitle>
            <BonusDescription>
                <C.Paragraph>Prescrevi uma série de fórmulas que você poderá encomendar de farmácias de manipulação para problemas que nós, mulheres, enfrentamos.</C.Paragraph>
                <C.Paragraph>Celulite, Queda de cabelo, unhas fracas, estrias, flacidez, menopausa, problemas hormonais, e muitos outros.</C.Paragraph>
                <C.Paragraph>Sáo fórmulas que venho desenvolvendo ou coletando ao longo dos últimos anos, e que prescrevo diariamente para minhas pacientes.</C.Paragraph>
                <C.Paragraph><C.Color color="red">VALOR: <C.Bolder style={{ textDecoration: 'line-through'}}>NÃO ESTÁ À VENDA</C.Bolder></C.Color></C.Paragraph>
            </BonusDescription>
        </BonusDiv>
        <C.Divider/>
        <BonusDiv>
            <BonusImage>
                <StaticImage src='../images/chas-diureticos-0.jpg' alt="ebooks" />
            </BonusImage>
            <BonusTitle>
                <C.SubTitle color="var(--purple)">Presente #6 - Receitas de Chás Diuréticos</C.SubTitle></BonusTitle>
            <BonusDescription>
                <C.Paragraph>Também elaborei diversas receitas de chás diuréticos, para ajudar você a eliminar a retenção de líquidos que tanto nos incomoda.</C.Paragraph>
                <C.Paragraph>São combinações de ervas que você poderá encontrar facilmente e fazer na sua casa</C.Paragraph>
                <C.Paragraph><C.Color color="red">VALOR: <C.Bolder style={{ textDecoration: 'line-through'}}>NÃO ESTÁ À VENDA</C.Bolder></C.Color></C.Paragraph>
            </BonusDescription>
        </BonusDiv>
        <C.Divider/>
        <BonusDiv>
            <BonusImage>
                <StaticImage src='../images/ebook.webp' alt="ebooks" />
            </BonusImage>
            <BonusTitle>
                <C.SubTitle color="var(--purple)">Presente #7 - Livros Digitais sobre as Técnicas Utilizadas no Método Esbelta</C.SubTitle></BonusTitle>
            <BonusDescription>
                <C.Paragraph>Caso você queira se aprofundar nas técnicas que utilizo no método, como Dieta Cetogênica e Jejum intermitente, você poderá baixar os ebooks que escrevi, com explicações científicas mais detalhadas.</C.Paragraph>
                <C.Paragraph><C.Color color="red">VALOR: <C.Bolder style={{ textDecoration: 'line-through'}}>NÃO ESTÁ À VENDA</C.Bolder></C.Color></C.Paragraph>
            </BonusDescription>
        </BonusDiv>
    </BonusWrapper>

    export default Bonus