# Expected Behavoiur of Scrum Poker API

---

## Models

---

#### Room

```ts
interface Room {
    id: string;
    users: User[];
}
```

---

#### User

```ts
interface User {
    id: string;
    name: string;
    estimate: number;
}
```

---

## Routes

---

### `/room`

#### Route

`POST /` Create new Room

##### Request

```ts
fetch(`${API_URI}/`{
    method:"POST",
})

```

##### Response

```json
{
    "body": {
        "room": {
            "id": "id",
            "users": []
        }
    }
}
```

---

##### Route

`POST /id` User Joins the room

##### Request

```ts
fetch(`${API_URI}/${"roomId"}`{
    method:"POST",
    body: {
        name: "userName"
    }
})

```

##### Response

```json
{
    "body": {
        "room": {
            "id": "roomId",
            "users": [
                {
                    "id": "userId",
                    "name": "userName",
                    "estimate": null
                }
            ]
        }
    }
}
```

---

##### Route

`GET /id` Gets Data about state of the Room

##### Request

```ts
fetch(`${API_URI}/${"roomId"}`{
    method:"GET",
})

```

##### Response

```json
{
    "body": {
        "room": {
            "id": "id",
            "users": [
                {
                    "id": "userId",
                    "name": "userName",
                    "estimate": 8
                }
            ]
        }
    }
}
```

---

##### Route

`PUT /id` User Changes their estimate

##### Request

```ts
fetch(`${API_URI}/${'roomId'}`, {
    method: 'PUT',
    body: { name: 'userName', estimate: 4 },
});
```

##### Response

```json
{
    "body": {
        "room": {
            "id": "id",
            "users": [
                {
                    "id": "userId",
                    "name": "userName",
                    "estimate": 8
                }
            ]
        }
    }
}
```
