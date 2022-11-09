
const Logger = require("@ryanforever/logger")
const nat = require("nat-upnp")

function Upnp(config = {}) {
	const logger = new Logger(__filename, {debug: config.debug})
	let port = config.port
	let gateway = config.gateway
	let public = config.public
	let private = config.private
	let ttl = config.ttl ?? 1 * 24 * 60 * 60 // 1 day
	let description = config.name || config.description || "node"

	if (port && !public && !private) {
		public = port
		private = port
	}

	const client = nat.createClient(gateway)

	this.map = async function() {
		let rejections = 0
		
		return new Promise((resolve, reject) => {
			logger.debug("mapping port...")
			client.portMapping({public, private, ttl, description}, (err, data) => {
				if (err) {
					rejections++
					if (rejections == 2) {
						return reject(err)
					} else {
						logger.error(err.message)
						logger.error("port mapping failed. trying again...")
						setTimeout(() => this.map(), 1000)
					}
				}
				logger.debug("done!")
				rejections = 0
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

	this.getMappings = async function(config = {}) {
		logger.debug("getting port mappings...")
		return new Promise((resolve, reject) => {
			client.getMappings(config, (err, data) => {
				if (err) reject(err)
				resolve(data)
			})
		})
	}
}


module.exports = Upnp



