#!/bin/bash

# Usage: vault.sh <url> <file_type> <token> <destination>
URL=$1
FILE_TYPE=$2
TOKEN=$3
DESTINATION=$4

# Get the last path
FILE_NAME=$(echo "$URL" | awk -F'/' '{print $NF}')

# Check $DESTINATION is not empty
if [ ! -z "$DESTINATION" ]; then
  FILE_NAME="$DESTINATION/$FILE_NAME"
fi

# Output file path for the environment file

# Fetch JSON data using curl and save it to a temporary file
TEMP_FILE=$(mktemp)
curl --location "$URL" \
--header "X-Vault-Token: $TOKEN" >"$TEMP_FILE"

if [ "$FILE_TYPE" = "env" ]; then
  # Extract the 'data.data' field from the JSON and convert it to a list of environment variables
  jq -r '.data.data | to_entries | .[] | .key + "=" + (.value | tostring)' "$TEMP_FILE" > "$FILE_NAME"
else
  # Extract the 'data.data' field from the JSON and save it to a file
  jq -r '.data.data' "$TEMP_FILE" > "$FILE_NAME"
fi

# Cleanup temporary file
rm "$TEMP_FILE"

echo "Environment file created: $FILE_NAME"
