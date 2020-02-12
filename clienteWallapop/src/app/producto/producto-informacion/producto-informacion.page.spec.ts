import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductoInformacionPage } from './producto-informacion.page';

describe('ProductoInformacionPage', () => {
  let component: ProductoInformacionPage;
  let fixture: ComponentFixture<ProductoInformacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoInformacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductoInformacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
