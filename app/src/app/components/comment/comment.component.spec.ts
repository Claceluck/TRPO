import { CommentComponent } from './comment.component';
import { CommentService } from '../../services/comment.service';
import { EMPTY, of } from 'rxjs';

describe('CommentComponent', () => {
  let component: CommentComponent;
  let service: CommentService;

  beforeEach(() => {
    const spyHttp = jasmine.createSpyObj('HttpClient', { post: of({}), get: of({}) })
    service = new CommentService(spyHttp);
    component = new CommentComponent(service);
  });

  it('должен вызывать getComments при ngOnInit', () => {
    const spy = spyOn(service, 'getComments').and.callFake(() => {
      return EMPTY;
    });

    component.ngOnInit();

    expect(spy).toHaveBeenCalled();
  });

  it('следует обновлять длину комментария после ngOnInit', () => {
    const testComments = [1, 2, 3, 4]
    spyOn(service, 'getComments').and.returnValue(of(testComments))

    component.ngOnInit();

    expect(component.comments.length).toBe(testComments.length);
  });

  it('добавить новый комментарий', () => {
    const testComment = {text: 'test'}
    const spy = spyOn(service, 'create').and.returnValue(of(testComment))

    component.add(testComment.text)

    expect(spy).toHaveBeenCalled()
    expect(component.comments.includes(testComment)).toBeTruthy()
  });
});
