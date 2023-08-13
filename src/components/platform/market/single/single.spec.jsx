import { shallow } from 'enzyme';
import Single from "./single";

// Testing
describe('MyComponent', () => {
  it('should re-render component when state is updated', () => {
    const wrapper = shallow(<Single />);
    expect(wrapper.find('p').text()).toBe('0');
    wrapper.setState({ count: 1 });
    expect(wrapper.find('p').text()).toBe('1');
  });
});
// test("should first", () => {
//   render(<Single />);

//   const counter = screen.getByTestId("counter");
//   const incrementBtn = screen.getByTestId("handelTotal");

//   fireEvent.click(incrementBtn);
//   expect(counter).toHaveTextContent("1");
// });
