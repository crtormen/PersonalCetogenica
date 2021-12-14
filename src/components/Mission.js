import React from 'react'
import * as S from '../styles/sales_page';
import * as C from '../styles/elements';
import { StaticImage } from 'gatsby-plugin-image';
import CTAButton from './CTAButton';

const Mission = () => (
    <S.Mission>
            <C.Title><C.Color color="var(--purple)">Agora Imagine Se Você...</C.Color></C.Title>
        <S.TextAndImage>
            <C.List className="left">
                <ul>
                    <li>Pudesse escolher as suas roupas, em vez de ser escolhida pelas que te servirem</li>
                    <li>Não tivesse vergonha de tirar a roupa para o seu marido/namorado</li>
                    <li>Deixasse de se sentir inferior perto de alguém magra e bonita</li>
                    <li>Não sentisse vergonha de colocar um bikini na praia, ou de mostrar seu corpo</li>
                    <li>Tivesse mais energia e disposição para curtir a sua vida e sua família</li>
                    <li>Pudesse comer comidas gostosas e ainda assim ficar magra</li>
                    <li>Fosse elogiada e atraísse olhares por onde passasse</li>
                    <li>Servisse de inspiração para suas amigas</li>
                </ul>
            </C.List>
            <div className="right">
                <StaticImage src='../images/removing-fat.jpg' alt="removendo gordura"/>
            </div>
        </S.TextAndImage>

        <C.SubTitle><C.Underline>E Se Você Pudesse Alcançar Tudo Isso, Comendo Comidas Assim...</C.Underline></C.SubTitle>

        <S.Grid columns="4">
            <StaticImage src='../images/recipes/bolo-choco.jpg' alt='Bolo chocolate' />
            <StaticImage src='../images/recipes/camaroes.jpg' alt='camarões' />
            <StaticImage src='../images/recipes/ovos-poachet-tomate.jpg' alt='ovos poachet' />
            <StaticImage src='../images/recipes/torta-carne.jpg' alt='torta de carne' />
        </S.Grid>
        <div className="text">

            <h3>Isso tudo é TOTALMENTE possível! E eu tenho uma META definida para esse ano...</h3>


            <C.Title><C.BG>Eu Vou Ajudar 10000 Mulheres a Alcançarem Todas <br/>Essas Conquistas Nos Próximos 5 Anos.</C.BG></C.Title>

            <C.SubTitle>VocÊ Quer Ser Uma Delas?</C.SubTitle>
        </div>
        <CTAButton title="Comprar" >
            Sim, Eu Quero Emagrecer!
        </CTAButton>
    </S.Mission>
);

export default Mission;