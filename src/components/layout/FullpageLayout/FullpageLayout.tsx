import React, { FC } from "react";

import { FullpageLayoutProps } from "./types";
import styles from './FullpageLayout.module.scss'

const FullpageLayout: FC<FullpageLayoutProps> = ({children}) => (
  <div className={styles.fullpageLayoutWrapper}>
    {children}
  </div>
)

export default FullpageLayout;