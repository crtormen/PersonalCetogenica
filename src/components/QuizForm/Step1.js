import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as S from './styled';
import * as C from '../../styles/elements';
import man from '../../images/icons/male.png';
import woman from '../../images/icons/female.png';

const Step1 = ({visible, gender, setGender}) => (
        visible && 
        <S.Wrapper>
            <S.Header>
                <C.SubTitle style={{textTransform: 'uppercase'}}>Descubra Suas Necessidades Nutricionais</C.SubTitle>
            </S.Header>
            <S.StepWrapper>
                {/* <S.wraptest> */}
                    <S.MaleButtonWrapper htmlFor="gender-male" className={gender === 'M' && "checked"} onClick={() => setGender('M')}>
                        <img src={man} alt="male"  className="image"/>
                        <div className="text">Homem</div>
                    </S.MaleButtonWrapper>
                    {/* <input 
                        type="radio" 
                        name="gender" 
                        id="gender-male" 
                        checked={gender === 'M'}
                        value="M" 
                        onChange={() => setGender('M')} />
                </S.wraptest> */}
                <span>OU</span>
                {/* <S.wraptest> */}
                    <S.FemaleButtonWrapper htmlFor="gender-female" className={gender === 'F' && "checked"} onClick={() => setGender('F')}>
                        <img src={woman} alt="female"  className="image"/>
                        <div className="text">Mulher</div>
                    </S.FemaleButtonWrapper>
                    {/* <input 
                        type="radio" 
                        name="gender" 
                        checked={gender === 'F'}
                        id="gender-female" 
                        value="F" 
                        onChange={() => setGender('F')} />
                </S.wraptest> */}
            </S.StepWrapper>
        </S.Wrapper>
    )

export default Step1;
