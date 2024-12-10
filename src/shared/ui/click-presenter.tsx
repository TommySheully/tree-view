import type { ReactNode } from 'react';

type ClickPresenterProps = {
  children: ReactNode;
  className?: string;
};

export const ClickPresenter = ({ children, className }: ClickPresenterProps) => {
  return (
    <div
      onClick={(event) => event.stopPropagation()}
      className={className}
    >
      {children}
    </div>
  );
};
