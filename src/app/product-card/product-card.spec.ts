import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCard } from './product-card'; // Importa a classe do arquivo correto

describe('ProductCard', () => {
  let component: ProductCard;
  let fixture: ComponentFixture<ProductCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCard]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCard);
    component = fixture.componentInstance;
    
    // Mock básico para o teste não dar erro de 'undefined' no template
    component.product = {
      productShotName: 'Teste',
      price: 100,
      isInStock: true
    } as any;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});