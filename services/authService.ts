import { fetcher } from '@/lib/fetcher';
import { User } from '@/model/user';


class AuthService {
	async login(email: string, password: string) : Promise<User> {
		const enteredInput = {
			email,
			password,
		};

		const response = await fetcher.fetch<User>(
			'https://dummyjson.com/auth/login',
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					username: email,
					password: password,
					expiresInMins: 60, 
				}),
			}
		);

		return response;
	}
}

export const authService = new AuthService();
