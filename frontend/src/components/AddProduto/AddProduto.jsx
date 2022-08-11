import { useState } from "react"

function AddProduto(){

    const [nome,setNome] = useState('')
    const [descricao,setDescricao] = useState('')
    const [preco,setPreco] = useState(0)
    const [estoque,setEstoque] = useState(10)

    const handleSubmit = (e) => {
        const produto = {nome,descricao,preco,estoque}
        e.preventDefault()
        fetch("http://localhost:3333/produtos",{
            method:"POST",
            credentials:'include',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(produto)
        })
        .then(resp => resp.json())
        .then (json => {
            console.log("Produto");
        })
    }

    return(
        <div>
            <h3>Adição de produto</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nome">Nome</label>
                <input 
                    type="text" 
                    value = {nome}
                    onChange = {(e) => setNome(e.target.value)}
                    id="nome" 
                    className="form-control"/>
                <label htmlFor="descricao">Descrição</label>
                <textarea 
                    value ={descricao}
                    onChange = {(e) => setDescricao(e.target.value)}
                    id="descricao"
                    className="form-control"/>
                <label htmlFor="preco">Preço</label>
                <input 
                    type="number"
                    value={preco} 
                    onChange = {(e) => setPreco(e.target.value)}
                    id="preco" 
                    className="form-control"/>
                <label htmlFor="estoque">Estoque</label>
                <select 
                    value = {estoque}
                    onChange = {(e) => setEstoque(e.target.value)}
                    id="estoque" 
                    className="form-control">
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                </select>
                <button className="btn btn-primary mt-3" type="submit">Cadastrar</button>
            </form>
        </div>
    )
}

export default AddProduto