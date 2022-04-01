import React, { useMemo, useState } from 'react';

export const appContext = React.createContext({
  isPricePeriodMonthly: '',
  setIsPricePeriodMonthly: () => {},
});
