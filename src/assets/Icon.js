import * as React from "react";

function Icon(props) {
  return (
    <svg width={30} height={30} {...props}>
      <defs>
        <clipPath id="prefix__a">
          <path d="M0 0h30v30H0z" />
        </clipPath>
      </defs>
      <g clipPath="url(#prefix__a)">
        <path fill="rgba(255,255,255,0)" d="M0 0h30v30H0z" />
        <g data-name="Group 3" transform="rotate(-13 18.395 -6.71)">
          <circle
            data-name="Ellipse 1"
            cx={2.199}
            cy={2.199}
            r={2.199}
            fill="#00ceff"
          />
          <circle
            data-name="Ellipse 2"
            cx={2.199}
            cy={2.199}
            r={2.199}
            transform="translate(1.718 19.447)"
            fill="#00ceff"
          />
          <circle
            data-name="Ellipse 3"
            cx={2.199}
            cy={2.199}
            r={2.199}
            transform="translate(12.971 2.642)"
            fill="#00ceff"
          />
          <circle
            data-name="Ellipse 4"
            cx={2.199}
            cy={2.199}
            r={2.199}
            transform="translate(16.178 22.58)"
            fill="#00ceff"
          />
          <path
            data-name="Line 1"
            fill="none"
            stroke="#23cefd"
            strokeLinecap="round"
            d="M2.298 2.349l1.948 19.256"
          />
          <path
            data-name="Line 2"
            fill="none"
            stroke="#23cefd"
            strokeLinecap="round"
            d="M4.246 21.605l10.55-16.371"
          />
          <path
            data-name="Line 4"
            fill="none"
            stroke="#23cefd"
            strokeLinecap="round"
            d="M8.395 15.04l8.927 2.061"
          />
          <path
            data-name="Line 3"
            fill="none"
            stroke="#23cefd"
            strokeLinecap="round"
            d="M18.529 24.903L15.235 4.96"
          />
        </g>
      </g>
    </svg>
  );
}

const MemoIcon = React.memo(Icon);
export default MemoIcon;
