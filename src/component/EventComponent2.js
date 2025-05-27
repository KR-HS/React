import { useState } from "react";


function EventComponent2(){


    const [data,setData] = useState({name:'',todo:''});

    const handleChange = (e) => {
        let value = e.target.value;
        let key = e.target.name;
        //if(e.target.name=='name'){setData({name:value})}
        //else if(e.target.name=="todo"){setData({todo:value})}

        // let newData = {...data,[key]:value }; // obj를 복사한 후 키:값 으로 변경
        // setData(newData);

        // 직전에 사용했던 state값을 얻어야 하는 경우
        // 이 함수에 첫번쨰 매개변수에는 state이전값을 넣어주도록 약속되어 있음
        setData(prev => {
            // prev를 사용하고 return에 최종적으로 저장될 값을 던져주면 됨
            return {...prev,[key]:value}

        });
    }
    return(
        <>
            <h3>state로 객체 관리하기</h3>
            <input tpye="text" placeholder="이름"
                   name="name"
                   onChange={handleChange}
                   value={data.name}/>

            <br/>

            <input tpye="text" placeholder="할일" 
                   name="todo"
                   onChange={handleChange}
                   value={data.todo}/>

            <br/>
            현재 사용자가 입력한 값 : {data.name} : {data.todo}
            <br/>

        </>
    )
}

export default EventComponent2;