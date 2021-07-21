import React, {useState, useRef} from 'react'
import styled from 'styled-components';
import Chevron from "./Chevron";


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const Button = styled.button`
    background-color: #610066;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 18px;
    border: none;
    outline: none;
    transition: background-color 0.6s ease;

  &:hover, &:active {
    background-color: var(--purple);
  }
`

const Title = styled.p`
    font-family: "Open Sans", sans-serif;
    padding: 0.8rem;
    font-size: 2rem;
    text-align: left;

`

const Content = styled.div`
    background-color: white;
    overflow: hidden;
    transition: max-height 0.6s ease;
`

const Text = styled.div`
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    font-size: 14px;
    padding: 18px;
`

const ChevronIcon = styled(Chevron)`
    text-align: right;

    .accordion__icon {
        margin-left: auto;
        transition: transform 0.6s ease;
    }

    .rotate {
        transform: rotate(90deg);
    }
`



const Accordion = ({title, data}) => {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordion__icon");
  
    const content = useRef(null);
  
    function toggleAccordion() {
        if (setActive === "") {
            setActiveState("active");
            setHeightState(`${content.current.scrollHeight}px`)
            setRotateState("accordion__icon rotate");
            return;
        }
        setActiveState("");
        setHeightState("0px");
        setRotateState("accordion__icon");
    }


    return (
        <Wrapper>
            <Button className={`accordion ${setActive}`} onClick={toggleAccordion}>
                <Title>{title}</Title>
                <ChevronIcon className={`${setRotate}`} width={10} fill={"#777"} />
            </Button>
            <Content 
                ref={content}
                style={{ maxHeight: `${setHeight}` }}
            >
                <Text dangerouslySetInnerHTML={{ __html: data }} />
            </Content>
        </Wrapper>
    )
}

export default Accordion;