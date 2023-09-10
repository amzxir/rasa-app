import Adapter from "@cfaester/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import Create from "./create";

Enzyme.configure({ adapter: new Adapter() });

test("render component profile manage product create product", () => {
  const wrapper = shallow(<Create />);
  expect(wrapper.length).toBe(1);
});
