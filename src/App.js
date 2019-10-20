import React, {useState} from 'react';
import View from './ui/View';
import {fetchCard, getCardMeaning} from './api/dataFetcher'

function App() {

  const [currCard, setCurrCard] = useState(fetchCard());
  const [cardState, setCardState] = useState("question")
  const {hiragana, kanji, id, meanings} = currCard;

  const verifyDatas = (meaningEntered) => {
    const currMeanings = getCardMeaning(id)
    if(currMeanings.meanings.includes(meaningEntered)) {
      setCardState("valid")
    } else {
      setCardState("invalid")
    }
    setCurrCard({...currCard, meanings: currMeanings.meanings})
  }
  return (
    <div className="App">
      <View
        hiragana={hiragana}
        kanji={kanji}
        meanings={meanings}
        cardState={cardState}
        verify={verifyDatas}
        next={() => { setCurrCard(fetchCard()); setCardState('question')}}/>
    </div>
  );
}

export default App;
