// test.js

const Upnp = require("./src")
const upnp = new Upnp({
	gateway: "192.168.1.1",
	public: 4538,
	private: 4538,
	ttl: 30,
	debug: true
})

console.log("testing port mapping jawn...")
upnp.map().then(() => {
	console.log("please wait...")
	setTimeout(() => {
		upnp.unmap()
	}, 2000)
})


