import React from 'react';
import {StaticImage} from 'gatsby-plugin-image';
import * as S from '../styles/sales_page';
import * as C from '../styles/elements';


const About = () => (
    <S.About>
        <S.AboutImage>
            <StaticImage 
                src='../images/char-nutri.png'
                // rounded={true}
                alt="Nutri Charline Tormen"
                // height="20vw"
                style={{ 
                    borderRadius: '50%'
                }}/>
        </S.AboutImage>
        <S.AboutText style={{background: 'var(--white)'}}>
            <C.Title><C.Color color="var(--purple)">Eu Serei Sua Guia Rumo Ao Emagrecimento Saudável</C.Color><C.Divider /></C.Title>
            <div style={{paddingLeft: '1rem'}}>
                <C.Paragraph>Olá, me chamo <C.Underline>Charline Tormen.</C.Underline> <br/>
                    Sou Mãe, Esposa, <C.Bolder>Nutricionista Especialista em Nutrição 
                    Esportiva e Emagrecimento há mais de 10 anos</C.Bolder>, Palestrante e Atleta de Fisiculturismo.
                </C.Paragraph>
                <C.Paragraph>Através da Nutrição Transformadora, <C.Underline><C.BG>já ajudei mais de 15.000 pessoas</C.BG></C.Underline> a conquistarem o corpo que sonhavam, a saúde que precisavam e a confiança que mereciam ter.</C.Paragraph>
            </div>
        </S.AboutText>
        <S.AboutFull>
            <C.Paragraph style={{textAlign: "center"}}>Porém, isso nem sempre foi assim...</C.Paragraph>
            <C.SubTitle>Me dê 1 minuto para te explicar como desenvolvi o <C.Underline>Método Esbelta</C.Underline>.</C.SubTitle>
        </S.AboutFull>
        <S.AboutText>
            <C.Paragraph>
                Era 2014, e lá estava eu, subindo no palco para mais uma competição de fisiculturismo. 
            </C.Paragraph>
            <C.Paragraph>                
                Foi quando senti minha pressão cair, minhas pernas amolecerem, e só tive tempo de falar para meu marido me segurar antes de desmaiar. 
                Eu era campeã gaúcha e sul-brasileira da categoria Woman's Physique, a categoria que exige o grau mais extremo de definição muscular.
                E dessa vez eu iria subir no palco do campeonato brasileiro. 
            </C.Paragraph>
            <C.Paragraph>Nos 3 meses que antecediam uma competição, eu comia menos que passarinho e fazia 3 horas de aeróbios, mais musculação, todos os dias. <C.BG>Sentia muita fome e estava sempre cansada</C.BG>.</C.Paragraph>
            <C.Paragraph>Naquele dia, acabei não conseguindo competir, e não pude realizar meu sonho de disputar o brasileiro. Mas o pior ainda estava por vir...</C.Paragraph>
            <C.Paragraph>Durante os períodos de restrição, eu abria mão de muitas coisas: festas, almoços, etc. Mas quando passava as competições, todo aquele desejo reprimido de comer o que não eu não podia, vinha à tona. Mesmo sendo nutricionista, e mesmo com
                toda minha disciplina, eu acabava chutando o balde valendo. E recuperava em pouco tempo todo o peso perdido.
            </C.Paragraph>            
        </S.AboutText>
        <S.AboutImage style={{width: '85%'}}>
            <StaticImage
                src='../images/wellness.JPG' 
                alt="wellness"
                style={{margin: 'auto'}}
                />
        </S.AboutImage>
        <S.AboutFull>
            <C.Paragraph style={{textAlign:"center"}}>Aquilo me incomodava demais. <C.Bolder>Não era algo sustentável</C.Bolder>. E me fazia refletir como era difícil para pessoas com sobrepeso emagrecerem quando são submetidas à uma restrição tão grande.</C.Paragraph>
        </S.AboutFull>
        <S.AboutQuote>
            <C.Paragraph>Foi quando entendi a raiz do problema do emagrecimento: </C.Paragraph>
            <C.Quote><p>A razão nº 1 que faz você não emagrecer é <C.Underline>não ter prazer em fazer dieta.</C.Underline></p></C.Quote>
        </S.AboutQuote>
        <S.AboutText>
            <C.Paragraph> Então, passei a buscar soluções para perder gordura sem tanto sofrimento.</C.Paragraph>
            <C.Paragraph>
                Estudei muito e li estudos de alguns dos melhores autores do mundo todo. Passei a testar em mim os novos conhecimentos que ia adquirindo, refinando o que funcionava,
                aprimorando minhas técnicas. Até que em 2017, finalmente encontrei a <C.Bolder><C.Underline>FÓRMULA PERFEITA</C.Underline></C.Bolder>.
            </C.Paragraph>
            <C.Paragraph>
                Consegui atingir um físico melhor do que aquele que adquirira antes, mas desta vez sem sofrimento algum, e de forma muito mais rápida. E o melhor, <C.BG>comendo tudo o que eu gostava!</C.BG>
            </C.Paragraph>
        </S.AboutText>
        <S.AboutImage>
            <StaticImage
                src='../images/char-atleta.jpg'
                alt="Charline Cetogênica"
                style={{margin: 'auto'}}
            />
        </S.AboutImage>
        <S.AboutText>
            <C.Paragraph><C.Bolder>Passei a aplicar a metodologia que desenvolvi em meus pacientes de emagrecimento, adaptando para a realidade do cotidiano de cada um. E os resultados foram surpreendentes!</C.Bolder></C.Paragraph>            
            <C.Paragraph>A dieta, agradável de seguir, teve grande aceitação. Pacientes que já estavam há anos comigo, e que já haviam conquistado ótimos resultados, melhoraram ainda mais.</C.Paragraph>
            <C.Paragraph>E TODOS, sem exceção, emagreceram mais do que o planejado. <C.Underline>E se mantiveram magros</C.Underline>.</C.Paragraph>
        </S.AboutText>
        <S.AboutText style={{marginTop: '-1rem'}}>
            <C.Paragraph>E desde então venho aprimorando essa metodologia.</C.Paragraph>
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
        <S.AboutImage>
            <StaticImage
                src='../images/char-cetogenica.jpg'
                alt="Charline Atleta"
                style={{margin: 'auto'}}
            />
        </S.AboutImage>
        
    </S.About>
)


export default About;