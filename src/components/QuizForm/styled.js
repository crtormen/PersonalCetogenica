import styled from 'styled-components';
import media from 'styled-media-query';
import gradientBorder from '../../images/icons/gradient-border.png';
import sofa from '../../images/icons/sofa.png';
export const FormWrapper = styled.section`

`

export const Form = styled.form`
`

export const FormInput = styled.div`
    position: relative;
    display: inline-block;
    margin: 5px 0;

    .icon {
        height: 25px;
        width: 25px;
        color: var(--orange);
        margin-right: 10px;
    }

    input {
        line-height: 25px;
        background: transparent;
        border: none;
        font-size: 18px;
        border-bottom: 1px solid var(--orange);
        padding: 5px 45px ;
        color: white;
        border-radius: 0;
        width: 250px;
    }

    input::placeholder {
        color: #bfbfbf;
    }

    input:hover, input:active {
        border: 1px solid var(--orange);
    }

    button {
        margin: 2rem auto;
        padding: 1rem 2rem;
        border-radius: 20px;
        color: white;
        width: 250px;
        text-transform: uppercase;
        font-size: 1.2rem;
        font-weight: 500;
        border: 1px solid var(--pink);
        background-color: transparent;
        cursor: pointer;
        box-shadow: 2px 2px 14px rgb(0 0 0 / 40%);
        transition: background-color 1s;
    }

    button:hover {
        background-color: var(--pink);//linear-gradient(90deg, #0284fe 0%, #0df5d2 100%);
    }
`

export const PrevButton = styled.button``

export const StepWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1.1rem;
    color: white;
    font-weight: 600;
    font-family: Roboto, sans-serif;
    height: 400px;
`
export const Header = styled.section`
    margin: 1rem auto;
    h2 { color: white; }
`

export const ButtonWrapper = styled.label`
    cursor: pointer;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    opacity: 0.6;
    border-radius: 50%;
    color: white;
    font-size: 1.2rem;
    font-weight: 400;
    font-family: Roboto, sans-serif;
    margin: 1rem 4rem;
    max-width: 100%; 
    transition: box-shadow 1s, color 1s, opacity 1s;

    &:hover, .checked {
        box-shadow: 2px 2px 14px rgb(0 0 0 / 40%);
        color: rgba(255, 255, 255, 0.6);
        opacity: 1;
    }

    input {
        appearance: none;
        outline: none;
        border-radius: 0;
        display: none;
        margin: 0;
        padding: 0;

        
    }

    input::after {
        display: inline-block;
        margin: 60px;
        border-radius: 50%;
        color: white;
        transition: box-shadow 1s, color 1s, opacity 1s;
        opacity: 0.6;
        vertical-align: middle;
        cursor: pointer;
    }

    input:checked:after, input:hover:after {
        box-shadow: 2px 2px 14px rgb(0 0 0 / 40%);
        color: rgba(255, 255, 255, 0.6);
        opacity: 1;
    }

    div.image {
        z-index: -1;
    }

    div.text { 
        margin-top: -7rem; 
        z-index: 10;
    }
`

export const MaleButtonWrapper = styled(ButtonWrapper)`
    width: 269px;
    height: 268px;
    content: ' ';
`

export const FemaleButtonWrapper = styled(ButtonWrapper)`
    width: 269px;
    height: 267px;
    content: ' ';
`

export const ActivityGridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0,1fr));
`

export const ActivityButtonWrapper = styled(ButtonWrapper)`
    border-radius: 20px;
    margin: 1rem 2rem;
    display:flex;
    flex-direction: column;
`
export const ActivityDescription = styled.div`
    text-align: center;
    padding: 0 1rem 1rem;

    h3 {
        font-size: 1.2rem;
        font-weight: 600;
        margin: 10px;
    }

    p {
        font-size: 14px;
        font-weight: 400;
    }
`

export const LastStepWrapper = styled(StepWrapper)`
    flex-direction: column;
`

export const Button = styled.button`

`

export const IconText = styled.span`

`

export const ResultsWrapper = styled.section``

export const Navigation = styled.section``;

export const ResultBoxes = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 2rem;
    margin: 0 auto;

`
export const Box = styled.div`
    padding: 1rem 2rem;
    background: var(--pink);
    border-radius: 8px;
    box-shadow: 2px 2px 14px rgb(0 0 0 / 40%);
`

export const BoxHeader = styled.h2`
    color: white;
    text-align: left;
    font-size:  1.2rem;
`

export const BoxValue = styled.div`
    color: var(--yellow);
    font-size: 2.2rem;
    text-align: center;
    padding: 2rem;
`