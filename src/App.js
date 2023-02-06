import "./App.css";
import Button from "./Components/Button";
import Img from "./Components/Img";
function App() {
  return (
    <div className="App">
      <Button
        content="Primo bottone"
        color="white"
        bgc="#645"
        width="200px"
        height="150px"
        borad="100px"
        fontFamily="san serif"
        fs="2em"
      />
      <Button
        content="Secondo Bottone"
        color="white"
        bgc="#345"
        margin="50px"
        width="300px"
        height="100px"
        borad="30px"
      />
      <Img
        img="https://www.purina.it/sites/default/files/2021-12/condividere-immagini-cani-social.jpg"
        width="500px"
        height="400px"
      />
    </div>
  );
}

export default App;
