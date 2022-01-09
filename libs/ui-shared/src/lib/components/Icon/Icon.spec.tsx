import { Icon } from './Icon';
import { render } from '../../../test-utils';

describe('Icon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon name={'add'} />);
    expect(baseElement).toBeTruthy();
  });
});
