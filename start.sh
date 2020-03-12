#!/bin/bash

bash ./wait-for-it.sh "$DB:5432"

npm run-script init-db
npm start
