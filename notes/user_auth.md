### Reference

- [passport.js document](http://www.passportjs.org/docs/)
- [express-session](https://github.com/expressjs/session/blob/master/README.md)
- [Using HTTP cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
- Youtube 생활코딩
  - [WEB3 - Node.js - Cookie & Auth](https://www.youtube.com/watch?v=i51xW3eh-T4&list=PLuHgQVnccGMDo8561VLWTZox8Zs3K7K_m)
  - [WEB4 - Express Session & Auth](https://www.youtube.com/watch?v=jTct6U8VV5E&list=PLuHgQVnccGMCHjWIDStjaZA2ZR-jwq-WU)
  - [WEB5 - Express Passport.js](https://www.youtube.com/watch?v=INUpGK7dTkk&list=PLuHgQVnccGMCBY2wxKYNzFWe6I1gD5xsX)
- [Local Authentication Using Passport in Node.js](https://www.sitepoint.com/local-authentication-using-passport-node-js/)


## Node.js - Cookie

**HTTP Cookies**

>An HTTP cookie (web cookie, browser cookie) is a small piece of data that a server sends to the user's web browser. <u>The browser may store it and send it back with later requests</u> to the same server. Typically, it's used too tell if two requests came from the same browser — keeping a user logged-in, for example. <u>It remembers stateful information for the stateless HTTP protocol</u>.

- HTTP는 **Stateless protocol**이다.  
  클라이언트와 서버가 요청에 응답을 주고 받으면 연결이 끊어지고, 클라이언트와 서버는 서로 상태를 유지하지 않는다(서버는 클라이언트의 이전 요청을 기억하지 못한다.)

**Purposes of Cookies**
- **Session managemenet** (사용자 로그인 인증 - 세션 관리)  
  Logins, shopping carts, game scores, or anything else the server should remember
- **Personalization** (개인화된 설정 제공)  
  User preferences, themes, and other settings
- **Tracking** (광고정보 트래킹)  
  Recording and analyzing user behavior

**주의사항**
- 쿠키는 추가적인 네트워크 트래픽을 유발하기 때문에 최소한의 정보만 사용
- 보안에 민감한 데이터는 저장하지 않음

**Get and Set a cookie**

The `Set-Cookie` HTTP response header sends cookies from the server to the user agent

```js
var http = require("http");
http.createSever(function(request, response) {
	
	// Write a Cookie
	response.writeHead(200, {
		"Set-Cookie": ["yummy_cookie=choco", "tasty_cookie=starwberry"]
	})

	// Read a Cookie
	var cookies = request.headers.cookie;
})
```

**Define the lifetime of a cookie**

- session cookies
- permanent cookies
    - `Expires`
    - `Max-Age`

**Restrict access to cookies for security**

- to ensure that cookies are sent securely and are not accessed by unintended parties or script
- `Secure` : send to the server only with an encrypted request over the HTTPS protocol
- `HttpOnly` : make inaccessible to the JavaScript Document.cookie API

**Define where cookies are sent**

- define the scope of the cookie
- `Domain`
- `Path`

**Session based Authentication**
→ Session ID Cookie

<br>

## express-session

**Install**

```js
$ npm install express-session
```

```js
var session = require('express-session')
```

**Use and configure** → `req.session`

```js
app.use(session({
  secret: 'keyboard cat',
  // session ID cookie를 암호화하는 secret key
  resave: false,
  // 세션데이터가 바뀌기 전까지, 저장소에 다시 저장하지 않는다.
  saveUninitialized: true,
  // 세션이 필요하기 전까지, 세션을 구동하지 않는다.
  cookie: { secure: true }
  // coockie: { path: '/', httpOnly: true, secure: false, maxAge: null } 기본값
}))
```

**Compatible Session Stores**

The default server-side session storage, `MemoryStore`, is *purposely* not designed for a production environment. It will leak memory under most conditions, does not scale past a single process, and is meant for debugging and developing. → compatible session stores

- **connect-mongo**

  - Install
    ```js
    npm i connect-mongo
    ```
  - Connect integration
    ```js
    const session = require('express-session');
    const MongoStore = require('connect-mongo')(session);
    
    app.use(session({
        store: new MongoStore(options)
    }));
    ```
  - Connection to MongoDB
    ```js
    app.use(session({
        store: new MongoStore({ mongooseConnection: mongoose.connection })
    }));
    ```

- **session-file-store**
  - Install
    ```js
    npm i session-file-store
    ```

    ```js
    var FileStore = require('session-file-store')(session);
     
    var fileStoreOptions = {};
     
    app.use(session({
        store: new FileStore(fileStoreOptions),
    }));
    ```

**authentication steps**
1. Login form
```html
<form action="/login" method="POST">
	<input type="text" name="username">
	<input type="password" name="password">
	<input type="submit" value="log In"/>
</form>
```
2. User document
```js
// DB - User
// schema
const UserSchema = {
  username: String,
  password: String,
};
// user
const user = {
	username: foo
	password: bar
}
```
3. Login
```js
app.post("/login", (req, res) => {
	const { username, password } = req.body;
	if (!username=User.username) {
		// Incorrect username
		// failureRedirect
		res.redirect("/login")
  }
  if (!password=User.password) {
	  // Incorrect password
		// failureRedirect
		res.redirect("/login") 
  }
	// session
	req.session.isAuthenticated = true;
	req.session.username = User.username;
	req.session.save(() => {
		// successRedirect
	  res.redirect("/")
	})
})
```
3. Change User Interface
```js
app.get("/", (req, res) => {
	const { username, isAuthenticated } = req.session;
	const html = "";
	if (!isAuthenticated) {
		html = `
			<a href="/join"> Join </a>
			<a href="/login"> Log in </a>
		`
	} else {
		html = `
			${username}
			<a href="/logout"> Log out </a>
		`
	}
	res.send(html)
})
```

4. Logout
```js
app.get("/logout", (req, res) => {
	req.session.destory((err) => res.redirect("/"))
})
```

5. Access control
```js
const accessControl = (req, res, next) => {
	const isAuthenticated = req.session.isAuthenticated;
	if(!isAuthenticated) {
		res.redirect("/");
	} else {
		next();
	}
}

app.get("/edit-profile", accessControl, (req, res) => res.send("Edit Profile"))
```

**Federated Authentication**  
  → Oauth, OpenID → passport.js

<br>

## passport.js

**purpose**

1) Authentication middlewares for Node.js designed to serve a singlar purpose : authenticate requests. (사용자 인증 처리)

2) Strategies : Authentication mechanisms that meet unique authencitation requirements of applications such as Facebook or Twitter are packaged as individual modules. Applications can choose which strategies to employ, without creating unnecessary dependencies.(다양한 소셜 로그인 서비스의 인증을 모듈로 지원함)

**install**

```js
$ npm i passport
```

```js
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
```

**authenticate and redirect**

```js
app.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login' }));
```

**logout**

```jsx
app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});
```

**configure**

1) **application middleware**

```js
  app.use(passport.initialize());
  app.use(passport.session());
```

2) **authentication strategies**

Passport uses what are termed strategies to authenticate requests. Strategies range from verifying a username and password, delegated authenticationi using Oauth or federated authentication using OpenID.

Before asking Passport to authenticate a request, the strategy(or strategies) used by an application must be configured.

1) new Local Strategy

2) username, password → configure parameters

```jsx
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'passwd'
  },
  function(username, password, done) {
    // ...
  }
));
```

```jsx
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));
```

3) **sessions** (optional) → `req.user`

In a typical web application, the credentials used to authenticate a user will only be transmitted during the login request. If authentication succeeds, a session will be established and maintained via a cookie set in the user's browser.

Each subsequent request will not contain credentials, but rather the unique cookie that identifies the session. In order to support login sessions, Passport will serialize and deserialize `user` instances to and from the session.

In this example, only the user ID is serialized to the session, keeping the amount of data stored within the session small. (→ serialize, 사용자가 로그인을 하여 authenticate request가 있을 때, database에서 user ID를 가지고 와서 session에 식별자 Identifier로 저장 1)translating 2)storing)When subsequent requests are received, this ID is used to find the user, which will be restored to req.user. (→ deserialize, 이후 다른 request가 있을 때마다,  user ID(식별자)로 database에서 user를 찾고, req.user를 생성(restore)함 1)reconstructing 2)transmitting)

- cf. serialize(dictionary.cambridge)  
to change data into a form that can be stored or sent and put back into its original form later:

- cf. serialization(wekipedia)  
In computing, serialization (US spelling) or serialisation (UK spelling) is the process of translating a data structure or object state into a format that can be stored (for example, in a file or memory data buffer) or transmitted (for example, across a computer network) and reconstructed later (possibly in a different computer environment).  
The opposite operation, extracting a data structure from a series of bytes, is deserialization.

```js
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});
```

**passport.js steps**
```js
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;

app.use(passport.initialize()); // passport 시작
app.use(passport.session()); // session 사용

// session안에서 처리
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

// 성공|실패 처리하는 stratetgy set
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'pwd'
  },
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user); // database에서 나온 user 정보
    });
  }
));

// 사용자 로그인 시도 시, 성공|실패 처리
app.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login' }));

// 로그아웃 시
app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});
```
<br>

## Oauth steps
1) **Request an authorization code**

- user → GET /auth/login → client
- client → request an authorization code(redirect with client_id, redirect_uri, response_type, scope, etc) → auth server
- auth server → request user authentication → user
- user → login → auth server
- auth server → request access authorization → user
- user → allow → auth server
- auth server → redirect user /auth/login/callback(with auth code)


2) **Request an access token**

- user → GET /auth/login/callback(with auth code) → client
- client → request an access token(with client_id, code(auth code), client_secret_redirect_uri) → auth server
- auth server → grant an access token → client


3) **Request user information**

- client → request user profile(with access token) → resource server
- resource server → user profile → client
- client → create user data(database, session, cookie) → user