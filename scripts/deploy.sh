#!/usr/bin/env bash

set -o errexit
set -o nounset

# build
npx vercel \
  --no-clipboard --confirm -t ${NOW_TOKEN} \
  -m commit=${GITHUB_SHA} -m branch=${GITHUB_REF} \
  -b RECAPTCHA_CLIENT_SIDE=${RECAPTCHA_CLIENT_SIDE} \
  -e DESTINATION_EMAIL_ADDRESS=${DESTINATION_EMAIL_ADDRESS} \
  -e EMAIL_ADDRESS=${EMAIL_ADDRESS} \
  -e EMAIL_PASSWORD=${EMAIL_PASSWORD} \
  -e RECAPTCHA_SERVER_SIDE=${RECAPTCHA_SERVER_SIDE}

# list all projects in temp file
npx vercel ls ${PROJECT_NAME} -t ${NOW_TOKEN} > temp

# get the alias of last deployment
LAST_DEPLOYMENT_NAME=$(cat temp | grep ${PROJECT_NAME} | awk '{ print $2 }' | head -1)

# alias last deployement
npx vercel alias set $LAST_DEPLOYMENT_NAME $ALIAS -t ${NOW_TOKEN}
# check if ALIAS if a subdomain
N=$(echo $ALIAS | awk '{ n = split($0, arr, "."); print n}')
if [ $N == 2 ]
then
  npx vercel alias set $LAST_DEPLOYMENT_NAME $ALIAS -t ${NOW_TOKEN}
fi

# clean up
unset LAST_DEPLOYMENT_NAME
rm temp
