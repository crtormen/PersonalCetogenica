import React, {useEffect, useRef, useState} from 'react';
import { useInView } from 'react-intersection-observer';
import GlobalStyles from '../styles/global';
import { StaticImage } from 'gatsby-plugin-image';
import About from '../components/About';
import Cover from '../components/Cover';
import AntesEDepois from '../components/AntesEDepois';
import Testimonials from '../components/Testimonials';
import Header from '../components/Header';
import IPresentYou from '../components/IPresentYou';
import Beneficios from '../components/Beneficios';
import OMetodo from '../components/OMetodo';
import Mission from '../components/Mission';
import Warranty from '../components/Warranty';
import Price from '../components/Price';
import AvisoLegal from '../components/AvisoLegal';
import {FaWhatsapp} from 'react-icons/fa';
import * as S from '../styles/sales_page';
import * as C from '../styles/elements';

const SalesPage = () => {
    const [ref, inView, entry] = useInView({rootMargin: '-100px 0px 0px 0px'});
    const header = useRef(null);
    const [headerSize, setHeaderSize] = useState("");
  
    useEffect(() => {
      const setMenuColor = () => {
        if (!entry) return;
        if (!entry.isIntersecting) {
            header.current.classList.add("nav-scrolled");
            setHeaderSize('small');
        } else {
          header.current.classList.remove("nav-scrolled");
          setHeaderSize('');
        }
      }
      setMenuColor()
    },[entry])

    return (
        <S.Layout>
            <Header ref={header} size={headerSize}/>
                {/* <div style={{visibility:'hidden', marginLeft: 'auto'}} /> */}
                
            <S.PageWrapper>
                <GlobalStyles />
                <S.Cover ref={ref}>
                    <Cover/>
                </S.Cover>
                <S.SocialProof1>
                    <C.Title><C.Color color="var(--purple)">Veja O Que Dizem Minhas Alunas</C.Color> <C.Divider /></C.Title>
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
                <Beneficios />
                <S.Hero>
                    <div style={{maxWidth:"100ch"}}><C.Title><C.BG>Há Alguns Anos, Descobri os Segredos Do Emagrecimento Saudável e Prazeroso</C.BG></C.Title></div>
                    <C.Paragraph><C.Bolder><C.Color>...que transformaram a forma como eu via a Nutrição.</C.Color></C.Bolder></C.Paragraph>
                    {/* <C.Paragraph>
                        <C.Color color="var(--postColor)"><C.BG>IMPORTANTE:</C.BG></C.Color> 
                        <C.Color> Se alcançar um resultado impressionante desses, de forma tão rápida, assusta você, 
                    pare de ler agora mesmo. <br/>O método que irei te apresentar não é para você.</C.Color>
                </C.Paragraph>
                <C.Paragraph><C.Color>Mas se é isso mesmo que você está procurando, e se está DETERMINADA a emagrecer de uma vez por todas, </C.Color></C.Paragraph> */}
                <C.Paragraph><C.Color>Eu lhe apresento...</C.Color></C.Paragraph>
                </S.Hero>
                <IPresentYou />
                <About />
                <AntesEDepois />
                <OMetodo />
                <S.SocialProof2>
                    <C.Title><C.Color color="var(--purple)">Mais Alguns Depoimentos De Minhas Alunas</C.Color> <C.Divider /></C.Title>
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
                {/* <Threeway /> */}
                {/* <Faq /> */}
                <AvisoLegal />
                <S.Contact>
                    {/* <span>Alguma dúvida?</span>                     */}
                    <S.Whatsapp href="https://api.whatsapp.com/send?phone=telefone&amp;text=Oi%2C%20Quero%20saber%20mais%20sobre%20o%Metodo%20Esbelta!" className="float" target="_blank">
                        <FaWhatsapp className="icon" />
                    </S.Whatsapp>
                </S.Contact>
            

            </S.PageWrapper>
        </S.Layout>);
}


export default SalesPage;