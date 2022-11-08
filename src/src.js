
const Logger = require("@ryanforever/logger")
const nat = require("nat-upnp")

function Upnp(config = {}) {
	const logger = new Logger(__filename, {debug: config.debug})
	let gateway = config.gateway
	let public = config.public
	let private = config.private
	let ttl = config.ttl

	const client = nat.createClient(gateway)

	this.map = async function() {
		logger.debug("mapping port...")
		return new Promise((resolve, reject) => {
			client.portMapping({public, private, ttl}, (err, data) =>{
				if (err) reject(err)
				logger.debug("done!")
				return resolve(data)
			})
		})
	}

	this.unmap = async function() {
		logger.debug("unmapping port...")
		return new Promise((resolve, reject) => {
			client.portUnmapping({public, private}, (err, data) => {
				if (err) reject(err)
				logger.debug("done!")
				return resolve(data)
			})
		})
	}
}


module.exports = Upnp



