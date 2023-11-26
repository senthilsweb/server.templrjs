# Variables
WEB_DIR=./web
DIST_DIR=./dist
OS=$(shell uname)

# Phony targets ensure that Make doesn't look for files named like the target
.PHONY: clean generate copy build package

#all: clean generate copy build package
all: build package

clean:
	@echo "Deleting previous web build artifacts..."
	@rm -rf $(WEB_DIR)/dist
	@echo "Deleted..."

generate:
	@echo "Installing web dependencies..."
	@cd $(WEB_DIR) && npm i
	@echo "Dependencies installed..."
	@echo "Generating build..."
	@cd $(WEB_DIR) && npm run generate || (echo "Error generating build. Exiting..." && exit 1)
	@echo "Generated..."

copy:
	@echo "Copying to root $(DIST_DIR) for embedding..."
	@find $(DIST_DIR) -mindepth 1 -delete
	@cp -r $(WEB_DIR)/dist/* $(DIST_DIR)/
	@echo "Copied..."



build:
	@echo "Building Go binary for $(OS)..."
ifeq ($(OS),Linux)
	@go build -o server.templrjs.amd64 -v .
else ifeq ($(OS),Darwin)
	@go build -o server.templrjs.darwin -v .
else
	@echo "Unsupported OS: $(OS). Exiting..."
	@exit 1
endif
	@echo "Binary built..."

package:
	@echo "Packaging files..."
	@ZIP_NAME="server.templrjs_`date +%s`.zip"; \
	zip $$ZIP_NAME server.templrjs.-* config.yml docker-compose.yml rules.yml sample.env
	@echo "Packaged into $$ZIP_NAME..."
