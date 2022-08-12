import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotificationBellPage } from './notification-bell.page';

describe('NotificationBellPage', () => {
  let component: NotificationBellPage;
  let fixture: ComponentFixture<NotificationBellPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationBellPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationBellPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
