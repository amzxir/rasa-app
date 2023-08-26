import Adapter from "@cfaester/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import Slide from "./slide";

Enzyme.configure({ adapter: new Adapter() });

test("render component platform market slide", () => {
  const wrapper = shallow(<Slide />);
});
