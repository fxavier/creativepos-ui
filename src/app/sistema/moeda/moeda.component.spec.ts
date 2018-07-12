import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoedaComponent } from './moeda.component';

describe('MoedaComponent', () => {
  let component: MoedaComponent;
  let fixture: ComponentFixture<MoedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
