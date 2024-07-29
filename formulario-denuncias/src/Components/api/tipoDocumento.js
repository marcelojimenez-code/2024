import axios from "axios";

export const fetchTipoDocumento = async () => {
    const url = "http://172.17.250.20:4000/api/tipoDocumento";

    const { data } = await axios.get(url);
    return data;
};
