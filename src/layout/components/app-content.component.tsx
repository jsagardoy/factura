import * as React from 'react';
interface AppContentProps {}

export const AppContent: React.FC<AppContentProps> = props => {
  const { children } = props;
  return <>{children}</>;
};
