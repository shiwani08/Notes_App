# IMPORTANT CONCEPTS LEARNT:
1. Events 
2. Connecting backend and frontend using `sendFile` and `path.join`. 

    - Check `backend/server.js` file    
3. **CSR - Client Side Rendering** - 

    - Done manually, when the client is anything but a browser. 

    - Done by React or suitable framework, hence, slow

4. **Synchronous** means block the thread until the operation is complete.

    **Asynchronous** means non-blocking, it will not block the thread

5. Making a hybrid server

6. **Payload**: 

    - The **actual data content** carried in a message, such as the body of an HTTP message.

    - In an HTTP **request**, the **request payload** is the data sent by the client in the request body (like form data or JSON).

    - In an HTTP **response**, the **response payload** is the data sent by the server in the response body (like HTML, JSON results, etc.)

    **_Both a request and a response have their own payloads, but they are separate parts of the communication. The request payload is the data sent to the server; the response payload is the data sent back to the client._**

# NODE: 

1. Node is neither a framework nor a library or a language. It is a runtime environment to run JS code outside of the Browser.

2. Used V8 engine of chromium browsers. C++ is wrapped around the engine and then node is built.


# EXPRESS

## Middleware 

For details: https://expressjs.com/en/guide/writing-middleware.html

1. Just a function

2. Is placed between client and server. 

3.  - If the request from the client is valid, allows it to pass to the server. 

    - Else, will return the response to the client with proper message. 

4. Can have multiple middlewares.

5. Example - 

    ```js
    const myLogger = function (req, res, next) {
        console.log('LOGGED');
        next()
    }

6. **X is added before a custom header:** 
- Example 

    ``` 
    Key             : Value
    X-Powered-By    : Express

## Controller 

## Routes

## Models

# RESTFUL API: 

1. Used in the SERVER-CLIENT architecture. (There are other models as well)

2. JSON - has a key-value pair. 

3. If sure that the client is:

    - BROWSER - Always send HTML doc - faster for browsers. 
    - OTHERS (cross platform apps or native apps) - send JSON file.

4. **HTTP METHODS** - 

    i. GET

    ii. POST

    iii. PUT

    iv. PATCH
    
    v. DELETE

# MONGODB
