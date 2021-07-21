import React from 'react';
import * as S from '../styles/sales_page';
import * as C from '../styles/elements';
import { StaticImage } from 'gatsby-plugin-image';

const Warranty = () => (
    <S.Warranty>
            <C.Title><C.Color color="var(--orange)">Garantia de Tranquilidade:</C.Color><br/> Sua Satisfação ou Seu Dinheiro 100% de Volta<C.Divider /></C.Title>
            <div className="block">
                <div className="image">
                    <StaticImage src='../images/garantia.png' alt="garantia"/>
                </div>
                <div className="description">
                    <C.Paragraph>Se durante os primeiros 7 dias de acesso ao curso, por qualquer motivo você não estiver satisfeita,
                    devolveremos 100% do valor investido sem nenhuma pergunta.</C.Paragraph>
                    <C.Paragraph>Esse é seu direito por Lei, e está previsto no Código de Defesa ao Consumidor. </C.Paragraph>

                    <C.Paragraph>Porém, eu confio tanto no meu método, que dobrarei esse prazo.
                    Isso mesmo! Você terá <C.Bolder>14 dias</C.Bolder> para desfrutar do seu acesso ao curso. 
                    E, se nesses 14 dias, você ainda não estiver satisfeita, basta me enviar um email que devolvemos 100% do valor investido.</C.Paragraph>

                    <C.Paragraph>Fique tranquila. Não tem letras miúdas nessa página nem um contrato com termos dificeis.
                    E também não iremos te perguntar nada se você pedir seu dinheiro de volta.
                    É simples assim. Basta um único email pedindo o seu reembolso e nós devolvemos todo o seu investimento.</C.Paragraph>

                    <C.Paragraph>O risco é todo meu. Você não corre risco algum.</C.Paragraph>
                </div>
            </div>
    </S.Warranty>
);

export default Warranty;