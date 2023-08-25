import Adapter from "@cfaester/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import Auth from "./auth";

Enzyme.configure({ adapter: new Adapter() });

test("render component auth", () => {
  const wrapper = shallow(<Auth />);
});
