import Adapter from "@cfaester/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import Error from "./error";

Enzyme.configure({ adapter: new Adapter() });

test("render component platform market card alert error", () => {
  const wrapper = shallow(<Error />);
  expect(wrapper.length).toBe(1);
});
