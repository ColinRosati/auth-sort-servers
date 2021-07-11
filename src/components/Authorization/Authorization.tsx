import React, { ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';

import FullpageLayout from 'components/layout/FullpageLayout/FullpageLayout';
import { postTokens } from 'store/tokens/thunks';

import styles from './Authorization.module.scss';
import { FeildsState, InputElementValue } from './types';

const Authorization = (): ReactElement => {
  const dispatch = useDispatch();
  const [feilds, setFeilds] = useState<FeildsState>({
    email: 'tesonet',
    password: 'partyanimal',
  });

  const handleChange = ({ name, value }: InputElementValue) => {
    setFeilds({
      ...feilds,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    dispatch(postTokens(feilds));
    event.preventDefault();
  };

  return (
    <FullpageLayout>
      <section className={styles.authWrapper}>
        <h2>Authorization</h2>
        <form className={styles.formWrapper} onSubmit={handleSubmit}>
          <label>
            Email
            <input
              name='email'
              value={feilds.email}
              onChange={({ target }) => handleChange(target)}
            />
          </label>
          <label>
            Password
            <input
              name='password'
              value={feilds.password}
              onChange={({ target }) => handleChange(target)}
            />
          </label>
          <input className={styles.submitButton} type='submit' value='Submit' />
        </form>
      </section>
    </FullpageLayout>
  );
};

export default Authorization;
