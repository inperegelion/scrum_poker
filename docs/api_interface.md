# Expected Behavoiur of Scrum Poker API

---

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
  estimate: number;
}
```

---

## Routes

---

#### `POST /rooms/` Create new Room

```ts
// Request
fetch(`${API_URI}/`{
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

#### `POST /rooms/:roomId` User Joins the room

```ts
// Request
fetch(`${API_URI}/${"roomId"}`{
    method:"POST",
    body: {
        name: "userName"
    }
})
// Response
{
	"createdUser": {
		"name": "Rodrigo",
		"_id": "63a1eedf026641a754c7160f",
	}
}
```

---

#### `GET /rooms/:roomId` Gets Data about state of the Room

```ts
// Request
fetch(`${API_URI}/${roomId}`{
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

#### `PUT rooms/:roomId/users/:userId?estimate=estimate` User Changes their estimate

```ts
// Request
fetch(`${API_URI}/${roomId}/users/${userId}?estimate=${estimate}`, {
  method: "PUT",
});
// Response
{
	"_id": "63a06c24bbb03299b62666ca",
	"name": "Tanya",
	"estimate": 3
}
```
