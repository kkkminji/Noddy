import {
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Stack,
  Box,
} from '@mui/material';
import { ListChildComponentProps, FixedSizeList } from 'react-window';
import styled from 'styled-components';

function renderRow(props: ListChildComponentProps) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component='div' disablePadding>
      <ListItemButton>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export const ReadyRoom = () => {
  return (
    <Stack
      sx={{
        flexDirection: 'row',
      }}
    >
      <Box sx={{ width: '800px', height: '100%' }}>
        <video width={'100%'} height={'100%'} controls></video>
      </Box>
      <Stack sx={{ flexDirection: 'column', width: '200px' }}>
        <Box sx={{ background: 'blue', width: '100%', height: '100%' }}>
          <FixedSizeList
            height={400}
            width={200}
            itemSize={46}
            itemCount={10}
            overscanCount={5}
          >
            {renderRow}
          </FixedSizeList>
        </Box>
      </Stack>
    </Stack>
  );
};
