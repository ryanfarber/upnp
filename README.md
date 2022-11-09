# upnp
open ports on your router/gateway using NAT/UPNP [(Universal Plug n Play)](https://en.wikipedia.org/wiki/Universal_Plug_and_Play)

```javascript
const upnp = require("@ryanforever/upnp")
const upnp = new UPNP({
    gateway: "192.168.1.1",
    public: 4538,
    private: 4538,
    ttl: 30,
    description: "my application port"
})

upnp.map() // map the port
upnp.unmap() // unmap the port
upnp.getMappings() // returns all mappings on router/gateway
```
