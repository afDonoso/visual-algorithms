import * as React from 'react'

function StackNode(props) {
  const x = 225.496 - 24.004 * (props.content.length - 1)

  return (
    <svg width={512} height={231} {...props}>
      <defs>
        <clipPath id="prefix__a">
          <path d="M0 0h512v231H0z" />
        </clipPath>
      </defs>
      <g clipPath="url(#prefix__a)">
        <path fill="rgba(35,206,253,0)" d="M0 0h512v231H0z" />
        <g data-name="Group 7">
          <path
            data-name="Path 8"
            d="M256.5 2.849l249.609 80.65L256.5 187.206 6.891 83.5z"
            fill="#00addd"
          />
          <path
            data-name="Path 10"
            d="M6.891 83.488v41.778l249.584 103.256v-41.806z"
            fill="#006d8b"
          />
          <path
            data-name="Path 11"
            d="M505.475 83.488v41.778L255.891 228.522v-41.806z"
            fill="#23cefd"
          />
          <text
            data-name={1}
            transform="translate(6.5 38)"
            fill="#fff"
            fontSize={80}
            fontFamily="AndaleMono, Andale Mono"
          >
            <tspan x={x} y={73}>
              {props.content}
            </tspan>
          </text>
        </g>
      </g>
    </svg>
  )
}

const MemoStackNode = React.memo(StackNode)
export default MemoStackNode
