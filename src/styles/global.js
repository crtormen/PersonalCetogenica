import { createGlobalStyle } from 'styled-components';
import ProximaNovaBlack from './proxima-nova-black.otf';
import ProximaNovaBold from './proxima-nova-bold.otf';
// import media from 'styled-media-query';


const GlobalStyles = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
html {
  scroll-behavior: smooth;
  height: 100%;
}
body {
  min-height: 100%;
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
* {
    box-sizing: border-box;
  }
body {
    background: #ffffff;
    line-height: 1;
    font-size: 100%;
    font-family: "Open Sans", "Roboto", Helvetica, Arial, sans-serif,  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
img {
    display: block;
    width: 100%;
    height: auto;
}

/* Color Theme Swatches in Hex */
.Método-Esbelta-1-hex { color: #5B2266; }
.Método-Esbelta-2-hex { color: #C82B70; }
.Método-Esbelta-3-hex { color: #FFF051; }
.Método-Esbelta-4-hex { color: #FF613C; }
.Método-Esbelta-5-hex { color: #F9F7FA; }

/* Color Theme Swatches in RGBA */
.Método-Esbelta-1-rgba { color: rgba(91, 34, 102, 1); }
.Método-Esbelta-2-rgba { color: rgba(200, 43, 112, 1); }
.Método-Esbelta-3-rgba { color: rgba(255, 240, 81, 1); }
.Método-Esbelta-4-rgba { color: rgba(255, 97, 60, 1); }
.Método-Esbelta-5-rgba { color: rgba(249, 247, 250, 1); }

/* Color Theme Swatches in HSLA */
.Método-Esbelta-1-hsla { color: hsla(290, 50, 26, 1); }
.Método-Esbelta-2-hsla { color: hsla(333, 64, 47, 1); }
.Método-Esbelta-3-hsla { color: hsla(54, 100, 65, 1); }
.Método-Esbelta-4-hsla { color: hsla(11, 100, 61, 1); }
.Método-Esbelta-5-hsla { color: hsla(280, 23, 97, 1); }


body {
  --purple: #5B2266;
  --orange: #FF613C;
  --light-orange: #fcc2b4;
  --yellow: #FFF051;
  --pink: #C82B70;
  --grey: #F9F7FA;
  --borders: #dedede;
  --postColor: #111;
  --grayTexts: #555555;
  --green: #39B51A;
  --lightGreen: #b4eba7;
  --mediumGreen: #3f8a2c;
  --white: #ffffff;
  --blackRGB: 1, 1, 1;
  --darkGreenRGB: 44, 104, 74;
  --pinkRGB: 200, 43, 112;
  --purpleRGB: 91, 34, 102;
  --orangeRGB: 255, 97, 60;
  --highlight: #FF613C;
  --menuBackground: rgba(var(--purpleRGB),1);
  --menuText: var(--postColor);
}


.nav-scrolled {
        --menuBackground: rgba(var(--purpleRGB),1);
        box-shadow: 0 3px 20px rgba(0,0,0, 0.2);
        padding: 0;//0.3rem 0.5rem;
        transition: padding 250ms ease-in-out;
    }

@font-face {
    font-family: 'Proxima Nova Black';
    src: url(${ProximaNovaBlack}) format('opentype');
    font-style: normal;
    font-weight: black;
    font-display: auto;
  }

  @font-face {
    font-family: 'Proxima Nova Bold';
    src: url(${ProximaNovaBold}) format('opentype');
    font-style: normal;
    font-weight: bold;
    font-display: auto;
  }
`

export default GlobalStyles;