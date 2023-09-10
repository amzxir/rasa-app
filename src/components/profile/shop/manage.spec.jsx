import Adapter from "@cfaester/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import ManageShop from "./manage";

Enzyme.configure({ adapter: new Adapter() });

test("render component profile manage shop", () => {
  const wrapper = shallow(<ManageShop />);
  expect(wrapper.length).toBe(1);
});
