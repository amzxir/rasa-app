import Adapter from "@cfaester/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import JetText from "./jet-text";

Enzyme.configure({ adapter: new Adapter() });

test("render component platform jet text", () => {
  const wrapper = shallow(<JetText />);
  expect(wrapper.length).toBe(1);
});
