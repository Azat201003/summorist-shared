PROTO_DIR := proto
GEN_GO_DIR := gen/go
GEN_CPP_DIR := gen/cpp
PROTO_FILES := $(shell find $(PROTO_DIR) -name '*.proto')

all: clear gen-proto

clear:
	rm -rf $(GEN_GO_DIR)/*

gen-proto: $(PROTO_FILES)
	# Golang
	@mkdir -p $(GEN_GO_DIR)
	protoc -I $(PROTO_DIR) \
		--cpp_out=$(GEN_CPP_DIR) \
		--go_out=$(GEN_GO_DIR) --go_opt=paths=source_relative \
		--go-grpc_out=$(GEN_GO_DIR) --go-grpc_opt=paths=source_relative \
		$(PROTO_FILES)
	protoc -I $(PROTO_DIR) \
		--gotag_out=outdir="$(GEN_GO_DIR)":. \
		--gotag_opt=paths=source_relative \
		$(PROTO_FILES)
	
	# C++
	@mkdir -p $(GEN_CPP_DIR)
	protoc -I $(PROTO_DIR) \
		--cpp_out=$(GEN_CPP_DIR) $(PROTO_FILES)
	protoc -I=$(PROTO_DIR) --grpc_out=$(GEN_CPP_DIR) --plugin=protoc-gen-grpc=`which grpc_cpp_plugin` $(PROTO_FILES)
	
	scripts/gen-mocks.sh
	@echo "✓ Proto files generated"

