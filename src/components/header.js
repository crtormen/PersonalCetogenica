import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

import CTAButton from './CTAButton';
import logo from '../images/logo-esbelta-desafio-branco.png';

const HeaderWrapper = styled.header`
    grid-row: 1/2;
    display: grid;
    grid: auto / minmax(1em, 1fr) repeat(3, 1fr) minmax(1em, 1fr);
    /* flex-direction: row; */
    /* justify-content: space-evenly; */

    position: fixed;
    top: 0; 
    left: 0;
    right: 0;
    z-index: 1000;

    align-items: center;
    background: var(--menuBackground);
    color: var(--menuText);
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 1px;
    padding: 1rem;
    transition: background 250ms ease-in;   

    ${media.lessThan("large")`
        padding: 0;
        grid-template-columns: minmax(1em, 1fr) repeat(5, 1fr) minmax(1em, 1fr);
    `}

    /* &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
        box-shadow: 0 3px 20px rgba(0,0,0, 0.2);
    } */
`

const HeaderLogo  = styled.div`
    grid-column: 2/4;
    width: ${props => props.size === 'small' ? '12rem' : '17rem'};

    ${media.lessThan("large")`
        grid-column: 1/4;
        margin: 1rem auto;
    `}

    ${media.lessThan("medium")`
        width: 8rem;
    `}

    &:hover {
        transform: scale(1.05);
        transition: transform 150ms ease-in-out
    }

    ${media.lessThan("400px")`
        width: 8rem;
    `}
`

const HeaderButton = styled.div`
    grid-column: 4/5;

    ${media.lessThan("large")`
        grid-column: 4/8;
    `}

    ${media.lessThan("medium")`
        margin: 0 auto;
    `}
`


const Header = (props,ref) => {

    return (
        <HeaderWrapper ref={ref}>
            <HeaderLogo size={props.size}>
                <img 
                    // loading="eager"
                    src={logo}
                    alt="logo" />
            </HeaderLogo>
            <HeaderButton>
                <CTAButton size={props.size || "header"}>Quero Meu Acesso</CTAButton>
            </HeaderButton>
        </HeaderWrapper>
    );
}

export default React.forwardRef(Header);