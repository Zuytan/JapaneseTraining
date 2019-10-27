import React, { Fragment, useState } from "react";
import { Card, Input, Header, Icon, Button, Label } from "semantic-ui-react";
const ExamCard = props => {
  const { kana, kanji, meanings, cardState, verify, next } = props;
  const [guess, setGuess] = useState(null);
  let currIcon = "question circle outline";
  let color = "grey";
  if (cardState === "valid") {
    currIcon = "check circle outline";
    color = "green";
  } else if (cardState === "invalid") {
    currIcon = "times circle outline";
    color = "red";
  }
  const displayableMeanings = meanings
    ? meanings.reduce((text, curr) => `${text}${curr}/`, "")
    : "";
  return (
    <Card style={{ width: "100%" }}>
      <Header as="h2" textAlign="center" icon>
        <Icon name={currIcon} color={color} />
        {kanji}
        <Header.Subheader>{kana}</Header.Subheader>
        {meanings && (
          <Header.Subheader>
            <Label basic color={color} pointing>
              {displayableMeanings}
            </Label>
          </Header.Subheader>
        )}
      </Header>
      <Card.Content>
        {cardState === "question" ? (
          <Fragment>
            <Input
              placeholder="Your answer"
              onChange={e => setGuess(e.target.value)}
            />
            <Button
              onClick={() => {
                verify(guess);
                setGuess(null);
              }}
              color="green"
            >
              <Icon name="check" />
            </Button>
          </Fragment>
        ) : (
          <Button
            onClick={() => {
              next();
            }}
            color="green"
          >
            <Icon name="arrow right" />
          </Button>
        )}
      </Card.Content>
    </Card>
  );
};

export default ExamCard;
