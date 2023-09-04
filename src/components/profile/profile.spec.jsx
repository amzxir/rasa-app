import Adapter from "@cfaester/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import Profile from "./profile";

Enzyme.configure({ adapter: new Adapter() });

test("render component profile", () => {
  const wrapper = shallow(<Profile />);
  expect(wrapper.length).toBe(1);
});
