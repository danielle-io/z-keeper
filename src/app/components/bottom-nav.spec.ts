import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BottomNavPage } from './bottom-nav.page';

describe('BottomNav', () => {
  let component: BottomNavPage;
  let fixture: ComponentFixture<BottomNavPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomNavPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BottomNavPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
