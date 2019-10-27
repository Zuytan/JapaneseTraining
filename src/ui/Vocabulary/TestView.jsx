import React, { useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import ExamCard from "../TestComponents/ExamCard";
import middleware from "../../middleware/vocabMiddle";

const TestView = props => {
  const { currVocab } = props;
  const [currCard, setCurrCard] = useState({});
  const [cardState, setCardState] = useState("question");
  const { kana, kanji, id, meanings } = currCard;
  async function updateCard() {
    const datas = await middleware.fetchCard(currVocab);
    setCurrCard(datas);
  }
  useEffect(() => {
    async function update() {
      const datas = await middleware.fetchCard(currVocab);
      setCurrCard(datas);
    }
    update();
  }, [currVocab]);
  const verifyDatas = meaningEntered => {
    const currMeanings = middleware.fetchMeaning(id);
    if (currMeanings.meanings.includes(meaningEntered)) {
      setCardState("valid");
    } else {
      setCardState("invalid");
    }
    setCurrCard({ ...currCard, meanings: currMeanings.meanings });
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450, height: "35vh" }}>
        <ExamCard
          kana={kana}
          kanji={kanji}
          meanings={meanings}
          cardState={cardState}
          verify={verifyDatas}
          next={() => {
            updateCard();
            setCardState("question");
          }}
        />
      </Grid.Column>
    </Grid>
  );
};

export default TestView;
