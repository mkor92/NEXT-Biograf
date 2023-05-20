declare global {
	namespace NodeJS {
		interface ProcessEnv {
			DB_URI: string;
			DB_USERNAME: string;
			DB_PASSWORD: string;
			JWT_SECRET: string;
		}
	}
}

export {};
