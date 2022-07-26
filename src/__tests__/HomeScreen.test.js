import React from "react";
import renderer from "react-test-renderer";
import HomeScreen from "../components/screen/HomeScreen";
import App from "../../App";

it("renders correctly", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
