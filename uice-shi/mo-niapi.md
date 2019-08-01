# 模拟API

> 运行其他步骤之前必须运行 open \[browser\]
>
> 下面的JS函数使用在get和post

### 字符串

```
Mock an endpoint {
    await mockHttp('GET', '/endpoint', 'canned response');
}

    // An XHR GET from the browser to /endpoint will always get a
    // 200 with 'canned response' body
```

### JSON

```
Mock an endpoint with a JSON response {
    await mockHttp('GET', '/endpoint', {key: 'val'});
}

    // An XHR GET from the browser to /endpoint will always get a
    // 200 with json body '{"key":"val"}'
```

### 文本

```
Mock an endpoint and specify the response status code, http headers, and body {
    await mockHttp('GET', '/endpoint',
        [201, {'Content-Type': 'text/plain'}, 'canned response']
    );
}

    // An XHR GET from the browser to /endpoint will always get a
    // 201 with the given http headers and 'canned response' body
```

### 函数

```
Mock an endpoint with a function {
    await mockHttp('GET', '/endpoint', function(xhr) {
        xhr.respond(201, {'Content-Type': 'text/plain'}, 'canned response');
    });
}

    // An XHR GET from the browser to /endpoint will always get a
    // 201 with the given http headers and 'canned response' body
```

### 正则

```
Mock every endpoint that matches a regex {
    await mockHttp('GET', /\/end.*/, 'canned response');
}

    // An XHR GET from the browser to any matching endpoint will always get a
    // 200 with 'canned response' body
```

### 停止模拟

```
Stop all http mocks and restore original endpoints {
    await mockHttpStop();
}
```

### 配置

```
Configure the mock server {
    await mockHttpConfigure({autoRespond: false});
    // See "Fake server options" at sinon's page for a list of configuration options
}
```

更多信息请查看 [sinon's fake xhr and server](https://sinonjs.org/releases/latest/fake-xhr-and-server/)

