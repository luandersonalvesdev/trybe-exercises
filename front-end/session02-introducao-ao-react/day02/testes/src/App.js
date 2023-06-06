import WithClasse from "./Components/WithClasse";
import WithFunction from "./Components/WithFunction";

function App() {
  return (
    <>
      <WithClasse string='classsssee'/>
      <WithFunction string='funcaaaoooo'/>

      <WithClasse obj={{chave: 'valor'}}/>
      <WithFunction arr={['a', 'b']}/>
    </>
  );
}

export default App;
