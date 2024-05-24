import { TestBed } from '@angular/core/testing';
import { ClienteService } from './services.component';



describe('ClienteService', () => {
  let service: ClienteService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({})
    service = TestBed.inject(ClienteService)
  });

  it('should created', () => {
    expect(service).toBeTruthy();
  });
});

// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import {  ClienteService } from './services.component';

// describe('ServicesComponent', () => {
//   let component: ClienteService;
//   let fixture: ComponentFixture<ClienteService>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [ClienteService]
//     })
//     .compileComponents();
    
//     fixture = TestBed.createComponent(ClienteService);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
