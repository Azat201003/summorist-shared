gen-proto:
	protoc	--go_out=./gen/go --go-grpc_out=./gen/go \
    		--go_opt=paths=source_relative \
    		--go-grpc_opt=paths=source_relative \
    		--proto_path=proto \
			$(shell sudo find ./proto -name '*.proto')
