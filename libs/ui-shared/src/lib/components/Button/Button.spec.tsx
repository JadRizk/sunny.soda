import { Button } from './Button';
import { render } from '../../../test-utils';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button title={'Button'} />);
    expect(baseElement).toBeTruthy();
  });
});
