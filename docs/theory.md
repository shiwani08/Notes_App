# IMPORTANT CONCEPTS LEARNT:
1. Events
2. Connecting backend and frontend using `sendFile` and `path.join`. 

    - Check `backend/server.js` file    
3. **CSR - Client Side Rendering** - 

    - Done manually, when the client is anything but a browser. 

    - Done by React or suitable framework, hence, slow

4. **Synchronous** means block the thread until the operation is complete.

    **Asynchronous** means non-blocking, it will not block the thread


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
