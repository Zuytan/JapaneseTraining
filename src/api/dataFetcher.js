const datas = [
  {
    id: 0,
    hiragana: "おきます",
    kanji: "起きます",
    meanings: ["get up", "wake up"]
  },
  {
    id: 1,
    hiragana: "ねます",
    kanji: "寝ます",
    meanings: ["sleep", "go to bed"]
  },
  {
    id: 2,
    hiragana: "はたらきます",
    kanji: "働きます",
    meanings: ["work"]
  },
  {
    id: 3,
    hiragana: "やすみます",
    kanji: "休みます",
    meanings: ["take a rest", "take a holliday"]
  },
  {
    id: 4,
    hiragana: "べんきょうします",
    kanji: "勉強します",
    meanings: ["study"]
  },
  {
    id: 5,
    hiragana: "おわります",
    kanji: "おわります",
    meanings: ["finish"]
  },
  {
    id: 6,
    hiragana: "デパート",
    kanji: "デパート",
    meanings: ["department store"]
  },
  {
    id: 7,
    hiragana: "ぎんこう",
    kanji: "銀行",
    meanings: ["bank"]
  },
  {
    id: 8,
    hiragana: "ゆうびんきょく",
    kanji: "湯便局",
    meanings: ["Post Office"]
  },
  {
    id: 9,
    hiragana: "としょかん",
    kanji: "図書館",
    meanings: ["Library"]
  },
  {
    id: 10,
    hiragana: "びじゅつかん",
    kanji: "美術館",
    meanings: ["Art Museum", "Art Gallery"]
  },
  {
    id: 11,
    hiragana: "いま",
    kanji: "今",
    meanings: ["Now"]
  },
  {
    id: 12,
    hiragana: "ーじ",
    kanji: "ー時",
    meanings: ["* o'clock"]
  },
  {
    id: 13,
    hiragana: "ーふん/(ーぷん)",
    kanji: "ー分",
    meanings: ["* minute"]
  },
  {
    id: 14,
    hiragana: "はん",
    kanji: "半",
    meanings: ["half"]
  },
  {
    id: 15,
    hiragana: "なんじ",
    kanji: "何時",
    meanings: ["what time"]
  },
  {
    id: 16,
    hiragana: "なんぷん",
    kanji: "何分",
    meanings: ["what minute"]
  },
  {
    id: 17,
    hiragana: "ごぜん",
    kanji: "午前",
    meanings: ["am", "morning"]
  },
  {
    id: 18,
    hiragana: "ごご",
    kanji: "午後",
    meanings: ["pm", "afternoon"]
  },
  {
    id: 19,
    hiragana: "あさ",
    kanji: "朝",
    meanings: ["morning"]
  },
  {
    id: 20,
    hiragana: "ひる",
    kanji: "昼",
    meanings: ["daytime","noon"]
  },
  {
    id: 21,
    hiragana: "ばん",
    kanji: "晩",
    meanings: ["night", "evening"]
  },
  {
    id: 22,
    hiragana: "おととい",
    kanji: "おととい",
    meanings: ["the day before yesterday"]
  },
  {
    id: 23,
    hiragana: "きのう",
    kanji: "きのう",
    meanings: ["yesterday"]
  },
  {
    id: 24,
    hiragana: "きょう",
    kanji: "きょう",
    meanings: ["today"]
  },
  {
    id: 25,
    hiragana: "あした",
    kanji: "あした",
    meanings: ["tomorrow"]
  },
  {
    id: 26,
    hiragana: "あきった",
    kanji: "あきった",
    meanings: ["the day after tomorrow"]
  },
  {
    id: 27,
    hiragana: "けさ",
    kanji: "けさ",
    meanings: ["this morning"]
  },
  {
    id: 28,
    hiragana: "こんばん",
    kanji: "今晩",
    meanings: ["this evening", "tonight"]
  },
  {
    id: 29,
    hiragana: "やすみ",
    kanji: "休み",
    meanings: ["rest", "a holliday", "a day off"]
  },
  {
    id: 30,
    hiragana: "ひるやすみ",
    kanji: "昼休み",
    meanings: ["lunchtime"]
  },
  {
    id: 31,
    hiragana: "しけん",
    kanji: "試験",
    meanings: ["examination", "test"]
  },
  {
    id: 32,
    hiragana: "かいぎ",
    kanji: "会議",
    meanings: ["meeting", "conference" ]
  },
  {
    id: 33,
    hiragana: "えいが",
    kanji: "映画",
    meanings: ["film", "movie"]
  },
  {
    id: 34,
    hiragana: "まいあさ",
    kanji: "毎朝",
    meanings: ["every morning"]
  },
  {
    id: 35,
    hiragana: "まいばん",
    kanji: "毎晩",
    meanings: ["every night"]
  },
  {
    id: 36,
    hiragana: "まいにち",
    kanji: "毎日",
    meanings: ["every day"]
  },
  {
    id: 37,
    hiragana: "げつようび",
    kanji: "月曜日",
    meanings: ["Monday"]
  },
  {
    id: 38,
    hiragana: "かようび",
    kanji: "火曜日",
    meanings: ["Tuesday"]
  },
  {
    id: 39,
    hiragana: "すいようび",
    kanji: "水曜日",
    meanings: ["Wednesday"]
  },
  {
    id: 40,
    hiragana: "もくようび",
    kanji: "木曜日",
    meanings: ["Thursday"]
  },
  {
    id: 41,
    hiragana: "きんようび",
    kanji: "金曜日",
    meanings: ["Friday"]
  },
  {
    id: 42,
    hiragana: "どようび",
    kanji: "土曜日",
    meanings: ["Saturday"]
  },
  {
    id: 43,
    hiragana: "にちようび",
    kanji: "日曜日",
    meanings: ["Sunday"]
  },
  {
    id: 44,
    hiragana: "なにょうび",
    kanji: "何曜日",
    meanings: ["what day"]
  },
  {
    id: 45,
    hiragana: "~から",
    kanji: "~から",
    meanings: ["from ~"]
  },
  {
    id: 46,
    hiragana: "~まで",
    kanji: "~まで",
    meanings: ["up to ~", "until ~"]
  },
  {
    id: 47,
    hiragana: "~と~",
    kanji: "~と~",
    meanings: ["~ and ~"]
  },
  {
    id: 48,
    hiragana: "~と~",
    kanji: "~と~",
    meanings: ["~ and ~"]
  },
  {
    id: 48,
    hiragana: "たいへんですね",
    kanji: "大変ですね",
    meanings: ["That's tough, isn't it"]
  },
  {
    id: 49,
    hiragana: "ばんごう",
    kanji: "番号",
    meanings: ["number"]
  },
  {
    id: 50,
    hiragana: "なんばん",
    kanji: "何番",
    meanings: ["what number"]
  },
  {
    id: 51,
    hiragana: "そちら",
    kanji: "そちら",
    meanings: ["your place"]
  },

]
function fetchCard() {
  const randNumber = Math.floor(Math.random()*datas.length)
  const data = datas[randNumber]
  const { id, hiragana, kanji} = data
  return { id, hiragana, kanji }
}
function getCardMeaning(id) {
  const dataFound = datas.find((data) => id === data.id)
  if(dataFound !== -1) {
    return {meanings : dataFound.meanings}
  }
  return {
    error: "id.notExisting"
  }
}

export {fetchCard, getCardMeaning}