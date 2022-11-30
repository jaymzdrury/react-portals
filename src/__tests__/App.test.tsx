import { render } from '@testing-library/react';
import Portal from '../Portal'

test('portal renders when opened', () => {
  const {baseElement} = render(<Portal>Portal</Portal>)
  expect(baseElement).toMatchSnapshot()
})
