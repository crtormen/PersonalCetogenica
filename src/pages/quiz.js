import React from 'react';
import Layout from '../components/Layout';
import QuizForm from '../components/QuizForm';
import * as S from '../styles/quiz';


const Quiz = () => {

    return (
        <Layout>
            <S.QuizHeader>
                <p>Descubra Suas Necessidades Nutricionais</p>
            </S.QuizHeader>
            <QuizForm />
        </Layout>
    )
}

export default Quiz;
