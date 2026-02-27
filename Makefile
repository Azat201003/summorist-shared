PROTO_DIR := proto
GEN_GO_DIR := gen/go
PROTO_FILES := $(shell find $(PROTO_DIR) -name '*.proto')

all: clear gen-proto

clear:
	rm -rf $(GEN_GO_DIR)/*

gen-proto: $(PROTO_FILES)
	@mkdir -p $(GEN_GO_DIR)
	protoc -I $(PROTO_DIR) \
		--go_out=$(GEN_GO_DIR) --go_opt=paths=source_relative \
		--go-grpc_out=$(GEN_GO_DIR) --go-grpc_opt=paths=source_relative \
		$(PROTO_FILES)
	protoc -I $(PROTO_DIR) \
		--gotag_out=outdir="$(GEN_GO_DIR)":. \
		--gotag_opt=paths=source_relative \
		$(PROTO_FILES)
	scripts/gen-mocks.sh
	@echo "✓ Proto files generated"

