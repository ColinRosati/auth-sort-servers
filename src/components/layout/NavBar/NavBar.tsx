import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { useAppSelector } from 'store/hooks';
import { deleteTokens } from 'store/tokens/thunks';

import styles from './NavBar.module.scss';

const NavBar = (): ReactElement => {
  const hasToken = useAppSelector((state) => state.tokens?.hasToken);
  const dispatch = useDispatch();

  const handleClick = (
    event: React.MouseEvent<HTMLHeadingElement, MouseEvent>,
  ): void => {
    event.preventDefault();
    dispatch(deleteTokens());
    event.stopPropagation();
  };

  return (
    <section className={styles.navBar}>
      <h2>Server Explorer</h2>
      {hasToken ? (
        <h4 onClick={handleClick}>Logout</h4>
      ) : (
        <Link to='/login'>Login</Link>
      )}
    </section>
  );
};

export default NavBar;
