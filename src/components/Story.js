import React from 'react';
import {StaticImage} from 'gatsby-plugin-image';
import * as S from '../styles/sales_page';
import * as C from '../styles/elements';


const Story = () => (
    <S.AboutStory>
        <S.AboutFull style={{gridColumn: "2/-2"}}>
                {/* <C.Paragraph style={{textAlign: "center"}}>Porém, isso nem sempre foi assim...</C.Paragraph> */}
                <C.SubTitle>Me dê 1 minuto para te explicar como desenvolvi o <C.Underline>Método Esbelta</C.Underline>.</C.SubTitle>
            </S.AboutFull>
            <S.AboutText style={{gridColumn: "2/3"}}>
                <C.Paragraph>
                    Era 2014, e lá estava eu, subindo no palco para mais uma competição de fisiculturismo.
                </C.Paragraph>
                <C.Paragraph>                
                    Foi quando senti minha pressão cair, minhas pernas amolecerem, e só tive tempo de falar para meu marido me segurar antes de desmaiar. 
                    Eu era campeã gaúcha e sul-brasileira da categoria Woman's Physique, a categoria que exige o menor percentual de gordura corporal.
                    E dessa vez eu iria subir no palco do campeonato brasileiro. 
                </C.Paragraph>
                <C.Paragraph>Nos 3 meses que antecediam uma competição, eu comia menos que passarinho e fazia 3 horas de aeróbios, mais musculação, todos os dias. <C.BG>Sentia muita fome e estava sempre cansada</C.BG>.</C.Paragraph>           
            </S.AboutText>
            <S.AboutImage style={{width: '85%', gridColumn: "3/4"}}>
                <StaticImage
                    src='../images/wellness.JPG' 
                    alt="wellness"
                    style={{margin: 'auto'}}
                    />
            </S.AboutImage>
            <S.AboutFull style={{gridColumn: "2/-2"}}>
                <C.Paragraph style={{textAlign:"center"}}>Naquele dia, acabei não conseguindo competir, e não pude realizar meu sonho de disputar o brasileiro. <C.Bolder>Mas o pior ainda estava por vir...</C.Bolder></C.Paragraph>
                <C.Paragraph style={{textAlign:"center"}}>Durante os períodos de restrição, eu abria mão de muitas coisas: festas, eventos, almoços em família, etc. E quando passava as competições, todo aquele desejo reprimido de comer o que não eu não podia, vinha à tona. Mesmo sendo nutricionista, e mesmo com
                    toda minha disciplina, eu acabava chutando o balde valendo. E recuperava em pouco tempo todo o peso perdido.
                </C.Paragraph> 
                <C.Paragraph style={{textAlign:"center"}}>Aquilo me incomodava demais. <C.Bolder>Não era algo sustentável</C.Bolder>. E me fazia refletir como era difícil para pessoas com sobrepeso emagrecerem quando são submetidas à uma restrição tão grande.</C.Paragraph>
            </S.AboutFull>
            <S.AboutQuote style={{gridColumn: "2/3"}}>
                <C.Paragraph>Foi quando entendi a raiz do problema do emagrecimento: </C.Paragraph>
                <C.Quote><p>A razão nº 1 que faz você não emagrecer é <C.Underline>não ter prazer em fazer dieta.</C.Underline></p></C.Quote>
            </S.AboutQuote>
            <S.AboutText style={{gridColumn: "3/4"}}>
                <C.Paragraph> Então, passei a buscar soluções para perder gordura sem tanto sofrimento.</C.Paragraph>
                <C.Paragraph>
                    Estudei muito e li estudos de alguns dos melhores autores do mundo todo. Passei a testar em mim os novos conhecimentos que ia adquirindo, refinando o que funcionava,
                    aprimorando minhas técnicas. Até que em 2017, finalmente encontrei a <C.Bolder><C.Underline>FÓRMULA PERFEITA</C.Underline></C.Bolder>.
                </C.Paragraph>
                <C.Paragraph>
                    Consegui atingir um físico melhor do que aquele que adquirira antes, mas desta vez sem sofrimento algum, e de forma muito mais rápida. E o melhor, <C.BG>comendo tudo o que eu gostava!</C.BG>
                </C.Paragraph>
            </S.AboutText>
            <S.AboutImage style={{gridColumn: "2/3"}}>
                <StaticImage
                    src='../images/char-atleta.jpg'
                    alt="Charline Cetogênica"
                    style={{margin: 'auto'}}
                />
            </S.AboutImage>
            <S.AboutText style={{gridColumn: "3/4"}}>
                <C.Paragraph><C.Bolder>Passei a aplicar a metodologia que desenvolvi em meus pacientes de emagrecimento, adaptando para a realidade do cotidiano de cada um. E os resultados foram surpreendentes!</C.Bolder></C.Paragraph>            
                <C.Paragraph>A dieta, agradável de seguir, teve grande aceitação. Pacientes que já estavam há anos comigo, e que já haviam conquistado ótimos resultados, melhoraram ainda mais.</C.Paragraph>
                <C.Paragraph>E TODOS, sem exceção, emagreceram mais do que o planejado. <C.Underline>E o melhor de tudo, se mantiveram magros</C.Underline>.</C.Paragraph>
                <C.Paragraph>Desde então venho aprimorando essa metodologia...</C.Paragraph>
            </S.AboutText>
            <S.AntesEDepois>
                <C.Title className="title"><C.Color>Veja Alguns Antes e Depois</C.Color><C.Divider /></C.Title>
                <S.Grid>
                    <StaticImage
                        src='../images/evolucoes/evolucao17.jpg'
                        alt="Evolução 1"
                        className="img1"
                        />
                    <StaticImage
                        src='../images/evolucoes/evolucao2.jpg'
                        alt="Evolução 2"
                        className="img2"
                        />
                    <StaticImage
                        src='../images/evolucoes/evolucao18.jpg'
                        alt="Evolução 3"
                        className="img3"
                        />
                    <StaticImage
                        src='../images/evolucoes/evolucao4.jpg'
                        alt="Evolução 4"
                        className="img4"
                        />
                    <StaticImage
                        src='../images/evolucoes/evolucao7.jpg'
                        alt="Evolução 7"
                        className="img7"
                        />
                    <StaticImage
                        src='../images/evolucoes/evolucao6.jpg'
                        alt="Evolução 6"
                        className="img6"
                        />
                    <StaticImage
                        src='../images/evolucoes/evolucao15.jpg'
                        alt="Evolução 9"
                        className="img9"
                    />
                    <StaticImage
                        src='../images/evolucoes/evolucao16.jpg'
                        alt="Evolução 8"
                        className="img8"
                        />
                    <StaticImage
                        src='../images/evolucoes/evolucao19.jpg'
                        alt="Evolução 5"
                        className="img5 hidden"
                        />
                </S.Grid>
            </S.AntesEDepois>
            <S.AboutText style={{marginTop: '-1rem', gridColumn: "2/3"}}>
                <C.Paragraph>Agora, resolvi estruturar tudo isso em um método online de emagrecimento,
                    voltado exclusivamente para mulheres, em que trataremos de problemas específicos que nós, mulheres, enfrentamos,
                    como:
                </C.Paragraph>
                <C.List>
                    <ul>
                        <li>Celulite</li>
                        <li>Flacidez</li>
                        <li>Problemas hormonais causados por uso de anticoncepcionais</li>
                        <li>Problemas hormonais em mulheres na menopausa</li>
                        <li>Recuperação do corpo pós-gestação</li>
                        <li>Saúde do cabelo, unhas e pele</li>
                    </ul>
                </C.List>
            </S.AboutText>
            <S.AboutImage style={{gridColumn: "3/4"}}>
                <StaticImage
                    src='../images/char-cetogenica.jpg'
                    alt="Charline Atleta"
                    style={{margin: 'auto'}}
                />
            </S.AboutImage>
        </S.AboutStory>
)

export default Story;