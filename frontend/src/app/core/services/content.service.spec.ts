import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';
import { ContentService } from './content.service';

describe('ContentService (mock data layer)', () => {
  let service: ContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentService);
  });

  it('exposes the three core expertises', async () => {
    const expertises = await firstValueFrom(service.getExpertises());
    expect(expertises.length).toBe(3);
    expect(expertises.map((e) => e.id)).toEqual(['conception', 'vae', 'bilan']);
  });

  it('returns a 5-step working method', () => {
    const steps = service.getProcessSteps();
    expect(steps.length).toBe(5);
    expect(steps[0].number).toBe(1);
  });

  it('returns the 3 regulatory phases for the bilan de compétences', () => {
    expect(service.getBilanPhases().length).toBe(3);
  });

  it('returns FAQs for each service page', () => {
    expect(service.getConceptionFaqs().length).toBeGreaterThan(0);
    expect(service.getVaeFaqs().length).toBeGreaterThan(0);
    expect(service.getBilanFaqs().length).toBeGreaterThan(0);
  });
});
