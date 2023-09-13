import Adapter from "@cfaester/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import CategoryList from "./category-list";

Enzyme.configure({ adapter: new Adapter() });

test("render component platform market category list", () => {
  const wrapper = shallow(<CategoryList />);
  expect(wrapper.length).toBe(1);
});
