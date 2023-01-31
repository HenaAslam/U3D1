import logo from './logo.svg';
import './App.css';
import ButtonComponent from './Components/ButtonComponent';
import ImageComponent from './Components/ImageComponent';

function App() {
  return (
    <div className="App">
     
      <header className="App-header">
      <ButtonComponent label="Start" CustomClass="my-btn-top my-btn" />
      <ImageComponent myCssClass="image-top image" srcFile="https://images.unsplash.com/photo-1674905682134-496ca5a4862b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="pink" />
        <img src={logo} className="App-logo" alt="logo" />
      <ImageComponent myCssClass="image-bottom image" srcFile="https://images.unsplash.com/photo-1544194215-541c2d3561a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="pink" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <ButtonComponent label="End" CustomClass="my-btn-bottom my-btn" />
      </header>
   
    </div>
  );
}

export default App;
