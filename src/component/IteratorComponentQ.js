

/*
이미지 파일은
src 또는 public 폴더에 들어가면 됨

1. public폴더 아래에 넣는 경우는 절대경로로 참조
2. src폴더 아래에 넣는 경우는
import 이미지명 from '경로명'
*/

import { useState } from "react";



function IteratorComponentQ(){

    let style = {
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around"
    }

    const arr = [
        {src : '/img/img1.png', title : '아이폰10', price: 1000},
        {src : '/img/img2.png', title : '아이폰11', price: 2000},
        {src : '/img/img3.png', title : '아이폰12', price: 3000},
        {src : '/img/img4.png', title : '아이폰13', price: 4000},
    ]
    const [list,setList] = useState(arr);
    const [imgSrc,setImgSrc] = useState(list[0].src);

    const handleImg = src => {
        setImgSrc(src);
    }

    const newList = list.map( (item,index) => 
        <div key={index}> 
            <img src={item.src} onClick={ () => handleImg(item.src)}></img>
            <p>상품:{item.title}</p>
            <p>가격{item.price}</p>
        </div>        
    )

    

    return (
        <>
            <h3>이미지 데이터 반복해보기</h3>
            <img src={imgSrc} width={300}></img>
            <div style={style}>
                {newList}
            </div>
        </>
    )
}

export default IteratorComponentQ;