import {BaseState} from './base-state';

class TestClass extends BaseState<any> {
  constructor() {
    super();
  }

  public setData(value: any) {
    super.setData(value);
  }
}

const MOCK = {
  id: 1
}

describe('BaseState', () => {
  let testClass: TestClass;
  beforeEach(() => {
    testClass = new TestClass();
  });

  it('setData should emit data', function () {
    testClass.setData(MOCK);
    expect(testClass.data).toEqual(MOCK);
  });
});
