import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from "./pages/main";
import Information from "./pages/Information";

// CONFIGURANDO ROTAS DAS PAGINAS

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="main" element = {<Main />} />
        <Route path="information" element = {<Information />} />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

/*function App() {
  return <div className="App">
    <h1>Home</h1>
    <h2>Information</h2>
  </div>;
}

export default App;
*/
