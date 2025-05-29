import { useEffect, useRef, useState } from "react";

function HookQ(){


    /* 
    1. 이 페이지가 mount된 이후에 useEffect사용해서 id태그에 포커싱을 하나 넣기
    2. id, pw는 동시에 state로 관리
    3. 로그인 클릭시 두값중 한개라도 공백이라면, 공백인 태그에 포커싱 추가
    4. 로그인 클릭시 공백이 아니라면, 경고창으로 id, pw출력
    */

    const [info,setInfo] = useState({id:'',pw:''});
    const idRef=useRef(null);
    const pwRef=useRef(null);

    const handleClick = (e) => {
        if(idRef.current.value===''){
            idRef.current.focus();
        }
        else if( pwRef.current.value===''){
            pwRef.current.focus();
        }
        else{
            alert(`id=${idRef.current.value} , pw=${pwRef.current.value}`)
        }
    };

    useEffect(()=>{
        idRef.current.focus();
    },[])


    return(

        <>
            <div>
                <input type="text" name="id" onChange={e=>setInfo({...info,id:e.target.value})} value={info.id} placeholder="아이디" ref={idRef}   /><br/>
                <input type="password" name="pw" onChange={e=>setInfo({...info,pw:e.target.value})} value={info.pw}placeholder="비밀번호" ref={pwRef} /><br/>
                <button type="button" onClick={handleClick}>로그인</button>
            </div>  
        </>
    )
}

export default HookQ;