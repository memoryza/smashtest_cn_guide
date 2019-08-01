# 请求

> 详情查看[request文档](https://github.com/request/request)

### request\(\)

```
await request('https://api.com/endpoint');   // GET by default
```

```
 await request({
    method: 'GET',   // GET, POST, PUT, PATCH, DELETE, HEAD, or OPTIONS
    url: 'https://api.com/endpoint',
    timeout: 1500   // setting timeout (in ms) is recommended
                    // otherwise the default OS TCP timeout applies,
                    // and that can be up to 2 minutes
});
```

### get\(\)

```
await get('https://api.com/endpoint');
```

```
await get({
    url: 'https://api.com/endpoint',
    headers: {
        'content-type': 'text/plain'
    },
    timeout: 1500
});
```

### post\(\)

    await post({
        url: 'https://api.com/endpoint',
        headers: {
            'content-type': 'text/plain'
        },
        body: `body goes here`,
        timeout: 1500
    });

```
// JSON body
await post({
    url: 'https://api.com/endpoint',
    body: {
        something: true
    },
    json: true,   // converts body to json and sets content-type header
    timeout: 1500
});
```

### put\(\)

    await put({
        url: 'https://api.com/endpoint',
        headers: {
            'content-type': 'text/plain'
        },
        body: `body goes here`,
        timeout: 1500
    });

### patch\(\)

    await patch({
        url: 'https://api.com/endpoint',
        headers: {
            'content-type': 'text/plain'
        },
        body: `body goes here`,
        timeout: 1500
    });

### del\(\)

    await del({
        url: 'https://api.com/endpoint',
        headers: {
            'content-type': 'text/plain'
        },
        body: `body goes here`,
        timeout: 1500
    });

### head\(\)

```
await head('https://api.com/endpoint');
```

### options\(\)

```
await options('https://api.com/endpoint');
```

### api.defaults\(\)

```
api.defaults({proxy: 'http://localproxy.com'});   // see request's documentation for details
```

### Cookies

```
// create cookies
let jar = api.jar();
let cookie1 = api.cookie('key1=value1');
let cookie2 = api.cookie('key2=value2');
let url = 'http://site.com';
jar.setCookie(cookie1, url);
jar.setCookie(cookie2, url);
 
// make a request that includes the cookies
await get({url: 'http://site.com/endpoint', jar: jar});
```



