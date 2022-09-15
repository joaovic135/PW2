import { useState } from "react"
import { useNavigate } from 'react-router-dom'
function AddProduto() {


    const [image, setImage] = useState({ preview: '', data: '' })
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [preco, setPreco] = useState(0)
    const [estoque, setEstoque] = useState(10)
    const [isPending, setIsPending] = useState(false)
    const [NomeErro, setNomeErro] = useState("");
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        const produto = { nome, descricao, preco, estoque }
        e.preventDefault()
        let formData = new FormData()
        formData.append('file', image.data)
        fetch("http://localhost:3333/produtos/file", {
            method: "POST",
            credentials: 'include',
            body: formData
        })
            
            .then(resp => resp.json())
            .then(resp => {
                const { file,path } = resp


                fetch("http://localhost:3333/produtos", {
                    method: "POST",
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ ...produto, file,path })
                })

                    .then(resp => resp.json())
                    .then(json => {
                        setIsPending(false);
                        if (json.errors) {
                            json.errors.forEach(error => {
                                if (error.path === 'nome') {
                                    setNomeErro(error.message)
                                }
                            });
                        } else {
                            console.log(json)
                           //navigate(`/produto/${json.id}`)
                        }
                    })
                    .catch(resp => console.log(resp))
            })
    }

    const handleFileChange = (e) => {
        const img = {
            preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0],
        }
        setImage(img)
    }

    return (
        <div>
            <h3>Adição de produto</h3>

            <form onSubmit={handleSubmit}>
                <input type='file' name='file' onChange={handleFileChange}></input>
                <label htmlFor="nome">Nome</label>
                <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    id="nome"
                    className={`form-control ${NomeErro === '' ? '' : 'is-invalid'}`} />
                <div className="invalid-feedback">
                    {NomeErro}
                </div>
                <label htmlFor="descricao">Descrição</label>
                <textarea
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    id="descricao"
                    className="form-control" />
                <label htmlFor="preco">Preço</label>
                <input
                    type="number"
                    value={preco}
                    onChange={(e) => setPreco(e.target.value)}
                    id="preco"
                    className="form-control" />
                <label htmlFor="estoque">Estoque</label>
                <select
                    value={estoque}
                    onChange={(e) => setEstoque(e.target.value)}
                    id="estoque"
                    className="form-control">
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                </select>
                {!isPending && <button className="btn btn-primary mt-3" type="submit">
                    Cadastrar
                </button>}
                {isPending && <button className="btn btn-primary mt-3" type="submit">
                    Envinado dados
                </button>}
            </form>
        </div>
    )
}

export default AddProduto