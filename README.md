# node-mock

Armour / [vue-typescript-admin-mock-server](https://github.com/Armour/vue-typescript-admin-mock-server)

## local

`yarn mock`  
http://localhost:6580/mock-api/v1/user

## npm

tslib

This is a runtime library for TypeScript that contains all of the TypeScript helper functions.

compression

Node.js compression middleware.

morgan

HTTP request logger middleware for node.js

## vercel

https://vercel.com/jacobhsu/vben-node-mock

https://vben-node-mock-jacobhsu.vercel.app/mock-api/v1/user

[Conflicting Configuration Files](https://vercel.com/docs/platform/frequently-asked-questions?query=now.json#conflicting-configuration-files)

For backwards compatability purposes, there are two naming conventions for configuration files used by Vercel CLI (for example `vercel.json` and `now.json`). 

## api

https://vue-typescript-admin-mock-server-armour.vercel.app/mock-api/v1/users/login  
[Postman](https://www.postman.com) *Body > raw JSON*
`{"username": "admin", "password": "111111"}`

```js
{
    "code": 20000,
    "data": {
        "accessToken": "admin-token"
    }
}
```

## References

EditorConfig for VS Code
