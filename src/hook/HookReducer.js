import { useReducer } from "react";
import { firstReducer } from "./MyReducer";


function HookReducer(){


    // const [현재스테이트값, 리듀서를 변경하는 acion함수] = useReducer(리더서함수, state초기값)

    const [state, some] = useReducer(firstReducer,{value:0});

    const up = ()=>{
        some({type:"up"}); // {type:"up"}은 리듀서의 두번째 매개변수로 전달달
    }
    return(
        <>
            <h3>useReducer훅</h3>    

            현재state값: {state.value}
            <button type="button" onClick={up}>증가</button>
            <button type="button" onClick={()=>some({type:"down"})}>감소</button>
            <button type="button" onClick={()=>some({type:"reset"})}>초기화</button>
        </>
    )
}

export default HookReducer;