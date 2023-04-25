import { connect, connection } from 'mongoose';

const conn: { connected: boolean | number } = { connected: false };

export async function db(): Promise<void> {
    if (conn.connected) { return };
    const db = await connect(process.env.DB_URI, {
        auth: {
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD
        },
        dbName: "Biograf"
    });
    conn.connected = db.connections[0].readyState;
    console.log(db.connection.name);
}

connection.on("connected", () => console.log("Connected to the database"));
connection.on("error", err => console.log(err));