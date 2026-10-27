import { useId } from 'react';

/** Faucet / accessory illustration. */
export default function FaucetArt({ className = '' }) {
  const uid = useId().replace(/:/g, '');

  return (
    <svg className={className} viewBox="0 0 260 300" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={`metal-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.45" stopColor="#c6e0ea" />
          <stop offset="1" stopColor="#6e94a6" />
        </linearGradient>
        <linearGradient id={`drop-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d9f7ff" />
          <stop offset="1" stopColor="#5fbdd6" />
        </linearGradient>
      </defs>

      <ellipse cx="130" cy="272" rx="72" ry="10" fill="#04121f" opacity="0.2" />
      <rect x="88" y="228" width="84" height="20" rx="8" fill={`url(#metal-${uid})`} />
      <rect x="116" y="122" width="28" height="112" rx="13" fill={`url(#metal-${uid})`} />
      <path
        d="M130 128V92c0-26 20-46 46-46h8"
        fill="none"
        stroke={`url(#metal-${uid})`}
        strokeWidth="16"
        strokeLinecap="round"
      />
      <rect x="172" y="34" width="26" height="24" rx="10" fill={`url(#metal-${uid})`} />
      <rect x="98" y="104" width="64" height="16" rx="8" fill={`url(#metal-${uid})`} opacity="0.9" />
      <path
        d="M185 66c4.6 5.4 6.8 8.6 6.8 11.4a6.8 6.8 0 0 1-13.6 0c0-2.8 2.2-6 6.8-11.4Z"
        fill={`url(#drop-${uid})`}
      />
      <path
        d="M185 92c3 3.6 4.4 5.6 4.4 7.4a4.4 4.4 0 0 1-8.8 0c0-1.8 1.4-3.8 4.4-7.4Z"
        fill={`url(#drop-${uid})`}
        opacity="0.7"
      />
      <rect x="124" y="150" width="3" height="60" rx="1.5" fill="#ffffff" opacity="0.6" />
    </svg>
  );
}
