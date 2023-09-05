import Adapter from "@cfaester/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import Delivery from "./delivery";

Enzyme.configure({ adapter: new Adapter() });

test("render component profile order delivery", () => {
  const wrapper = shallow(<Delivery />);
  expect(wrapper.length).toBe(1);
});
