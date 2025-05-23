#!/usr/bin/env bash
# -*- coding: utf-8 -*-

set -e

if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
fi

DART_API_SCHEMA_URL="${DART_HOST:-https://app.itsdart.com}/api/v0/public/schema/"
GENERATED_PATH=$(pwd | sed 's:/admin$::')/dart/generated
GENERATED_WITH_OPTIONS_PATH=$(pwd | sed 's:/admin$::')/dart/generated-with-options

rm -rf "$GENERATED_PATH"
openapi --input $DART_API_SCHEMA_URL --output $GENERATED_PATH --client axios --indent 2
openapi --input $DART_API_SCHEMA_URL --output $GENERATED_WITH_OPTIONS_PATH --client axios --indent 2 --useOptions

# Apply patches to selectively enable options for specific functions
python3 ./admin/patch_generated_api.py "$GENERATED_PATH" "$GENERATED_WITH_OPTIONS_PATH"
rm -rf "$GENERATED_WITH_OPTIONS_PATH"

if [[ "$OSTYPE" == "darwin"* ]]; then
    sed -i "" "s|BASE: '.*',|BASE: \`\${process.env.DART_HOST ?? 'https://app.itsdart.com'}/api/v0/public\`,|" ./dart/generated/core/OpenAPI.ts
    sed -i "" "s|HEADERS: .*,|HEADERS: { Authorization: \`Bearer \${process.env.DART_TOKEN}\` },|" ./dart/generated/core/OpenAPI.ts
else
    sed -i "s|BASE: '.*',|BASE: \`\${process.env.DART_HOST ?? 'https://app.itsdart.com'}/api/v0/public\`,|" ./dart/generated/core/OpenAPI.ts
    sed -i "s|HEADERS: .*,|HEADERS: { Authorization: \`Bearer \${process.env.DART_TOKEN}\` },|" ./dart/generated/core/OpenAPI.ts
fi
