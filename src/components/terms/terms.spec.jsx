import Adapter from "@cfaester/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import Terms from "./terms";

Enzyme.configure({ adapter: new Adapter() });

test("render component platform terms", () => {
  const wrapper = shallow(<Terms />);
  expect(wrapper.length).toBe(1);
});
