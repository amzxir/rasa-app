import Adapter from "@cfaester/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import Wishlist from "./wishlist";

Enzyme.configure({ adapter: new Adapter() });

test("render component platform market wishlist", () => {
  const wrapper = shallow(<Wishlist />);
});
