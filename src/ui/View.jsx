import React from 'react'
import { Grid } from 'semantic-ui-react';
import ExamCard from './ExamCard';

const View = (props) => {
  const { hiragana, kanji, meanings, cardState, verify, next } = props;
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450, height: "35vh" }}>
        <ExamCard
          hiragana={hiragana}
          kanji={kanji}
          meanings={meanings}
          cardState={cardState}
          verify={verify}
          next={next}
        />
      </Grid.Column>
    </Grid>
  );
}

export default View;