import styled from 'styled-components';
import media from 'styled-media-query';
import check from '../images/icons/check.svg';
import arrow from '../images/icons/arrow.svg';
import purplecheck from '../images/icons/purple_check.svg';
import greencheck from '../images/icons/green_check.svg';
import purplearrow from '../images/icons/purple_arrow.svg';

export const Divider = styled.hr`
    border-top: 2px solid var(--pink);
    width: 50%;
    /* margin: 2rem auto; */
    border-radius: 5px;
    
    ${media.lessThan("medium")`
        width: 50%;
    `}
`
export const Paragraph = styled.p`
    padding: 1rem 0;
    font-size: 1.4rem;
    line-height: 1.5;
    font-family: 'Open Sans';
    font-weight: 400;
    max-width: 80ch;
    color: var(--texts);

    ${media.lessThan("medium")`
        padding: 0 1rem;
        font-size: 1.1rem;
    `}
    
`

export const Title = styled.h1`
    z-index: 100;
    border-radius: 1rem;
    font-family: 'Roboto', sans-serif;
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 1.2;
    margin-top: 2rem;
    /* max-width:  60rem; */
    color: ${props => props.color || 'var(--postColor)'};
    text-align: center;

    ${media.lessThan("medium")`
        font-size: 2rem;
    `}
`;

export const SubTitle = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-size: 1.8rem;
    font-weight: 600;
    margin: 1rem 0;
    padding: 1rem 0;

    color: ${props => props.color || 'var(--postColor)'};
    text-align: center;

    ${media.lessThan("medium")`
        font-size: 1.4rem;
    `}
`


export const Block = styled.div`
    box-shadow: 5px 10px 1rem rgba(1,1,1, 0.1) ${props => props.inset && 'inset'};
    background: white;
    padding: 2rem 4rem;
    margin: 3rem;
    display: flex;
    flex-direction: column;
`


export const Round = styled.div`
    border-radius: 50%;
`

export const BG = styled.span`
    background-color: ${props => props.color || 'var(--yellow)' };
`
export const Underline = styled.span`
    text-decoration: underline;
`
export const Bolder = styled.span`
    font-weight: bolder;
`

export const Color = styled.span`
    color: ${props => props.color || 'white'};
`

export const Bigger = styled.span`
    font-size: 20px;
    font-weight: bolder;
`

export const ValorFake = styled.span`
    text-decoration: line-through;
    color: red;
`

export const List = styled.div`
ul {
        margin: 2rem;
    }

    ul li{
        color: ${props => props.color || 'var(--postColor)'};
        ${props => props.size === 'small' ? 
        `font-size: 1.1rem;
        line-height: 2;
        font-weight: 600;` :
        `font-size: 1.3rem;
        line-height: 2.2;
        font-weight: 700;` }
    }

    li:before{
        content: '';
        display: inline-block;
        margin-right: 10px;
        background-image: ${props => 
            props.icon === 'arrow' ? `url(${arrow})` : 
            props.icon === 'purplearrow' ? `url(${purplearrow})` : 
            props.icon === 'purplecheck' ?  `url(${purplecheck})` :
            props.icon === 'greencheck' ? `url(${greencheck})` : 
            `url(${check})`};
        background-size:contain; 
        background-repeat:no-repeat; 
        ${props => props.size === 'small' ? 
        `height: 1rem;
        width: 1rem;`:
        `height: 1.2rem;
        width: 1.2rem;`}
        
    }
`

export const Quote = styled.div`
    background: var(--grey);
    margin: 3rem 3rem;
    padding: 1.5rem;
    z-index: 101;
    box-shadow: 10px 10px 1rem rgba(1,1,1, 0.3);

    p {
        position: relative;
        font-family: "Roboto";
        font-size: 2.2rem;
        font-weight: 700;
        line-height: 1.2;
        /* text-transform: lowercase; */
        /* text-align: center; */
        max-width: 80ch;
        padding: 1rem 0 0;
        color: var(--postColor);

        &::before,&::after {
            position: absolute;
            font-size: 6rem;
            color: var(--yellow);
        }

        &::before {
            content: open-quote;
            top: -3rem;
            left: -4rem;
        }
        
        &::after {
            content: close-quote;
            top: calc(80%);
            right: -4rem;
        }

    }

    ${media.lessThan("medium")`
        margin: -1rem 2rem 2rem;
        p {
            font-size: 1.5rem;

            &::before,&::after {
                font-size: 4rem;
            }

            &::before {
                top: -2.5rem;
                left: -2.5rem;
            }

            &::after {
                top: calc(90%);
                right: -2.5rem;
            }
        }
    `}
`;