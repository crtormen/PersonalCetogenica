import React, {useState} from 'react';
import * as S from './styled';
import {SubTitle} from '../../styles/elements';
import { BirthdayCake } from '@styled-icons/fa-solid/BirthdayCake';
import { Height } from '@styled-icons/material/Height';
import { Weight } from '@styled-icons/fa-solid/Weight';
import { TargetArrow } from '@styled-icons/fluentui-system-regular/TargetArrow';

const Step3 = ({visible, age, setAge, height, setHeight, weight, setWeight, target, setTarget}) => {
    
    return (
        visible && 
        <S.Wrapper>
            <S.Header>
                <SubTitle style={{textTransform: 'uppercase'}}>Nível de Atividade Diária</SubTitle>
            </S.Header>
            <S.LastStepWrapper>
                <S.FormInput>
                    <BirthdayCake className="icon"/>
                    <input
                        type="number"
                        min="14"
                        max="100"
                        placeholder="Idade"
                        name="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required="required"
                    />
                </S.FormInput>
                <S.FormInput>
                    <Height className="icon"/>
                    <input
                        type="number"
                        name="height"
                        min="130"
                        max="242"
                        placeholder="Altura (cm)"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        required="required"
                    />
                </S.FormInput>
                <S.FormInput>
                    <Weight className="icon"/>
                    <input
                        type="number"
                        name="weight"
                        min="40"
                        max="180"
                        value={weight}
                        placeholder="Peso (Kg)"
                        onChange={(e) => setWeight(e.target.value)}
                        required="required"
                    />
                </S.FormInput>
                <S.FormInput>
                    <TargetArrow className="icon"/>
                    <input
                        type="number"
                        name="target"
                        value={target}
                        placeholder="Peso Alvo (Kg)"
                        min="40"
                        max="180"
                        onChange={(e) => setTarget(e.target.value)}
                        required="required"
                    />
                </S.FormInput>
                <S.FormInput>
                    <button className="primary" type="submit">Calcular</button> 
                </S.FormInput>
            </S.LastStepWrapper>
        </S.Wrapper>
    )
}

export default Step3;