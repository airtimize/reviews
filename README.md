# Project Name

> Project description

## Related Projects

  - https://github.com/bedroost/gallery
  - https://github.com/bedroost/description
  - https://github.com/bedroost/booking

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

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
npm install -g webpack
npm install
```

