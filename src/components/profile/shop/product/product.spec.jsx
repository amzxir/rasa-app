import Adapter from "@cfaester/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import Product from "./product";

Enzyme.configure({ adapter: new Adapter() });

test("render component profile manage product your product", () => {
  const wrapper = shallow(<Product />);
  expect(wrapper.length).toBe(1);
});
