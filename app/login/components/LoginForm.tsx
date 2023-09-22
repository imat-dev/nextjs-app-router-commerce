'use client';

import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { authService } from '@/services/authService';
import { error } from 'console';
import { signIn } from 'next-auth/react';


const formSchema = z.object({
	username: z.string().min(2, {
		message: 'Username must be at least 2 characters.',
	}),
    password: z.string().min(5, {
		message: 'Password must be at least 5 characters.',
	}),
	// password: z
	// 	.string()
	// 	.refine(
	// 		(password) =>
	// 			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
	// 				password
	// 			),
	// 		{
	// 			message:
	// 				'Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long.',
	// 		}
	// 	),
});

const LoginForm = () => {
	const [errorMsg, setErrorMsg] = useState<string>('');

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: 'hbingley1',
			password: 'CQutx25i8r',
		},
	});

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.

		try {

            const result = await signIn('credentials', {
                redirect: false,
                email: values.username,
                password: values.password,
            });

		} catch (error: any) {
			setErrorMsg('Invalid username or password');
		}
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				{errorMsg && <p className="text-destructive">{errorMsg}</p>}
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Username</FormLabel>
							<FormControl>
								<Input placeholder="Username" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input placeholder="Password" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
};

export default LoginForm;
