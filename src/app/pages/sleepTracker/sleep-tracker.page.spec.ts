import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { SleepTrackerPage } from "./sleep-tracker.page";

describe("Sleep", () => {
  let component: SleepTrackerPage;
  let fixture: ComponentFixture<SleepTrackerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SleepTrackerPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(SleepTrackerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
