import styled from 'styled-components';
import media from 'styled-media-query';


export const Layout = styled.main`
    display: grid;
    grid-template-columns: minmax(1em, 1fr) repeat(3,1fr) minmax(1em,1fr);
    /* overflow: hidden;
    position: absolute; */
    width: 100%;
    min-height: 100vh;

    .coverImage {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`

export const Logo = styled.div`
    grid-row: 1/2;
    grid-column: 3/4;
    height: auto;
    width: 10rem;
    margin: 2rem auto;

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

export const Header = styled.section`
    grid-row: 2/3;
    grid-column: 2/-2;
    margin: 1rem auto;
    h2 { color: white; }
`

export const Body = styled.section`
    grid-row: 2/4;
    grid-column: 1/-1;
    margin: 0 auto;
`