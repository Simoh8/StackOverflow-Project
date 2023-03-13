import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentloginComponent } from './talentlogin.component';

describe('TalentloginComponent', () => {
  let component: TalentloginComponent;
  let fixture: ComponentFixture<TalentloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalentloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalentloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
