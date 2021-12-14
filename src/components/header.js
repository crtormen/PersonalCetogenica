import React from 'react';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';
import * as S from '../styles/sales_page';
import CTAButton from './CTAButton';
import logo from '../images/logo-esbelta-desafio-branco.png';

const Header = (props,ref) => {

    return (
        <S.Header ref={ref}>
            <S.HeaderLogo size={props.size}>
                <img 
                    // loading="eager"
                    src={logo}
                    alt="logo" />
            </S.HeaderLogo>
            <S.HeaderButton>
                <CTAButton size={props.size || "header"}>Quero Meu Acesso</CTAButton>
            </S.HeaderButton>
        </S.Header>
    );
}

export default React.forwardRef(Header);