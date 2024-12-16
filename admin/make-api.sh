#!/usr/bin/env bash
# -*- coding: utf-8 -*-

set -e

rm -rf dart/generated
openapi --input https://app.itsdart.com/api/v0/schema/ --output ./dart/generated --client axios --indent 2
