# map-port
open port using nat/upnp



```javascript
const upnp = require("@ryanforever/upnp")
const upnp = new UPNP({
    gateway: "192.168.1.1",
    public: 4538,
    private: 4538,
    ttl: 30
})

upnp.map()
upnp.unmap()
```
