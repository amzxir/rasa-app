import Adapter from "@cfaester/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import Shopping from "./shopping";

Enzyme.configure({ adapter: new Adapter() });

test("render component platform market card shopping", () => {
  const wrapper = shallow(<Shopping />);
  expect(wrapper.length).toBe(1);
});
