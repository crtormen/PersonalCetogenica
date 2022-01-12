import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

import { StaticImage } from 'gatsby-plugin-image';
import CTAButton from './CTAButton';
import * as S from '../styles/sales_page';
import * as C from '../styles/elements';
import Accordion from './Accordion';
import { Course } from './AccordionData';
import Bonus from './Bonus';

const Desafio28DiasSection = styled.section`
    grid-row: 6/7;
    grid-column: 1/-1;
    background: var(--grey);
    display: grid;
    grid-template-columns: minmax(1em, 1fr) repeat(5, 1fr) minmax(1em, 1fr);
    padding: 2rem 0;

    ${media.lessThan("medium")`
        grid-template-columns: 1rem repeat(5, 1fr) 1rem;
    `}
`

const MetodoIntro = styled.div`
    grid-row: 1/2;
    grid-column: 2/-2;
    margin: 2rem auto;
`

const MetodoMiddle = styled.div`
    grid-row: 2/3;
    grid-column: 2/-2;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    padding: 1rem 2rem;
    margin: 0 auto;
    background: rgba(55,55,55,0.8);
    color: white;
    box-shadow: 5px 10px 1rem rgba(1,1,1, 0.5);
    /* text-align: center; */
`

const MetodoModulos = styled.div`
    grid-row: 4/5;
    grid-column: 2/-2;
    margin: 3rem 1rem;
`

const MetodoBonus = styled.div`
    grid-row: 5/6;
    grid-column: 2/-2;
`

const MetodoOutro = styled.div`
    grid-row: 6/7;
    grid-column: 2/-2;
`


const Desafio28Dias = () => (
    <Desafio28DiasSection>
        <MetodoIntro>
            <S.Logo style={{ width: '16rem', marginBottom: '3rem'}}>
                <StaticImage src="../images/desafio28.png" alt="logo desafio" />
            </S.Logo>
            <C.Title><C.Color color="var(--purple)">O Desafio de 28 Dias</C.Color><C.Divider /></C.Title>
            <C.Block>
                <C.Paragraph>O Desafio de 28 Dias do Método Esbelta é o ponto de partida para essa nova fase da sua vida.</C.Paragraph>
                <C.Paragraph>O objetivo do desafio é destravar rapidamente o seu emagrecimento, da maneira correta.</C.Paragraph>
                <C.SubTitle style={{maxWidth: '500px'}}><C.Color color="var(--purple)">Benefícios que você colherá com o Desafio de 28 Dias do Método Esbelta:</C.Color></C.SubTitle>
                <S.Icons>
                    <S.Icon>
                        <StaticImage src='../images/emagrecer.jpg' alt="emagrecer" height={300} width={300} />
                        <p>Emagrecer de 5 a 10 kg de maneira fácil, saudável e prazerosa</p>
                    </S.Icon>                    
                    <S.Icon>
                        <StaticImage src='../images/celulite.jpg' alt="menos celulite e flacidez" height={300} width={300} />
                        <p>Menos Celulite e Flacidez</p>
                    </S.Icon>
                    <S.Icon>
                        <StaticImage src='../images/pele.jpg' alt="pele bonita" height={300} width={300} />
                        <p>Pele mais bonita e saudável</p>
                    </S.Icon>
                    <S.Icon>
                        <StaticImage src='../images/energia.jpg' alt="energia e disposição" height={300} width={300} />
                        <p>Mais energia e disposição</p>
                    </S.Icon>
                    <S.Icon>
                        <StaticImage src='../images/envelhecimento.jpg' alt="clareza mental" height={300} width={300} />
                        <p>Maior clareza mental (como raciocínio e memória)</p>
                    </S.Icon>
                    <S.Icon>
                        <StaticImage src='../images/cabelo.jpg' alt="cabelos e unhas fortes" height={300} width={300} />
                        <p>Cabelos e unhas mais fortes</p>
                    </S.Icon>
                    <S.Icon>
                        <StaticImage src='../images/gordura.jpg' alt="gordura fonte de energia" height={300} width={300} />
                        <p>Ensinar o seu corpo a utilizar a gordura como fonte principal de energia</p>
                    </S.Icon>
                    <S.Icon>
                        <StaticImage src='../images/healthy.jpg' alt="hábitos saudáveis" height={300} width={300} />
                        <p>Intestino Regulado</p>
                    </S.Icon>
                </S.Icons>
                <C.Title style={{lineHeight: "1.2", color: 'white'}}><C.BG color="var(--pink)">Emagrecer De 5 a 10 Kg Em Apenas 28 Dias É Mais Fácil Do Que Se Imagina, Mas Você Precisa Começar Agora!</C.BG></C.Title>
                <br /><br /><C.Paragraph>Você deseja ser uma pessoa mais bonita e saudável?</C.Paragraph>
                <C.Paragraph>Ser elogiada, atrair olhares, ou ser uma inspiração para outras mulheres?</C.Paragraph>
                <C.Paragraph>Eu te garanto que isso é totalmente possível!</C.Paragraph>
                <C.Paragraph>Porém, não conquistamos nada sem atitude. Para alcançar o sucesso, é necessário agir <C.Bolder>AGORA.</C.Bolder></C.Paragraph>
                <C.Paragraph>A boa notícia é que: <C.Bolder><C.BG>É MAIS SIMPLES DO QUE VOCÊ IMAGINA.</C.BG></C.Bolder></C.Paragraph>
                <S.Icons>
                    <S.Icon>
                        <StaticImage src='../images/icons/healthy2.png' alt="método seguro" height={300} width={300} />
                        <h3>Método Seguro</h3>
                        <p>Sem dietas radicais nem uso de medicamentos</p>
                    </S.Icon>
                    <S.Icon>
                        <StaticImage src='../images/icons/happier.png' alt="sem sofrimento" height={300} width={300} />
                        <h3>Sem Sofrimento</h3>
                        <p>Sem se matar na esteira nem se privar de comer com prazer</p>
                    </S.Icon>
                    <S.Icon>
                        <StaticImage src='../images/icons/online2.png' alt="100% online" height={300} width={300} />
                        <h3>100% Online</h3>
                        <p>Acesse a qualquer hora pelo smartphone, tablet ou PC.</p>
                    </S.Icon>
                    <S.Icon>
                        <StaticImage src='../images/icons/online.png' alt="100% online" height={300} width={300} />
                        <h3>Acesso Imediato</h3>
                        <p>Comece agora mesmo, de onde estiver.</p>
                    </S.Icon>
                </S.Icons>
            </C.Block>
            <CTAButton title="Comprar" href="https://pay.hotmart.com/W18216290C">
                Quero Emagrecer Agora
            </CTAButton>

            <br /><br/>
            <C.Paragraph style={{textAlign: 'center', margin: '0 auto'}}>O Desafio de 28 Dias do Método Esbelta é diferente de tudo o que você já viu. </C.Paragraph>

            <C.Block inset>
                <C.SubTitle color="var(--purple)"><C.Underline>Nele você receberá:</C.Underline></C.SubTitle>
                    <C.List icon="arrow">
                        <ul>
                            <li>
                                Um método de emagrecimento online completo
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
                                Desafios Semanais para te guiar e te ajudar a se manter focada
                            </li>
                            <li>
                                Lista de compras para te auxiliar (com links para compra pela internet)
                            </li>
                        </ul>    
                    </C.List>
                </C.Block>
                <C.Paragraph style={{textAlign: 'center', margin: '0 auto'}}>
                    <C.Bolder>Elaborado para que você consiga alcançar o seu corpo ideal de forma mais eficiente possível, 
                        de uma vez por todas, e sem passar fome</C.Bolder>
                </C.Paragraph>
        </MetodoIntro>
        {/* <MetodoMiddle>
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
        </MetodoMiddle> */}
        <C.Divider style={{gridRow: '3/4', gridColumn: '1/-1', width: '80%', borderColor: 'var(--purple)'}} />
        <MetodoModulos>
            <C.Title>Como funcionará o Desafio 28 Dias do Método Esbelta? <C.Divider /></C.Title>

            <C.SubTitle>Meu Plano Testado e Validado, Para Fazer Você Perder <br/>De 5 a 10 Kg Em Apenas 28 Dias</C.SubTitle>
            <C.Paragraph style={{textAlign: 'center', margin: '0 auto'}}>O programa é composto por 6 módulos (Clique no módulo para ver os detalhes):</C.Paragraph>
            <br/>
            <Accordion data={Course} />
        </MetodoModulos>
        <MetodoBonus>
            <C.Title><C.BG>SOMENTE PARA VOCÊ QUE SE INSCREVER HOJE</C.BG></C.Title>
            <C.SubTitle>Ao se inscrever hoje no Desafio de 28 Dias do Método Esbelta, <br/><C.Underline>VOCÊ GANHARÁ PRESENTES EXCLUSIVOS:</C.Underline></C.SubTitle>
            <C.Block>
                <Bonus />
            </C.Block>
        </MetodoBonus>
    </Desafio28DiasSection>
)

export default Desafio28Dias;