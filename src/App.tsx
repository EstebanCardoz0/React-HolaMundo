import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {

  const list = ["Goku", "Arnold", "Ash"];
  const handleSelect = (elemento: string) => {console.log('imprimiendo', elemento)}
  const handleSelect2 = (elemento: string) => {console.log('abriendo', elemento)}
  
    return (
    <Card>
      <CardBody title="hola mundi" text="este es el text" />
      <List data={list} onSelect={handleSelect } />
      <List data={list} onSelect={handleSelect2 } />
    </Card>
  );
}
export default App;
