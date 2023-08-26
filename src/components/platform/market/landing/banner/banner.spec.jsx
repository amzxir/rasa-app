import Adapter from "@cfaester/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import Banner from "./banner";

Enzyme.configure({ adapter: new Adapter() });

test("render component platform market banner", () => {
  const wrapper = shallow(<Banner />);
});
