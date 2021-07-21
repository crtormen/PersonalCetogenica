import React, {useState} from 'react'
import * as S from './styled';


const Step2 = ({step}) => {
    const [visible, setVisible] = useState(() => step === 2)

    return (
        visible && 
        <div></div>
    )
}

export default Step2;