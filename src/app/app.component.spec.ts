import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { OAuthService } from 'angular-oauth2-oidc';
describe('AppComponent', () => {
  let authSpy: jasmine.SpyObj<OAuthService>;
  beforeEach(async(() => {
    authSpy = jasmine.createSpyObj<OAuthService>([
      'logOut',
      'configure',
      'loadDiscoveryDocumentAndTryLogin',
      'getIdentityClaims',
    ]);
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: OAuthService, useValue: authSpy }
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should render greeting', async(() => {
    authSpy.getIdentityClaims.and.returnValue({
      'given_name': 'John'
    });
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.greeting').textContent).toContain('John');
  }));
});
