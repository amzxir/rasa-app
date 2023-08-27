import Adapter from "@cfaester/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import Pay from "./pay";

Enzyme.configure({ adapter: new Adapter() });

test("render component platform market card pay", () => {
  const wrapper = shallow(<Pay />);
  expect(wrapper.length).toBe(1);
});
