import React from 'react';

// regular JS function, where the first arg will be our wrapped component, but it must start with a capital letter because it will be a reference to an actual component, and the 2nd arg is something that we need in our hoc and it is specific to why we create an hoc

// this hoc has the purpose to add a div with a css class around any element
const withClassFunctional = (WrappedComponent, className) => {
  // returning a component function
  return (props) => (
    <div className={className}>
      <WrappedComponent />
    </div>
  );
};

export default withClassFunctional;
