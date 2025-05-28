import { useEffect, useState } from "react";


function HookEffect(){


    const [name,setName] = useState('');
    const [age,setAge] = useState('');

    // useEffect훅 - 컴포넌트의 생명주기를 다룸

    // useEffect( ()=> {
    //     console.log('렌더링 이후 항상 실행');
    // })

    // useEffect(()=>{
    //     console.log('마운트 이후 딱 한번 실행됨');
    // },[])

    useEffect( () => {
        console.log('마운트 이후, 특정 state가 업데이트 된 이후 실행 2')


        // unmount이후 실행
        return ()=> {
            console.log(`언마운트 이후 동작하게 됨 3. 업데이트 직전값: ${name}`);
        }
    },[name]); // name이 바뀌면 effect 실행됨 (,나열 가능)

    // useEffect는 여러개 있어도 상관 없음 ( 독립 시행 )
    useEffect(() => {
        console.log("별도로 실행되는 useEffect");
    });

    console.log('화면실행 마운트 이전 1')
    return(
        <>
            <h3>useEffect훅</h3>

            <input type="text" placeholder="이름" onChange={ e => setName(e.target.value)} value={name}/> <br/>
            <input type="text" placeholder="나이" onChange={e => setAge(e.target.value)} value={age}/>
        </>
    )
}

export default HookEffect;