PROTO_DIR := proto
GEN_GO_DIR := gen/go
GEN_CPP_DIR := gen/cpp
GEN_TYPESCRIPT_DIR := gen/typescript
GEN_OPENAPI_DIR := gen/openapi
PROTO_FILES := $(shell find $(PROTO_DIR) -name '*.proto')
INCLUDE_DIR := /usr/include

all: clear gen-proto

clear:
	rm -rf $(GEN_GO_DIR)/*

gen-proto: $(PROTO_FILES)
	@mkdir -p $(GEN_CPP_DIR)
	@mkdir -p $(GEN_GO_DIR)
	protoc -I $(PROTO_DIR) -I $(INCLUDE_DIR) \
		--cpp_out=$(GEN_CPP_DIR) \
		--go_out=$(GEN_GO_DIR) --go_opt=paths=source_relative \
		--go-grpc_out=$(GEN_GO_DIR) --go-grpc_opt=paths=source_relative \
		$(PROTO_FILES)
	protoc -I $(PROTO_DIR) -I $(INCLUDE_DIR)\
		--gotag_out=outdir="$(GEN_GO_DIR)":. \
		--gotag_opt=paths=source_relative \
		$(PROTO_FILES)
	@mkdir -p $(GEN_OPENAPI_DIR)
	protoc -I $(PROTO_DIR) -I $(INCLUDE_DIR) --grpc-gateway_out "$(GEN_GO_DIR)" \
    --grpc-gateway_opt=paths=source_relative \
    --grpc-gateway_opt=generate_unbound_methods=true \
    --openapiv2_out=$(GEN_OPENAPI_DIR) \
    $(PROTO_FILES)
	@mkdir -p $(GEN_TYPESCRIPT_DIR)
	protoc -I $(PROTO_DIR) -I $(INCLUDE_DIR) \
		--grpc-gateway-ts_out=ts_import_roots=$(GEN_TYPESCRIPT_DIR),ts_import_root_aliases=base:$(GEN_TYPESCRIPT_DIR) \
		$(PROTO_FILES)

	scripts/gen-mocks.sh
	
	@echo "✓ Proto files generated"

