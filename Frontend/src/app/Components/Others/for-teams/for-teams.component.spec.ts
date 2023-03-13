import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForTeamsComponent } from './for-teams.component';

describe('ForTeamsComponent', () => {
  let component: ForTeamsComponent;
  let fixture: ComponentFixture<ForTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForTeamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
