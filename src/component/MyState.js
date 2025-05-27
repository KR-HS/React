import { useState } from "react";


function MyState(){

    // 함수형 컴포넌트에서는 useState() 훅으로 state 관리
    const [color,setColor] = useState('black')

    const red = () => {
        // 값을 변경할때는 setter를 이용해서 변경
        setColor('red');

        // color = 'red'; // 화면을 리렌더링을 수행하지 않음( 직접 state를 바꾸면 안됨)
    }

    const blue = () => setColor("blue");
    
    return(
        <>
            <h3 style={{color:color}}>현재 색상{color}</h3>
            <button type="button" onClick={red}>붉은색</button>
            <button type="button" onClick={blue}>푸른색</button>
            <button type="button" onClick={ () => setColor("yellow") }>노란색</button>
        </>

    )



}

export default MyState;