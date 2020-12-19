import React from 'react';

const layout = (props) => {
  return (
    <>
      <div>Toolbar, SideDrawer, Backdrop</div>
      {/* output the component we wrap with this layout */}
      <main>{props.children}</main>
    </>
  );
};
