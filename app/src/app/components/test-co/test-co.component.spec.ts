import { TestCoComponent } from './test-co.component';

// 1 экпортировали наш тестируемый компонент
describe('TestCoComponent', () => {
  // объявили переменную TestCoComponents
  let testCoComponent: TestCoComponent;

  // 2 Через конструкцию beforeEach добавляем инициализацию компонента для каждого теста
  beforeEach(() => {
    testCoComponent = new TestCoComponent();
  });

  // 3 Затем через конструкцию it добавлем тест нашего первого метода sayHello
  it('Передать привет Гарику', () => {
    expect(testCoComponent.sayHello('Гарик')).toBe('Привет Гарик');
  });

  // 4 Теперь напишем второй тест для метода giveLangCode
  it('Должны быть коды стран: ru en ua', () => {
    const countries = testCoComponent.giveLangCode();
    expect(countries).toContain('ru');
    expect(countries).toContain('en');
    expect(countries).toContain('ua');
  });

  // 5 У нас остался не покрыт тестами, метод setColor.
  it('Цвет в eventEmitter должен быть: Black', () => {
    let result = '';
    testCoComponent.colorEmitter.subscribe(v => result = v);
    testCoComponent.setColor();
    expect(result).toBe('Black')
  });
});
