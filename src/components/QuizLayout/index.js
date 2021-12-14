import React from 'react'
import {StaticImage} from 'gatsby-plugin-image';
import * as S from './styled';
import logo from '../../images/logo02.png';


const QuizLayout = ({children}) => (
    <S.Layout>
        <S.Logo>
            <img src={logo} alt="logo" height={200}/>
        </S.Logo>
        <S.Body>
            {children}
        </S.Body>
    </S.Layout>
)

export default QuizLayout;