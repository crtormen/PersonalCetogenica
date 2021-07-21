import React from 'react';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';
import * as S from '../styles/sales_page';
import CTAButton from './CTAButton';

import logo1 from '../images/logoteste.png';
import logo2 from '../images/logo02.png';

const Header = (props,ref) => {

    return (
        <S.Header ref={ref}>
            <S.HeaderLogo size={props.size}>
                <StaticImage 
                    // fullWidth
                    src="../images/logo02.png" />
            </S.HeaderLogo>
            <S.HeaderButton>
                <CTAButton size={props.size || "header"}>Quero Meu Acesso</CTAButton>
            </S.HeaderButton>
        </S.Header>
    );
}

export default React.forwardRef(Header);