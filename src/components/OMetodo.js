import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as S from '../styles/sales_page';
import * as C from '../styles/elements';
import Accordion from './Accordion';
import { Course } from './AccordionData';


const OMetodo = () => (
    <S.Metodo>
        <S.MetodoIntro>
            <C.Title>O Método Esbelta É Baseado Em 3 Pilares:<C.Divider /></C.Title>
            <S.Grid>
                <S.Pilares>
                    <StaticImage src='../images/icons/hormones.jpg' className="pilar_image" alt="hormonios"/>
                    <span className="pilares">1. Regulação<br/>Hormonal</span>
                </S.Pilares>
                <S.Pilares>
                    <StaticImage src='../images/icons/metabolismo.jpg' className="pilar_image" alt="metabolismo" />
                    <span className="pilares">2. Aumento do Metabolismo Basal</span>
                </S.Pilares>
                <S.Pilares>
                    <StaticImage src='../images/icons/wellness-woman.jpg' className="pilar_image" alt="habitos" />
                    <span className="pilares">3. Criação de Hábitos Saudáveis</span>
                </S.Pilares>
            </S.Grid>

            <C.Title style={{lineHeight: '1.2'}}><C.BG color="var(--purple)"><C.Color color="yellow">Esses 3 Pilares Transformarão Seu Corpo em Uma Máquina de Queimar Gordura e 
                te Tornarão Uma Mulher Magra e Esbelta Para o Resto da Vida.</C.Color></C.BG></C.Title>
            <br /><br/>
            <C.Paragraph style={{textAlign: 'center', margin: '0 auto'}}>O Método Esbelta é diferente de tudo o que você já viu. </C.Paragraph>

            <C.Block inset>
                <C.SubTitle color="var(--purple)"><C.Underline>Nele você receberá:</C.Underline></C.SubTitle>
                    <C.List icon="arrow">
                        <ul>
                            <li>
                                Um método online completo
                            </li>    
                            <li>
                                Passo a Passo prático e gostoso de seguir
                            </li>
                            <li>
                                Cardápios semanais flexiveis, personalizados para as suas necessidades 
                            </li>
                            <li>
                                Grande variedade de receitas deliciosas nos cardápios
                            </li>
                            <li>
                                Videos explicativos de cada etapa do processo
                            </li>
                            <li>
                                Livro com mais de 100 receitas fáceis de preparar, para diversificar sua dieta ao seu gosto.
                            </li>
                            <li>
                                Desafios Semanais para te guiar e te ajudar a se manter focada
                            </li>
                            <li>
                                Lista de compras para te auxiliar (com links para compra pela internet)
                            </li>
                            <li>
                                Grupo de Apoio Exclusivo no Facebook
                            </li>
                        </ul>    
                    </C.List>
                </C.Block>
                <C.Paragraph style={{textAlign: 'center', margin: '0 auto'}}>
                    <C.Bolder>Elaborado para que você consiga alcançar o seu corpo ideal de forma mais eficiente possível, 
                        de uma vez por todas, e sem passar fome</C.Bolder>
                </C.Paragraph>
        </S.MetodoIntro>
        <S.MetodoMiddle>
            <C.SubTitle  style={{color: 'white'}}>Minha ESTRATÉGIA para alcançar nossas metas <br />faz uso de 4 técnicas 
                poderosíssimas e revolucionárias, <br/>comprovadas pela ciência nos últimos anos:</C.SubTitle>

            <S.Grid columns={4}>
                <S.Pilares>
                    <StaticImage src='../images/cetogenica.jpg' alt="cetogenica" className="image"/>
                    <span className="tecnicas">Dieta Cetogênica</span>
                </S.Pilares>
                <S.Pilares>
                    <StaticImage src='../images/jejum.jpg' alt="Jejum intermitente" className="image"/>
                    <span className="tecnicas">Jejum Intermitente</span>
                </S.Pilares>
                <S.Pilares>
                    <StaticImage src='../images/detox.jpg' alt="Detox"  className="image"/>
                    <span className="tecnicas">Detox de Verdade</span>
                </S.Pilares>
                <S.Pilares>
                    <StaticImage src='../images/ciclocarbo.jpg' alt="cetogenica" className="image"/>
                    <span className="tecnicas">Ciclo de Carboidratos</span>
                </S.Pilares>                    
            </S.Grid>
            <C.Paragraph><C.Bigger>
                Essas técnicas, quando combinadas da maneira correta, transformarão seu corpo em uma <C.BG color="var(--purple)">máquina de 
                queimar gordura</C.BG>, literalmente. </C.Bigger>
            </C.Paragraph>
            <C.List color="white" icon="purplearrow">
                <ul>
                    <li style={{ fontWeight: '500'}}>
                        Seu corpo se tornará mais eficiente em suas funções básicas, através de alterações metabólicas 
                        e hormonais, obtendob assim <C.Underline>resultados duradouros</C.Underline>.                            
                    </li>
                    <li style={{fontWeight: '500'}}>
                        Você irá obter inúmeros benefícios à sua saúde, como maior clareza mental, memória e concentração. 
                        Além de uma maior prevenção e controle de doenças crônicas como o diabetes e a hipertensão.

                    </li>
                    <li style={{fontWeight: '500'}}>
                        Aliado à essas técnicas, haverá uma grande variedade de receitas já incluídas nos planos alimentares.
                    </li>
                </ul>
            </C.List>
        </S.MetodoMiddle>
        <S.MetodoModulos>
            <C.Title>Como funcionará o Método Esbelta de Emagrecimento? <C.Divider /></C.Title>

            <C.SubTitle>Meu Plano Testado e Validado, Para Fazer Você Perder <br/>De 5 a 10 Kg Em Apenas 30 Dias</C.SubTitle>
            <C.Paragraph style={{textAlign: 'center', margin: '0 auto'}}>O Método Esbelta é composto por 7 módulos (Clique no módulo para ver os detalhes):</C.Paragraph>
            <br/>
            <Accordion data={Course} />
        </S.MetodoModulos>
        <S.MetodoBonus>
            <C.Title><C.BG>SOMENTE PARA VOCÊ QUE SE INSCREVER HOJE</C.BG></C.Title>
            <C.SubTitle>Ao se inscrever hoje no Método Esbelta, <br/><C.Underline>VOCÊ GANHARÁ PRESENTES EXCLUSIVOS:</C.Underline></C.SubTitle>
            <C.Block>
                <S.Bonus>
                    <S.BonusImage>
                        <StaticImage src='../images/ebook.webp' alt="ebooks" />
                    </S.BonusImage>
                    <S.BonusTitle>
                        <C.SubTitle color="var(--purple)">Presente #1 - 16 Livros De Receitas Calculadas</C.SubTitle></S.BonusTitle>
                    <S.BonusDescription>
                        <C.Paragraph>Você terá acesso a 16 Livros de Receitas deliciosas, desenvolvidos por mim, com todas as receitas contendo o cálculo de calorias, proteínas, gorduras e carboidratos.</C.Paragraph>
                        <C.Paragraph>O esforço envolvido na produção desses 16 livros foi enorme. Com os dados de calorias e macronutientes, você poderá facilmente incorporar essas receitas na sua dieta. </C.Paragraph>
                        <C.Paragraph><C.Color color="red">VALOR NORMAL: <C.Bolder style={{ textDecoration: 'line-through'}}>R$397</C.Bolder> (Ou  <C.Bolder style={{ textDecoration: 'line-through'}}>R$29</C.Bolder> cada)</C.Color></C.Paragraph>
                        <C.Paragraph>NESTA OFERTA: <C.Bolder><C.Color color="var(--green)">GRÁTIS</C.Color></C.Bolder></C.Paragraph>
                    </S.BonusDescription>
                </S.Bonus>
                <C.Divider/>
                <S.Bonus>
                    <S.BonusImage>
                        <StaticImage src='../images/ebook.webp' alt="ebooks" />
                    </S.BonusImage>
                    <S.BonusTitle>
                        <C.SubTitle color="var(--purple)">Presente #2 - 5 Treinos do Programa Detox40</C.SubTitle></S.BonusTitle>
                    <S.BonusDescription>
                        <C.Paragraph>Você terá acesso a um plano de 1 semana do Programa de Treinamento Detox40, do treinador Rodrigo Piano.</C.Paragraph>
                        <C.Paragraph>São treinos de 15 minutos, que você poderá fazer do conforto da sua casa para potencializar seus resultados.</C.Paragraph>
                    </S.BonusDescription>
                </S.Bonus>
                <C.Divider/>
                <S.Bonus>
                    <S.BonusImage>
                        <StaticImage src='../images/ebook.webp' alt="ebooks" />
                    </S.BonusImage>
                    <S.BonusTitle>
                        <C.SubTitle color="var(--purple)">Presente #3 - 8 Aulas de LPF (Low Pressure Fitness) com a fisioterapeuta Margarete ...</C.SubTitle></S.BonusTitle>
                    <S.BonusDescription>
                        <C.Paragraph>Nessas aulas você aprenderá com a fisioterapeuta Margarete, a executar a técnica hipopressiva, também chamada de “exercício da barriga negativa”.</C.Paragraph>
                        <C.Paragraph>Esse é um sistema de treino postural que traz inúmeros benefícios, como: </C.Paragraph>
                        <C.List size="small">
                            <ul>
                                <li> Melhora da postura</li>
                                <li> Redução da medida da cintura</li>
                                <li> Fortalecimento da musculatura pélvica e abdominal</li>
                                <li> Diminuição do desconforto lombar</li>
                                <li> Reeducação da respiração</li>
                            </ul>
                        </C.List>
                    </S.BonusDescription>
                </S.Bonus>
            </C.Block>
        </S.MetodoBonus>
        {/* <S.MetodoOutro>
            <C.SubTitle>O que o Método Esbelta <C.Underline>Não</C.Underline> É</C.SubTitle>
            <C.List>
                <ul>
                    <li>Não é uma dieta da moda</li>
                    <li>Nem é uma pílula mágica</li>
                    <li>Muito menos uma promessa ilusória</li>
                </ul>
            </C.List>
        </S.MetodoOutro> */}
    </S.Metodo>
)

export default OMetodo;