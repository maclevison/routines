import { render } from '@testing-library/react'

import Footer from '.'

describe('<Footer />', () => {
  it('should', () => {
    const { container } = render(<Footer />)

    expect(container).toBeTruthy()
  })
})
