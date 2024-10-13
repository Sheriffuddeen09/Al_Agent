import Choose from "./component/Choose";
import Greograph from "./component/Greograph";
import Move from "./component/Move";
import Stress from "./component/Stress";
import Team from "./component/Team";
import Header from "./layout/Header";

function App() {
  return (
    <div >
      <Header />
      <Move />
      <Choose />
      <Team />
      <Stress />
      <Greograph />
    </div>
  );
}

export default App;
