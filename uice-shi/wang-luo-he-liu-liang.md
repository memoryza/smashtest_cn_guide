# 网络设置和流量

> 只有chrome可用
>
> 由于Chrome是唯一支持模拟网络条件的浏览器，因此此步骤仅在该浏览器中有效。在所有其他浏览器中，此步骤不做任何操作。
>
> 如果为了代码整洁，查看[条件测试](/yu-yan/tiao-jian-ce-shi.md)如何排除其他浏览器
>
> 运行其他步骤之前必须运行 open \[browser\]

### Set network conditions to offline= offline latency= latency max-download-speed=maxDownload max-upload-speed=maxUpload

```
// Makes the browser emulate the given network conditions
// latency is additional latency in ms
// max download and upload speeds are in bytes/sec

Set network conditions to offline='true' latency='200' max-download-speed='300000' max-upload-speed='400000'
```



