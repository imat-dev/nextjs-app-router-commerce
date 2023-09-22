import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { NextAuthOptions, RequestInternal } from 'next-auth';
import { authService } from '@/services/authService';

interface User {
	id: string;
	name: string;
	email: string;
	token: string;
}

export const authOptions: NextAuthOptions = {
	session: {
		strategy: 'jwt',
		maxAge: 1 * 60 * 60 * 24 * 30, // 1 month
	},
	providers: [
		CredentialsProvider({
			id: 'credentials',
			name: 'Credentials',
			type: 'credentials',
			credentials: {},
			async authorize(
				credentials: any,
				req: Pick<
					RequestInternal,
					'body' | 'query' | 'headers' | 'method'
				>
			): Promise<User> {
				const user = await authService.login(
					credentials.email,
					credentials.password
				);

				console.log(credentials.email)
				console.log(credentials.password)

				return {
					id: credentials.email,
					email: credentials.email,
					name: credentials.email,
					token: user.token,
				};
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			return { ...token, ...user };
		},
		async session({ session, token }) {
			return { ...session, user: token };
		},
	},
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
