
import { useState, useEffect } from "react";
import axios from "axios";
import loading from "./assets/loading.gif";

function App() {

  function buildImage() {
    const [items, setItems] = useState(null);
    useEffect(() => {
      const requisicao = axios.get("https://dog.ceo/api/breeds/image/random");
  
      requisicao.then(resposta => {
        setItems(resposta.data.items);
      });
    }, []);
  
    if(items === null) {
      return <img src={loading} alt="carregando..." />;
    }
  
    return (
      <ul>
        {items.map(item => <li>{item}</li>)}
      </ul>
    );
  }


  const image = buildImage();
  return (
    <div className="view">
      <div className="image">
        {image}
      </div>
    </div>
  );
  }


export default App;
