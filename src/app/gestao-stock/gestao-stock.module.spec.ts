import { GestaoStockModule } from './gestao-stock.module';

describe('GestaoStockModule', () => {
  let gestaoStockModule: GestaoStockModule;

  beforeEach(() => {
    gestaoStockModule = new GestaoStockModule();
  });

  it('should create an instance', () => {
    expect(gestaoStockModule).toBeTruthy();
  });
});
