import * as React from 'react';

import { FormControl, FormItem, FormLabel, FormMessage } from '@/shared/ui/form';

import { iconVariants, labelVariants, messageVariants } from './model';

import type { ReactNode } from 'react';
import type { FieldError } from 'react-hook-form';
import { clsx } from 'clsx';
import { ClickPresenter } from '@/shared';

export type Size = 'sm' | 'md' | 'lg' | 'xl' | null | undefined;

type FormFieldStyledProps = {
  disabled?: boolean;
  value: string | { id: string; text: string }[];
  error?: FieldError | undefined;
  fieldSize?: Size;
  children: ReactNode;
  icon?: ReactNode;
  label: ReactNode;
  hint?: string;
  onIconClick?: () => void;
  isFilter?: boolean;
  rightIcon?: ReactNode;
  className?: string;
  required?: boolean;
};

export const FormFieldStyled = ({
  disabled,
  value,
  error,
  fieldSize: inputSize,
  children,
  icon,
  label,
  onIconClick,
  rightIcon,
  hint,
  required,
  isFilter = false,
  className,
}: FormFieldStyledProps) => {
  return (
    <FormItem
      className={clsx(
        {
          'text-transparence-base-60 focus-within:text-transparence-base-80 group flex h-full flex-col items-start':
            !isFilter,
          'opacity-30': disabled,
          'hover:text-transparence-base-80': !disabled,
          'bg-transparence-primary-10 hover:bg-transparence-primary-30 hover:border-transparence-primary-40 active:bg-transparence-primary-10 active:border-transparence-primary-60 border-transparence-primary-30 flex h-[64px] w-full items-center justify-between rounded-br-[6px] rounded-tl-[6px] border px-4 py-3 disabled:pointer-events-none disabled:opacity-40':
            isFilter,
        },
        className,
      )}
    >
      {label && !isFilter && (
        <FormLabel
          className={clsx(labelVariants({ inputSize }), {
            'text-transparence-base-80': value,
          })}
        >
          {label} {required && <span className='text-pure-red'>*</span>}
        </FormLabel>
      )}
      {icon && isFilter && <span className='text-transparence-base-60 h-7 w-7'>{icon}</span>}
      <FormControl>
        {isFilter ? (
          <>
            <div className='flex items-center gap-4'>
              {icon && <span className='text-transparence-base-60 h-7 w-7 shrink-0'>{icon}</span>}
              <div className='flex flex-col items-start'>
                <span className='regular-m text-transparence-base-60'>{label}</span>
                <span className='regular-base text-pure-base'>{children}</span>
              </div>
            </div>
            {rightIcon && (
              <span
                onClick={onIconClick}
                className='text-primary-600 h-6 w-6 shrink-0'
              >
                {rightIcon}
              </span>
            )}
          </>
        ) : (
          <div className='relative h-full w-full'>
            {children}
            {icon && (
              <ClickPresenter>
                <span
                  className={clsx(iconVariants({ inputSize }), {
                    'text-pure-base': value,
                  })}
                  onClick={onIconClick}
                >
                  {icon}
                </span>
              </ClickPresenter>
            )}
          </div>
        )}
      </FormControl>
      {error && (
        <FormMessage className={clsx(messageVariants({ type: 'error', inputSize }))}>
          {error?.message}
        </FormMessage>
      )}
      {hint && !error && (
        <FormMessage className={clsx(messageVariants({ type: 'hint', inputSize }))}>
          {hint}
        </FormMessage>
      )}
    </FormItem>
  );
};
