import styled from 'styled-components';
import media from 'styled-media-query';
import {Man as Male} from '@styled-icons/ionicons-outline/Man';
import {Woman as Female} from '@styled-icons/ionicons-outline/Woman';

export const FormWrapper = styled.section`

`

export const Form = styled.form`
`

export const FormInput = styled.div``

export const PrevButton = styled.button``

export const Step1Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const ButtonWrapper = styled.label`
    /* display: flex;
    flex-direction: column;
    align-items: center; */
    vertical-align: middle;
    margin: 4rem;
    padding-top: 10rem;
    /* width: 6rem;
    height: 6rem; */
    border-radius: 50%;
    /* padding: 1rem; */
    color: white;
    font-size: 1.2rem;
    font-weight: 400;
    font-family: Roboto;
`

export const MaleButtonWrapper = styled(ButtonWrapper)`
    background: #405de6;
`

export const FemaleButtonWrapper = styled(ButtonWrapper)`
    background: #dd2a7b;
`

export const Button = styled.button`

`
export const MaleIcon = styled(Male)`
    width: 4rem;
    height: 4rem;
    background: #405de6;
    border-radius: 50%;
    padding: 1rem;
`

export const FemaleIcon = styled(Female)`
    width: 4rem;
    height: 4rem;
    background: #c13584;
    border-radius: 50%;
    padding: 1rem;
`

export const IconText = styled.span`

`

export const Image = styled.div``;