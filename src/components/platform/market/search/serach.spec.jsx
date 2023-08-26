import Adapter from "@cfaester/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import Search from "./search";

Enzyme.configure({ adapter: new Adapter() });

test("render component platform market search", () => {
  const wrapper = shallow(<Search />);
  expect(wrapper.length).toBe(1);
});
