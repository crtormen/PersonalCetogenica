import React, {useRef} from 'react';

import { useInView } from 'react-intersection-observer';
import { StaticImage } from 'gatsby-plugin-image';
import GlobalStyles from '../styles/global';
// import {FaWhatsapp} from 'react-icons/fa';
import * as S from '../styles/sales_page';
import * as C from '../styles/elements';
import {Whatsapp} from '@styled-icons/fa-brands/Whatsapp';

import About from '../components/About';
import Cover from '../components/Cover';
import AntesEDepois from '../components/AntesEDepois';
import Testimonials from '../components/Testimonials';
import Header from '../components/Header';
import MetodoEsbelta from '../components/MetodoEsbelta';
import Beneficios from '../components/Beneficios';
import Desafio28Dias from '../components/Desafio28Dias';
import Mission from '../components/Mission';
import Warranty from '../components/Warranty';
import Price from '../components/Price';
import AvisoLegal from '../components/AvisoLegal';

// const About = loadable(() => import('../components/About'));
// const Cover = loadable(() => import('../components/Cover'));
// const AntesEDepois = loadable(() => import('../components/AntesEDepois'));
// const Testimonials = loadable(() => import('../components/Testimonials'));
// const Header = loadable(() => import('../components/Header'));
// const MetodoEsbelta = loadable(() => import('../components/MetodoEsbelta'));
// const Beneficios = loadable(() => import('../components/Beneficios'));
// const Desafio28Dias = loadable(() => import('../components/Desafio28Dias'));
// const Mission = loadable(() => import('../components/Mission'));
// const Warranty = loadable(() => import('../components/Warranty'));
// const Price = loadable(() => import('../components/Price'));
// const AvisoLegal = loadable(() => import('../components/AvisoLegal'));

const SalesPage = () => {
    const [ref, inView, entry] = useInView({rootMargin: '-100px 0px 0px 0px'});
    const cover = useRef(null);
    // const [headerSize, setHeaderSize] = useState("");
  
    // useEffect(() => {
    //   const setMenuColor = () => {
    //     if (!entry) return;
    //     if (!entry.isIntersecting) {
    //         header.current.classList.add("nav-scrolled");
    //         // setHeaderSize('small');
    //     } else {
    //       header.current.classList.remove("nav-scrolled");
    //     //   setHeaderSize('');
    //     }
    //   }
    //   setMenuColor()
    // },[entry])

    return (
        <S.Layout>
            {/* <Header ref={header} size={headerSize}/> */}
                {/* <div style={{visibility:'hidden', marginLeft: 'auto'}} /> */}
                
            <S.PageWrapper>
                <GlobalStyles />
                <S.Cover ref={cover}>
                    <Cover/> 
                </S.Cover>
                <S.SocialProof1>
                    <C.Title style={{gridColumn: '1/-1'}}><C.Color color="var(--purple)">Veja O Que Dizem Minhas Alunas</C.Color> <C.Divider /></C.Title>
                    <Testimonials>
                        <StaticImage
                            src="../images/testimonials/testemunho11.jpg" 
                            alt="Testemunho"
                        />
                        <C.Divider className="hide"/>
                        <StaticImage
                            src="../images/testimonials/testemunho14.jpg"
                            alt="Testemunho"
                        />
                        <C.Divider className="hide"/>
                        <StaticImage
                            src="../images/testimonials/testemunho12.jpg"
                            alt="Testemunho"
                            />
                    </Testimonials>
                </S.SocialProof1>
                <About />
                <MetodoEsbelta />
                <AntesEDepois />
                <Desafio28Dias />
                <S.SocialProof2>
                    <C.Title style={{gridColumn: '1/-1'}}><C.Color>Mais Alguns Depoimentos De Minhas Alunas</C.Color> <C.Divider /></C.Title>
                    <Testimonials>
                        <StaticImage
                            src="../images/testimonials/testemunho25.jpg"
                            alt="Testemunho 13"
                        />
                        <C.Divider className="hide"/>
                        <StaticImage
                            src="../images/testimonials/testemunho8.jpg"
                            alt="Testemunho 12"
                        />
                        <C.Divider className="hide"/>
                        <StaticImage
                            src="../images/testimonials/testemunho21.jpg"
                            alt="Testemunho 9"
                        />
                    </Testimonials>
                </S.SocialProof2>
                <Mission />
                <Price />
                <Warranty />
                <Beneficios />
                {/* <Threeway /> */}
                {/* <Faq /> */}
                <AvisoLegal />

                <S.Contact>
                    {/* <span>Alguma dúvida?</span>                     */}
                    <S.Whatsapp href="https://wa.me/5551992677033?text=Ol%c3%a1%2c+gostaria+de+informa%c3%a7%c3%b5es+sobre+o+Desafio+28+Dias+do+M%c3%a9todo+Esbelta%2c+por+favor." className="float" target="_blank">
                        <Whatsapp className="icon" />
                    </S.Whatsapp>
                </S.Contact>
            

            </S.PageWrapper>
        </S.Layout>);
}


export default SalesPage;