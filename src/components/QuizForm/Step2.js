import React, {useState} from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as S from './styled';
import * as C from '../../styles/elements';


const Step2 = ({visible, activity, setActivity}) => {

    return (
        visible && 
        <>
            <S.Header>
                <C.SubTitle style={{textTransform: 'uppercase'}}>Nível de Atividade Diária</C.SubTitle>
            </S.Header>
            <S.StepWrapper>
                <S.ActivityGridContainer>
                    <S.ActivityButtonWrapper>
                        <StaticImage src="../../images/icons/couchpotato.png" alt="sofa"  className="image" width={250} height={250}/>
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
                    <S.ActivityButtonWrapper>
                        <StaticImage src="../../images/icons/yoga.png" alt="yoga"  className="image" width={250} height={250}/>
                        <input 
                            type="radio" 
                            name="activity" 
                            value="medium"
                            id="activity-medium" 
                            checked={activity === 'medium'}
                            onChange={() => setActivity('medium')}   />
                            <S.ActivityDescription>
                                <h3>Atividade Moderada</h3>
                                <p>Caminhadas leves, yoga, pilates</p>
                            </S.ActivityDescription>
                    </S.ActivityButtonWrapper>
                    <S.ActivityButtonWrapper>
                        <StaticImage src="../../images/icons/corrida.png" alt="corrida"  className="image" width={250} height={250}/>
                        <input 
                            type="radio" 
                            name="activity" 
                            value="high"
                            id="activity-high" 
                            checked={activity === 'high'}
                            onChange={() => setActivity('high')} />
                            <S.ActivityDescription>
                                <h3>Muita Atividade</h3>
                                <p>Corrida, musculação, crossfit</p>
                            </S.ActivityDescription>
                    </S.ActivityButtonWrapper>
                </S.ActivityGridContainer>  
            </S.StepWrapper>
        </>
    )
}

export default Step2;