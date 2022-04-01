import React, { useContext, useState, useMemo } from 'react';
import Header from './Header';
import Pricing from './Pricing';
import { appContext } from '../context';
import '../style/app.sass';

const App = () => {
  const [isPricePeriodMonthly, setIsPricePeriodMonthly] = useState(true);

  const contextValue = useMemo(
    () => ({
      isPricePeriodMonthly,
      setIsPricePeriodMonthly,
    }),
    [isPricePeriodMonthly]
  );

  return (
    <div className='App'>
      <appContext.Provider value={contextValue}>
        <Header />
        <Pricing />
      </appContext.Provider>
    </div>
  );
};

export default App;
