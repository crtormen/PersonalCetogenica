import React, {useEffect, useRef, useState} from 'react';
import { useInView } from 'react-intersection-observer';
import { StaticImage } from 'gatsby-plugin-image';
import GlobalStyles from '../styles/global';
import * as S from '../styles/sales_page';
import * as C from '../styles/elements';
import {Whatsapp} from '@styled-icons/fa-brands/Whatsapp';
import AvisoLegal from '../components/AvisoLegal';
import Cover from '../components/Cover';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import Desafio28DiasShort from '../components/Desafio28DiasShort';
import Warranty from '../components/Warranty';
import Price from '../components/Price';
import AntesEDepois from '../components/AntesEDepois';

const SalesPage = () => {
    const [ref, inView, entry] = useInView();
    const cover = useRef(null);
    const contact = useRef(null);
    const [contactVisible, setContactVisible] = useState(false);

    useEffect(() => {
        const setContactVisibility = () => {
          if (!entry) return;
          if (entry.isIntersecting) {
              setContactVisible(true);
          }
        }
        setContactVisibility()
      },[entry])

    return (
        <S.Layout>  
            <S.PageWrapper>
                <GlobalStyles />
                <S.Cover ref={cover}>
                    <Cover/> 
                </S.Cover>
                <S.SocialProof1>
                    <C.Title style={{gridColumn: '1/-1'}}><C.Color color="var(--purple)">Veja O Que Dizem Minhas Esbeltas</C.Color> <C.Divider /></C.Title>
                    <Testimonials>
                        <StaticImage
                            src="../images/testimonials/depoimento1.jpg" 
                            alt="Testemunho"
                        />
                        <C.Divider className="hide"/>
                        <StaticImage
                            src="../images/testimonials/depoimento2.jpg"
                            alt="Testemunho"
                        />
                        <C.Divider className="hide"/>
                        <StaticImage
                            src="../images/testimonials/depoimento3.jpg"
                            alt="Testemunho"
                            />
                        <C.Divider className="hide"/>
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
                <Desafio28DiasShort />
                <About />
                <AntesEDepois />
                <S.SocialProof2 ref={ref}>
                    <C.Title style={{gridColumn: '1/-1'}}><C.Color>Mais Alguns Depoimentos De Minhas Alunas</C.Color> <C.Divider /></C.Title>
                    <Testimonials columns={4}>
                        <StaticImage
                            src="../images/testimonials/depoimento4.jpg"
                            alt="Testemunho 4"
                            objectFit="scale-down"
                            />
                        <C.Divider className="hide"/>
                        <StaticImage
                            src="../images/testimonials/testemunho25.jpg"
                            alt="Testemunho 13"
                            objectFit="scale-down"
                            />
                        <C.Divider className="hide"/>
                        <StaticImage
                            src="../images/testimonials/testemunho8.jpg"
                            alt="Testemunho 12"
                            objectFit="scale-down"
                            />
                        <C.Divider className="hide"/>
                        <StaticImage
                            src="../images/testimonials/testemunho21.jpg"
                            alt="Testemunho 9"
                            objectFit="scale-down"
                        />
                    </Testimonials>
                </S.SocialProof2>
                <Price />
                <Warranty />
                <AvisoLegal />
                { contactVisible &&
                    <S.Contact ref={contact}>
                        {/* <span>Alguma dúvida?</span>                     */}
                        <S.Whatsapp href="https://wa.me/5551992677033?text=Ol%c3%a1%2c+gostaria+de+informa%c3%a7%c3%b5es+sobre+o+Desafio+28+Dias+do+M%c3%a9todo+Esbelta%2c+por+favor." className="float" target="_blank">
                            <Whatsapp className="icon" />
                        </S.Whatsapp>
                    </S.Contact>
                }
            </S.PageWrapper>
        </S.Layout>
    )
}

export default SalesPage;