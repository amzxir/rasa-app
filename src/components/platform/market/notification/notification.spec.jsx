import Adapter from "@cfaester/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import Notification from "./notification";

Enzyme.configure({ adapter: new Adapter() });

test("render component platform market noyification", () => {
  const wrapper = shallow(<Notification />);
  expect(wrapper.length).toBe(1);
});
