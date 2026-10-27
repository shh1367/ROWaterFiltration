import { useId } from 'react';

/**
 * Stylized RO purification system illustration.
 * variant: 'undersink' | 'countertop' | 'rack'
 * Pure decoration paired with real alt text at the call site.
 */
export default function SystemArt({ variant = 'undersink', className = '' }) {
  const uid = useId().replace(/:/g, '');

  if (variant === 'rack') {
    return (
      <svg className={className} viewBox="0 0 320 320" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id={`frame-${uid}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f2fbff" />
            <stop offset="0.55" stopColor="#bfe3f0" />
            <stop offset="1" stopColor="#7fbfd6" />
          </linearGradient>
          <linearGradient id={`vessel-${uid}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="0.45" stopColor="#d7f0f8" />
            <stop offset="1" stopColor="#8fc9de" />
          </linearGradient>
          <linearGradient id={`water-${uid}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8fe4f2" stopOpacity="0.9" />
            <stop offset="1" stopColor="#12b3a1" stopOpacity="0.85" />
          </linearGradient>
        </defs>
        <ellipse cx="160" cy="296" rx="118" ry="14" fill="#04121f" opacity="0.28" />
        <rect x="26" y="42" width="268" height="234" rx="20" fill={`url(#frame-${uid})`} opacity="0.35" />
        <rect x="26" y="42" width="268" height="234" rx="20" fill="none" stroke="#ffffff" strokeOpacity="0.55" />
        <rect x="40" y="34" width="240" height="22" rx="11" fill={`url(#frame-${uid})`} />
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect
              x={54 + i * 78}
              y="62"
              width="58"
              height="196"
              rx="26"
              fill={`url(#vessel-${uid})`}
              stroke="#ffffff"
              strokeOpacity="0.7"
            />
            <rect x={54 + i * 78} y="176" width="58" height="82" rx="24" fill={`url(#water-${uid})`} opacity="0.7" />
            <rect x={54 + i * 78} y="86" width="58" height="16" rx="8" fill="#0c9488" opacity="0.75" />
            <rect x={68 + i * 78} y="72" width="10" height="176" rx="5" fill="#ffffff" opacity="0.5" />
          </g>
        ))}
        <rect x="40" y="250" width="240" height="18" rx="9" fill={`url(#frame-${uid})`} opacity="0.9" />
      </svg>
    );
  }

  if (variant === 'countertop') {
    return (
      <svg className={className} viewBox="0 0 280 340" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id={`shell-${uid}`} x1="0.1" y1="0" x2="0.9" y2="1">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="0.5" stopColor="#d8eff8" />
            <stop offset="1" stopColor="#93c9dd" />
          </linearGradient>
          <linearGradient id={`glass-${uid}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#e9fbff" stopOpacity="0.95" />
            <stop offset="1" stopColor="#6fc3d8" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id={`metal-${uid}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f7fdff" />
            <stop offset="0.5" stopColor="#a9c9d6" />
            <stop offset="1" stopColor="#5f8fa3" />
          </linearGradient>
        </defs>
        <ellipse cx="146" cy="316" rx="96" ry="12" fill="#04121f" opacity="0.22" />
        <rect x="46" y="128" width="188" height="180" rx="26" fill={`url(#shell-${uid})`} />
        <rect x="46" y="128" width="188" height="180" rx="26" fill="none" stroke="#ffffff" strokeOpacity="0.8" />
        <rect x="64" y="146" width="152" height="58" rx="12" fill="#ffffff" opacity="0.55" />
        <rect x="64" y="146" width="152" height="58" rx="12" fill="none" stroke="#7fbcd2" strokeOpacity="0.5" />
        <circle cx="82" cy="166" r="4" fill="#12b3a1" />
        <circle cx="98" cy="166" r="4" fill="#2ed0bd" opacity="0.7" />
        <rect x="82" y="182" width="86" height="5" rx="2.5" fill="#5b93a8" opacity="0.5" />
        <rect x="82" y="192" width="54" height="5" rx="2.5" fill="#5b93a8" opacity="0.32" />
        <rect x="64" y="216" width="152" height="72" rx="14" fill={`url(#glass-${uid})`} />
        <rect x="76" y="228" width="34" height="48" rx="10" fill="#ffffff" opacity="0.5" />
        <rect x="122" y="228" width="34" height="48" rx="10" fill="#9fe3f0" opacity="0.75" />
        <rect x="168" y="228" width="34" height="48" rx="10" fill="#ffffff" opacity="0.5" />
        <path
          d="M150 46v52c0 8 6 14 14 14h18"
          fill="none"
          stroke={`url(#metal-${uid})`}
          strokeWidth="11"
          strokeLinecap="round"
        />
        <path
          d="M182 112v18"
          fill="none"
          stroke={`url(#metal-${uid})`}
          strokeWidth="11"
          strokeLinecap="round"
        />
        <rect x="130" y="40" width="40" height="18" rx="9" fill={`url(#metal-${uid})`} />
        <path d="M188 136c0 5-4 9-9 9s-9-4-9-9 9-16 9-16 9 11 9 16Z" fill="#9fe3f0" opacity="0.85" />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 300 380" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={`tank-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f4fdff" stopOpacity="0.95" />
          <stop offset="0.55" stopColor="#b6e2ef" stopOpacity="0.9" />
          <stop offset="1" stopColor="#6aacc4" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id={`body-${uid}`} x1="0.05" y1="0" x2="0.95" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.42" stopColor="#dff2f9" />
          <stop offset="1" stopColor="#8cc4d9" />
        </linearGradient>
        <linearGradient id={`cart-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#eafaff" />
          <stop offset="0.5" stopColor="#b7e4f1" />
          <stop offset="1" stopColor="#6fb2c9" />
        </linearGradient>
        <linearGradient id={`waterline-${uid}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#2ed0bd" />
          <stop offset="1" stopColor="#9fe3f0" />
        </linearGradient>
      </defs>

      <ellipse cx="152" cy="358" rx="104" ry="13" fill="#04121f" opacity="0.24" />

      {/* tank */}
      <rect x="86" y="24" width="124" height="94" rx="22" fill={`url(#tank-${uid})`} />
      <rect x="98" y="62" width="100" height="44" rx="14" fill="#7fd3e6" opacity="0.55" />
      <path d="M98 74c18 8 34-6 50 2s32 4 50-2" fill="none" stroke="#ffffff" strokeOpacity="0.75" strokeWidth="2.5" />
      <rect x="86" y="24" width="124" height="94" rx="22" fill="none" stroke="#ffffff" strokeOpacity="0.8" />
      <rect x="100" y="36" width="10" height="66" rx="5" fill="#ffffff" opacity="0.55" />

      {/* housing */}
      <rect x="58" y="130" width="184" height="216" rx="28" fill={`url(#body-${uid})`} />
      <rect x="58" y="130" width="184" height="216" rx="28" fill="none" stroke="#ffffff" strokeOpacity="0.85" strokeWidth="1.5" />

      {/* status panel */}
      <rect x="78" y="148" width="144" height="48" rx="12" fill="#ffffff" opacity="0.66" />
      <circle cx="96" cy="166" r="4.5" fill="#12b3a1" />
      <rect x="112" y="162" width="66" height="7" rx="3.5" fill="#5b93a8" opacity="0.55" />
      <rect x="96" y="180" width="108" height="5" rx="2.5" fill="#5b93a8" opacity="0.3" />

      {/* cartridges window */}
      <rect x="78" y="210" width="144" height="112" rx="16" fill="#eaf7fc" opacity="0.85" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={90 + i * 44} y="220" width="34" height="92" rx="16" fill={`url(#cart-${uid})`} />
          <rect x={90 + i * 44} y="228" width="34" height="8" rx="4" fill="#0c9488" opacity="0.6" />
          <rect x={98 + i * 44} y="234" width="6" height="70" rx="3" fill="#ffffff" opacity="0.6" />
        </g>
      ))}

      {/* outlet line + drip */}
      <rect x="146" y="118" width="8" height="16" rx="4" fill="#8fb9c8" />
      <path d="M150 330v14" stroke={`url(#waterline-${uid})`} strokeWidth="5" strokeLinecap="round" />
      <path
        d="M150 350c3.4 4 5 6.4 5 8.4a5 5 0 0 1-10 0c0-2 1.6-4.4 5-8.4Z"
        fill="#9fe3f0"
        opacity="0.9"
      />
    </svg>
  );
}
