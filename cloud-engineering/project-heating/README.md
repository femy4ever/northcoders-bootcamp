# Smart Home Heating

This service contains endpoints for getting the current status of registered heating zones and changing the desired temperature.

## Endpoints

### GET /api/heating - all zones

Returns an array of all the zones currently registered

```json
{
  "zones": [
    {
      "zone": "living room",
      "id": 12345,
      "temp": 21
    }
  ]
}
```

### GET /api/heating/zone/:id

Returns the information for a single zone with that ID

Example Request
GET /api/heating/zone/12345

```json
{
  "zone": {
    "zone": "test",
    "id": "12345",
    "temperature": 14
  }
}
```

### POST /api/heating/zone

Registers a new zone.

Zone label and current temperature required.

Example Request

POST /api/heating/zone

```json
{
  "zone": "living room",
  "temperature": 19
}
```

Example Response

```json
{
  "zone": {
    "zone": "Living room",
    "id": "1699265480008",
    "temperature": 15
  }
}
```

### PATCH /api/heating/zone/:id

Changes the temperature of the zone ID supplied

Example Request

PATCH /api/heating/zone/12345

```json
{
  "temperature": 21
}
```

Example Response

```json
{
  "id": 12324,
  "zone": "living room",
  "temperature": 21
}
```
