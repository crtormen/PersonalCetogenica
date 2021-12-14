import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import ResultsPage from './ResultsPage';

import * as S from './styled';

const NAF = {
    low: 0.8,
    medium: 0.9,
    high: 1
}

const QuizForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [gender, setGender] = useState('');
    const [activity, setActivity] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [target, setTarget] = useState('');
    const [result, setResult] = useState({});

    const prev = () => {
        setCurrentStep(currentStep-1);
    }

    const calcula = () => {
        let calculatedResults = {};
        let gmb = (gender === 'M') ?
            (10 * weight) + (6.25 * height) - (5 * age) + 5 :
            // (10 * weight) + (6.25 * height/100) - (5 * age) - 161;
            (46.322 * weight) + (17.744 * height/100) - (16.66 * age) - 944;
    
        calculatedResults.gmb = gmb;

        calculatedResults.total = gmb * NAF[activity] * 0.8;

        calculatedResults.total = calculatedResults.total >= 1300 && calculatedResults.total < 1499 ? 1400 : calculatedResults.total;
        calculatedResults.total = calculatedResults.total >= 1500 && calculatedResults.total < 1699 ? 1600 : calculatedResults.total;
        calculatedResults.total = calculatedResults.total < 1299 ? 1200 : calculatedResults.total;
        calculatedResults.total = calculatedResults.total >= 1700 ? 1800 : calculatedResults.total;
        

        setResult(calculatedResults);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        calcula();
        setCurrentStep(currentStep+1);

        // setAge={age} 
        // setHeight={height} 
        // setWeight={weight} 
        // setTarget={target}

    }

    const handleChangeGender = (gender) => {
        console.log(gender)
        setGender(gender);
        setCurrentStep(currentStep+1);
    }

    const handleChangeActivity = (activity) => {
        setActivity(activity);
        setCurrentStep(currentStep+1);
    }


    return (
        <S.FormWrapper>
            <S.Form onSubmit={handleSubmit}>
                <Step1 visible={currentStep === 1} gender={gender} setGender={handleChangeGender} />
                <Step2 visible={currentStep === 2} activity={activity} setActivity={handleChangeActivity} />
                <Step3 
                    visible={currentStep === 3} 
                    age={age} 
                    height={height} 
                    weight={weight} 
                    target={target} 
                    setAge={setAge}
                    setHeight={setHeight}
                    setWeight={setWeight}
                    setTarget={setTarget}
                />
                <ResultsPage 
                    visible={currentStep === 4}
                    weight={weight}
                    target={target}
                    activity={activity}
                    result={result} 
                />
            </S.Form>
            {/*<S.Navigation>
                 <a class="gray-round">←</a> 
                <ul>
                    <li class="selected first-nav-step">
                        <a href="#" class="nav"></a>
                    </li> 
                    <li class="selected nav-step">
                        <a href="#" class="nav"></a>
                    </li> 
                    <li class="selected">
                        <a href="#" class="nav"></a>
                    </li> 
                    <li class="selected">
                        <a href="#" class="nav"></a>
                    </li> 
                    <li class="selected">
                        <a href="#" class="nav"></a>
                    </li> 
                    <li class="selected">
                        <a href="#" class="nav"></a>
                    </li>
                </ul>
            </S.Navigation> */}
            {/* <S.PrevButton onClick={prev} disabled={prev === 1} /> */}
        </S.FormWrapper>
    )
};

export default QuizForm;
