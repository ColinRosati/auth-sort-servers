import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';

import FullpageLayout from 'components/layout/FullpageLayout/FullpageLayout';
import { postTokens } from 'store/tokens/thunks';

import styles from './Authorization.module.scss'

const Authorization = (): ReactElement => {
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(postTokens())
    event.stopPropagation();
  }

return (
  <FullpageLayout>
      <section className={styles.authWrapper}>
        <h2>Authorization</h2>
        <form className={styles.formWrapper} onSubmit={handleSubmit}>
          <label> 
            Email
            <input type="text" name="email" value="tesonet"/>
          </label>
          <label>
            Password
            <input type="text" name="password" value="partyanimal"/>
          </label>
          <input className={styles.submitButton} type="submit" value="Submit"/>
        </form>
      </section>
    </FullpageLayout>
)};

export default Authorization;