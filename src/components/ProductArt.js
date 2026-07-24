import React from "react";

export function CardamomArt() {
  return (
    <svg viewBox="0 0 320 260" className="product-art">
      <defs>
        <linearGradient id="podGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--leaf)" />
          <stop offset="100%" stopColor="var(--leaf-deep)" />
        </linearGradient>
      </defs>
      <ellipse cx="160" cy="200" rx="130" ry="26" fill="var(--cream-deep)" />
      {[
        [110, 150, 34, 20, -18],
        [150, 130, 38, 22, 4],
        [190, 148, 34, 20, 22],
        [130, 178, 36, 21, -6],
        [172, 182, 36, 21, 12],
        [220, 172, 30, 18, 30],
        [90, 182, 28, 17, -30],
      ].map(([x, y, rx, ry, rot], i) => (
        <g key={i} transform={`translate(${x} ${y}) rotate(${rot})`}>
          <ellipse rx={rx} ry={ry} fill="url(#podGrad)" opacity="0.96" />
          <path
            d={`M ${-rx * 0.7} 0 Q 0 ${-ry * 0.5} ${rx * 0.7} 0`}
            stroke="var(--cream)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.5"
          />
        </g>
      ))}
      <path
        d="M60 92 Q80 40 132 30"
        stroke="var(--leaf)"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M250 100 Q232 46 182 34"
        stroke="var(--leaf)"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="128" cy="30" rx="18" ry="9" fill="var(--leaf)" transform="rotate(-20 128 30)" />
      <ellipse cx="186" cy="32" rx="18" ry="9" fill="var(--leaf-deep)" transform="rotate(18 186 32)" />
    </svg>
  );
}

export function TurmericArt() {
  return (
    <svg viewBox="0 0 320 260" className="product-art">
      <defs>
        <linearGradient id="rootGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--turmeric)" />
          <stop offset="100%" stopColor="var(--turmeric-deep)" />
        </linearGradient>
      </defs>
      <ellipse cx="160" cy="205" rx="130" ry="24" fill="var(--cream-deep)" />
      <g>
        <path
          d="M70 180 C60 140 90 110 100 150 C104 118 140 100 138 140 C150 108 186 104 176 146 C196 118 226 128 210 162 C238 150 252 178 224 190 C170 208 110 206 70 180 Z"
          fill="url(#rootGrad)"
        />
        {[
          [100, 150],
          [140, 128],
          [176, 146],
          [206, 168],
        ].map(([x, y], i) => (
          <g key={i} transform={`translate(${x} ${y})`}>
            <line x1="-10" y1="0" x2="10" y2="0" stroke="var(--cream)" strokeWidth="2" opacity="0.5" />
            <line x1="-6" y1="8" x2="6" y2="8" stroke="var(--cream)" strokeWidth="2" opacity="0.4" />
          </g>
        ))}
      </g>
      <circle cx="228" cy="80" r="30" fill="var(--turmeric)" opacity="0.18" />
      <circle cx="228" cy="80" r="18" fill="var(--turmeric)" opacity="0.9" />
      <path d="M40 100 Q60 50 108 40" stroke="var(--leaf)" strokeWidth="4" fill="none" strokeLinecap="round" />
      <ellipse cx="104" cy="38" rx="20" ry="9" fill="var(--leaf)" transform="rotate(-14 104 38)" />
    </svg>
  );
}

export function FloralArt() {
  return (
    <svg viewBox="0 0 320 260" className="product-art">
      <defs>
        <radialGradient id="petalGrad" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="var(--floral-pink)" />
          <stop offset="100%" stopColor="var(--floral-lilac)" />
        </radialGradient>
      </defs>
      <ellipse cx="160" cy="210" rx="130" ry="22" fill="var(--cream-deep)" />
      {/* bottle */}
      <rect x="196" y="120" width="46" height="80" rx="10" fill="var(--paper)" stroke="var(--blue-deep)" strokeWidth="2.5" />
      <rect x="210" y="96" width="18" height="26" rx="4" fill="var(--blue)" />
      <rect x="205" y="84" width="28" height="14" rx="5" fill="var(--turmeric)" />
      <path d="M200 145 h38 M200 165 h38 M200 185 h38" stroke="var(--blue)" strokeWidth="2" opacity="0.35" />
      {/* flowers */}
      {[
        [90, 150, 26],
        [128, 110, 20],
        [66, 108, 16],
        [140, 168, 16],
      ].map(([x, y, r], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          {Array.from({ length: 6 }).map((_, p) => (
            <ellipse
              key={p}
              cx={0}
              cy={-r}
              rx={r * 0.5}
              ry={r}
              fill="url(#petalGrad)"
              opacity="0.92"
              transform={`rotate(${p * 60})`}
            />
          ))}
          <circle r={r * 0.35} fill="var(--turmeric)" />
        </g>
      ))}
      <path d="M92 176 Q60 190 48 210" stroke="var(--leaf)" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M128 130 Q118 150 100 156" stroke="var(--leaf)" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  );
}
