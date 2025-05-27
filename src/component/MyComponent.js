

function MyComponent({name,age=0,addr="경기도"}){

  //const {name,age} = a;

  return (
    <div>
      <p>이름은 {name}이고 나이는 {age}입니다. 지역은 {addr}입니다.</p>
      <img src = "/logo192.png" alt = "이미지" width={100}/>
    </div>
  )
}


export default MyComponent;