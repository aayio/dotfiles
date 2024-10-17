#!/bin/bash

path="$(cat profile_path)"

if [ -d "$path" ]; then
    echo "does exist 🙂: $path"
    echo "copying user.js"
    cp user.js "$path"
else
    echo "does not exist ⚠️: $path"
fi
