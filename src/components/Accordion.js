import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
// import { IconContext } from 'react-icons';
import { Plus } from '@styled-icons/bootstrap/Plus';
import { Minus } from '@styled-icons/entypo/Minus';
import arrow from '../images/icons/arrow.svg';
import * as C from '../styles/elements';


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`

const Button = styled.div`
  background: var(--purple);
  color: #fff;
  display: grid;
  grid-template-columns: repeat(7,1fr);
  align-items: start;
  width: 100%;
  cursor: pointer;

  span.module {
    grid-column: 1/2;
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--orange);
    padding: 2rem 1rem;
    min-width: 12ch;
  }

  h1 {
    grid-column: 2/7;
    font-family: 'Roboto', sans-serif;
    padding: 2rem 1rem;
    font-size: 1.6rem;
  }

  span.icon {
    grid-column: 7/8;
    margin-right: 1.5rem;
    padding: 2rem 1rem;

  }

  .iconimage {
    height: 40px;
  }

  &:hover, .active {
    background-color: #AE2B6F;
  }

  ${media.lessThan("large")`
    h1 span.module {
      font-size: 1.2rem;
    }

    h1, span.module, span.icon {
      font-size: 1rem;
      padding: 1rem 0.5rem;
    }

    span.icon {
      margin-right: 0;
    }

    .iconimage {
      height: 25px;
    }
  `}
  

`;

const Dropdown = styled.div`
    background-color: var(--grey);
    overflow: hidden;
    transition: max-height 0.6s ease;
`;

const Text = styled.div`
    font-size: 1.2rem;
    font-weight: 500;
    font-family: 'Open Sans', sans-serif;
    max-width: 100ch;
    padding: 1rem 0;

    p {
        margin: 1rem;
    }

    ul {
      margin: 2rem;
    }

    ul li {
        font-size: 1.1rem;
        color: var(--postColor);
        line-height: 2;
        font-weight: 500;
    }
    li:before{
        content: '';
        display: inline-block;
        height: 0.8rem;
        width: 0.8rem;
        margin-right: 10px;
        background-image: url(${arrow});
        background-size:contain; 
        background-repeat:no-repeat; 
    }

    ${media.lessThan("large")`
        font-size: 1rem;
    `}
` 

const Accordion = ({data}) => {
  const [clicked, setClicked] = useState(false);
  const [setHeight, setHeightState] = useState(() =>
      data.map((item, index) => "0px")
  );

  const content = useRef([]);
  const toggle = index => {
    console.log(index);
    let newHeightArray = [...setHeight];
    if (clicked === index) {
      //if clicked tab is already active, then close it
      setClicked(null);
      
      newHeightArray[index] = "0px"
      setHeightState(newHeightArray);
      return;
    }
    //Open up clicked tab, and close others
    setClicked(index);
    newHeightArray = newHeightArray.map((tab, i) => (
      i === index ? `${content.current[index].scrollHeight}px` : "0px"
    ))
    setHeightState(newHeightArray);
  };

  return (
      <>
          {data.map((item, index) => (
              <Wrapper key={index}>
                <Button 
                    className={clicked === index ? 'active' : ''}
                    onClick={() => toggle(index)}>
                    <span className="module">{item.module}</span>
                    <h1>{item.question}</h1>
                    <span className="icon">{clicked === index ? <Minus className="iconimage"/> : <Plus className="iconimage"/>}</span>
                </Button>
                <Dropdown ref={el => content.current[index] = el} style={{ maxHeight: `${setHeight[index]}` }}>
                    <Text  dangerouslySetInnerHTML={{ __html: item.answer}} />
                </Dropdown>
              </Wrapper>
            ))}
      </>
  );
};

export default Accordion;