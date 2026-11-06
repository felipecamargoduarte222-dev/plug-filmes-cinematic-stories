import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

type IconProps = { className?: string };

const WhatsApp = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.76-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z" />
  </svg>
);
const Instagram = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className} aria-hidden>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const Facebook = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 16.99 22 12c0-5.52-4.48-10-10-10Z" />
  </svg>
);
const LinkedIn = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M20.45 2H3.55C2.7 2 2 2.7 2 3.55v16.9C2 21.3 2.7 22 3.55 22h16.9c.85 0 1.55-.7 1.55-1.55V3.55C22 2.7 21.3 2 20.45 2ZM8.06 19.03H5.08V9.5h2.98v9.53ZM6.57 8.2a1.73 1.73 0 1 1 0-3.46 1.73 1.73 0 0 1 0 3.46Zm12.46 10.83h-2.97v-4.64c0-1.1-.02-2.53-1.54-2.53-1.55 0-1.78 1.21-1.78 2.45v4.72H9.77V9.5h2.85v1.3h.04c.4-.75 1.37-1.54 2.81-1.54 3.01 0 3.56 1.98 3.56 4.55v5.22Z" />
  </svg>
);
const Vimeo = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M3 2h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm15.4 6.2c.07-1.48-.48-2.24-1.64-2.27-1.57-.05-2.63.84-3.18 2.66.28-.12.56-.19.83-.19.57 0 .82.32.75.96-.03.39-.28.95-.75 1.69-.47.74-.83 1.11-1.06 1.11-.31 0-.58-.58-.83-1.73-.08-.34-.23-1.21-.45-2.6-.2-1.29-.75-1.89-1.64-1.81-.38.04-.94.37-1.69 1.01-.55.49-1.1.98-1.66 1.47l.54.69c.51-.36.81-.54.9-.54.39 0 .76.61 1.1 1.84l.92 3.37c.46 1.23 1.02 1.84 1.69 1.84 1.07 0 2.39-1.01 3.94-3.02 1.5-1.93 2.28-3.45 2.33-4.56Z" />
  </svg>
);
const YouTube = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.82.42A2.5 2.5 0 0 0 2.42 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .42 4.81 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.42-4.81ZM10 15V9l5.2 3L10 15Z" />
  </svg>
);

const ITEMS = [
  { label: "WhatsApp", href: SITE.socials.whatsapp, Icon: WhatsApp },
  { label: "Instagram", href: SITE.socials.instagram, Icon: Instagram },
  { label: "Facebook", href: SITE.socials.facebook, Icon: Facebook },
  { label: "LinkedIn", href: SITE.socials.linkedin, Icon: LinkedIn },
  { label: "Vimeo", href: SITE.socials.vimeo, Icon: Vimeo },
  { label: "YouTube", href: SITE.socials.youtube, Icon: YouTube },
];

export function SocialIcons({ className, iconClassName }: { className?: string; iconClassName?: string }) {
  return (
    <ul className={cn("flex items-center gap-3", className)}>
      {ITEMS.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="block text-foreground transition-opacity duration-300 hover:opacity-60"
          >
            <Icon className={cn("h-7 w-7", iconClassName)} />
          </a>
        </li>
      ))}
    </ul>
  );
}
