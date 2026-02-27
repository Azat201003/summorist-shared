#!/bin/bash

# Find all _grpc.pb.go files recursively
for file in $(find . -name "*_grpc.pb.go"); do
    # Determine output directory and file name
    dir=$(dirname "$file")
    base=$(basename "$file" _grpc.pb.go)  # removes the suffix
    out_dir="$dir/mock"

    # Create output directory if it doesn't exist
    mkdir -p "$out_dir"

    # Run mockgen
    mockgen -source="$file" \
            -destination="$out_dir/mock_${base}.go" \
            -package=mocks

    echo "Generated mock for $file -> $out_dir/mock_${base}.go"
done
