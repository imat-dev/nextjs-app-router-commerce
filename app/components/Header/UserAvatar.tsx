'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useSession } from 'next-auth/react';

export function UserAvatar() {
	const { data: session, status } = useSession();
	const url = session?.user?.image ? session?.user?.image : undefined ;
	console.log(session)
	return (
		<Avatar className='cursor-pointer'>
			<AvatarImage src={url} alt="@shadcn" />
			<AvatarFallback>HI</AvatarFallback>
		</Avatar>
	);
}