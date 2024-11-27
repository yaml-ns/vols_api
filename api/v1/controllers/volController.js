import {deleteById, getAll, getById, addVol, updateVol} from "../models/volModel.js";


export const getVols = async (req, res)=>{
    const filters = req.query
    try{
        const vol = await getAll(filters);
        res.statusCode = 200;
        res.json(vol)
    }catch (e) {
        console.log(e);
        res.statusCode = 500;
        res.json({error:"une erreur s'est produite"});
    }

}

export const createVol = async (req, res)=>{
    const vol = req.body;
    try {
        const createdVol = addVol(vol);
        res.statusCode = 201;
        res.json(createdVol)
    }catch (e){
        console.log(e);
        res.statusCode = 500;
        res.json({error:"une erreur s'est produite"});
    }
}

export const update = async (req,res)=>{
    const vol = req.body;
    const volExiste = await getById(vol.idVol)
    if (volExiste) {
        const updatedVol =await updateVol(vol)
        if (updatedVol){
            res.statusCode = 200;
            res.json(updatedVol);
        }
    }else{
        res.statusCode = 404;
        res.json({status: "erreur",message:"Le vol n'existe pas !"})
    }
}
export const getVol = async (req, res)=>{
    const vol = await getById(parseInt(req.params.id))
    if (vol){
        res.json(vol)
    }else{
        res.statusCode = 404
        res.json({status: "erreur", message:"Oups ! Vol non trouvé."})
    }
}

export const deleteVol = async (req, res)=>{
    const vol = await getById(parseInt(req.params.id))
    if (!vol){
        res.statusCode = 404;
        res.json({status: "erreur", message:"Not found"})
    }else{
        await deleteById(vol.id)
        res.json({
            status: 200,
            message: `Le vol ${req.params.id} a bien été supprimé`
        })
    }
}