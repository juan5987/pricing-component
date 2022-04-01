import React, { useContext, useState } from 'react';
import { appContext } from '../context';
import '../style/header.sass';

const Header = () => {
  const { isPricePeriodMonthly, setIsPricePeriodMonthly } =
    useContext(appContext);

  return (
    <div className='header'>
      <h1 className='header__title'>Our Pricing</h1>
      <div className='header__toggler'>
        <span className='header__toggler__text'>Annually</span>
        <div className='header__toggler__container'>
          <div
            onClick={() => setIsPricePeriodMonthly(!isPricePeriodMonthly)}
            className={
              isPricePeriodMonthly
                ? 'header__toggler__container__circle header__toggler__container__circle--monthly'
                : 'header__toggler__container__circle header__toggler__container__circle--annually'
            }
          ></div>
        </div>
        <span className='header__toggler__text'>Monthly</span>
      </div>
    </div>
  );
};

export default Header;
