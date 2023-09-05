import Adapter from "@cfaester/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import Order from "./order";

Enzyme.configure({ adapter: new Adapter() });

test("render component profile order", () => {
  const wrapper = shallow(<Order />);
  expect(wrapper.length).toBe(1);
});
