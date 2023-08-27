import Adapter from "@cfaester/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import Success from "./success";

Enzyme.configure({ adapter: new Adapter() });

test("render component platform market card alert success", () => {
  const wrapper = shallow(<Success />);
  expect(wrapper.length).toBe(1);
});
