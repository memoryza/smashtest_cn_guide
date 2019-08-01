# API测试

SmashTest内置一个HTTP API测试的包。本节讨论此包提供的JS函数。

例子

```
Book room for '0' nights
Book room for '1' nights
Book room for '2' nights

    Verify success

Book room for '100' nights

    Verify error

* Book room for {{n}} nights {
    await api.get('https://api.com/book/{{n}}');
}

    * Verify success {
        response.verify({ statusCode: 200 });
    }

    * Verify error {
        response.verify({ statusCode: { $min: 400, $max: 499 } });
    }
```

```
Make a request {
    await api.post({
        url: 'https://{host}/endpoint',
        headers: {
            'content-type': 'application/json'
        },
        body: {
            id: 123,
            user: 'jerry'
        },
        timeout: 1500
    });
}

    Verify response {
        response.verify({
            statusCode: 200,
            headers: {
                'content-type': 'text/html; charset=utf-8'
            },
            error: null,
            body: {
                id: 123,
                user: 'jerry',
                results: [
                    '$anyOrder',   // loose-matching of a JSON response body
                    {
                        cost: { $min: 10 },
                        items: 6,
                        name: { $contains: 'apples' }
                    },
                    {
                        cost: { $min: 15 },
                        items: 7,
                        name: { $typeof: 'string', $contains: 'berries' }
                    }
                ]
            }
        });
    }
```



