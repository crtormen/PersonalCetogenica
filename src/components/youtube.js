import React from "react";
import PropTypes from "prop-types";
import * as S from '../styles/sales_page';

const Youtube = ({ embedId }) => (
    <S.YoutubeWrapper>
        <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />

    </S.YoutubeWrapper>
);

Youtube.propTypes = {
    embedId: PropTypes.string.isRequired
  };

export default Youtube;