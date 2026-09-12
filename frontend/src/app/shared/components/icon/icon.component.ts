import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type IconName =
  | 'sprout' | 'leaf' | 'lightbulb' | 'clipboard' | 'monitor' | 'users' | 'clock'
  | 'ear' | 'award' | 'target' | 'puzzle' | 'book' | 'rocket' | 'message-circle'
  | 'arrow-right' | 'plus' | 'minus' | 'menu' | 'x' | 'chevron-down' | 'chevron-right'
  | 'mail' | 'phone' | 'map-pin' | 'linkedin' | 'check' | 'check-circle' | 'file-text'
  | 'presentation' | 'list-checks' | 'compass' | 'search' | 'heart' | 'graduation-cap'
  | 'briefcase' | 'sparkles' | 'pen' | 'layers' | 'download' | 'calendar' | 'quote'
  | 'star' | 'key' | 'flag' | 'folder' | 'shield' | 'handshake' | 'refresh';

@Component({
  selector: 'app-icon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      [attr.width]="size()"
      [attr.height]="size()"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      [attr.stroke-width]="strokeWidth()"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      @switch (name()) {
        @case ('sprout') { <path d="M7 20h10"/><path d="M12 20c0-6 0-9-4-11 4 0 6 2 6 4"/><path d="M12 14c0-4 2-6 6-6-0 4-2 6-6 6"/> }
        @case ('leaf') { <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 22 17 7"/> }
        @case ('lightbulb') { <path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1h6c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2z"/> }
        @case ('clipboard') { <rect x="8" y="3" width="8" height="4" rx="1"/><path d="M16 5h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"/> }
        @case ('monitor') { <rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M8 20h8"/><path d="M12 16v4"/> }
        @case ('users') { <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/> }
        @case ('handshake') { <path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.9-3.9a2 2 0 0 0-2.8 0l-.4.4a1 1 0 1 1-3-3l2.6-2.6a2 2 0 0 1 2.7-.2l4 3.3"/><path d="m21 3-1 1"/><path d="M3 4l4-1 7 6"/><path d="m3 11 4 4"/> }
        @case ('clock') { <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/> }
        @case ('ear') { <path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 0 1-7 0"/><path d="M6.5 12.5A3.5 3.5 0 0 0 10 9"/> }
        @case ('award') { <circle cx="12" cy="9" r="6"/><path d="M8.2 14.9 7 22l5-3 5 3-1.2-7.1"/> }
        @case ('target') { <circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/> }
        @case ('puzzle') { <path d="M10 4a2 2 0 1 1 4 0v1h3a1 1 0 0 1 1 1v3h1a2 2 0 1 1 0 4h-1v3a1 1 0 0 1-1 1h-3v-1a2 2 0 1 0-4 0v1H6a1 1 0 0 1-1-1v-3H4a2 2 0 1 1 0-4h1V6a1 1 0 0 1 1-1h4V4z"/> }
        @case ('book') { <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/> }
        @case ('rocket') { <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.9 12.9 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/> }
        @case ('message-circle') { <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z"/> }
        @case ('arrow-right') { <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/> }
        @case ('chevron-right') { <path d="m9 6 6 6-6 6"/> }
        @case ('chevron-down') { <path d="m6 9 6 6 6-6"/> }
        @case ('plus') { <path d="M12 5v14"/><path d="M5 12h14"/> }
        @case ('minus') { <path d="M5 12h14"/> }
        @case ('menu') { <path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/> }
        @case ('x') { <path d="M18 6 6 18"/><path d="m6 6 12 12"/> }
        @case ('mail') { <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/> }
        @case ('phone') { <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/> }
        @case ('map-pin') { <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/> }
        @case ('linkedin') { <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/> }
        @case ('check') { <path d="M20 6 9 17l-5-5"/> }
        @case ('check-circle') { <circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.5 2.5 4.5-5"/> }
        @case ('file-text') { <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/> }
        @case ('presentation') { <path d="M2 3h20"/><path d="M3 3v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V3"/><path d="M12 15v6"/><path d="m8 21 4-3 4 3"/> }
        @case ('list-checks') { <path d="M11 6h10"/><path d="M11 12h10"/><path d="M11 18h10"/><path d="m3 6 1.5 1.5L7 5"/><path d="m3 12 1.5 1.5L7 11"/><path d="m3 18 1.5 1.5L7 17"/> }
        @case ('compass') { <circle cx="12" cy="12" r="9"/><path d="m16.2 7.8-2.1 6.3-6.3 2.1 2.1-6.3z"/> }
        @case ('search') { <circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/> }
        @case ('heart') { <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1L12 21.2l7.7-7.7 1.1-1a5.5 5.5 0 0 0 0-7.9z"/> }
        @case ('graduation-cap') { <path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1 2.5 2 6 2s6-1 6-2v-5"/> }
        @case ('briefcase') { <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M2 12h20"/> }
        @case ('sparkles') { <path d="M12 3l1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2z"/><path d="M19 3v3"/><path d="M20.5 4.5h-3"/> }
        @case ('pen') { <path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/> }
        @case ('layers') { <path d="M12 2 2 7l10 5 10-5z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/> }
        @case ('download') { <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/> }
        @case ('calendar') { <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/> }
        @case ('quote') { <path d="M6 17c3 0 4-2 4-5V6H4v6h4c0 3-2 3-2 3z"/><path d="M18 17c3 0 4-2 4-5V6h-6v6h4c0 3-2 3-2 3z"/> }
        @case ('star') { <path d="M12 2 15.1 8.3 22 9.3l-5 4.9 1.2 6.9L12 17.8 5.8 21l1.2-6.9-5-4.9 6.9-1z"/> }
        @case ('key') { <circle cx="7.5" cy="15.5" r="4.5"/><path d="m10.5 12.5 8-8"/><path d="m16 6 2 2"/><path d="m18.5 3.5 2 2"/> }
        @case ('flag') { <path d="M4 22V4"/><path d="M4 4h13l-2 4 2 4H4"/> }
        @case ('folder') { <path d="M4 4h5l2 3h9a1 1 0 0 1 1 1v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/> }
        @case ('shield') { <path d="M12 2 4 5v6c0 5 3.4 8.4 8 10 4.6-1.6 8-5 8-10V5z"/> }
        @case ('refresh') { <path d="M21 12a9 9 0 1 1-2.6-6.4"/><path d="M21 3v6h-6"/> }
      }
    </svg>
  `,
  styles: [':host { display: inline-flex; line-height: 0; }'],
})
export class IconComponent {
  readonly name = input.required<IconName>();
  readonly size = input<number>(24);
  readonly strokeWidth = input<number>(1.6);
}
