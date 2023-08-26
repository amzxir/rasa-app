import Adapter from "@cfaester/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import Home from "./home";

Enzyme.configure({ adapter: new Adapter() });

test("render component platform jet home", () => {
  const wrapper = shallow(<Home />);
  expect(wrapper.length).toBe(1);
});
