import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedorPesquisaComponent } from './fornecedor-pesquisa.component';

describe('FornecedorPesquisaComponent', () => {
  let component: FornecedorPesquisaComponent;
  let fixture: ComponentFixture<FornecedorPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FornecedorPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FornecedorPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
