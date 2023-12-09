import { CommentComponent } from './comment.component';
import { CommentService } from '../../services/comment.service';
import { EMPTY, of } from 'rxjs';

describe('CommentComponent', () => {

  // 1. Импортируем наш тестируемый компонент CommentsComponent и сервис CommentsService.
  let component: CommentComponent;
  let service: CommentService;

  // 2. Используем beforeEach для настройки начальных условий перед каждым тестом.
  beforeEach(() => {
    // Создаем "шпиона" (спай) HttpClient с методами post и get, и передаем его в сервис.
    const spyHttp = jasmine.createSpyObj('HttpClient', { post: of({}), get: of({}) });
    service = new CommentService(spyHttp);

    // Создаем экземпляр тестируемого компонента и передаем ему созданный сервис.
    component = new CommentComponent(service);
  });

  // 3. Тест на вызов метода getComments при инициализации компонента (ngOnInit).
  it('должен вызывать getComments при ngOnInit', () => {
    // Создаем "шпиона" (спай) для метода getComments, который возвращает пустой observable.
    const spy = spyOn(service, 'getComments').and.callFake(() => {
      return EMPTY;
    });

    // Вызываем ngOnInit компонента.
    component.ngOnInit();

    // Проверяем, что метод getComments был вызван.
    expect(spy).toHaveBeenCalled();
  });

  // 4. Тест на обновление длины комментариев после ngOnInit.
  it('следует обновлять длину комментариев после ngOnInit', () => {
    // Создаем тестовый массив комментариев.
    const testComments = [1, 2, 3, 4];

    // Заменяем реальный вызов getComments на возвращение тестового массива.
    spyOn(service, 'getComments').and.returnValue(of(testComments));

    // Вызываем ngOnInit компонента.
    component.ngOnInit();

    // Проверяем, что длина массива комментариев в компоненте соответствует длине тестового массива.
    expect(component.comments.length).toBe(testComments.length);
  });

  // 5. Тест на добавление нового комментария.
  it('добавить новый комментарий', () => {
    // Создаем тестовый комментарий.
    const testComment = { text: 'test' };

    // Создаем "шпиона" (спай) для метода create, который возвращает тестовый комментарий.
    const spy = spyOn(service, 'create').and.returnValue(of(testComment));

    // Вызываем метод add компонента, передавая текст тестового комментария.
    component.add(testComment.text);

    // Проверяем, что метод create был вызван и что тестовый комментарий был добавлен в массив комментариев в компоненте.
    expect(spy).toHaveBeenCalled();
    expect(component.comments.includes(testComment)).toBeTruthy();
  });
});

