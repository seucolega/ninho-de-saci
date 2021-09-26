import React from 'react';
import PropTypes from 'prop-types';

const providerFactory = (DataContext, ActionContext) => Object.assign((
  { children, dataValue, actionValue },
) => (
  <DataContext.Provider value={ dataValue }>
    <ActionContext.Provider value={ actionValue }>
      { children }
    </ActionContext.Provider>
  </DataContext.Provider>
),
{ propTypes: { children: PropTypes.node.isRequired } });

export default providerFactory;
