import { ReactNode } from 'react';

export interface ILayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <>
      <h1>Layout</h1>
      <div>{children}</div>
    </>
  );
}
