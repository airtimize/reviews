# Project Name

> Project description

## Related Projects

  - https://github.com/airtimize/gallery
  - https://github.com/airtimize/description
  - https://github.com/airtimize/booking

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

- Node 6.13.0

## API Reference

| HTTP Method   | Endpoint                           | Description                                                   |
|:--------------|:-----------------------------------|:--------------------------------------------------------------|
| POST          | /api/:listingId/reviews            | Create new review for a listing                               |
| GET           | /api/:listingId/reviews            | Get all reviews for a listing                                 |
| PUT           | /api/:listingId/reviews/:reviewId  | Update a review completely for a listing                      |
| PATCH         | /api/:listingId/reviews/:reviewId  | Update a part of the review for a listing                     |
| DELETE        | /api/:listingId/reviews/:reviewId  | Delete a review from a listing                                |


### Installing Dependencies

From within the root directory:

```sh
npm install
```

