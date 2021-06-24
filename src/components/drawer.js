import React, { Fragment } from 'react';
import { Box } from 'theme-ui';
import RcDrawer from 'rc-drawer';

export default function Drawer ({ 
  className,
  children,
  closeButton,
  closeButtonStyle,
  drawerHandler,
  toggleHandler,
  open,
  width,
  placement,
  drawerStyle,
  closeBtnStyle,
  ...props
}) {
  return (
    <Fragment>
        <RcDrawer 
        className={`drawer ${ className || '' } `.trim()} 
        open={open} 
        onClose={toggleHandler} 
        handler={false} 
        level={null} duration={'0.4s'} 
        { ...props } 
        placement={placement} 
        width={width} >  

          { closeButton && (
            <Box as="div" className={closeBtnStyle} onClick={toggleHandler} >
                 { closeButton }
            </Box>

           ) }
           <Box sx={drawerStyle} > { children }  </Box>
        </RcDrawer>

        <Box className='drawer_handler' onClick={toggleHandler} style={{ display: 'inline-block' }} > { drawerHandler }  </Box>
    </Fragment>
  );
};

Drawer.defaultProps = {
  width: '320px',
  placement: 'left',
};