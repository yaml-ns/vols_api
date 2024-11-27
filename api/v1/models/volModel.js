import vols from "../../../data/vols.js";


export const getAll = async (filters)=>{
    return filter(vols, filters)
}
export const getById = async (id)=>{
    return vols.find((item)=> item.idVol === id)
}


export const addVol = async (vol)=>{
    vol.idVol = nextId()
    vols.push(vol);
    return vol;
}

export const updateVol = async (vol)=>{

    const index = vols.findIndex(v => v.idVol === vol.idVol);
    if (index !== -1) {
        vols[index] = vol;
        return vol;
    }
    return null;
}
export const deleteById = async (id)=>{
    const index = vols.findIndex((item)=> item.id === id);
    vols.splice(index,1);
}

export const nextId = ()=>{
    const lastId = vols.reduce((max, vol) => (vol.idVol > max ? vol.idVol : max), 0);
    return lastId + 1;
}

function filter(data, filters){
    const { idVol, destination, dated,minReserv,maxReserv, orderBy, order } = filters;
    let results = data;

    if (idVol){
        results = results.filter( vol =>  data.idVol === parseInt(id));
    }
    if (destination){
        results = results.filter(vol=> {
            const pos = vol.destination.toLowerCase().indexOf(destination.toLowerCase());
            return pos !==-1;
        });
    }

    if (dated){
        results = results.filter(vol =>
            data.filter(vol=> vol.dated === dated)
        );
    }
    if (minReserv){
        results = results.filter(vol => vol.reserv >= parseInt(minReserv))
    }
    if (maxReserv){
        results = results.filter(vol => vol.reserv <= parseInt(maxReserv))
    }

    sortVols(results,orderBy,order)

    return results

}

function sortVols(data,orderBy,order = "ASC"){

    if (!orderBy) return data;

    const isAscending = order.toUpperCase() === 'ASC' || order.trim() ==="";

    return data.sort((a, b) => {
        if (a[orderBy] < b[orderBy]) {
            return isAscending ? -1 : 1;
        }
        if (a[orderBy] > b[orderBy]) {
            return isAscending ? 1 : -1;
        }
        return 0;
    });
}
