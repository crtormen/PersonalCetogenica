import React from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import media from 'styled-media-query';
import CTAButton from './CTAButton';
import * as S from '../styles/sales_page';
import * as C from '../styles/elements';
import plusicon from '../images/icons/plus.png';


const PriceWrapper = styled.section`
    grid-row: 10/11;
    grid-column: 1/-1;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--grey);//rgba(var(--orangeRGB), 0.4);
    /* color: white; */
    /* padding: 1rem auto; */
`
const CTAFinal = styled(C.Block)`
    text-align: center;
    margin: 1rem auto;
    align-items: center;
    /* background: var(--grey); */

`

const CTATitle = styled.h1`
    font-size: 2.2rem;
    font-weight: 700;
    color: var(--purple);
    margin: 2rem auto;
`

const CTAList = styled(C.List)`
    text-align: left;
    margin: 0 auto;
    ul li {
        font-size: 1.5rem;
    }

    li::before {
        background-image: url(${plusicon});
    }

    ${media.lessThan("medium")`
        ul li {
            font-size: 1.2rem;
        }
    `}
`
const CTAPrice = styled.div`
    width: 80%;
    height: auto;

    ${media.lessThan("medium")`
        width: 90%;
    `}
`
const Atencao = styled.div`
    padding: 2rem 4rem;
    background: red;
    color: yellow;
    font-size: 3rem;
    font-weight: 900;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;

    span { 
        color: white;
        font-size: 2.5rem;
    }

    ${media.lessThan("medium")` 
        padding: 2rem;
        font-size: 2.2rem;

        span {
            font-size: 2rem;
        }
    `}

`
const ValorFake = styled.span`
    text-decoration: line-through;
    color: red;
`

const Price = () => (
	<PriceWrapper>
	<Atencao>Atenção: <br /><span>Promoção Por Tempo Limitado</span></Atencao>
	<C.Title>Estou oferecendo uma janela de oportunidade <br />única nesse lançamento<C.Divider /></C.Title>

	<C.Paragraph><C.Bolder>O programa completo do Desafio 28 Dias do Método Esbelta será vendido por <C.Color color="red">R$ 497</C.Color> dentro de algumas semanas.</C.Bolder></C.Paragraph>
	
	<C.Paragraph>Esse é o único método de emagrecimento, capaz de transformar algo chato em algo extremamente prazeroso e sem sofrimento, de forma eficaz e saudável, com benefícios que você colherá para o resto da vida.</C.Paragraph>
	
	<C.Paragraph>Mas, como meu desejo é premiar aquelas mulheres que estão determinadas, com convicção de onde querem chegar e acreditam no meu trabalho, disponibilizarei o Desafio 28 Dias do Método Esbelta com um valor muito menor do que R$ 497.</C.Paragraph>
	
	<C.SubTitle><C.Color color="var(--orange)">Nesta oferta, você receberá 60% de desconto!</C.Color></C.SubTitle>

	<CTAFinal inset>
			<CTATitle>Comprando hoje você receberá: </CTATitle>
			<CTAList icon="greencheck">
				<ul>
					<li>O Programa Completo Desafio de 28 Dias do Método Esbelta <ValorFake>(R$1800)</ValorFake></li>
					<li>Acesso ao Grupo Secreto de Alunas(NÃO ESTÁ À VENDA)</li>
					<li>4 Livros de Receitas Calculadas <ValorFake>(R$116)</ValorFake></li>
					<li>Semana de Treinos do Programa Detox40 <ValorFake>(R$49)</ValorFake></li>
					<li>Semana de Treinos da Personal Manu Reis <ValorFake>(R$90)</ValorFake></li>
					<li>Fórmulas de Manipulados(NÃO ESTÁ À VENDA)</li>
					<li>Receitas de Chás Diuréticos(NÃO ESTÁ À VENDA)</li>
					<li>Livros Digitais sobre as Técnicas Utilizadas(NÃO ESTÁ À VENDA)</li>
				</ul>
			</CTAList>
			{/* <S.ValorCheio>Total De <C.ValorFake><C.Bolder>R$2200</C.Bolder></C.ValorFake></S.ValorCheio>
			<S.Apenas>Por APENAS</S.Apenas>
			<S.Parcelado>12x <span>R$ 30,41</span></S.Parcelado>
			<S.ValorAVista>ou R$357 à vista</S.ValorAVista> */}
			<CTAPrice><StaticImage src='../images/preco297.png' alt="preco" /></CTAPrice>
			<C.Paragraph><C.Bigger>São 81 centavos por dia, para você alcançar a sua melhor versão.</C.Bigger></C.Paragraph>
			
			<CTAButton>Quero Ser Magra Com 81 centavos Por Dia</CTAButton>
	</CTAFinal>
	

	<C.Paragraph>Sim, eu sei que esse valor está praticamente de graça frente a todo o conhecimento e a transformação que o curso oferece. Mas...</C.Paragraph>
	<C.Paragraph><C.Bolder>É minha forma de premiar você que está <C.BG>decidida a virar esse jogo agora.</C.BG></C.Bolder></C.Paragraph>
	<C.Paragraph>Então, clique no botão acima e preencha os campos na página seguinte, para ganhar acesso imediato a essa nova fase da sua vida.</C.Paragraph>
	
		
	</PriceWrapper>
)

export default Price;
// Comece Agora a Lapidar a Mulher Esbelta Que Existe Em Você


// Você não precisa ser gordinha para o resto da vida.


// PARE DE DEIXAR PARA DEPOIS O QUE VOCÊ MERECE TER AGORA!

// •	Chega de ter vergonha do seu corpo;
// •	Chega de não poder vestir a roupa que quiser;
// •	Chega de ficar escondida debaixo da canga;
// •	Chega de se sentir derrotada por não conseguir emagrecer;
// •	Chega de baixa autoestima;


// Com o programa de emagrecimento Método Esbelta você irá:

// •	Emagrecer de 5 a 10kg em 30 dias;
// •	Se sentir mais bonita e atraente;
// •	Melhorar sua aparência com qualquer roupa;
// •	Aumentar suas possibilidades, sejam afetivas ou profissionais;
// •	Se tornar uma pessoa mais saudável e feliz;
// •	Servir de inspiração para suas amigas;
// •	Se sentir vitoriosa por finalmente conseguir emagrecer;
// •	Reduzir ou acabar com sua celulite;
// •	Deixará de sentir vergonha ao tirar a roupa para seu namorado/marido
// •	Usar um bikini sem medo;
// •	Ter mais energia e disposição para realizar suas atividades;
// •	Reduzir risco de doenças causadas por maus hábitos;
// •	Ter menos dores nas articulações;
// •	Ter um sono de melhor qualidade;
// •	Viver por mais tempo e melhor;
// •	Se sentir mais livre;


// Você Está Muito Próxima de Se Tornar Magra. E Por um Valor Especial Que Cabe no Seu Bolso


// O Método Esbelta é o método mais eficiente para você perder peso de forma saudável e definitiva.

// A minha missão com esse novo projeto é ver 10.000 mulheres emagrecendo e se tornando mais confiantes nos próximos 5 anos.
// E ainda esse ano, quero ajudar pelo menos 1000 mulheres a alcançarem o corpo que sempre idealizaram.

// É por esse motivo que hoje estou oferecendo uma janela de oportunidade única nesse lançamento.

// O programa completo do Método Esbelta será vendido por R$ 994 dentro de algumas semanas.

// Afinal, esse é o único treinamento completo capaz de transformar algo chato em algo extremamente prazeroso e sem sofrimento, com benefícios que você colherá para o resto da vida.

// Mas, como meu desejo é premiar aquelas mulheres que estão determinadas, com convicção de onde querem chegar e acreditam no meu trabalho, começarei com um valor muito menor do que R$ 994.

// E não estou nem falando de um investimento em torno de 50% desse valor, que seria R$ 497.

// O Sistema Completo do Método Esbelta está disponível por apenas 12x R$ 30,41

// 	Menos de R$1 por dia.

// Sim, eu sei que esse valor está praticamente de graça frente a tudo o que o curso oferece.
// Mas mantenho meu comprometimento em premiar as pessoas certas que tomarem uma ação agora.
// Portanto, clique no botão abaixo e preencha os campos para ganhar acesso imediato ao treinamento.

// Quero Ser Magra Com 1 Real Por Dia


// Vamos Relembrar o Que Você Irá Receber com o Método Esbelta...

// ARTE DO CURSO


// •	Método Esbelta (R$994)
// •	15 Livros de Receitas Calculadas (15 x R$29 cada = R$435)
// •	Bônus Semana de Exercícios Detox40 
// •	Bônus Aulas de LPF

// Somando apenas o Método Esbelta e os 15 Livros de Receitas, o valor do que você está adquirindo seria de R$1429. 

// SOMENTE ATÉ AMANHÃ (DATA)
// Você poderá adquirir pelo valor de apenas
// 12x R$30,41

// Infelizmente preciso limitar o número de vagas, para poder dar um suporte de qualidade a todas as alunas.
// Por isso farei esse preço promocional por esse tempo limitado.


// Para Aderir Ao Método Esbelta É Muito Simples

// Seu acesso imediato ao Método Esbelta está a apenas 3 simples passos de você.

// Tudo o que você precisa fazer é:

// 1.	Clicar no botão abaixo.
// 2.	Preencher as informações de pagamento 100% seguras com encriptação militar de dados.
// 3.	Receber nosso email imediato com os dados de login e senha para seu acesso.


// Siga o passo #1 abaixo:

// Quero Ser Magra Com 1 Real Por Dia



// NOSSO APOIO
// Você terá o acompanhamento da Nutricionista Charline Tormen e de mais dezenas de alunas que tiveram suas vidas transformadas.

// COMPRA SEGURA
// Seu pagamento será processado pelo Hotmart, uma das maiores empresas de vendas de cursos online do mundo com 100% de segurança dos seus dados.

// COMPROMISSO
// Nós garantimos que o valor do seu investimento no programa será recompensado se você seguir corretamente os passos.

// PROSPERIDADE
// Emagrecendo de forma saudável, você poderá ter uma vida muito mais próspera.
