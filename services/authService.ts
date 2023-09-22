import { fetcher } from '@/lib/fetcher';


interface IToken {
	id: number,
	email: string,
	token : string
}

class AuthService {
	async login(email: string, password: string) : Promise<IToken> {
		const enteredInput = {
			email,
			password,
		};

		const response = await fetcher.fetch<IToken>(
			'https://dummyjson.com/auth/login',
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					username: email,
					password: password,
					// expiresInMins: 60, // optional
				}),
			}
		);

		return response;
	}
}

export const authService = new AuthService();
