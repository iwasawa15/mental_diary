import { Typography, Grid } from '@mui/material';

function PageHeader() {
  const user = {
    name: 'Catherine Pike',
    avatar: '/static/images/avatars/1.jpg'
  };
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          本日の振り返り
        </Typography>
        <Typography variant="subtitle2">
          {user.name}さん、今日1日はどうでしたか？
        </Typography>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
