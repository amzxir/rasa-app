import Adapter from "@cfaester/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import JetImage from "./jet-image";

Enzyme.configure({ adapter: new Adapter() });

test("render component platform jet image", () => {
  const wrapper = shallow(<JetImage />);
  expect(wrapper.length).toBe(1);
});