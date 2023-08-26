import Adapter from "@cfaester/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import Club from "./club";

Enzyme.configure({ adapter: new Adapter() });

test("render component platform club", () => {
  const wrapper = shallow(<Club />);
});
