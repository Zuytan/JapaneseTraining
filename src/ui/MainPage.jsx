import React, { Fragment, useState } from "react";
import MainMenu from "./MainMenu";
import Factory from "./ViewFactory";
import middleware from "../middleware/vocabMiddle";

const MainPage = props => {
  const [currentPage, setCurrentPage] = useState("mainPage");
  const [lessonsAvailable, setLessonsAvailable] = useState(null);
  async function getLessons() {
    const lessonsFetched = await middleware.fetchAllVocabs();
    setLessonsAvailable(lessonsFetched);
  }
  if (!lessonsAvailable) {
    getLessons();
  }
  return (
    <Fragment>
      <MainMenu
        selected={currentPage}
        lessonsAvailable={lessonsAvailable}
        changePage={setCurrentPage}
      />
      {Factory.createView(currentPage)}
    </Fragment>
  );
};
export default MainPage;
