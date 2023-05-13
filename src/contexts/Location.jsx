import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const LocationContext = createContext();

export function useLocationContext() {
  return useContext(LocationContext);
}

export function LocationProvider({ children }) {
  const [location, setLocation] = useState('welcome');
  const value = React.useMemo(
    () => ({ location, setLocation }),
    [location, setLocation]
  );
  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
}

LocationProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
