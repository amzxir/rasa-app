import Adapter from "@cfaester/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import Spalash from "./splash";

Enzyme.configure({ adapter: new Adapter() });

test("render component platform spalsh", () => {
  const wrapper = shallow(<Spalash />);
  expect(wrapper.length).toBe(1);
});
