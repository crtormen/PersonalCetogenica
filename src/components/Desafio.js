import React from 'react';
import * as C from '../styles/elements';
import styled from 'styled-components';


const DesafioSection = styled.section`
    grid-row: 8/9;
    grid-column: 2/-2;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: auto;
`

const Desafio = () => (
    <DesafioSection>
        <C.Paragraph>
            Em 2019, condensei todo esse conhecimento em um Programa 100% Online, chamado Desafio Corpo Dos Sonhos.
        </C.Paragraph>
        <C.Paragraph>
            E o resultado não poderia ter sido melhor. Centenas de alunos que aderiram ao desafio alcançaram resultados incríveis.
        </C.Paragraph>

    </DesafioSection>
)

export default Desafio;