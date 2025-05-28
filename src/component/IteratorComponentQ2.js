import { useState } from "react";





function IteratorComponentQ2(){


    //1 - select는 컴포넌트반복으로 option태그를 생성합니다.
    const select = ['HTML', 'Javascript', 'CSS', 'Java', 'Oracle', 'Mysql'];

    //2 - 아래 데이터는 state로 관리하고 화면에 li태그로 반복해주세요 .
    const data = [
        {id: 1, type: 'Java', teacher: '이순신'},
        {id: 2, type: 'Java', teacher: '홍길자'},
        {id: 3, type: 'Javascript', teacher: '홍길동'},
        {id: 4, type: 'Oracle', teacher: '이순신'},
        {id: 5, type: 'Mysql', teacher: '이순신'},
        {id: 6, type: 'CSS', teacher: '박찬호'},
        {id: 7, type: 'HTML', teacher: 'coding404'},
    ];

    // 3. select태그가 체인지 되면, 선택된 값만 data에서 필터링

    // 4. 검색을 누르면 검색 키워드를 통해서 data에서 필터링

    const [sel,setSel] = useState(select);
    const [dat,setDat] = useState(data);
    const [search,setSearch] = useState('');
    const newSelect = sel.map((data,index)=>
        <option key={index} value={data}>{data}</option>
    )

    const newData = dat.map(data=>
        <li key={data.id}>{data.type}-{data.teacher}</li>
    )

    const handleSelect = (e)=>{
        console.log(e.target.value)
        let newData=data.filter(data=>{return e.target.value===data.type})
        setDat(newData);
    }

    const handleVal = (e)=>{
        setSearch(e.target.value);
    }   
    const handleEnter = (e)=>{
        if(e.key==="Enter"){
            handleSearch();
        }
    }


    const handleSearch = () =>{
        let newData = data.filter(data=>{return data.type.toLowerCase().includes(search.toLowerCase())|data.teacher.toLowerCase().includes(search.toLowerCase())})
        setDat(newData);
    }


    return(
        <>
            <h3>실습</h3>
            <div>
                Search:<input type="text" onKeyUp={handleEnter} onChange={handleVal} value={search}></input>
                <button type="button" onClick={handleSearch}>검색</button>
            </div>
            <div>
                과목찾기:<select onChange={handleSelect}>
                    {newSelect}
                </select>
            </div>
            <ul>
                {newData}
            </ul>
        </>
    )
}

export default IteratorComponentQ2;