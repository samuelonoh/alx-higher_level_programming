import './App.css';
import Header from "./components/Header";
import Button from './components/Button';

function App(nameZ) {
  return(
    <>
    <div className="App">
      <Header/>
      <section className="body">
        <h1>
          MAKE MONEY <br/> FROM HOME
        </h1>
        <p>The best way to start earning cash from the comfort of your
        <br/> own home
        </p>
        <button>SIGN UP TODAY</button>
      </section>
    </div>
    <section className="about">
      <section className="aboutUs">
        <div>
          <Button name={"1"}/>
        </div>
        <div>
          <Button name={"2"}/>
        </div>
        <div>
          <Button name={"3"}/>
        </div>
      </section>
      <section className="footer"></section>
    </section>
    </>
  );
}

export default App;