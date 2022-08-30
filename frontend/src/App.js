import Header from "./components/Header/Header";
import Produtos from "./components/Produtos/Produtos";
import Sobre from "./components/Sobre/Sobre";
import AddProduto from "./components/AddProduto/AddProduto";
import Produto from "./components/Produto/Produto";
import ProdutoEdit from "./components/EditProduto/EditProduto";
import Login from "./components/Login/Login";
import { BrowserRouter, Route ,Routes} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./components/redux/store"

function App() {


  return (
    <Provider store = {store}>
    <BrowserRouter>
      <Header/>
      <div className = "container-fluid mt-2">
        <Routes>
          <Route path="/"  element={<Produtos/>} />
          <Route path="/produto/add"  element={<AddProduto/>} />
          <Route path="/produto/:id/edit"  element={<ProdutoEdit/>} />
          <Route path="/produto/:id"  element={<Produto/>} />
          <Route path="/sobre" element={<Sobre/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
