import track from '../index';

describe('track()', () => {
  it('returns true no matter what', () => {
    track().then(r => expect(r).toBe(true));
  });
});
