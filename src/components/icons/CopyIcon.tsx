import type React from 'react'
import { forwardRef, memo } from 'react'
import type { IconProps } from '@/types/icons'

const CopyIcon = memo(
  forwardRef<SVGSVGElement, IconProps>(
    (
      { size = 24, ariaLabel = 'Copy Icon', title = 'Copy', ...props },
      ref
    ): React.JSX.Element => {
      return (
        <svg
          ref={ref}
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-label={ariaLabel}
          role="img"
          {...props}
        >
          <title>{title}</title>
          <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
        </svg>
      )
    }
  )
)

export default CopyIcon
