import { Fragment } from "react/jsx-runtime";
import "./css/App.css"
import myStyle from "./css/App.module.css";

function App(){
    return(
        <>
            <Fragment>
                <header className="app-header">
                    <p style={{margin: "0"}}>CSS파일로 디자인하기</p>

                </header>

                <section className={myStyle.appWrap}>
                    <div className="title">hello world</div>
                    <div className="my-style">public폴더에서 적용됨</div>
                </section>
            </Fragment>
        </>
    )
}

export default App;