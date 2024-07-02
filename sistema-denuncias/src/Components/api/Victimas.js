import axios from "axios";

export const fetchVictimas = async () => {
  const url = "http://172.17.250.20:4000/form";

  const { data } = await axios.get(url);
  return data;
};
