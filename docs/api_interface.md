# Expected Behavoiur of Scrum Poker API

## Models

Room:

```ts
interface Room {
  _id: string;
  users: User[];
}
```

User:

```ts
interface User {
  _id: string;
  name: string;
  estimate: string; // number | "-" | "?"
}
```

---

## Routes

---

#### Create Room

```ts
// Request
fetch(`${API_URI}/room`{
    method:"POST",
})

// Response:
{
	"users": [],
	"_id": "63a1ec70026641a754c71609",
	"createdAt": "2022-12-20T17:10:08.090Z",
	"updatedAt": "2022-12-20T17:10:08.090Z",
}
```

---

#### Get Room

```ts
// Request
fetch(`${API_URI}/room/${roomId}`{
    method:"GET",
})
// Response
{
	"_id": "63a06b6fa690245a405032bc",
	"users": [
		{
			"_id": "63a06b79a690245a405032c0",
			"name": "oleg",
			"estimate": 5
		},
		{
			"_id": "63a06c24bbb03299b62666ca",
			"name": "Tanya",
			"estimate": 3
		}
	],
	"createdAt": "2022-12-19T13:47:27.019Z",
	"updatedAt": "2022-12-19T13:50:28.420Z",
}
```

---

#### Delete Room

```ts
// Request
fetch(`${API_URI}/room/${roomId}`{
    method:"DELETE",
})
// Response
204;
```

---

#### Add new user to Room

```ts
// Request
fetch(`${API_URI}/room/room/${"roomId"}`{
    method:"POST",
    body: {
        name: "Rodrigo"
    }
})
// Response
{
	"name": "Rodrigo",
	"_id": "63a1eedf026641a754c7160f",
}
```

---

#### Remove user from Room

```ts
// Request
fetch(`${API_URI}/room/${roomId}/users/${userId}`, {
  method: "DELETE",
});
// Response
204;
```

---

#### User Sets Estimate

```ts
// Request
fetch(`${API_URI}/room/users/${userId}`, {
  method: "PUT",
  body: JSON.stringify({ "estimate": 3 })
});
// Response
{
	"_id": "63a06c24bbb03299b62666ca",
	"name": "Tanya",
	"estimate": 3
}
```

---

#### Get Room

```ts
// Request
fetch(`${API_URI}/room/users/${userId}`, {
    method:"GET",
})
// Response
{
	"_id": "63a06c24bbb03299b62666ca",
	"name": "Tanya",
	"estimate": 3
}
```
