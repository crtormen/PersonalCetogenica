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

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: minmax(1em, 1fr) repeat(3,1fr) minmax(1em,1fr);
    min-height: 80vh;
    height: 100%;
    padding: 0 0 4rem;

`

export const StepWrapper = styled.div`
    grid-row: 2/5;
    grid-column: 1/-1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    color: white;
    font-weight: 600;
    font-family: Roboto, sans-serif;
    height: 400px;

    ${media.lessThan("medium")`
        flex-direction: column;  
        height: 200px;      
    `}

    span {
        margin: 2rem;
    }
`
export const Header = styled.section`
    grid-row: 1/2;
    grid-column: 2/-2;
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

    ${media.lessThan("medium")`
        max-width: 50%; 
        opacity: 1;

        div.text {
            margin-top: -4.5rem;
        }
    `}
    
`

export const MaleButtonWrapper = styled(ButtonWrapper)`
    width: 269px;
    height: 268px;
    content: ' ';
    margin: 2rem;
`

export const FemaleButtonWrapper = styled(ButtonWrapper)`
    width: 269px;
    height: 267px;
    content: ' ';
    margin: 2rem;
`

export const wraptest = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const ActivityGridContainer = styled.div`
    display: flex;
    flex-direction: row;

    ${media.lessThan("medium")`
        flex-direction: column;        
    `}
    /* display: grid;
    grid-template-columns: repeat(3, minmax(0,1fr)); */
`

export const ActivityButtonWrapper = styled(ButtonWrapper)`
    border-radius: 20px;
    margin: 1rem 2rem;
    display:flex;
    flex-direction: column;
    border:  1px solid var(--orange) !important;
    border-radius: 1rem;
    box-shadow: 2px 2px 14px rgb(0 0 0 / 40%);


    /* .image {
        width: '250px' !important;
        height: '250px';
    }

    ${media.lessThan("medium")`
        .image {
            width: '125px';
            height: '125px';
        }
    `} */

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

export const Navigation = styled.section``;

export const ResultBoxes = styled.div`
    grid-row: 2/5;
    grid-column: 1/-1;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 2rem;
    margin: 0 auto;

    ${media.lessThan("medium")`
        padding: 1rem 2rem;
    `}

`
export const Box = styled.div`
    padding: 1rem 2rem;
    background: var(--pink);
    border-radius: 8px;
    box-shadow: 2px 2px 14px rgb(0 0 0 / 40%);

    ${media.lessThan("medium")`
        padding:  1rem;
        width: 100%;
    `}
`

export const BoxHeader = styled.h2`
    color: white;
    text-align: left;
    font-size:  1.2rem;
    
    ${media.lessThan("medium")`
        font-size:  1rem;
    `}
`

export const BoxValue = styled.div`
    color: var(--yellow);
    font-size: 2.2rem;
    text-align: center;
    padding: 2rem;
    
    ${media.lessThan("medium")`
        font-size: 1.6rem;
        padding: 1rem;
        
    `}
`