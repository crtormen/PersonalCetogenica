import React, {useState} from 'react';
import * as S from './styled';
import {SubTitle} from '../../styles/elements';

const ResultsPage = ({visible, weight, target, activity, result}) => (
    visible &&
    <S.ResultsWrapper>
        <S.Header>
            <SubTitle style={{textTransform: 'uppercase'}}>Resultados</SubTitle>
        </S.Header>
        <S.ResultBoxes>
            <S.Box>
                <S.BoxHeader>Calorias Diárias</S.BoxHeader>
                <S.BoxValue>{Math.round(result.total)} Kcal</S.BoxValue>    
            </S.Box> 
            <S.Box>
                <S.BoxHeader>Gorduras</S.BoxHeader>
                <S.BoxValue>{Math.round(result.total * 0.7/9)} g</S.BoxValue>
            </S.Box>
            <S.Box>
                <S.BoxHeader>Proteínas</S.BoxHeader>
                <S.BoxValue>{Math.round(result.total * 0.25/4)} g</S.BoxValue>
            </S.Box>
            <S.Box>
                <S.BoxHeader>Carboidratos</S.BoxHeader>
                <S.BoxValue>{Math.round(result.total * 0.05/4)} g</S.BoxValue>
            </S.Box>
            <S.Box>
                <S.BoxHeader>Ingestão de Água</S.BoxHeader>
                <S.BoxValue>{Math.round(weight * 40/1000)} L</S.BoxValue>
            </S.Box>
            <S.Box>
                <S.BoxHeader>Nível de Atividade</S.BoxHeader>
                <S.BoxValue>
                    {
                    activity === 'low' ? 'Pouco Ativa' :
                    activity === 'medium' ? 'Moderado' :
                    'Muito ativa'
                }</S.BoxValue>
            </S.Box>
            <S.Box>
                <S.BoxHeader>Peso Alvo</S.BoxHeader>
                <S.BoxValue>{target} Kg</S.BoxValue>
            </S.Box>
        </S.ResultBoxes>    
    </S.ResultsWrapper>
);

export default ResultsPage;