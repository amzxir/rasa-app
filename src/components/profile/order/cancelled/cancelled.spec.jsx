import Adapter from "@cfaester/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import Cancelled from "./cancelled";

Enzyme.configure({ adapter: new Adapter() });

test("render component profile order cancelled", () => {
  const wrapper = shallow(<Cancelled />);
  expect(wrapper.length).toBe(1);
});
