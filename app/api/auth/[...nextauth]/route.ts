import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { NextAuthOptions, RequestInternal } from 'next-auth';
import { authService } from '@/services/authService';

interface AuthUser {
	id: string;
	name: string;
	email: string;
	token: string;
	image: string;
}

export const authOptions: NextAuthOptions = {
	session: {
		strategy: 'jwt',
		maxAge: 1 * 60 * 60,
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
			): Promise<AuthUser> {
				const user = await authService.login(
					credentials.email,
					credentials.password
				);

				return {
					id: user.id.toString(),
					email: credentials.email,
					name: user.name,
					token: user.token,
					image: user.image
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
