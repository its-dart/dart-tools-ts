#!/usr/bin/env bash
# -*- coding: utf-8 -*-

set -e

rm -rf dart/generated
openapi --input https://app.itsdart.com/api/v0/schema/ --output ./dart/generated --client axios --indent 2
printf '\nOpenAPI.BASE = process.env.DART_API_BASE_URL ?? '\''https://app.itsdart.com'\'';' >> ./dart/generated/core/OpenAPI.ts
printf '\nOpenAPI.HEADERS = { Authorization: `Bearer ${process.env.DART_TOKEN}` };\n' >> ./dart/generated/core/OpenAPI.ts
