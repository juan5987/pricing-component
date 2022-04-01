import React, { useContext } from 'react';
import { appContext } from '../context';
import '../style/pricing.sass';

const Pricing = () => {
  const { isPricePeriodMonthly, setIsPricePeriodMonthly } =
    useContext(appContext);

  return (
    <div className='pricing'>
      <div className='pricing__container pricing__container--left'>
        <h1 className='pricing__container__title'>Basic</h1>
        <div className='pricing__container__price'>
          <span className='pricing__container__price__symbol'>$</span>
          {isPricePeriodMonthly ? 19.99 : 199.99}
        </div>
        <div className='pricing__container__details'>500 GB Storage</div>
        <div className='pricing__container__details'>2 Users Allowed</div>
        <div className='pricing__container__details'>Send up to 3 GB</div>
        <button className='pricing__container__button'>learn more</button>
      </div>
      <div className='pricing__container pricing__container--middle'>
        <h1 className='pricing__container__title'>Professional</h1>
        <div className='pricing__container__price pricing__container__price--middle'>
          <span className='pricing__container__price__symbol'>$</span>
          {isPricePeriodMonthly ? 24.99 : 249.99}
        </div>
        <div className='pricing__container__details--middle'>1 TB Storage</div>
        <div className='pricing__container__details--middle'>
          5 Users Allowed
        </div>
        <div className='pricing__container__details--middle'>
          Send up to 10 GB
        </div>
        <button className='pricing__container__button pricing__container__button--middle'>
          learn more
        </button>
      </div>
      <div className='pricing__container pricing__container--right'>
        <h1 className='pricing__container__title'>Master</h1>
        <div className='pricing__container__price'>
          <span className='pricing__container__price__symbol'>$</span>
          {isPricePeriodMonthly ? 39.99 : 399.99}
        </div>
        <div className='pricing__container__details'>2 TB Storage</div>
        <div className='pricing__container__details'>10 Users Allowed</div>
        <div className='pricing__container__details'>Send up to 20 GB</div>
        <button className='pricing__container__button'>learn more</button>
      </div>
    </div>
  );
};

export default Pricing;
