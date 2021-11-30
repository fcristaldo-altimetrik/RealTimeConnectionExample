# Server for RTC ( RealTimeConnection ) 

This server is exposing `ws://localhost:8080/ws-message` to be able to receive messages

## Run the server

To run the server, execute DemoApplication with java v11+

## To send a To broadcast a message

Send an API POST Request to 
`http://localhost:8080/notify`

JSON Body: 
`{message:"<your message here>"}`

