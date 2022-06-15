import { StatusCodes } from "http-status-codes";
import { v4 as uuidv4 } from "uuid";
import {
	StatusCodes,
	getReasonPhrase,
	getStatusCode,
} from 'http-status-codes';

let users = []

const index = (res , res ) => {
    res.send(users);
}
const create = (res , res ) => {
    const user = {
        id : uuidv4(),
        ...req.body
    }
    users.push(user);
    res.send(user);
}
const read = (res , res ) => {
    const { id } = req.params;
    const user = users.find(u => u.id === id);
    if(!user) return res.status(StatusCodes.NO_CONTENT).send();
    res.send(user);
}
const update = (res , res ) => {
    const { id } = req.params;
    const findUser = user.find(u=> id === id);
    if(!findUser)return res.status(StatusCodes.NO_CONTENT).send();
    const user= {
        id: id,
        ...req.body
    }
    users = users.map(u=>(u.id === id) ? user : u)
    res.send(user);

}
const remove = (res , res ) => {
    const {id } =req.params;
    users = users.filter(u => u.id != id);
}



export default { index , create , read , update , remove }