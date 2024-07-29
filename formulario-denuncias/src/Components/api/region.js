import axios from "axios";

export const fetchRegiones = async () => {
    const url = "http://172.17.250.20:4000/api/regiones";

    const { data } = await axios.get(url);
    return data;
};
