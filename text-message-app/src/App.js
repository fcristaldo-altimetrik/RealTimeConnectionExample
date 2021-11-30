import React, { useEffect, useState } from "react";
import { Client } from "@stomp/stompjs";

const SOCKET_URL = "ws://localhost:8080/ws-message";

const App_Stomp = () => {
  const [messages, setMessages] = useState("You server message here.");

  useEffect(() => {
    let onConnected = () => {
      console.log("Connected!!");
      client.subscribe("/wsNotify", function (msg) {
        if (msg.body) {
          var jsonBody = JSON.parse(msg.body);
          console.log("jsonBody", jsonBody);
          if (jsonBody.message) {
            setMessages(jsonBody.message);
          }
        }
      });
    };

    let onDisconnected = () => {
      console.log("Disconnected!!");
    };

    const client = new Client({
      brokerURL: SOCKET_URL,
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: onConnected,
      onDisconnect: onDisconnected,
    });

    client.activate();
  }, []);

  return (
    <div>
      <div>{messages}</div>
    </div>
  );
};

export default App_Stomp;
