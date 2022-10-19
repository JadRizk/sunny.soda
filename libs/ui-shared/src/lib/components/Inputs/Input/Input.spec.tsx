import { render } from '../../../../test-utils';
import { Input } from './Input';

describe('Input', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Input name="test-input" />);
    expect(baseElement).toBeTruthy();
  });
});
