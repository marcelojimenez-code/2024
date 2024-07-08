import axios from "axios";

export const fetchDelitos = async () => {
    const url = "http://172.17.250.20:4000/api/delitos";

    const { data } = await axios.get(url);
    return data;
};