import MyComponent from "./component/MyComponent";
import MyComponent2 from "./component/MyComponent2";
import MyComponent3 from "./component/MyComponent3";
import MyState from "./component/MyState";
import MyStateQ from "./component/MyStateQ";



function App() {

    return (
        <>
            <h3>state</h3>
            <MyState/>

            {/* MyStateQ 컴포넌트에 내용을 작성*/}
            <MyStateQ/>


            <hr/>

            <h3>props</h3>
            <MyComponent name={"홍길동"} age={20} addr={"서울시"}/>
            <MyComponent name={"이순신"} age={30}/>
            <MyComponent2/>


            <MyComponent3 nick={"홍순자"} age={25}/>
        </>
    )
}

export default App;