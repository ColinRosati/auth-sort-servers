import React, { FC } from 'react';

import NavBar from 'components/layout/NavBar/NavBar';
import { useAppSelector } from 'store/hooks';

import styles from './FullpageLayout.module.scss';

const errorMessageConfig = {
  token: 'Problem with sign-in',
  server: 'Problem with server response',
};

const FullpageLayout: FC = ({ children }) => {
  const errorToken = useAppSelector(
    (state) => state?.tokens?.errors?.hasErrors,
  );
  const errorServer = useAppSelector(
    (state): boolean => state.servers.hasError,
  );

  const shouldDisplayError = errorToken || errorServer;

  return (
    <>
      <NavBar />
      <div className={styles.fullpageLayoutWrapper}>
        {shouldDisplayError && (
          <div className={styles.alertBox} data-testid='FullpageLayout__error'>
            <h3>{errorMessageConfig[errorToken ? 'token' : 'server']}</h3>
          </div>
        )}
        {children}
      </div>
    </>
  );
};

export default FullpageLayout;
