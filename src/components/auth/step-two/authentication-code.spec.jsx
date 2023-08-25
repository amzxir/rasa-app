import Adapter from "@cfaester/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import AuthenticationCode from "./authentication-code";

Enzyme.configure({ adapter: new Adapter() });

test("render component AuthenticationCode", () => {
  const wrapper = shallow(<AuthenticationCode />);
});
