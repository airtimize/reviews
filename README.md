# Airtimize

> Lodging Listing Reviews Module

## Table of Contents

1. [POST](#POST)
1. [GET](#GET)
1. [PATCH](#PATCH)
1. [DELETE](#DELETE)

## API Reference

### POST

This method inserts one review record into the database.

`POST /rooms/:listingId/reviews`

#### Parameters

| Name                 | Type          | Description                                                            |
| ---------------------|:-------------:| :----------------------------------------------------------------------|
| `listing_id`         | `integer`     | *Required.* Listing identifier.                                        |
| `guest_user_id`      | `integer`     | *Required.* Reviewer identifier.                                       |
| `review_text`        | `string`      | *Required.* Text review for the listing.                               |
| `review_created_at`  | `date`        | *Required.* Review creation date.                                      |
| `accuracy`           | `integer`     | *Required.* Accuracy rating score for the reviewed listing.            |
| `communication`      | `integer`     | *Required.* Communication rating score for the reviewed listing.       |
| `cleanliness`        | `integer`     | *Required.* Cleanliness rating score for the reviewed listing.         |
| `location`           | `integer`     | *Required.* Location rating score for the reviewed listing.            |
| `checkin`            | `integer`     | *Required.* Checkin rating score for the reviewed listing.             |
| `value`              | `integer`     | *Required.* Value rating score for the reviewed listing.               |
| `host_user_id`       | `integer`     | *Required.* Host identifier.                                           |
| `response_text`      | `string`      | Response text for the listing.                                         |
| `response_created_at`| `date`        | Response creation date.                                                |

### GET

Find reviews based on listing id.

`GET /rooms/:listingId/reviews`

#### Parameters

| Name             | Type          | Description                                                            |
| ---------------- |:-------------:| :----------------------------------------------------------------------|
| `listing_id`     | `integer`     | *Required.* Listing identifier.                                        |

### Example Response

| Name                 | Type          | Description                                                            |
| ---------------------|:-------------:| :----------------------------------------------------------------------|
| `listing_id`         | `integer`     | Listing identifier.                                                    |
| `guest_user_id`      | `integer`     | Reviewer identifier.                                                   |
| `review_text`        | `string`      | Text review for the listing.                                           |
| `review_created_at`  | `date`        | Review creation date.                                                  |
| `accuracy`           | `integer`     | Accuracy rating score for the reviewed listing.                        |
| `communication`      | `integer`     | Communication rating score for the reviewed listing.                   |
| `cleanliness`        | `integer`     | Cleanliness rating score for the reviewed listing.                     |
| `location`           | `integer`     | Location rating score for the reviewed listing.                        |
| `checkin`            | `integer`     | Checkin rating score for the reviewed listing.                         |
| `value`              | `integer`     | Value rating score for the reviewed listing.                           |
| `host_user_id`       | `integer`     | Host identifier.                                                       |
| `response_text`      | `string`      | Response text for the listing.                                         |
| `response_created_at`| `date`        | Response creation date.                                                |

### PATCH

Update one review's ratings in the database.

`PATCH /reviews/:reviewId`

#### Parameters

| Name             | Type          | Description                                                            |
| ---------------- |:-------------:| :----------------------------------------------------------------------|
| `review_id    `   | `integer`     | *Required.* Review identifier.                                         |

### DELETE

Delete one review record from the database.

`DELETE /reviews/:reviewId`

#### Parameters

| Name             | Type          | Description                                                            |
| ---------------- |:-------------:| :----------------------------------------------------------------------|
| `review_id    `   | `integer`     | *Required.* Review identifier.                                         |

