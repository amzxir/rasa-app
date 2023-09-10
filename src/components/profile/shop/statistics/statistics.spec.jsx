import Adapter from "@cfaester/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import Statistics from "./statistics";

Enzyme.configure({ adapter: new Adapter() });

test("render component profile manage product Statistics", () => {
  const wrapper = shallow(<Statistics />);
  expect(wrapper.length).toBe(1);
});
