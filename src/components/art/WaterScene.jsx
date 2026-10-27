import { useId } from 'react';

/**
 * Atmospheric water / mountain scene used as the large editorial image
 * (story section). Decorative, laid out with object-cover behaviour.
 */
export default function WaterScene({ className = '' }) {
  const uid = useId().replace(/:/g, '');

  return (
    <svg
      className={className}
      viewBox="0 0 800 640"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`sky-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#bfe7f2" />
          <stop offset="0.42" stopColor="#8ec9de" />
          <stop offset="0.72" stopColor="#3d86a8" />
          <stop offset="1" stopColor="#0a2f4b" />
        </linearGradient>
        <linearGradient id={`peak-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f4fdff" />
          <stop offset="0.55" stopColor="#a8d4e3" />
          <stop offset="1" stopColor="#3f7896" />
        </linearGradient>
        <linearGradient id={`ridge-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2b6d8d" />
          <stop offset="1" stopColor="#0d3a55" />
        </linearGradient>
        <linearGradient id={`pool-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5fb7cf" />
          <stop offset="1" stopColor="#082a44" />
        </linearGradient>
        <radialGradient id={`sun-${uid}`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="800" height="640" fill={`url(#sky-${uid})`} />
      <circle cx="600" cy="120" r="150" fill={`url(#sun-${uid})`} opacity="0.65" />

      {/* far peaks */}
      <path
        d="M-40 430 150 210l120 140 80-70 210 200 130-120 170 170v70H-40Z"
        fill={`url(#ridge-${uid})`}
        opacity="0.55"
      />
      <path
        d="M40 452 232 236l86 96 60-48 170 168Z"
        fill={`url(#peak-${uid})`}
        opacity="0.9"
      />
      <path d="M232 236l-64 76 44 18 50-32 56 34-56-96Z" fill="#ffffff" opacity="0.85" />
      <path
        d="M430 470 590 300l80 84 60-40 110 126Z"
        fill={`url(#ridge-${uid})`}
        opacity="0.8"
      />

      {/* mist */}
      <ellipse cx="360" cy="430" rx="330" ry="52" fill="#ffffff" opacity="0.22" />
      <ellipse cx="560" cy="470" rx="240" ry="40" fill="#ffffff" opacity="0.16" />

      {/* water */}
      <path d="M0 468h800v172H0Z" fill={`url(#pool-${uid})`} />
      <path
        d="M0 480c120 14 220-10 340 4s220 22 340 6 120 6 120 6"
        fill="none"
        stroke="#cdf1f8"
        strokeOpacity="0.55"
        strokeWidth="3"
      />
      <path
        d="M0 520c140 12 240-12 380 2s240 18 420-2"
        fill="none"
        stroke="#9fe3f0"
        strokeOpacity="0.35"
        strokeWidth="2.5"
      />
      <path
        d="M150 552c90 10 160-8 260 2s180 12 260-4"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.22"
        strokeWidth="2"
      />

      {/* stream / waterfall highlight */}
      <path
        d="M260 372c30 34 40 66 46 100-22-6-46-6-64 2 10-36 6-70 18-102Z"
        fill="#e7fbff"
        opacity="0.4"
      />

      {/* foreground ripples */}
      <g stroke="#ffffff" strokeOpacity="0.3" fill="none">
        <ellipse cx="180" cy="590" rx="90" ry="10" />
        <ellipse cx="620" cy="606" rx="120" ry="12" />
      </g>
    </svg>
  );
}
