import Adapter from "@cfaester/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import Faq from "./faq";

Enzyme.configure({ adapter: new Adapter() });

test("render component faq", () => {
  const wrapper = shallow(<Faq />);
  expect(wrapper.length).toBe(1);
});
