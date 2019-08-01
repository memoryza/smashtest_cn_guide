# 模拟时间和地理位置

> 运行其他步骤之前必须运行 open \[browser\]

### 时间

##### Mock time to date

```
// Makes the browser think the date and time is the one that's given (hijacks js Date)

// Takes any string the js Date object can interpret
Mock time to '4/1/2003'
Mock time to '2011 Aug 19 4:45 pm'
Mock time to '2020-09-02 19:19:45'

// Where {date} contains a js Date object:
Mock time to {date}
```

### 地理位置

##### Mock location to latitude= lat longitude=long

```
// Makes the browser think the user's current location is the one that's given
Mock location to latitude='28.538336' longitude='-81.379234'   // that's Orlando, FL, USA
```

##### Mock location to location

```
// Current pre-defined locations (case-insensitive):
Mock location to 'Berlin'
Mock location to 'London'
Mock location to 'Moscow'
Mock location to 'New York'
Mock location to 'Mumbai'
Mock location to 'San Francisco'
Mock location to 'Seattle'
Mock location to 'Shanghai'
Mock location to 'São paulo'
Mock location to 'Sao paulo'
Mock location to 'Tokyo'
```

### Stop

##### Stop all mocks

```
// Stops all time, geolocation, and http mocks and restores originals
Stop all mocks
```



