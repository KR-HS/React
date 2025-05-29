

// 첫번째 매개변수로 state, 두번째 매개변수로 action
// 외부에서 state상태를 제어하는 함수
export const firstReducer = (state,action) =>{

    // state,action을 이용해서 state값 변경
    // state는 직접 값을 변경하는 작업을 피해서 수정
    // 초기 state유형 = {value:0}
    if(action.type==='up'){
        state = {value:state.value+1}
    }else if(action.type=='down'){
        state = {value:state.value-1}
    }else if(action.type== 'reset')    {
        state={value:0}
    };

    return state;
}

