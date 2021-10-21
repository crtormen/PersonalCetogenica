import React from 'react'
import styled from 'styled-components';
import media from 'styled-media-query';

const Button = styled.a`
    /* display: inline-block; */
    text-align: center;
    text-transform: uppercase;
    font-family: "Open Sans", sans-serif;
    font-size: ${props => props.size === 'header' ? '1rem' : 
        props.size === 'small' ? '0.8rem' : '1.5rem' };
    font-weight: bolder;
    letter-spacing: 1px;
    padding: ${props => props.size === 'small' || props.size === 'header' ? '1rem' : '2rem'};
    margin: 1rem;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0px 0px 10px 0 rgba(var(--blackRGB), 0.5);
    background-color: var(--green);
    border: none;
    color: white;
    text-decoration: none;

    &:hover{
        background-color: green;
        transition-duration: 0.3s;
    }

    &:focus{
        transform: scale(1.05) ease-in-out;
    }

    .small{
        font-size: 0.8rem;
        padding: 0.5rem;
    }

    ${media.lessThan('medium')`
        font-size: 12px;
        padding: 20px 1rem;
        margin: 1rem 0;
    `}

    ${media.lessThan("400px")`
        padding: 10px;
    `}
`

const CTAButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;

    img {
        height: 10rem;
        width: 100%;
    }

    ${media.lessThan('medium')`
        margin: 0;
    `}

`


const CTAButton = ({size, children}) => (
    <CTAButtonWrapper>
        {/* <img src={click} alt="clique aqui" /> */}
        <Button size={size} title="Comprar" href="https://pay.hotmart.com/W18216290C">
            {children}
        </Button>
    </CTAButtonWrapper>
);

export default CTAButton;