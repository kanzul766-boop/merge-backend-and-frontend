import dns from 'node:dns/promises'
dns.setServers(['1.1.1.1','8.8.8.8'])
import mongoose from "mongoose"
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://kanzul766_db_user:6XCynCPfJeamRVhB@sit-app.c9471vt.mongodb.net/notes');
  console.log("Connected to DB");
}
export default main