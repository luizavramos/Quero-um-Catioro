
import { useState, useEffect } from "react";
import axios from "axios";
import loading from "./assets/loading.gif";

function App() {
const [items, setItems] = useState(null);
  function buildImage() {
    
    useEffect(() => {
      const promise = axios.get("https://dog.ceo/api/breeds/image/random");
  
      promise.then(resposta => {
        setItems(resposta.data.message);
      });
      promise.catch(e => console.log("deu ruim! 😢", e));
    }, []);
    
   
    if(items === null) {
      return <img src={loading} alt="carregando..." />;
    }
    
  
    return (
      
       <img src={items}alt="imagem catioro" />
      
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
