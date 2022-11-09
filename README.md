# upnp
open ports on your router/gateway using NAT/UPNP [(Universal Plug n Play)](https://en.wikipedia.org/wiki/Universal_Plug_and_Play)

```javascript
const Upnp = require("@ryanforever/upnp")
const upnp = new UPNP({
    gateway: "192.168.1.1", // i.e. router address
    port: 1337,
    ttl: 0, // time in seconds port should be open. 0 is infinity
    description: "my application port" // optional description of what this port is for
})

upnp.map() // map the port
upnp.unmap() // unmap the port
upnp.getMappings() // returns all mappings on router/gateway
```

choose different public and private ports
```javascript
const upnp = new UPNP({
    gateway: "192.168.1.1",
    public: 1337,
    private: 1336,
    ttl: 0,
    description: "my application port"
})
```