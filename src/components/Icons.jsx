const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: 'false',
};

export function LogoMark({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <rect width="48" height="48" rx="14" fill="#062a44" />
      <path
        d="M24 10c5.6 6.4 8.4 10.7 8.4 14.2A8.4 8.4 0 0 1 15.6 24.2C15.6 20.7 18.4 16.4 24 10Z"
        fill="#2ed0bd"
      />
      <path d="M17 30.5c4.7 2.7 9.3 2.7 14 0" stroke="#9fe3f0" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function SearchIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...base}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.5 15.5 20 20" />
    </svg>
  );
}

export function UserIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...base}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4.5 20c1.4-3.6 4.1-5.4 7.5-5.4s6.1 1.8 7.5 5.4" />
    </svg>
  );
}

export function CartIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...base}>
      <path d="M3 4h2.2l2.3 10.2A2 2 0 0 0 9.5 16H18a2 2 0 0 0 2-1.6L21 8H6" />
      <circle cx="10" cy="20" r="1.2" />
      <circle cx="17.5" cy="20" r="1.2" />
    </svg>
  );
}

export function MenuIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...base}>
      <path d="M4 7h16M4 12h16M4 17h10" />
    </svg>
  );
}

export function CloseIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...base}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function DropletIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...base}>
      <path d="M12 3.5c3.8 4.3 5.6 7.2 5.6 9.5a5.6 5.6 0 0 1-11.2 0c0-2.3 1.8-5.2 5.6-9.5Z" />
      <path d="M9.5 15.4c1.7 1 3.3 1 5 0" />
    </svg>
  );
}

export function FilterIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...base}>
      <rect x="8" y="3" width="8" height="18" rx="4" />
      <path d="M8 8h8M8 16h8" />
    </svg>
  );
}

export function TruckIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...base}>
      <path d="M2.5 6.5h10v9h-10z" />
      <path d="M12.5 10h4l3 3.2v2.3h-7z" />
      <circle cx="6.5" cy="17.8" r="1.6" />
      <circle cx="16.5" cy="17.8" r="1.6" />
    </svg>
  );
}

export function SupportIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...base}>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <path d="M4 12.5h2.2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5.4A1.4 1.4 0 0 1 4 17.1zM20 12.5h-2.2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h.8a1.4 1.4 0 0 0 1.4-1.4z" />
      <path d="M19 18.5c0 1.7-2 2.8-4.5 2.8" />
    </svg>
  );
}

export function CheckIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...base}>
      <path d="M4.5 12.5 9.5 17.5 19.5 6.5" />
    </svg>
  );
}

export function InfoIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...base}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 11v5.5M12 8.2v.2" />
    </svg>
  );
}

export function ChatIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...base}>
      <path d="M20 12.5c0 3.9-3.6 7-8 7a9.6 9.6 0 0 1-2.6-.35L5 21l1.2-3.3A6.7 6.7 0 0 1 4 12.5c0-3.9 3.6-7 8-7s8 3.1 8 7Z" />
      <path d="M9 12h.01M12 12h.01M15 12h.01" strokeWidth="2.2" />
    </svg>
  );
}

export function ArrowLeftIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...base}>
      <path d="M19 12H5M11 6l-6 6 6 6" />
    </svg>
  );
}

export function SparkIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...base}>
      <path d="M12 3.5l1.8 5.2 5.2 1.8-5.2 1.8L12 17.5l-1.8-5.2L5 10.5l5.2-1.8z" />
    </svg>
  );
}
