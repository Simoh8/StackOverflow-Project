import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglequizanswerComponent } from './singlequizanswer.component';

describe('SinglequizanswerComponent', () => {
  let component: SinglequizanswerComponent;
  let fixture: ComponentFixture<SinglequizanswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SinglequizanswerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglequizanswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
