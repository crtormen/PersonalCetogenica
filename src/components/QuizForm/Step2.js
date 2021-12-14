import React, {useState} from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as S from './styled';
import * as C from '../../styles/elements';
import couch from "../../images/icons/couchpotato.png";
import yoga from "../../images/icons/yoga.png";
import corrida from "../../images/icons/corrida.png";

const Step2 = ({visible, activity, setActivity}) => {

    return (
        visible && 
        <S.Wrapper>
            <S.Header>
                <C.SubTitle style={{textTransform: 'uppercase'}}>Nível de Atividade Diária</C.SubTitle>
            </S.Header>
            <S.StepWrapper>
                    <S.ActivityButtonWrapper onClick={() => setActivity('low')} >
                        {/* <StaticImage src={couch} alt="sofa"  className="image"/> */}
                            <input
                                type="radio" 
                                name="activity"
                                value="low"
                                id="activity-low" 
                                checked={activity === 'low'}
                                onChange={() => setActivity('low')}  />
                                <S.ActivityDescription>
                                    <h3>Pouca Atividade</h3>
                                    <p>Apenas tarefas básicas, sem exercício físico</p>
                                </S.ActivityDescription>
                    </S.ActivityButtonWrapper>
                    <S.ActivityButtonWrapper  onClick={() => setActivity('medium')}>
                        {/* <StaticImage src={yoga} alt="yoga" className="image"/> */}
                        {/* <input 
                            type="radio" 
                            name="activity" 
                            value="medium"
                            id="activity-medium" 
                            checked={activity === 'medium'}
                            onChange={() => setActivity('medium')}   /> */}
                            <S.ActivityDescription>
                                <h3>Atividade Moderada</h3>
                                <p>Caminhadas leves, yoga, pilates</p>
                            </S.ActivityDescription>
                    </S.ActivityButtonWrapper>
                    <S.ActivityButtonWrapper onClick={() => setActivity('high')}>
                        {/* <StaticImage src={corrida} alt="corrida" className="image"/> */}
                        {/* <input 
                            type="radio" 
                            name="activity" 
                            value="high"
                            id="activity-high" 
                            checked={activity === 'high'}
                            onChange={() => setActivity('high')} /> */}
                            <S.ActivityDescription>
                                <h3>Muita Atividade</h3>
                                <p>Corrida, musculação, crossfit</p>
                            </S.ActivityDescription>
                    </S.ActivityButtonWrapper>
            </S.StepWrapper>
        </S.Wrapper>
    )
}

export default Step2;