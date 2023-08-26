import Adapter from "@cfaester/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import Blog from "./blog";

Enzyme.configure({ adapter: new Adapter() });

test("render component platform blog", () => {
  const wrapper = shallow(<Blog />);
});
