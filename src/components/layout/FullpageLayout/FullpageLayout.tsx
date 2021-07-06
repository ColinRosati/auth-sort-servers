import React, { FC } from "react";

import NavBar from "components/layout/NavBar/NavBar";

import { FullpageLayoutProps } from "./types";
import styles from './FullpageLayout.module.scss'
import { useAppSelector } from "store/hooks";

const FullpageLayout: FC<FullpageLayoutProps> = ({children}) => {
  const error = useAppSelector(state => state?.tokens?.errors);
  console.log(useAppSelector(state => state?.tokens?.errors))
  const shouldDisplayError = error ? error.hasErrors : false;
  return (
  <>
  <NavBar />
  <div className={styles.fullpageLayoutWrapper}>
    {shouldDisplayError && <div className={styles.alertBox} data-testid="FullpageLayout__error"><h2>{error?.errorMessage}</h2></div>}
    {children}
  </div>
  </>
)}

export default FullpageLayout;