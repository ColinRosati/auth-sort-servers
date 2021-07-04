import React, { FC } from "react";

import NavBar from "components/layout/NavBar/NavBar";

import { FullpageLayoutProps } from "./types";
import styles from './FullpageLayout.module.scss'

const FullpageLayout: FC<FullpageLayoutProps> = ({children}) => (
  <>
  <NavBar />
  <div className={styles.fullpageLayoutWrapper}>
    {children}
  </div>
  </>
)

export default FullpageLayout;