import Fetcher from "../api/dataFetcher";

let currVocab = [];
let vocabId = "";

async function updateVocab(newVocab) {
  if (!currVocab || vocabId !== newVocab) {
    const lessonFetched = await Fetcher.fetchVocab(newVocab);
    if (lessonFetched.lesson) {
      currVocab = lessonFetched.lesson.vocabulary;
      vocabId = newVocab;
    }
  }
}

async function fetchCard(vocabIdRequired) {
  await updateVocab(vocabIdRequired);
  const randNumber = Math.floor(Math.random() * currVocab.length);
  if (currVocab.length > 0) {
    const data = currVocab[randNumber];
    const { kana, kanji } = data;
    return { id: randNumber, kana, kanji };
  }
  return null;
}

function fetchMeaning(id) {
  if (id < currVocab.length) {
    const dataFound = currVocab[id];
    return { meanings: dataFound.meanings };
  }
  return {
    error: "id.notExisting"
  };
}

async function fetchAllVocabs() {
  const dataFound = await Fetcher.fetchAllVocabs();
  if (!dataFound.error) return dataFound.listLessons;
  return [];
}
export default { fetchCard, fetchMeaning, fetchAllVocabs };
