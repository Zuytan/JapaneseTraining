import React from "react";
import { Menu, Dropdown } from "semantic-ui-react";

const MainMenu = props => {
  const { selected, lessonsAvailable, changePage } = props;
  const updatePage = id => {
    const newPage = `vocabulary-${id}`;
    changePage(newPage);
  };
  const dispLessonsAvailable = lessonsAvailable
    ? lessonsAvailable.map(lesson => {
        return (
          <Dropdown.Item key={lesson.id} onClick={() => updatePage(lesson.id)}>
            {lesson.name}
          </Dropdown.Item>
        );
      })
    : [];
  return (
    <Menu>
      <Menu.Item name="Main Menu" active={selected === "mainMenu"} />
      <Dropdown item text="Vocabulary">
        <Dropdown.Menu>{dispLessonsAvailable}</Dropdown.Menu>
      </Dropdown>
    </Menu>
  );
};

export default MainMenu;
