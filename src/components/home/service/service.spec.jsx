import Adapter from "@cfaester/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import Service from "./service";

Enzyme.configure({ adapter: new Adapter() });

test("render compoent service", () => {
  const wrapper = shallow(<Service />);
});
