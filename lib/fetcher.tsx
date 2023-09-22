interface FetchResponse<T> {
	data: T;
	status: number;
	statusText: string;
	headers: Headers;
}

class Fetcher {
	constructor() {}

	async fetch<T>(
		url: string,
		options: any = {}
	): Promise<T> {
		const response = await fetch(url, options);

		if (!response.ok) {
			throw new Error(
				`Fetch Error: ${response.status} ${response.statusText}`
			);
		}

		return await response.json();
	}
}

export const fetcher = new Fetcher();
