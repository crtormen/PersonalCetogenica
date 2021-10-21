import styled from 'styled-components';
import media from 'styled-media-query';
import coverbg from '../images/bg-grad-colorful.jpg';
import bgNarrow from '../images/bg-grad-narrow.jpg';
import plusicon from '../images/icons/plus.png';
import * as C from './elements';

export const Layout = styled.section`
    display: grid;
    grid: minmax(1em, 50px) 1fr / 1fr;
    min-height: 100vh;

    ${media.lessThan('medium')`
        grid-template-columns: 1fr;    
    `}

`

export const PageWrapper = styled.main`
    grid-row: 1/3;
    display: grid;
    grid-template-columns: minmax(0, 1fr) repeat(5, 1fr) minmax(0, 1fr);
`

export const Header = styled.header`
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

export const HeaderLogo  = styled.div`
    grid-column: 2/4;
    height: ${props => props.size === 'small' ? '5rem' : '7rem'};
    width: ${props => props.size === 'small' ? '12rem' : '17rem'};

    ${media.lessThan("large")`
        grid-column: 1/4;
        margin: 1rem auto;
    `}

    ${media.lessThan("medium")`
        width: 5rem;
        height: 5rem;
    `}

    &:hover {
        transform: scale(1.05);
        transition: transform 150ms ease-in-out
    }

    ${media.lessThan("400px")`
        width: 3.6rem;
        height: 3.6rem;
    `}
`

export const HeaderButton = styled.div`
    grid-column: 4/5;

    ${media.lessThan("large")`
        grid-column: 4/8;
    `}

    ${media.lessThan("medium")`
        margin: 0 auto;
    `}
`

export const CoverWrapper = styled.div`
    overflow: hidden;
    position: absolute; 
    width: 100%;
    min-height: 100vh;

    .coverImage {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
`

export const Cover = styled.section`
    grid-row: 1/2;
    grid-column: 1/-1;
    min-height: 100vh;
    /* background: url(${coverbg});
    background-position: 54.1463% 83.2117%;
    background-size: cover;
    background-repeat: no-repeat; */
    /* background-color: white;
    background-attachment: fixed; */
    /* padding: 2rem; */
    /* height: auto; */
`

export const CoverCopy = styled.div`
    /* display: grid;
    grid: auto / minmax(1em, 1fr) repeat(3, 1fr) minmax(1em, 1fr); */
    display: flex;
    flex-direction: row;
    margin: 12rem 2rem 4rem;

    ${media.lessThan("large")`
        flex-direction: column;
        margin: 12rem 1rem 0;
        align-items: center;
    `}

    ${media.lessThan("700px")`
        margin: 8rem 2rem 0;
    
    `}

`

export const HeadlineWrapper = styled.div`
    z-index: 100;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    padding: 0 2rem;
    color: white;
    width: 50%;

    ${media.lessThan("large")`
        margin-bottom: 2rem;
        width: 75%;
    `}

    ${media.lessThan('700px')`
        margin: 0;
        width: 100%;
        padding: 0;
    `}
`

export const Headline = styled.h1`
    font-size: 3rem;
    font-weight: 600;
    font-family: 'Proxima Nova Bold','Roboto', sans-serif;
    line-height: 1;
    margin-bottom: 2rem;
    color: white;
    text-shadow: 2px 3px 0 rgb(34 30 31 / 75%); //1px 1px 1px var(--postColor);

    span.bigger {
        text-transform: uppercase;
        color: white;
        background: var(--orange);
    }

    ${media.lessThan("large")`
        font-size: 2.5rem;
        text-align: center;
    `}

    ${media.lessThan("medium")`
        font-size: 1.9rem;
    `}

    ${media.lessThan("370px")`
        font-size: 1.5rem;
        margin-bottom: 1rem;
    `}
`

export const SubHeadline = styled.h2`
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 1.4;
    font-family: 'Open Sans', sans-serif;
    /* text-align: center; */
    span {
        background: var(--pink);
        color: var(--white);
        font-weight: 700;
        font-size: 1.8rem;
    }


    ${media.lessThan("large")`
        text-align: center;

        span {
            line-height: 1.6;
        }
    `}

    ${media.lessThan("medium")`
        font-size: 1.1rem;

        span {
            font-size: 1.4rem;
            line-height: 1.6;
        }
    `}

    ${media.lessThan("400px")`
        font-size: 14px;

        span {
            font-size: 1.1rem;
            line-height: 1.4;
        }
    `}
`

export const YoutubeWrapper = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
  width: 1px;
  min-width: 100%;

  iframe {
    /* left: 0;
    top: 0; */
    height: 100%;
    width: 1px;
    min-width: 100%;
    position: absolute;
  }
`

export const VideoWrapper = styled.div`
    /* grid-row: 2/3;
    grid-column: 2/-2; */
    /* margin-bottom: 2rem; */
    width: 50%;

    ${media.lessThan("large")`
        width: 80%;
    `}

    ${media.lessThan("medium")`
        width: 90%;
        margin: 2rem 0;
    `}
`



export const CTAButtonWrapper = styled.div`
    /* grid-row: 3/4;
    grid-column: 2/-2;   */
    /* justify-self: center;   */
`

export const SocialProof1 = styled.section`
    grid-row: 2/3;
    grid-column: 2/-2;

    ${media.lessThan("medium")`
        grid-column: 1/-1;
        margin: 0 1rem;
    `} 
`

export const Hero = styled.section`
    grid-row: 4/5;
    grid-column: 1/-1;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url(${bgNarrow});
    padding: 2rem;
    text-align: center;
    margin: 3rem 0 0 0;
`

export const Beneficios = styled.section`
    grid-row: 3/4;
    grid-column: 1/-1;
    display: grid;
    grid-template-columns: minmax(1em, 1fr) repeat(5, 1fr) minmax(1em, 1fr);
    margin-bottom: 3rem;

    ${media.lessThan("medium")`
        grid-template-columns: 1fr;
    `}
`

export const BeneficiosLeftSide = styled.div`
    grid-column: 1/5;
    grid-row: 1/2;
    padding: 2rem 2rem 2rem 6rem;

    ${media.lessThan("medium")`
        grid-column: 1/-1;
        padding: 2rem;
    `}
`;

export const BeneficiosRightSide = styled.div`
    grid-row: 1/2;
    grid-column:5/8;
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: var(--orange);
    padding: 2rem;

    ${media.lessThan("medium")`
        grid-column: 1/-1;
        grid-row: 2/3; 
        align-items: center;       
    `}
`;


export const BeneficiosFullPage = styled.div`
    grid-row: 2/3;
    grid-column: 1/-1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: url(${bgNarrow});
    color: white;
    padding: 2rem;

    ${media.lessThan("medium")`
        grid-row: 3/4;        
    `}
`

export const IPresentYou = styled.section`
    grid-row: 5/6;
    grid-column: 1/-1;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin: 0 auto 4rem;
    padding: 2rem;
    background-color: var(--grey);

    h1 {
        max-width: 60rem;
    }
`

export const About = styled.section`
    grid-row: 6/7;
    grid-column: 2/-2;
    display: grid;
    grid-template-columns: repeat(2, minmax(200px,1fr));
    grid-gap: 1rem;  

    ${media.lessThan("medium")`
        grid-column: 1/-1;
        grid-template-columns: 1fr;
        margin: 1rem;
    `}
`

export const AntesEDepois = styled.section`
    grid-row: 7/8;
    grid-column: 1/-1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem;
    background: url(${coverbg});
    background-position: 54.1463% 83.2117%;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: white;
    background-attachment: fixed;


    ${media.lessThan("medium")`
        padding: 2rem;
    `}
`

export const Desafio = styled.section`
    grid-row: 8/9;
    grid-column: 2/-2;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: auto;
`

export const Metodo = styled.section`
    grid-row: 9/10;
    grid-column: 1/-1;
    background: var(--grey);
    display: grid;
    grid-template-columns: minmax(1em, 1fr) repeat(5, 1fr) minmax(1em, 1fr);
    padding: 2rem 0;

    ${media.lessThan("medium")`
        grid-template-columns: 1rem repeat(5, 1fr) 1rem;
    `}
`
export const SocialProof2 = styled.section`
    grid-row: 10/11;
    grid-column: 2/-2;

    ${media.lessThan("medium")`
        grid-column: 1/-1;
        margin: 0 1rem;
    `} 
`

export const Mission = styled.section`
    grid-row: 11/12;
    grid-column: 1/-1;
    padding: 2rem 4rem;
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;

    .text {
        margin: 0 auto;
    }

    h1 {
        margin: 2rem;
    }

    

    h3 {
        font-size: 1.8rem;
        font-family: 'Roboto', sans-serif;
        text-align: center;
        margin: 3rem 0 2rem;
    }

    ${media.lessThan("medium")` 
        padding: 2rem 1rem;
    `}

`

export const Price = styled.section`
    grid-row: 12/13;
    grid-column: 1/-1;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--grey);//rgba(var(--orangeRGB), 0.4);
    /* color: white; */
    /* padding: 1rem auto; */
`

export const Warranty = styled.section`
    grid-row: 13/14;
    grid-column: 2/-2;
    margin: 3rem auto;

    .block {
        display: flex;
        flex-direction: row;

    }
    .image {
        width: 40%;
        margin: auto;
    }    
    .description {
        width: 60%;
    }

    ${media.lessThan("medium")` 
        .block {
            flex-direction: column;
        }

        .image, .description {
            width: 100%;
        }
    `}
`


export const AvisoLegalWraper = styled.section`
    grid-row: 14/15;
    grid-column: 1/-1;
    text-align: center;
    padding: 2rem;
    background: var(--postColor);
    color: var(--borders);
    font-size: 12px;
    margin-bottom: 0;

    p {
        margin: 1rem;
    }
`

export const Aviso = styled.section`
    text-align: center;
    margin: auto;
`


export const Testimonials = styled.div`
    display: grid;
    ${({ columns }) => columns ? 
        `grid-template-columns: repeat(${columns}, 1fr);` : 
        `grid-template-columns: repeat(3,1fr);`};
    gap: 2rem;
    margin: 3rem 0;
    /* height: 250px; */

    .hide {
        display: none;
    }

    ${media.lessThan("medium")`
        grid-template-columns: 1fr;

        .hide {
            display: block;
        }
    `}

`

export const AboutImage = styled.div`
    align-self: center;
    /* height: 100%; */
    margin: auto;

    ${media.lessThan("medium")`
        grid-column: 1/-1;
    `}
`


export const AboutText = styled.div`
    align-self: center;
    background: var(--grey);
    padding: 1rem;

    ${media.lessThan("medium")`
        grid-column: 1/-1;
    `}
`
export const AboutFull = styled.div`
    grid-column: 1 / span 2;
    align-self: center;
    margin: 2rem;

    ${media.lessThan("medium")`
        grid-column: 1/-1;
    `}
`

export const AboutQuote = styled.div`
    /* grid-column: 1 / span 2; */
    text-align: center;
    display: grid;
    flex-direction: column;
    justify-content: space-around;
    background: var(--pink);
    color: white;
    padding: 2rem 1rem;
    height: 100%;

    p {
        font-weight: 600;
        margin: auto;
    }
`

export const Grid = styled.div`
    display: grid;
    ${({ columns }) => columns ? 
        `grid-template-columns: repeat(${columns}, minmax(0, 1fr));` : 
        `grid-template-columns: repeat(3,minmax(0, 1fr));`};
    grid-gap: 1rem;
    /* margin: 2rem; */
    /* padding: 2rem; */
    width: 100%;

    ${media.lessThan("medium")`
        grid-template-columns: 1fr;
        /* ${({ columns }) => columns ? 
            `grid-template-columns: repeat(${columns}, minmax(0, 1fr));` : 
            `grid-template-columns: 1fr;`}; */
    `}
`
export const TextAndImage = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 3rem;

    .left {
        width: 70%;
    }

    .right {
        width: 30%;
    }

    ${media.lessThan("medium")`
        flex-direction: column;
        .left, .right {
            width: 100%;
            padding: 1rem;
        }
     `}
`

export const Icons = styled.div`
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    margin: 2rem 0;

    ${media.lessThan("medium")`
        grid-template-columns: repeat(2, minmax(0, 1fr));
    `}
` 

export const Icon = styled.div`
    /* height: 100%; */
    /* width: 10vw; */
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-around;
    text-align: center;
    padding-bottom: 1rem;

    h3 {
        text-align: center;
        font-size: 1.8rem;
        font-weight: 700;
        font-family: 'Roboto', sans-serif;
        color: var(--orange);
        margin: 1rem;
    }

    p {
        font-size: 1.2rem;
        font-weight: 600;
        font-family: 'Open Sans', sans-serif;
        color: var(--purple);
    }

    ${media.lessThan("medium")`
        width: 120px;
        height: 100%;

        h3 {
            font-size: 1.4rem;
            margin: 12px 0;
        }

        p {
            font-size: 1rem;
        }
    `}
`



export const MetodoIntro = styled.div`
    grid-row: 1/2;
    grid-column: 2/-2;
    margin: 2rem auto;
`

export const MetodoMiddle = styled.div`
    grid-row: 2/3;
    grid-column: 2/-2;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    padding: 1rem 2rem;
    margin: 0 auto;
    background: rgba(55,55,55,0.8);
    color: white;
    box-shadow: 5px 10px 1rem rgba(1,1,1, 0.5);
    /* text-align: center; */
`

export const MetodoModulos = styled.div`
    grid-row: 3/4;
    grid-column: 2/-2;
    margin: 3rem 1rem;
`

export const MetodoBonus = styled.div`
    grid-row: 4/5;
    grid-column: 2/-2;
`

export const MetodoOutro = styled.div`
    grid-row: 5/6;
    grid-column: 2/-2;
`

export const Pilares = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 1rem 1rem;
    padding: 0 1rem;

    .image {
        border-radius: 50%;
        border: 6px solid var(--purple);
        box-shadow: 5px 10px 1rem rgba(1,1,1, 0.5);
    }

    .pilar_image {
        border-radius: 50%;
        width: 90%;
        height: 100%;
    }

    span {
        margin-top: 1rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 600;
        padding-bottom: 2rem;
    }

    span.pilares {
        font-size: 1.5rem;
        color: var(--purple);
    }

    span.tecnicas {
        font-size: 2rem;
        color: var(--white);
        text-shadow: 1px 1px 5px var(--postColor);

    }
`


export const Bonus = styled.div`
    display: grid;
    padding: 1.5rem 0;
    grid: auto / repeat(5, 1fr);
    grid-template-areas: 'title title title title .' 'img img desc desc desc' 'img img desc desc desc';

    ${media.lessThan("medium")`
        grid-template-areas: 'title title title title title' '. img img img .' 'desc desc desc desc desc';
    `}
    
`

export const BonusImage = styled.div`
    grid-area: img;
    margin: auto;
` 

export const BonusTitle = styled.div`
    grid-area: title;
    padding: 1rem;
`

export const BonusDescription = styled.div`
    grid-area: desc;

    ${media.lessThan("medium")`
        margin: 1rem;
    `}
`

export const CTAFinal = styled(C.Block)`
    text-align: center;
    margin: 1rem auto;
    align-items: center;
    /* background: var(--grey); */

`

export const CTATitle = styled.h1`
    font-size: 2.2rem;
    font-weight: 700;
    color: var(--purple);
    margin: 2rem auto;
`

export const CTAList = styled(C.List)`
    text-align: left;
    margin: 0 auto;
    ul li {
        font-size: 1.5rem;
    }

    li::before {
        background-image: url(${plusicon});
    }

    ${media.lessThan("medium")`
        ul li {
            font-size: 1.2rem;
        }
    `}
`
export const CTAPrice = styled.div`
    width: 80%;
    height: auto;

    ${media.lessThan("medium")`
        width: 90%;
    `}
`

export const ValorCheio = styled.p`
    margin: 1rem;
    font-size: 2rem;
    color: var(--grayTexts);

`

export const Apenas = styled.p`
    font-size: 2.2rem;
    font-weight: 600;
    margin: 1rem;
`

export const Parcelado = styled.p`
    font-size: 2.5rem;
    background: var(--yellow);
    font-weight: 700;
    margin: 1rem;
    padding: 1rem;

    span {
        font-size: 3.2rem;
    }
`


export const ValorAVista = styled.p`
    font-weight: 600;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: var(--purple);
`

export const Logo = styled.div`
    height: auto;
    width: 10rem;
    margin: 0 1rem 2rem;

    /* ${media.lessThan("large")`
        width: 2.3rem;
        height: 2.3rem;
        margin: 1rem;
    `} */

    &:hover {
        transform: scale(1.05);
        transition: transform 150ms ease-in-out
}
`
export const Contact = styled.div`
    position: fixed;
    z-index: 100000;
    bottom: 40px;
    right: 40px;
    cursor: pointer;
    display: flex;

    span {
        color: var(--postColor);
        background: white;
        font-size: 12px;
        padding: 5px;
        margin-right: 10px;
        border: solid 1px black;
    }
`

export const Whatsapp = styled.a`
    display: block;
    width: 60px;
    height: 60px;
    background-color: rgba(0,200,0,1);
    color: white;
    border-radius: 50px;
    text-align: center;
    font-size: 30px;
    transition-duration: 0.5s;
    animation: pulse 3s infinite;

    .icon {
        display: inline-block;
        line-height: 1;
        margin-top: 15px;
        font-weight: 400;
    }

    @keyframes pulse {
        0% {
            box-shadow: 0 0 0 0 rgb(0 200 0);
        }
        70% {
            box-shadow: 0 0 0 20px rgb(0 200 0 / 0%)
        }
        100% {
            box-shadow: 0 0 0 0 rgb(0 200 0 / 0%);
        }
    }
`

export const Atencao = styled.div`
    padding: 2rem 4rem;
    background: red;
    color: yellow;
    font-size: 3rem;
    font-weight: 900;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;

    span { 
        color: white;
        font-size: 2.5rem;
    }

    ${media.lessThan("medium")` 
        padding: 2rem;
        font-size: 2.2rem;

        span {
            font-size: 2rem;
        }
    `}

`