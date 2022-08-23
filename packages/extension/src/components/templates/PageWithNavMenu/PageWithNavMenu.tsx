import { FC } from 'react';
import { NavMenu } from '../../organisms';
import { NAV_MENU_HEIGHT } from '../../../constants';

export interface PageWithNavMenuProps {
  indexDefaultNav?: number;
}

export const PageWithNavMenu: FC<PageWithNavMenuProps> = ({ children, indexDefaultNav }) => {
  return (
    <>
      <div
        style={{
          height: `calc(100vh - ${NAV_MENU_HEIGHT}px)`,
          overflowY: 'auto'
        }}
      >
        {children}
      </div>
      <NavMenu indexDefaultNav={indexDefaultNav} />
    </>
  );
};
