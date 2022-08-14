import Head from 'next/head';
import SidebarLayout from '@/layouts/SidebarLayout';
import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import axios from 'axios';

import PageTitleWrapper from '@/components/PageTitleWrapper';
import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Divider,
	Button
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Footer from '@/components/Footer';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';

import PageHeader from '@/content/Surveys/PageHeader';

interface Form {
	point: number
	positiveComment: string
	negativeComment: string
}

const initialForm: Form = {
	point: 50,
	positiveComment: "",
	negativeComment: "",
}
// input information
// 点数
// 一日やったこと（グラフ）
// コメント

const Forms = () => {
	const today = new Date()
	const date = today.getFullYear() + "-" +  (today.getMonth() + 1) + "-"+ today.getDate()
  const [FormInput, setFormInput] = useState<Form>(initialForm);

	const handleInput = (name: string, value: string | number) => {
    setFormInput({ ...FormInput, [name]: value });
  };

	const handleSubmit = useCallback(async (e: FormEvent) => {
		e.preventDefault()
		await axios.post('/api/diaries', { user: 'iwasawa', date: date, diary: FormInput })
	},[FormInput])

  return (
    <>
      <Head>
        <title>本日の振り返り</title>
      </Head>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
			<form onSubmit={handleSubmit}>
	      <Container maxWidth="lg">
	        <Grid
	          container
	          direction="row"
	          justifyContent="center"
	          alignItems="stretch"
	          spacing={3}
	        >
						<Grid item xs={12}>
	            <Card>
	              <CardHeader title="今日の点数は何点ですか？" />
	              <Divider />
	              <CardContent>
	                <Box sx={{ width: 200 }}>
	                  <Stack
	                    spacing={2}
	                    direction="row"
	                    sx={{ mb: 1 }}
	                    alignItems="center"
	                  >
	                    <Slider
	                      aria-label="Volume"
	                      value={FormInput.point}
	                      onChange={(_event: Event, value: number, _: number) => handleInput('point', value)}
	                    />
											<Box>
												{FormInput.point}
											</Box>
	                  </Stack>
	                </Box>
	              </CardContent>
	            </Card>
	          </Grid>
	          <Grid item xs={12}>
	            <Card>
	              <CardHeader title="今日の良かったことを教えてください" />
	              <Divider />
	              <CardContent>
	                <Box
	                  component="form"
	                  noValidate
	                  autoComplete="off"
	                >
	                  <div>
	                    <TextField
	                      required
	                      id="standard-required"
	                      label="Required"
												multiline
												fullWidth
	                      defaultValue={FormInput.positiveComment}
												placeholder="とても楽しい1日だった"
	                      variant="standard"
												onChange={(event: ChangeEvent<HTMLInputElement>) => handleInput('positiveComment', event.currentTarget.value)}
	                    />
	                  </div>
	                </Box>
	              </CardContent>
	            </Card>
	          </Grid>
						<Grid item xs={12}>
	            <Card>
	              <CardHeader title="今日の反省点を教えてください" />
	              <Divider />
	              <CardContent>
	                <Box
	                  component="form"
	                  noValidate
	                  autoComplete="off"
	                >
	                  <div>
	                    <TextField
	                      required
	                      id="standard-required"
	                      label="Required"
												multiline
												fullWidth
	                      defaultValue={FormInput.negativeComment}
												placeholder="もう少し早く起きて活動したい"
	                      variant="standard"
												onChange={(event: ChangeEvent<HTMLInputElement>) => handleInput('negativeComment', event.currentTarget.value)}
	                    />
	                  </div>
	                </Box>
	              </CardContent>
	            </Card>
	          </Grid>
						<Grid item>
							<Button
		            type="submit"
		            variant="contained"
		            color="primary"
								style={{display: 'flex', width: '150px', lineHeight: 1, justifyContent: 'space-around'}}
		          >
		            保存<SendIcon />
							</Button>
						</Grid>
	        </Grid>
      	</Container>
			</form>
      <Footer />
    </>
  );
}

Forms.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default Forms;
