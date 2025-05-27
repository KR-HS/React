import React from "react";



class MyComponent3 extends React.Component{


  // 클래스형 컴포넌트에서는 생성자를 통해서 부모의 생성자와 props바인딩 
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      name: '홍길동'
    }
  }
  
  render(){

    // props는 멤버변수에서 찾아서 사용할 수 있음.
    let {nick,age} = this.props;

    return (
      <>
          <h3>나의 클래스형 컴포넌트 {nick}, {age}</h3>
          <h3>현재 state : {this.state.count} , {this.state.name}</h3>
          <button type="button" onClick={()=>this.setState( {count:this.state.count +1} )}>증가</button>
      </>
    )
  }

}

export default MyComponent3;