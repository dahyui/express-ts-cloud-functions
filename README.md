## express-ts-firebase-functions
This is a template for firebase cloud functions.

### Reference
- https://firebase.google.com/docs/functions/typescript
- https://firebase.google.com/docs/hosting/functions

## About
- Typescrpt
- Express.js

## Requirements
- Firebase CLI
- Node 12+
- tsc

## Firebase Project Setting
To run on localhost, you have to setup your firebase project as below.

```bash
$ firebase login
$ firebase use "<your project id>"
```

Then, you can access the functions via this URL.

> http://localhost:5000/your-firebase-project-id/your-firebase-project-region/api/userinfo/userinfo

## Directory Structure
### Controllers
Controllers to handle API functionality

### interfaces
TypeScript Interfaces used globally

### middleware
Express middleware created by yourself

### models
Database models adjust to table structure

### routes
HTTP Request handlers.
One endpoint is in one file to divide names for Firebase Cloud Functions.

### scheduler
Firebase schedulers

### utils
Utility functions

*How to Export router*
```typescript
export const login: IRoutes = {
  name: genFunctionName(__dirname, __filename),
  router
};
```

You have to export router object with name property.
Function name is formed by combination of directory name and file name.

*About routing path*
```typescript
router.post('/', (req: Request, res: Response) => {
  // Do Something
});
```

It is recommended to define path as '/'.
Because all endpoints will be exported to Firebase Cloud Functions individually with different names.

### services
Business Logic

## Build Setup
```bash
$ cd functions

# install dependencies
$ yarn install

# ts to js
$ yarn build

# run on localhost
$ firebase serve
```
