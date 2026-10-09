# Cat Server

This is a server to emulate looking after a cat. It has internal metrics which it will expose on `/metrics`.

Some of these metrics are set up on timers to increase and simulate the passage of time.

To run this server locally run `npm install` and `npm start`.

This repo contains a Dockerfile which will build a fully functional

## Endpoints

### GET /health

Health endpoint for monitoring

Example response

Status 200

```json
{
  "health": "OK"
}
```

### POST /api/treats

Posting to this endpoint should decrease the hunger level of Mr Jim Business.

Example Request

```json
{
  "treats": 5
}
```

Example Response

```json
{
  "msg": "Mr Jim Business thanks you for feeding him 5 treats"
}
```

### POST /api/pats

Posting to this endpoint should increase the head pats counter.

Example Request

```json
{
  "pats": 5
}
```

Example Response

```json
{
  "msg": "Mr Jim Business purrs ferociously at the attention you give him"
}
```

### POST /api/play

Posting to this endpoint should increase the hunger level of Mr Jim Business. This feature is not yet live.

Posting to this endpoint should increase a `minutes played` counter. This feature is not yet live.

Example Request

```json
{
  "minutes": 5
}
```

Example Response

```json
{
  "msg": "Mr Jim Business runs around for 5 minutes and looks noticeably happier but hungrier"
}
```
