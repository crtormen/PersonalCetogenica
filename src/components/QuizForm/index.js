import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

import * as S from './styled';



const QuizForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [gender, setGender] = useState('');
    const [age, setAge] = useState(0);
    const [activity, setActivity] = useState('');
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [target, setTarget] = useState(0);

    const prev = () => {
        setCurrentStep(currentStep-1);
    }

    const handleSubmit = (event) => {
        console.log(event);
    }

    return (
        <S.FormWrapper>
            <S.Form onSubmit={handleSubmit}>
                <Step1 step={currentStep} gender={gender} setGender={setGender} />
                <Step2 step={currentStep} activity={activity} setActivity={setActivity} />
                <Step3 
                    step={currentStep} 
                    age={age} 
                    setAge={setAge} 
                    height={height} 
                    setHeight={setHeight} 
                    weight={weight} 
                    setWeight={setWeight} 
                    target={target} 
                    setTarget={setTarget}
                />
            </S.Form>
            <S.PrevButton onClick={prev} disabled={prev === 1} />
        </S.FormWrapper>
    )
};

export default QuizForm;
