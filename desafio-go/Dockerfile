FROM golang:alpine3.18

WORKDIR /usr/go/src/app

COPY . .

RUN go mod init hello-world && \
    go build hello-world.go

CMD ["./hello-world"]
