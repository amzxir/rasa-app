import Adapter from "@cfaester/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import Login from "./login";

Enzyme.configure({ adapter: new Adapter() });

test("render component login", () => {
  const wrapper = shallow(<Login />);
  expect(wrapper.length).toBe(1);
});
