/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

 import "lazysizes";
//  import "@fontsource/lato";
//  import "typeface-raleway";
//  import "typeface-caveat";
 import "@fontsource/roboto";
//  import "@fontsource/roboto-condensed";
 import "@fontsource/open-sans";
//  import "@fontsource/open-sans-condensed";
 //poppins
 
 
//  require("prismjs/themes/prism-tomorrow.css");
 
 export const onRouteUpdate = ({ location, prevLocation }) => {
     if (location && location.state)
       location.state.prevUrl = prevLocation ? prevLocation.pathname : null
 }

 export const onClientEntry = async () => {
  if (typeof IntersectionObserver === "undefined") {
    await import("intersection-observer");
    console.log("IntersectionObserver polyfilled ;)");
  }
};