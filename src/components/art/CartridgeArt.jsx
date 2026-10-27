import { useId } from 'react';

/** Replacement filter cartridge illustration. variant: 'pre' | 'membrane' */
export default function CartridgeArt({ variant = 'pre', className = '' }) {
  const uid = useId().replace(/:/g, '');
  const isMembrane = variant === 'membrane';

  return (
    <svg className={className} viewBox="0 0 200 320" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={`cart-${uid}`} x1="0" y1="0" x2="1" y2="0.2">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.38" stopColor={isMembrane ? '#dff3fa' : '#f1fbfe'} />
          <stop offset="0.72" stopColor={isMembrane ? '#8fc6db' : '#bcdbe7'} />
          <stop offset="1" stopColor={isMembrane ? '#4f8ba3' : '#7fa8ba'} />
        </linearGradient>
        <linearGradient id={`cap-${uid}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#f8fdff" />
          <stop offset="0.5" stopColor="#c4dde8" />
          <stop offset="1" stopColor="#7c9fae" />
        </linearGradient>
        <linearGradient id={`band-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2ed0bd" />
          <stop offset="1" stopColor="#0c9488" />
        </linearGradient>
      </defs>

      <ellipse cx="100" cy="296" rx="62" ry="9" fill="#04121f" opacity="0.2" />
      <rect x="52" y="34" width="96" height="16" rx="8" fill={`url(#cap-${uid})`} />
      <rect x="58" y="48" width="84" height="18" rx="7" fill={`url(#cap-${uid})`} opacity="0.85" />
      <rect x="46" y="64" width="108" height="216" rx="26" fill={`url(#cart-${uid})`} />
      <rect x="46" y="64" width="108" height="216" rx="26" fill="none" stroke="#ffffff" strokeOpacity="0.75" />
      <rect x="46" y="126" width="108" height="52" fill={`url(#band-${uid})`} opacity={isMembrane ? 0.9 : 0.75} />
      <rect x="46" y="126" width="108" height="4" fill="#ffffff" opacity="0.45" />
      <rect x="60" y="80" width="11" height="170" rx="5.5" fill="#ffffff" opacity="0.55" />
      <rect x="46" y="238" width="108" height="8" fill="#ffffff" opacity="0.35" />
      {isMembrane && (
        <g stroke="#0c9488" strokeOpacity="0.45" strokeWidth="2.5" fill="none">
          <path d="M64 200c14-10 28 8 42-2s22 6 32-4" />
          <path d="M64 216c14-10 28 8 42-2s22 6 32-4" />
        </g>
      )}
      <rect x="60" y="258" width="80" height="6" rx="3" fill="#5b93a8" opacity="0.35" />
    </svg>
  );
}
