import React from "react";
import TestView from "./Vocabulary/TestView";
import MainView from "./MainView";

function createView(type, options) {
  const viewType = type.split("-");
  let view = null;
  switch (viewType[0]) {
    case "vocabulary":
      view = <TestView {...options} currVocab={viewType[1]} />;
      break;
    default:
      view = <MainView {...options} />;
      break;
  }
  return view;
}

export default { createView };
