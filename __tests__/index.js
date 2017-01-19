import track from '../index';

describe('track()', () => {
  it('returns true no matter what', () => {
    track().then(r => expect(r).toBe(true));
  });
});

// Suggested line from Keen
process.on('uncaughtException', (err) => {
 require('fs').writeSync(1, `Caught exception: ${err}, ${err.stack}`);
});
