import { cva } from 'class-variance-authority'

export const iconVariants = cva(
  'absolute cursor-pointer top-1/2 -translate-y-1/2',
  {
    variants: {
      inputSize: {
        sm: 'right-[10px] min-w-[18px] h-[18px] text-inherit',
        md: 'right-4 min-w-[18px] h-[18px] text-inherit',
        lg: 'right-4 h-5 min-w-5 text-inherit',
        xl: 'right-4 h-5 min-w-5 text-inherit',
      },
    },
    defaultVariants: {
      inputSize: 'lg',
    },
  },
)
