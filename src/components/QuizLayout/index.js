import React from 'react'
import {StaticImage} from 'gatsby-plugin-image';
import * as S from './styled';

const QuizLayout = ({children}) => (
    <S.Layout>
        <StaticImage
            loading="eager"
            layout="fullWidth"
            src="../../images/bg-grad-colorful.jpg"
            alt="capa"
            className="coverImage"
        />
        <S.Logo>
            <StaticImage src="../../images/logo02.png" alt="logo" height={200}/>
        </S.Logo>
        <S.Body>
            {children}
        </S.Body>
    </S.Layout>
)

export default QuizLayout;