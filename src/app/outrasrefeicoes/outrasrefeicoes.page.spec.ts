import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OutrasrefeicoesPage } from './outrasrefeicoes.page';

describe('OutrasrefeicoesPage', () => {
  let component: OutrasrefeicoesPage;
  let fixture: ComponentFixture<OutrasrefeicoesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OutrasrefeicoesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OutrasrefeicoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
