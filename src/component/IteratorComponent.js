

function IteratorComponent(){

    const arr = ['홍길동','이순신','신사임당','홍길자'];

    // const newArr = arr.map((value,index) => {
    //     return value + index;
    // })
    // console.log(newArr);

    // 배열을 렌더링할때 변화를 감지하기 위해 key프롭스를 전달해야 함
    const newArr = arr.map( (value,index) => {
        return <li key={index}>{value}</li>
    })

    return(
        <>
            <h3>컴포넌트 반복 map 함수</h3>

            <ul>
                {newArr}
            </ul>
        </>
    )
}

export default IteratorComponent;