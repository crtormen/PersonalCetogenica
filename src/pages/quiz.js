import React from 'react';
import {StaticImage} from 'gatsby-plugin-image';
import GlobalStyles from '../styles/global';
import QuizLayout from '../components/QuizLayout';
import QuizForm from '../components/QuizForm';
// import * as S from '../styles/quiz';


const Quiz = () => {

    return (
        <QuizLayout>
            <GlobalStyles />
            <QuizForm />
        </QuizLayout>
    )
}

export default Quiz;
