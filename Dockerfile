# Use a valid Go version
FROM golang:1.17 AS builder

# Install dependencies if any
RUN apt-get update && apt-get install -y gcc

# Set your working directory inside the container
WORKDIR /go/src/github.com/org/repo

# Copy your code into the container
COPY . .
COPY ./dist .

# List the contents (for debugging)
RUN ls -al

# Build the Go application
# If you're building for a different architecture, you'd set GOARCH accordingly.
RUN CGO_ENABLED=1 GOOS=linux GOARCH=amd64 go build -o server.templrjs .

# The command to run when the container starts
CMD ["/go/src/github.com/org/repo/server.templrjs", "-p", "1337"]
