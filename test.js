// test.js

const Upnp = require("./src")
const upnp = new Upnp({
	gateway: "192.168.1.1",
	port: 4538,
	ttl: 0,
	debug: true,
	description: "node upnp test"
})

console.log("testing port mapping jawn...")
// upnp.map()

// upnp.map().then(() => {
// 	console.log("please wait...")
// 	setTimeout(() => {
// 		upnp.unmap().then(() => {
// 			process.exit(0)
// 		})

// 	}, 1000)
// })




