import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const DestinationContext = createContext();

export function useDestinationContext() {
  return useContext(DestinationContext);
}

export function DestinationProvider({ children }) {
  const [destination, setDestination] = useState(null);
  const value = React.useMemo(
    () => ({ destination, setDestination }),
    [destination, setDestination]
  );
  return (
    <DestinationContext.Provider value={value}>
      {children}
    </DestinationContext.Provider>
  );
}
DestinationProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
