import Adapter from "@cfaester/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import ProductSlide from "./product-slide";

Enzyme.configure({ adapter: new Adapter() });

test("render component platform market product slide", () => {
  const wrapper = shallow(<ProductSlide />);
  expect(wrapper.length).toBe(1);
});
