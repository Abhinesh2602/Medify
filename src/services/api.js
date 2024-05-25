import axios from "./axios";

async function getData(setfunc, param) {
  try {
    const res = await axios.get(param);
    setfunc(res.data);
  } catch (error) {
    console.log(error.message);
  }
}

export default getData;
