# Real Time Connection Example ( RTC )

## Server for RTC

This server is exposing `ws://localhost:8080/ws-message` to be able to receive messages

### Run the server

To run the server, execute DemoApplication with java v11+

## Client for RTC

This is a ReactJS webapp receiving messages from the remote server

### Run the client

To run the client execute `yarn start` inside text-message-app/ folder

## To send a To broadcast a message

Send an API POST Request to
`http://localhost:8080/notify`

JSON Body:
`{message:"<your message here>"}`
