import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ContactComponent } from './contact.component';
import { SITE_CONFIG, siteConfig } from '../../core/config/site-config';

describe('ContactComponent (reactive form validation)', () => {
  let fixture: ComponentFixture<ContactComponent>;
  let component: ContactComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent],
      providers: [provideRouter([]), { provide: SITE_CONFIG, useValue: siteConfig }],
    }).compileComponents();
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('starts invalid (required fields empty)', () => {
    expect(component.form.valid).toBeFalse();
  });

  it('does not send an invalid form', () => {
    component.onSubmit();
    expect(component.sent()).toBeFalse();
    expect(component.submitted()).toBeTrue();
  });

  it('rejects a malformed email', () => {
    component.form.controls.email.setValue('not-an-email');
    expect(component.form.controls.email.valid).toBeFalse();
  });

  it('becomes valid once all required fields are filled', () => {
    component.form.setValue({
      prenom: 'Marion', nom: 'Fassier', email: 'test@mevolia.fr',
      telephone: '', source: '', demande: 'VAE', message: 'Bonjour, je souhaite un accompagnement.',
    });
    expect(component.form.valid).toBeTrue();
  });
});
