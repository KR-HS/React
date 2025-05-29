import { useMemo, useState } from "react";




function HookMemo(){

    const [num,setNum] = useState(0);
    const [text,setText] = useState('');

    // const calc=(()=>{

    //     // 계산이 오래걸리는 예시 함수
    //     console.log("계산시작")
    //     let i=0;
    //     while(i<=1000000000)i++;
    //     console.log("계산완료");

    //     return num % 2 == 0 ? "짝수":"홀수";

    // })();

    const calc = useMemo( () => {
        // 계산이 오래걸리는 예시 함수
        console.log("계산시작")
        let i=0;
        while(i<=1000000000)i++;
        console.log("계산완료");

        return num % 2 == 0 ? "짝수":"홀수";
    },[num]) // num이 변경될때만 실행

    return(
        <>
            <h1>useMemo훅</h1>

            <input type="number" onChange={(e)=>setNum(e.target.value)} value={num}/>
            <br/>
            결과:{calc}


            <br/>
            <input type="text" onChange={e=>setText(e.target.value)} value={text}/>
        </>
    )
}

export default HookMemo;