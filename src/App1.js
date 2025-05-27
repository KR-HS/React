//import logo from './logo.svg';

import { Fragment } from 'react/jsx-runtime';
import './App.css';

function App() {

  const name = "홍길동~~~~~~";
  let age = 20;


  return (
    <Fragment>
      <div className="App">
        <ul>
          <li>1. JSX문법의 주석 alt + shift + a {/* 주석 */} </li>
          <li>2. 반드시 하나의 태그를 리턴해야 합니다.</li>
          <li>3. 하나를 감싸는 div태그를 사용하기 싫다면 Fragment태그나 <></> 를 사용함</li>
          <li>4. 변수의 참조는 {} 로 할 수 있습니다. </li>
          <li>5. if구문을 쓰고 싶다면 3항연산자로 씁니다. </li>
          <li>6. 화면에 보여주고 싶은 내용이 없다면 null을 반환하면 됩니다. (undefind을 반환하지 않도록 하는게 좋아요)</li>
          <li style={{color:"red", fontSize: "15px"}} >
            7. DOM요소에 스타일을 지정하려면 반드시 객체형으로 씁니다. 
          </li>
          <li className="x">8. 클래스 대신에 className을 사용합니다.</li>
          <li>9. 홀로 사용하는 태그는 반드시 닫는 태그를 작성 합니다.</li>
        </ul>
      </div>

      <img src="/logo192.png" />

      {
        name === "홍길동" ?
        <div>
          hello world {name} 님 의 나이는 {age} 입니다.
          <br/>
          {age < 20 ? '미성년자입니다' : '성인입니다'}        
        </div>
        :
        null
      }

    </Fragment>
  );
}

export default App;
