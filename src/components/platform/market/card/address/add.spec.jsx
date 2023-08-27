import Adapter from "@cfaester/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import Add from "./add";

Enzyme.configure({ adapter: new Adapter() });

test("render component platform market card add address", () => {
  const wrapper = shallow(<Add />);
  expect(wrapper.length).toBe(1);
});
