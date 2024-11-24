import vols from "../../../data/vols.js";


export const getAll = async (filters)=>{
    return filter(vols, filters)
}
export const getById = async (id)=>{
    return vols.find((item)=> item.idVol === id)
}

export const deleteById = async (id)=>{
    const index = vols.findIndex((item)=> item.id === id);
    vols.splice(index,1);
}

export const createVol = async (vol)=>{
    vols.push(vol);
    JSON.stringify(vols);
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
