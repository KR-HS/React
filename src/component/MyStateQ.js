import { useState } from "react";

function MyStateQ(){


    const [ct,setCt] = useState(); 

    return(
        <>
            <h3>카운트:{ct}</h3>
            <button type="button" onClick={() => setCt(ct+1)}>증가</button>
            <button type="button" onClick={() => setCt(ct-1)}>감소</button>
            <button type="button" onClick={() => setCt(0)}>초기화</button>
        </>
    )


}

export default MyStateQ;