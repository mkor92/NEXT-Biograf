import { connect, connection } from 'mongoose';

import '@/models/movie.model';
import '@/models/screening.model';
import '@/models/ticket.model';
import '@/models/user.model';

const conn: { isConnected: boolean | number } = { isConnected: false };

export async function db(): Promise<void> {
	if (conn.isConnected) return;

	const db = await connect(process.env.DB_URI, {
		auth: {
			username: process.env.DB_USERNAME,
			password: process.env.DB_PASSWORD,
		},
		dbName: 'Biograf',
	});
	conn.isConnected = db.connections[0].readyState;
}

connection.on('connected', () => console.log('Connected to the database'));
connection.on('error', (err) => console.log(err));
