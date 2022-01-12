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
    grid-template-areas: '. title title title .' '. img img img .' '. desc desc desc .';

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
    text-align: center;
    ${media.lessThan("medium")`
        margin: 1rem;
    `}
`

const BonusShort = () =>
    <BonusWrapper> 
        <BonusDiv>
            <BonusImage>
                <StaticImage src='../images/grupo.jpg' alt="grupo secreto" height={350} />
            </BonusImage>
            <BonusTitle>
                <C.SubTitle color="var(--purple)">Presente #1 - Acesso ao Grupo Secreto das Alunas</C.SubTitle></BonusTitle>
            <BonusDescription>
                <C.Paragraph><C.Color color="red">VALOR DA COMUNIDADE: <C.Bolder style={{ textDecoration: 'line-through'}}>NÃO ESTÁ À VENDA</C.Bolder></C.Color></C.Paragraph>
            </BonusDescription>
        </BonusDiv>
        <C.Divider/>
        <BonusDiv>
            <BonusImage>
                <StaticImage src='../images/capaslivros3.png' alt="ebooks receitas" height={350} />
            </BonusImage>
            <BonusTitle>
                <C.SubTitle color="var(--purple)">Presente #2 - 4 Livros De Receitas Deliciosas CALCULADAS</C.SubTitle></BonusTitle>
            <BonusDescription>
                <C.Paragraph><C.Color color="red">VALOR NORMAL: <C.Bolder style={{ textDecoration: 'line-through'}}>R$119</C.Bolder> (Ou  <C.Bolder style={{ textDecoration: 'line-through'}}>R$29</C.Bolder> cada livro)</C.Color></C.Paragraph>
                <C.Paragraph>NESTA OFERTA: <C.Bolder><C.Color color="var(--green)">GRÁTIS</C.Color></C.Bolder></C.Paragraph>
            </BonusDescription>
        </BonusDiv>
        <C.Divider/>
        <BonusDiv>
            <BonusImage>
                <StaticImage src='../images/digo.jpg' alt="detox40" height={350} />
            </BonusImage>
            <BonusTitle>
                <C.SubTitle color="var(--purple)">Presente #3 - Semana de Treinos Metabólicos do Programa Detox40</C.SubTitle></BonusTitle>
            <BonusDescription>
                <C.Paragraph><C.Color color="red">VALOR NORMAL: <C.Bolder style={{ textDecoration: 'line-through'}}>R$119</C.Bolder> (Ou  <C.Bolder style={{ textDecoration: 'line-through'}}>R$29</C.Bolder> cada)</C.Color></C.Paragraph>
                <C.Paragraph>NESTA OFERTA: <C.Bolder><C.Color color="var(--green)">GRÁTIS</C.Color></C.Bolder></C.Paragraph>
            </BonusDescription>
        </BonusDiv>
        <C.Divider/>
        <BonusDiv>
            <BonusImage>
                <StaticImage src='../images/manureis.jpg' alt="ebooks" height={350} />
            </BonusImage>
            <BonusTitle>
                <C.SubTitle color="var(--purple)">Presente #4 - Semana de Treinos com a Personal Manu Reis</C.SubTitle></BonusTitle>
            <BonusDescription>
                <C.Paragraph><C.Color color="red">VALOR NORMAL: <C.Bolder style={{ textDecoration: 'line-through'}}>R$90</C.Bolder> </C.Color></C.Paragraph>
                <C.Paragraph>NESTA OFERTA: <C.Bolder><C.Color color="var(--green)">GRÁTIS</C.Color></C.Bolder></C.Paragraph>
            </BonusDescription>
        </BonusDiv>
        <C.Divider/>
        <BonusDiv>
            <BonusImage>
                <StaticImage src='../images/manipulados.jpg' alt="ebooks" height={350} />
            </BonusImage>
            <BonusTitle>
                <C.SubTitle color="var(--purple)">Presente #5 - Fórmulas de Suplementos Manipulados</C.SubTitle></BonusTitle>
            <BonusDescription>
                <C.Paragraph><C.Color color="red">VALOR: <C.Bolder style={{ textDecoration: 'line-through'}}>NÃO ESTÁ À VENDA</C.Bolder></C.Color></C.Paragraph>
            </BonusDescription>
        </BonusDiv>
        <C.Divider/>
        <BonusDiv>
            <BonusImage>
                <StaticImage src='../images/chas-diureticos-0.jpg' alt="ebooks" height={350} />
            </BonusImage>
            <BonusTitle>
                <C.SubTitle color="var(--purple)">Presente #6 - Receitas de Chás Diuréticos</C.SubTitle></BonusTitle>
            <BonusDescription>
                <C.Paragraph><C.Color color="red">VALOR: <C.Bolder style={{ textDecoration: 'line-through'}}>NÃO ESTÁ À VENDA</C.Bolder></C.Color></C.Paragraph>
            </BonusDescription>
        </BonusDiv>
        <C.Divider/>
        <BonusDiv>
            <BonusImage>
                <StaticImage src='../images/ebook.webp' alt="ebooks" height={350} />
            </BonusImage>
            <BonusTitle>
                <C.SubTitle color="var(--purple)">Presente #7 - Livros Digitais sobre as Técnicas Utilizadas no Método Esbelta</C.SubTitle></BonusTitle>
            <BonusDescription>
                <C.Paragraph><C.Color color="red">VALOR: <C.Bolder style={{ textDecoration: 'line-through'}}>NÃO ESTÁ À VENDA</C.Bolder></C.Color></C.Paragraph>
            </BonusDescription>
        </BonusDiv>
    </BonusWrapper>

    export default BonusShort;