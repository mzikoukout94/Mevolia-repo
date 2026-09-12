import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { ContentService } from '../../core/services/content.service';
import { SITE_CONFIG } from '../../core/config/site-config';

@Component({
  selector: 'app-contact',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, PageHeroComponent, ButtonComponent, IconComponent, RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  private readonly content = inject(ContentService);
  readonly config = inject(SITE_CONFIG);

  readonly reasons = this.content.getContactReasons();
  readonly requestTypes = ['Bilan de compétences', 'VAE', 'Conception pédagogique', 'Autre'];

  readonly submitted = signal(false);
  readonly sent = signal(false);

  readonly form = this.fb.nonNullable.group({
    prenom: ['', [Validators.required, Validators.minLength(2)]],
    nom: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    telephone: [''],
    source: [''],
    demande: ['', [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  invalid(control: keyof typeof this.form.controls): boolean {
    const c = this.form.controls[control];
    return c.invalid && (c.touched || this.submitted());
  }

  onSubmit(): void {
    this.submitted.set(true);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      const firstInvalid = document.querySelector('.field .is-error, [aria-invalid="true"]') as HTMLElement | null;
      firstInvalid?.focus();
      return;
    }

    const v = this.form.getRawValue();
    const subject = `Demande via Mévolia — ${v.demande}`;
    const body =
      `Prénom : ${v.prenom}\n` +
      `Nom : ${v.nom}\n` +
      `Email : ${v.email}\n` +
      `Téléphone : ${v.telephone || 'non renseigné'}\n` +
      `Comment avez-vous connu Mévolia : ${v.source || 'non renseigné'}\n` +
      `Type de demande : ${v.demande}\n\n` +
      `Message :\n${v.message}\n`;

    const mailto = `mailto:${this.config.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    this.sent.set(true);
  }

  resetForm(): void {
    this.form.reset();
    this.submitted.set(false);
    this.sent.set(false);
  }
}
