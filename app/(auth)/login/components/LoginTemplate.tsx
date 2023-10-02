import React from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import LoginForm from './LoginForm';

const LoginTemplate = () => {
	return (
		<Card className='mt-[8rem]'>
			<CardHeader>
				<CardTitle>Login</CardTitle>
				<CardDescription>Have an account? Sign in here.</CardDescription>
			</CardHeader>
			<CardContent>
				<LoginForm />
			</CardContent>
		</Card>
	);
};

export default LoginTemplate;
