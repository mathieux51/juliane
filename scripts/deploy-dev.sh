#!/usr/bin/env bash

set -o errexit
set -o nounset

PROJECT_NAME='julianehendershot'

# build
npx now --no-clipboard -t ${NOW_TOKEN} -m commit=${GITHUB_SHA} -m
branch=${GITHUB_REF} --build-env [RECAPTCHA_SERVER_SIDE=${RECAPTCHA_SERVER_SIDE}
RECAPTCHA_CLIENT_SIDE=${RECAPTCHA_CLIENT_SIDE}]

# list all projects in temp file
npx now ls ${PROJECT_NAME} -t ${NOW_TOKEN} > temp

# get the alias of last deployment
ALIAS=$(cat temp | grep ${PROJECT_NAME} | awk '{ print $2 }' | head -1)

# alias last deployement
npx now alias $ALIAS "dev.${PROJECT_NAME}.com" -t ${NOW_TOKEN}

# clean up
unset ALIAS
rm temp
