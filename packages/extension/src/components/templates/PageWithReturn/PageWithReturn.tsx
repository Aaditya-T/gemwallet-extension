import { CSSProperties, FC } from 'react';

import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import { Container, Divider, IconButton, Typography } from '@mui/material';

export interface PageWithReturnProps {
  title: string;
  onBackClick: React.MouseEventHandler<HTMLButtonElement>;
  action?: {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    actionIcon: React.ReactElement;
  };
  style?: CSSProperties;
}

export const PageWithReturn: FC<PageWithReturnProps> = ({
  title,
  onBackClick,
  action,
  children,
  style
}) => {
  return (
    <>
      <div
        style={{
          padding: '0.75rem 1rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <IconButton style={{ position: 'fixed', left: 0 }} aria-label="close" onClick={onBackClick}>
          <KeyboardArrowLeft />
        </IconButton>
        <Typography variant="body1">{title}</Typography>
        {action?.onClick ? (
          <IconButton
            style={{ position: 'fixed', right: 0 }}
            aria-label="close"
            onClick={action.onClick}
          >
            {action.actionIcon}
          </IconButton>
        ) : null}
      </div>
      <Divider />
      <Container
        component="main"
        style={{
          height: 'calc(100vh - 50px)',
          padding: '1rem 0.5rem'
        }}
      >
        <Container style={style}>{children}</Container>
      </Container>
    </>
  );
};
