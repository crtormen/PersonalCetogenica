import React from "react";
import PropTypes from "prop-types";
import * as S from '../styles/sales_page';

const Youtube = ({ embedId }) => (
    <S.YoutubeWrapper>
    {/*      <iframe
             width="853"
             height="480"
             src={`https://www.youtube.com/embed/${embedId}?rel=0&autoplay=1&controls=0&showinfo=0&disablekb=1&iv_load_policy=3&fs=0&modestbranding=1`}
             frameBorder="0"
             allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             title="Desafio 28 Dias - Método Esbelta"
         /> */}
        <iframe 
            allow="autoplay" 
            className="spotlightr" 
            allowtransparency="true" 
            allowfullscreen="true" 
            src="https://videomng.builderall.com/embed/5PAv0rILo0/?autoplay=1&countdown=1&controls=0&allowpause=1" 
            frameborder="0" 
            scrolling="no"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            name="videoPlayerframe"> 
        </iframe>
      
    </S.YoutubeWrapper>
);

Youtube.propTypes = {
    embedId: PropTypes.string.isRequired
  };

export default Youtube;