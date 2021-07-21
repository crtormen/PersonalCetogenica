import React, { useState } from 'react';
import * as S from './styled';

const Step1 = ({step, gender}) => {
    const [visible, setVisible] = useState(() => step === 1)
    const [selectedGender, setGender] = useState(null);
    return (
        visible && 
        <S.Step1Wrapper>
            <S.MaleButtonWrapper for="gender-male">
                <S.MaleIcon>Homem</S.MaleIcon>
                <input 
                    type="radio" 
                    name="gender" 
                    id="gender-male" 
                    value="M" 
                    onClick={() => setGender('M')} />
            </S.MaleButtonWrapper>
            <span>OU</span>
            <S.FemaleButtonWrapper for="gender-female">
                <S.FemaleIcon>Mulher</S.FemaleIcon>
                <input 
                    type="radio" 
                    name="gender" 
                    id="gender-female" 
                    value="F" 
                    onClick={() => setGender('F')} />
                {/* <S.FemaleButton onClick={() => setGender('F')}>Mulher</S.FemaleButton> */}
                {/* <S.IconText>Mulher</S.IconText> */}
            </S.FemaleButtonWrapper>
        </S.Step1Wrapper>
    )
}

export default Step1;

// #gender-male-label {
//     background: url(/img/male.png) no-repeat;
//     width: 269px;
//     height: 268px;
//     content: ' ';
//     background-color: transparent !important;
// }