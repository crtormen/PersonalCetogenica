import React, {useState} from 'react';
import * as S from './styled';


const Step3 = ({step, age, setAge, height, setHeight, weight, setWeight, target, setTarget}) => {
    const [visible, setVisible] = useState(() => step === 3)
    
    return (
        visible && 
        <React.Fragment>
            <S.FormInput>
                <input
                    type="number"
                    name="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required="required"
                />
                <span>Idade</span>
            </S.FormInput>
            <S.FormInput>
                <input
                    type="number"
                    name="weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    required="required"
                />
                <span>Peso</span>
            </S.FormInput>
            <S.FormInput>
                <input
                    type="number"
                    name="height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    required="required"
                />
                <span>Altura</span>
            </S.FormInput>
            <S.FormInput>
                <input
                    type="number"
                    name="target"
                    value={target}
                    onChange={(e) => setTarget(e.target.target)}
                    required="required"
                />
                <span>Peso Alvo</span>
            </S.FormInput>
            <S.FormInput>
                <button className="primary" type="submit">Calcular</button> 
            </S.FormInput>
        </React.Fragment>
    )
}

export default Step3;