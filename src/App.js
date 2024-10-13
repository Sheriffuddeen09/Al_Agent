import Choose from "./component/Choose";
import Clean from "./component/Clean";
import Footer from "./component/Footer";
import Greograph from "./component/Greograph";
import Move from "./component/Move";
import Quotes from "./component/Quotes";
import Relocation from "./component/Relocation";
import Stress from "./component/Stress";
import Team from "./component/Team";
import Header from "./layout/Header";

function App() {
  return (
      <div className="overflow-hidden">
      <Header />
      <Move />
      <Choose />
      <Team />
      <Stress />
      <Greograph />
      <Relocation />
      <Quotes />
      <Clean />
      <Footer />
    </div>
  );
}

export default App;
