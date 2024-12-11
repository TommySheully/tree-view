import { cva } from 'class-variance-authority'

export const fieldVariants = cva(
  'placeholder-inherit regular-base border-b-2 border-b-transparent',
  {
    variants: {
      inputSize: {
        sm: 'placeholder:text-sm py-[9px] px-[10px] regular-m',
        md: 'placeholder:text-sm py-[10px]  px-4 regular-m',
        lg: 'placeholder:text-base p-4 regular-base',
        xl: 'placeholder:text-base p-4 regular-base',
      },
      focus_type: {
        focus:
          'focus:text-pure-base focus-visible:outline-0 focus:border-b-primary-600 focus:border-b-red-600 focus:caret-red focus:opacity-100',
        focus_within:
          'focus-within:text-pure-base focus-within:outline-0 focus-within:border-b-primary-600 focus-within:border-b-red-600 focus-within:caret-red focus:opacity-100',
      },
    },
    defaultVariants: {
      inputSize: 'md',
      focus_type: 'focus',
    },
  },
)
