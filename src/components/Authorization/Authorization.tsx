import React, { ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';

import FullpageLayout from 'components/layout/FullpageLayout/FullpageLayout';
import { postTokens } from 'store/tokens/thunks';

import styles from './Authorization.module.scss'
import { FeildsState } from './types';

const Authorization = (): ReactElement => {
  const dispatch = useDispatch();
  const [feilds, setFeilds] = useState<FeildsState>({
    email: 'tesonet',
    password: 'partyanimal',
  });

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const name = (event.target as any).name;
    const value = (event.target as any).value;

    setFeilds({
      ...feilds,
      [name]: value
    })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(postTokens(feilds));
    event.stopPropagation();
  }

return (
  <FullpageLayout>
      <section className={styles.authWrapper}>
        <h2>Authorization</h2>
        <form className={styles.formWrapper} onSubmit={handleSubmit}>
          <label> 
            Email
            <input name="email" value={feilds.email} onChange={handleChange}/>
          </label>
          <label>
            Password
            <input name="password" value={feilds.password} onChange={handleChange}/>
          </label>
          <input className={styles.submitButton} type="submit" value="Submit"/>
        </form>
      </section>
    </FullpageLayout>
)};

export default Authorization;