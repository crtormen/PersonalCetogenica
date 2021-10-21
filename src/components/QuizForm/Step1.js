import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as S from './styled';
import * as C from '../../styles/elements';

const Step1 = ({visible, gender, setGender}) => (
        visible && 
        <>
            <S.Header>
                <C.SubTitle style={{textTransform: 'uppercase'}}>Descubra Suas Necessidades Nutricionais</C.SubTitle>
            </S.Header>
            <S.StepWrapper>
                <S.MaleButtonWrapper htmlFor="gender-male" className={gender === 'M' && "checked"}>
                    <StaticImage src="../../images/icons/male.png" alt="male"  className="image"/>
                    <div className="text">Homem</div>
                    <input 
                        type="radio" 
                        name="gender" 
                        id="gender-male" 
                        checked={gender === 'M'}
                        value="M" 
                        onChange={() => setGender('M')} />
                </S.MaleButtonWrapper>
                <span>OU</span>
                <S.FemaleButtonWrapper htmlFor="gender-female" className={gender === 'F' && "checked"}>
                    <StaticImage src="../../images/icons/female.png" alt="female"  className="image"/>
                    <div className="text">Mulher</div>
                    <input 
                        type="radio" 
                        name="gender" 
                        checked={gender === 'F'}
                        id="gender-female" 
                        value="F" 
                        onChange={() => setGender('F')} />
                </S.FemaleButtonWrapper>
            </S.StepWrapper>
        </>
    )

export default Step1;
