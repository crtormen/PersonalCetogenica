import styled from 'styled-components';
import media from 'styled-media-query';


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
    gap: 1rem 0;
`

export const Cover = styled.section`
    grid-row: 1/2;
    grid-column: 1/-1;
    min-height: 100vh;
    background: rgb(91,34,102);
    background: linear-gradient(183deg, rgba(91,34,102,1) 0%, rgba(102,34,96,1) 35%, rgba(200,43,112,1) 100%);
    background-size: cover;
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

export const SocialProof1 = styled.section`
    grid-row: 2/3;
    grid-column: 1/-1;
    background-color: var(--grey);
    display: grid;
    grid-template-columns: minmax(1em, 1fr) repeat(5, 1fr) minmax(1em, 1fr);

    ${media.lessThan("medium")`
        grid-column: 1/-1;
        margin: 0 1rem;
    `} 
`

export const SocialProof2 = styled.section`
    grid-row: 8/9;
    grid-column: 1/-1;
    display: grid;
    background: rgb(91,34,102);
    background: linear-gradient(183deg, rgba(91,34,102,1) 0%, rgba(102,34,96,1) 35%, rgba(200,43,112,1) 100%);

    grid-template-columns: minmax(1em, 1fr) repeat(5, 1fr) minmax(1em, 1fr);

    ${media.lessThan("medium")`
        grid-column: 1/-1;
        margin: 0 1rem;
    `} 
`

export const Aviso = styled.section`
    text-align: center;
    margin: auto;
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
    justify-items: center;
    align-items: start;

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
    margin: 0 auto 2rem;

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
        margin-top: 7px;
        height: 45px;
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