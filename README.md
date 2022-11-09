# upnp
open port using nat/upnp

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
