import Adapter from "@cfaester/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import About from "./about";

Enzyme.configure({ adapter: new Adapter() });

test("render component about us", () => {
  const wrapper = shallow(<About />);
});
