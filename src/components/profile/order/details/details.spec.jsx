import Adapter from "@cfaester/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import Details from "./details";

Enzyme.configure({ adapter: new Adapter() });

test("render component profile order details", () => {
  const wrapper = shallow(<Details />);
  expect(wrapper.length).toBe(1);
});
