#!/usr/bin/env bash

curl -sXPOST -H'Content-type: application/graphql' localhost:4000/v1/graphql -d'@samples/v1.txt' | jq '.'

curl -sXPOST -H'Content-type: application/graphql' localhost:4000/v2/graphql -d'@samples/v2.txt' | jq '.'

curl -sXPOST -H'Content-type: application/graphql' localhost:4000/v3/graphql -d'@samples/v3.txt' | jq '.'
