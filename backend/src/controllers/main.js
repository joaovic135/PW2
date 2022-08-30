import { compare } from "bcryptjs";
import { Usuario, TipoUsuario } from "../models";

const login = async (req, res) => {
    const usuario = await Usuario.findOne({ where: { email: req.body.email }, include: TipoUsuario })
    if (usuario) {
        const ok = await compare(req.body.senha, usuario.senha);
        if (ok) {
            req.session.TipoUsuario = usuario.TipoUsuario.rotulo;
            req.session.uid = usuario.id;
            res.send(usuario);
        }
        else res.status(401).send({ msg: "Email e/ou senha incorreta" });
    }else{
        res.status(401).send({ msg: "Email e/ou senha incorreta" });
    }

}
const logout = async (req, res) => {
    req.session.destroy((err) => {
        if (!err) res.send({ msg: "Usuario delogado com sucesso" });
    });
}


export default { login, logout }