import Adapter from "@cfaester/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import New from "./new";

Enzyme.configure({ adapter: new Adapter() });

test("render component platform market card new address", () => {
  const wrapper = shallow(<New />);
  expect(wrapper.length).toBe(1);
});
