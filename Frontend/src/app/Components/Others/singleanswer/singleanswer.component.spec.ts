import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleanswerComponent } from './singleanswer.component';

describe('SingleanswerComponent', () => {
  let component: SingleanswerComponent;
  let fixture: ComponentFixture<SingleanswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SingleanswerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleanswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
