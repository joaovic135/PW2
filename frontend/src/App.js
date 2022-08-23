import Header from "./components/Header/Header";
import Produtos from "./components/Produtos/Produtos";
import Sobre from "./components/Sobre/Sobre";
import AddProduto from "./components/AddProduto/AddProduto";
import Produto from "./components/Produto/Produto";
import ProdutoEdit from "./components/EditProduto/EditProduto"
import { BrowserRouter, Route ,Routes} from "react-router-dom";


function App() {


  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/"  element={<Produtos/>} />
          <Route path="/produto/add"  element={<AddProduto/>} />
          <Route path="/produto/:id/edit"  element={<ProdutoEdit/>} />
          <Route path="/produto/:id"  element={<Produto/>} />
          <Route path="/sobre" element={<Sobre/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
