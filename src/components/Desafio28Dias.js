import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import CTAButton from './CTAButton';
import * as S from '../styles/sales_page';
import * as C from '../styles/elements';
import Accordion from './Accordion';
import { Course } from './AccordionData';


const Desafio28Dias = () => (
    <S.Desafio28Dias>
        <S.MetodoIntro>
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
        </S.MetodoIntro>
        {/* <S.MetodoMiddle>
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
        </S.MetodoMiddle> */}
        <C.Divider style={{gridRow: '3/4', gridColumn: '1/-1', width: '80%', borderColor: 'var(--purple)'}} />
        <S.MetodoModulos>
            <C.Title>Como funcionará o Desafio 28 Dias do Método Esbelta? <C.Divider /></C.Title>

            <C.SubTitle>Meu Plano Testado e Validado, Para Fazer Você Perder <br/>De 5 a 10 Kg Em Apenas 28 Dias</C.SubTitle>
            <C.Paragraph style={{textAlign: 'center', margin: '0 auto'}}>O programa é composto por 6 módulos (Clique no módulo para ver os detalhes):</C.Paragraph>
            <br/>
            <Accordion data={Course} />
        </S.MetodoModulos>
        <S.MetodoBonus>
            <C.Title><C.BG>SOMENTE PARA VOCÊ QUE SE INSCREVER HOJE</C.BG></C.Title>
            <C.SubTitle>Ao se inscrever hoje no Desafio de 28 Dias do Método Esbelta, <br/><C.Underline>VOCÊ GANHARÁ PRESENTES EXCLUSIVOS:</C.Underline></C.SubTitle>
            <C.Block>
                <S.Bonus>
                    <S.BonusImage>
                        <StaticImage src='../images/grupo.jpg' alt="grupo secreto" />
                    </S.BonusImage>
                    <S.BonusTitle>
                        <C.SubTitle color="var(--purple)">Presente #1 - Acesso ao Grupo Secreto das Alunas</C.SubTitle></S.BonusTitle>
                    <S.BonusDescription>
                        <C.Paragraph>Você terá acesso ao Grupo Secreto das Alunas do Desafio.</C.Paragraph>
                        <C.Paragraph>Esse é um grupo de apoio, onde você poderá tirar suas dúvidas comigo, compartilhar suas fotos, suas vitórias e dificuldades com mulheres que estão no mesmo processo que você.</C.Paragraph>
                        <C.Paragraph>Muito importante para buscar motivação, e também para motivar.</C.Paragraph>
                        <C.Paragraph><C.Color color="red">VALOR DA COMUNIDADE: <C.Bolder style={{ textDecoration: 'line-through'}}>R$100</C.Bolder></C.Color></C.Paragraph>
                        <C.Paragraph>NESTA OFERTA: <C.Bolder><C.Color color="var(--green)">GRÁTIS</C.Color></C.Bolder></C.Paragraph>
                    </S.BonusDescription>
                </S.Bonus>
                <C.Divider/>
                <S.Bonus>
                    <S.BonusImage>
                        <StaticImage src='../images/capaslivros3.png' alt="ebooks receitas" />
                    </S.BonusImage>
                    <S.BonusTitle>
                        <C.SubTitle color="var(--purple)">Presente #2 - 4 Livros De Receitas Deliciosas CALCULADAS</C.SubTitle></S.BonusTitle>
                    <S.BonusDescription>
                        <C.Paragraph>Você terá acesso a 4 Livros de Receitas deliciosas, desenvolvidos por mim, com todas as receitas contendo o cálculo de calorias, proteínas, gorduras e carboidratos.</C.Paragraph>
                        <C.Paragraph>As receitas também possuem sugestão de uso por refeição. Com os dados de calorias e macronutientes, você poderá facilmente incorporar essas receitas na sua dieta. </C.Paragraph>
                        <C.Paragraph>O esforço envolvido na elaboração desses 4 livros foi imenso. Mas você receberá gratuitamente.</C.Paragraph>
                        <C.Paragraph><C.Color color="red">VALOR NORMAL: <C.Bolder style={{ textDecoration: 'line-through'}}>R$119</C.Bolder> (Ou  <C.Bolder style={{ textDecoration: 'line-through'}}>R$29</C.Bolder> cada livro)</C.Color></C.Paragraph>
                        <C.Paragraph>NESTA OFERTA: <C.Bolder><C.Color color="var(--green)">GRÁTIS</C.Color></C.Bolder></C.Paragraph>
                    </S.BonusDescription>
                </S.Bonus>
                <C.Divider/>
                <S.Bonus>
                    <S.BonusImage>
                        <StaticImage src='../images/digo.jpg' alt="detox40" />
                    </S.BonusImage>
                    <S.BonusTitle>
                        <C.SubTitle color="var(--purple)">Presente #3 - Semana de Treinos Metabólicos do Programa Detox40</C.SubTitle></S.BonusTitle>
                    <S.BonusDescription>
                        <C.Paragraph>Você terá acesso a uma semana de treinos do Programa de Treinamento Detox40, do treinador Rodrigo Piano.</C.Paragraph>
                        <C.Paragraph>São treinos de 15 minutos, que você poderá fazer do conforto da sua casa para potencializar seus resultados.</C.Paragraph>
                        <C.Paragraph><C.Color color="red">VALOR NORMAL: <C.Bolder style={{ textDecoration: 'line-through'}}>R$119</C.Bolder> (Ou  <C.Bolder style={{ textDecoration: 'line-through'}}>R$29</C.Bolder> cada)</C.Color></C.Paragraph>
                        <C.Paragraph>NESTA OFERTA: <C.Bolder><C.Color color="var(--green)">GRÁTIS</C.Color></C.Bolder></C.Paragraph>
                    </S.BonusDescription>
                </S.Bonus>
                <C.Divider/>
                <S.Bonus>
                    <S.BonusImage>
                        <StaticImage src='../images/manureis.jpg' alt="ebooks" />
                    </S.BonusImage>
                    <S.BonusTitle>
                        <C.SubTitle color="var(--purple)">Presente #4 - Semana de Treinos com a Personal Manu Reis</C.SubTitle></S.BonusTitle>
                    <S.BonusDescription>
                        <C.Paragraph>Nesse presente incrível, a treinadora Manu Reis passará treinos para membros inferiores e membros superiores.
                          Para você fazer de casa, e ficar com o corpo ainda mais durinho e definido.</C.Paragraph>
                    </S.BonusDescription>
                </S.Bonus>
                <C.Divider/>
                <S.Bonus>
                    <S.BonusImage>
                        <StaticImage src='../images/manipulados.jpg' alt="ebooks" />
                    </S.BonusImage>
                    <S.BonusTitle>
                        <C.SubTitle color="var(--purple)">Presente #5 - Fórmulas de Suplementos Manipulados</C.SubTitle></S.BonusTitle>
                    <S.BonusDescription>
                        <C.Paragraph>Prescrevi uma série de fórmulas que você poderá encomendar de farmácias de manipulação para problemas que nós, mulheres, enfrentamos.</C.Paragraph>
                        <C.Paragraph>Celulite, Queda de cabelo, unhas fracas, estrias, flacidez, menopausa, problemas hormonais, e muitos outros.</C.Paragraph>
                        <C.Paragraph>Sáo fórmulas que venho desenvolvendo ou coletando ao longo dos últimos anos, e que prescrevo diariamente para minhas pacientes.</C.Paragraph>
                    </S.BonusDescription>
                </S.Bonus>
                <C.Divider/>
                <S.Bonus>
                    <S.BonusImage>
                        <StaticImage src='../images/chas-diureticos-0.jpg' alt="ebooks" />
                    </S.BonusImage>
                    <S.BonusTitle>
                        <C.SubTitle color="var(--purple)">Presente #6 - Receitas de Chás Diuréticos</C.SubTitle></S.BonusTitle>
                    <S.BonusDescription>
                        <C.Paragraph>Também elaborei diversas receitas de chás diuréticos, para ajudar você a eliminar a retenção de líquidos que tanto nos incomoda.</C.Paragraph>
                        <C.Paragraph>São combinações de ervas que você poderá encontrar facilmente e fazer na sua casa</C.Paragraph>
                    </S.BonusDescription>
                </S.Bonus>
                <C.Divider/>
                <S.Bonus>
                    <S.BonusImage>
                        <StaticImage src='../images/ebook.webp' alt="ebooks" />
                    </S.BonusImage>
                    <S.BonusTitle>
                        <C.SubTitle color="var(--purple)">Presente #7 - Livros Digitais sobre as Técnicas Utilizadas no Método Esbelta</C.SubTitle></S.BonusTitle>
                    <S.BonusDescription>
                        <C.Paragraph>Caso você queira se aprofundar nas técnicas que utilizo no método, como Dieta Cetogênica e Jejum intermitente, você poderá baixar os ebooks que escrevi, com explicações científicas mais detalhadas.</C.Paragraph>
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
    </S.Desafio28Dias>
)

export default Desafio28Dias;