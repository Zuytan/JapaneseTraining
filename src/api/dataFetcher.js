import axios from "axios";
import config from "./config";

async function fetchVocab(id) {
  try {
    const body = { lessonId: id };
    const datas = await axios.post(
      `${config.API_URL}/vocabulary/lesson/get`,
      body
    );
    return datas.data;
  } catch (err) {
    console.error(err);
    return { error: err };
  }
}

async function fetchAllVocabs() {
  try {
    const datas = await axios.get(`${config.API_URL}/vocabulary/`);

    return datas.data;
  } catch (err) {
    console.error(err);
    return { error: err };
  }
}

export default { fetchVocab, fetchAllVocabs };
