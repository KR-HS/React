import { useState } from "react";


function EventComponentQ2(){


    const [data,setData] = useState({input:'',result:''});


    const handleData = (e) =>{
        setData({...data,input:e.target.value});
    }

    const clickData = () =>{
        setData({result:data.input,input:''});
    }
    return(
        <>
            <h1>인풋데이터 핸들링(실습)</h1>
            <p>클릭시 데이터는 공백으로 결과는 인풋이 입력한 값으로 처리</p>
            <input type="text" onChange={handleData} value={data.input}></input>
            <button onClick={clickData}>추가하기</button>

            <h3>결과</h3>
            {data.result}
        </>
    )
}

export default EventComponentQ2;