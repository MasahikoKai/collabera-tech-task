import {randomIntIntervalHelper} from './random-int-interval.helper';

describe('randomIntIntervalHelper', () => {
  it('value should be greater than min and lower than max', () => {
    const randomInt = randomIntIntervalHelper(1000, 2000);
    expect(randomInt > 1000 && randomInt < 2000).toBeTruthy();
  });
})
