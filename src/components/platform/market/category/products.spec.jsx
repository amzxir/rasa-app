import Adapter from "@cfaester/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import ProductCategory from "./product-category";

Enzyme.configure({ adapter: new Adapter() });

test("render component platform market product category", () => {
  const wrapper = shallow(<ProductCategory />);
  expect(wrapper.length).toBe(1);
});
