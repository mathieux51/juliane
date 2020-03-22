#!/usr/bin/env bash

set -o errexit
set -o nounset

if [[ -z "$NOW_PROJECT_ID" ]]; then
  echo "Missing NOW_PROJECT_ID" 1>&2
  exit 1
fi

if [[ -z "$NOW_ORG_ID" ]]; then
  echo "Missing NOW_ORG_ID" 1>&2
  exit 1
fi

if [[ -z "$RECAPTCHA_CLIENT_SIDE" ]]; then
  echo "Missing RECAPTCHA_CLIENT_SIDE" 1>&2
  exit 1
fi

npx now -t ${NOW_TOKEN} secrets rm RECAPTCHA_CLIENT_SIDE -y
npx now -t ${NOW_TOKEN} secrets add RECAPTCHA_CLIENT_SIDE ${RECAPTCHA_CLIENT_SIDE}

npx now --no-clipboard -t ${NOW_TOKEN} -e RECAPTCHA_CLIENT_SIDE=${RECAPTCHA_CLIENT_SIDE} -m commit=${GITHUB_SHA} -m branch=${GITHUB_REF}
# npx now --no-clipboard -t ${NOW_TOKEN}
npx now ls julianehendershot -t ${NOW_TOKEN} > temp
ALIAS=$(cat temp | grep julianehendershot | awk '{ print $2 }' | head -1)
npx now alias $ALIAS dev.julianehendershot.com -t ${NOW_TOKEN}
rm temp
