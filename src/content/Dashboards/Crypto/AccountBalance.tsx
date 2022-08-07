import {
  Button,
  Card,
  Box,
  Grid,
  Typography,
  useTheme,
  styled,
  Avatar,
  Divider,
  alpha,
  ListItem,
  ListItemText,
  List,
  ListItemAvatar
} from '@mui/material';
import TrendingUp from '@mui/icons-material/TrendingUp';
import Text from 'src/components/Text';
import { Chart, ChartProperty } from 'src/components/Chart';
import type { ApexOptions } from 'apexcharts';

const AvatarSuccess = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.success.main};
      color: ${theme.palette.success.contrastText};
      width: ${theme.spacing(8)};
      height: ${theme.spacing(8)};
      box-shadow: ${theme.colors.shadows.success};
`
);

const ListItemAvatarWrapper = styled(ListItemAvatar)(
  ({ theme }) => `
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${theme.spacing(1)};
  padding: ${theme.spacing(0.5)};
  border-radius: 60px;
  background: ${
    theme.palette.mode === 'dark'
      ? theme.colors.alpha.trueWhite[30]
      : alpha(theme.colors.alpha.black[100], 0.07)
  };

  img {
    background: ${theme.colors.alpha.trueWhite[100]};
    padding: ${theme.spacing(0.5)};
    display: block;
    border-radius: inherit;
    height: ${theme.spacing(4.5)};
    width: ${theme.spacing(4.5)};
  }
`
);

interface Props {
	chartProperties: ChartProperty[]
}

const AccountBalance = ({chartProperties}: Props) => {
  const theme = useTheme();

  const chartOptions: ApexOptions = {
    chart: {
      background: 'transparent',
      stacked: false,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      pie: {
        donut: {
          size: '60%'
        }
      }
    },
    colors: chartProperties.map((c: ChartProperty) => c.color),
    dataLabels: {
      enabled: true,
      formatter: (val: number) => {
        return Math.round(val) + '%';
      },
      style: {
        colors: [theme.colors.alpha.trueWhite[100]]
      },
      background: {
        enabled: true,
        foreColor: theme.colors.alpha.trueWhite[100],
        padding: 8,
        borderRadius: 4,
        borderWidth: 0,
        opacity: 0.3,
        dropShadow: {
          enabled: true,
          top: 1,
          left: 1,
          blur: 1,
          color: theme.colors.alpha.black[70],
          opacity: 0.5
        }
      },
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 1,
        color: theme.colors.alpha.black[50],
        opacity: 0.5
      }
    },
    fill: {
      opacity: 1
    },
    labels: chartProperties.map((c: ChartProperty) => c.label),
    legend: {
      labels: {
        colors: theme.colors.alpha.trueWhite[100]
      },
      show: false
    },
    stroke: {
      width: 0
    },
    theme: {
      mode: theme.palette.mode
    }
  };

  const chartSeries = chartProperties.map((c: ChartProperty) => Math.round(c.time / 24 * 100));

  return (
		<>
	    <Card>
	      <Grid spacing={0} container>
	        <Grid item xs={12} md={4}>
	          <Box p={4}>
	            <Typography
	              sx={{
	                pb: 3
	              }}
	              variant="h4"
	            >
	              平日の時間割合
	            </Typography>
	            <Box>
	              <Typography variant="h1" gutterBottom>
	                $54,584.23
	              </Typography>
	              <Typography
	                variant="h4"
	                fontWeight="normal"
	                color="text.secondary"
	              >
	                1.0045983485234 BTC
	              </Typography>
	              <Box
	                display="flex"
	                sx={{
	                  py: 4
	                }}
	                alignItems="center"
	              >
	                <AvatarSuccess
	                  sx={{
	                    mr: 2
	                  }}
	                  variant="rounded"
	                >
	                  <TrendingUp fontSize="large" />
	                </AvatarSuccess>
	                <Box>
	                  <Typography variant="h4">+ $3,594.00</Typography>
	                  <Typography variant="subtitle2" noWrap>
	                    this month
	                  </Typography>
	                </Box>
	              </Box>
	            </Box>
	            {/* <Grid container spacing={3}>
	              <Grid sm item>
	                <Button fullWidth variant="outlined">
	                  Send
	                </Button>
	              </Grid>
	              <Grid sm item>
	                <Button fullWidth variant="contained">
	                  Receive
	                </Button>
	              </Grid>
	            </Grid> */}
	          </Box>
	        </Grid>
	        <Grid
	          sx={{
	            position: 'relative',
							flexGrow: 1
	          }}
	          display="flex"
	          alignItems="center"
	          item
	          xs={12}
	          md={8}
	        >
	          <Box
	            component="span"
	            sx={{
	              display: { xs: 'none', md: 'inline-block' }
	            }}
	          >
	            <Divider absolute orientation="vertical" />
	          </Box>
	          <Box py={4} pr={4} flex={1}>
	            <Grid container spacing={0}>
	              <Grid
	                xs={12}
	                sm={5}
	                item
	                display="flex"
	                justifyContent="center"
	                alignItems="center"
	              >
	                <Chart
	                  height={250}
	                  options={chartOptions}
	                  series={chartSeries}
	                  type="donut"
	                />
	              </Grid>
	              <Grid xs={12} sm={7} item display="flex" alignItems="center">
	                <List
	                  disablePadding
	                  sx={{
	                    width: '100%'
	                  }}
	                >
										{chartProperties.map((c: ChartProperty, i: number) =>
											<ListItem disableGutters key={i}>
		                    {/* <ListItemAvatarWrapper>
		                      <img
		                        alt="BTC"
		                        src="/static/images/placeholders/logo/bitcoin.png"
		                      />
		                    </ListItemAvatarWrapper> */}
		                    <ListItemText
		                      primary={c.label}
		                      primaryTypographyProps={{ variant: 'h5', noWrap: true }}
		                      secondary={c.time + 'hours'}
		                      secondaryTypographyProps={{
		                        variant: 'subtitle2',
		                        noWrap: true
		                      }}
		                    />
		                    <Box>
		                      <Typography align="right" variant="h4" noWrap>
		                        {Math.round(c.time / 24 * 100) + '%'}
		                      </Typography>
		                      {/* <Text color="success">+2.54%</Text> */}
		                    </Box>
		                  </ListItem>
										)}
	                </List>
	              </Grid>
	            </Grid>
	          </Box>
	        </Grid>
	      </Grid>
	    </Card>
			<Card>
			<Grid spacing={0} container>
				<Grid item xs={12} md={4}>
					<Box p={4}>
						<Typography
							sx={{
								pb: 3
							}}
							variant="h4"
						>
							平日の時間割合
						</Typography>
						<Box>
							<Typography variant="h1" gutterBottom>
								$54,584.23
							</Typography>
							<Typography
								variant="h4"
								fontWeight="normal"
								color="text.secondary"
							>
								1.0045983485234 BTC
							</Typography>
							<Box
								display="flex"
								sx={{
									py: 4
								}}
								alignItems="center"
							>
								<AvatarSuccess
									sx={{
										mr: 2
									}}
									variant="rounded"
								>
									<TrendingUp fontSize="large" />
								</AvatarSuccess>
								<Box>
									<Typography variant="h4">+ $3,594.00</Typography>
									<Typography variant="subtitle2" noWrap>
										this month
									</Typography>
								</Box>
							</Box>
						</Box>
						{/* <Grid container spacing={3}>
							<Grid sm item>
								<Button fullWidth variant="outlined">
									Send
								</Button>
							</Grid>
							<Grid sm item>
								<Button fullWidth variant="contained">
									Receive
								</Button>
							</Grid>
						</Grid> */}
					</Box>
				</Grid>
				<Grid
					sx={{
						position: 'relative',
						flexGrow: 1
					}}
					display="flex"
					alignItems="center"
					item
					xs={12}
					md={8}
				>
					<Box
						component="span"
						sx={{
							display: { xs: 'none', md: 'inline-block' }
						}}
					>
						<Divider absolute orientation="vertical" />
					</Box>
					<Box py={4} pr={4} flex={1}>
						<Grid container spacing={0}>
							<Grid
								xs={12}
								sm={5}
								item
								display="flex"
								justifyContent="center"
								alignItems="center"
							>
								<Chart
									height={250}
									options={chartOptions}
									series={chartSeries}
									type="donut"
								/>
							</Grid>
							<Grid xs={12} sm={7} item display="flex" alignItems="center">
								<List
									disablePadding
									sx={{
										width: '100%'
									}}
								>
									{chartProperties.map((c: ChartProperty, i: number) =>
										<ListItem disableGutters key={i}>
											{/* <ListItemAvatarWrapper>
												<img
													alt="BTC"
													src="/static/images/placeholders/logo/bitcoin.png"
												/>
											</ListItemAvatarWrapper> */}
											<ListItemText
												primary={c.label}
												primaryTypographyProps={{ variant: 'h5', noWrap: true }}
												secondary={c.time + 'hours'}
												secondaryTypographyProps={{
													variant: 'subtitle2',
													noWrap: true
												}}
											/>
											<Box>
												<Typography align="right" variant="h4" noWrap>
													{Math.round(c.time / 24 * 100) + '%'}
												</Typography>
												{/* <Text color="success">+2.54%</Text> */}
											</Box>
										</ListItem>
									)}
								</List>
							</Grid>
						</Grid>
					</Box>
				</Grid>
			</Grid>
		</Card>
	</>
  );
}

export default AccountBalance;
