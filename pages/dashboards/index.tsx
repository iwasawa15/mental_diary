import Head from 'next/head';

import SidebarLayout from '@/layouts/SidebarLayout';

import PageHeader from '@/content/Dashboards/Crypto/PageHeader';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import { Container, Grid } from '@mui/material';
import Footer from '@/components/Footer';

import AccountBalance from '@/content/Dashboards/Crypto/AccountBalance';
import Wallets from '@/content/Dashboards/Crypto/Wallets';
import AccountSecurity from '@/content/Dashboards/Crypto/AccountSecurity';
import WatchList from '@/content/Dashboards/Crypto/WatchList';
import { ChartProperty } from '@/components/Chart';

const Dashboard = () => {
	const chartProperties: ChartProperty[] = [
		{
			label: '睡眠',
			time: 6.5,
			color: '#191970'
		},
		{
			label: '読書',
			time: 1,
			color: '#f5deb3'
		},
		{
			label: '移動',
			time: 1,
			color: '#808080'
		},
		{
			label: '仕事',
			time: 9.5,
			color: '#0000ff'
		},
		{
			label: '夕食',
			time: 1,
			color: '#4b0082'
		},
		{
			label: '移動',
			time: 1,
			color: '#808080'
		},
		{
			label: '風呂',
			time: 1,
			color: '#ffff00'
		},
		{
			label: '読書',
			time: 1,
			color: '#f5deb3'
		},
		{
			label: '自由時間',
			time: 2,
			color: '#f0ffff'
		}
	]
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item xs={12}>
            <AccountBalance
							chartProperties={chartProperties}
						/>
          </Grid>
          <Grid item lg={8} xs={12}>
            <Wallets />
          </Grid>
          <Grid item lg={4} xs={12}>
            <AccountSecurity />
          </Grid>
          <Grid item xs={12}>
            <WatchList />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

Dashboard.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default Dashboard;
