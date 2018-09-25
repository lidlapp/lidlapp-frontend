import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AccountComponent } from './account.component';
import { FormsModule } from '@angular/forms';
import { Account } from '../../models/Account';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;
  const accountMock = new Account();
  accountMock.email = 'henk@mail';
  accountMock.name = 'henk';
  accountMock.nickname = 'henkie';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccountComponent],
      imports: [
        FormsModule,
        HttpClientTestingModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('display account details', inject([HttpTestingController], (httpMock: HttpTestingController) => {
    const req = httpMock.expectOne('/account');
    expect(req.request.method).toEqual('GET');
    req.flush({ data: accountMock });
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input[name=email]').value).toContain(accountMock.email);
  }));
});
