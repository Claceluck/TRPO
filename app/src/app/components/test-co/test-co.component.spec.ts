import { TestCoComponent } from './test-co.component';

describe('TestCoComponent', () => {
  let testCoComponent: TestCoComponent;

  beforeEach(() => {
    testCoComponent = new TestCoComponent();
  });

  it('Передать привет Гарику', () => {
    expect(testCoComponent.sayHello('Гарик')).toBe('Привет Гарик');
  });

  it('Должны быть коды стран: ru en ua', () => {
    const countries = testCoComponent.giveLangCode();
    expect(countries).toContain('ru');
    expect(countries).toContain('en');
    expect(countries).toContain('ua');
  });

  it('Цвет в eventEmitter должен быть: Black', () => {
    let result = '';
    testCoComponent.colorEmitter.subscribe(v => result = v);
    testCoComponent.setColor();
    expect(result).toBe('Black')
  });
});
