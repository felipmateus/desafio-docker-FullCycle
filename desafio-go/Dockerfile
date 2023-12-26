FROM golang:alpine3.18

WORKDIR /usr/go/src/app

COPY . .

RUN go mod init full-cycle-rocks && \
    go build full-cycle-rocks.go

CMD ["./full-cycle-rocks"]
