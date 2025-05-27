import { useState } from "react";

function EventComponent(){

    

    // 1. 인풋값을 state로 관리
    const [nick,setNick] = useState('');
    const [todo, setTodo] = useState('');

    const handleNick = (e) => {
        setNick(e.target.value);
    }

    const handleClick = () =>{
        alert(`${nick}님의 오늘의 할일은 ${todo}입니다.`)
    }

    const handleKeyUp = (e)=>{
            if(e.key=='Enter'){
                handleClick();
            }
            return;
    }

    const [menu,setMenu] = useState('햄버거');

    const handleMenu = (e)=>{
        setMenu(e.target.value);
    }
    return(
        <>

            <h3>셀렉트 태그 핸들링(실습)</h3>
            <p>셀렉트 태그가 체인지 될 때 선택한 결과를 아래에 출력</p>
            <select onChange={handleMenu}>
                <option value="피자">피자</option>
                <option value="햄버거">햄버거</option>
                <option value="치킨">치킨</option>
            </select>

            <h3>선택한 결과</h3>
            <p>{menu}</p>
            {/* 사용자가 버튼을 클릭하면, 이름, 할일 경고장으로 출력 */}
            <h3>리액트 이벤트</h3>

            <label>이름</label>
            <input type="text" 
                   onChange={handleNick} 
                   value={nick} 
                   onKeyUp={handleKeyUp}/>


            <label>할일</label>
            <input type="text" 
                   onChange={(e)=>{setTodo(e.target.value)}} 
                   value={todo}
                   onKeyUp={handleKeyUp}
                   />
        
            <button type='button' onClick={handleClick}>오늘의 할일은?</button>
        </>
    )

}

export default EventComponent;   