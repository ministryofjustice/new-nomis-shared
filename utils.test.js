import { forenameToInitial } from './utils'

describe('forenameToInitial()', () => {
  it('should return a correctly formatted name', () => {
    expect(forenameToInitial('Test User')).toEqual('T User')
  })
})
