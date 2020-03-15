#!/usr/bin/env bash

set -o errexit
set -o nounset

npx now --no-clipboard -t ${ZEIT_TOKEN} -m commit=${GITHUB_SHA} -m branch=${GITHUB_REF}
# npx now --no-clipboard -t ${ZEIT_TOKEN}
npx now ls julianehendershot > temp
ALIAS=$(cat temp | grep julianehendershot | awk '{ print $2 }' | head -1)
npx now alias $ALIAS dev.julianehendershot.com
rm temp
