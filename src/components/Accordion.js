import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import arrow from '../images/icons/arrow.svg';


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`

const Button = styled.div`
  background: var(--purple);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
  h1 {
    font-family: 'Roboto', sans-serif;
    padding: 2rem;
    font-size: 1.6rem;
  }
  span {
    margin-right: 1.5rem;
  }

  &:hover, .active {
    background-color: #AE2B6F;
  }
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
    <IconContext.Provider value={{ color: 'var(--orange)', size: '25px' }}>
          {data.map((item, index) => (
              <Wrapper key={index}>
                <Button 
                    className={clicked === index ? 'active' : ''}
                    onClick={() => toggle(index)}>
                    <h1>{item.question}</h1>
                    <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Button>
                <Dropdown ref={el => content.current[index] = el} style={{ maxHeight: `${setHeight[index]}` }}>
                    <Text  dangerouslySetInnerHTML={{ __html: item.answer}} />
                </Dropdown>
              </Wrapper>
            ))}
    </IconContext.Provider>
  );
};

export default Accordion;