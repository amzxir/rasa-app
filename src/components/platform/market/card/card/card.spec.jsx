import Adapter from "@cfaester/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import Card from "./card";

Enzyme.configure({ adapter: new Adapter() });

test("render component platform market card", () => {
  const wrapper = shallow(<Card />);
  expect(wrapper.length).toBe(1);
});
