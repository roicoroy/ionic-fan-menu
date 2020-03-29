import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BottomDrawerPage } from './bottom-drawer.page';

describe('BottomDrawerPage', () => {
  let component: BottomDrawerPage;
  let fixture: ComponentFixture<BottomDrawerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomDrawerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BottomDrawerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
