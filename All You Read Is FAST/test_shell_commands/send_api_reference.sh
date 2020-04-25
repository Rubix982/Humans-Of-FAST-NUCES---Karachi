curl -X POST -H "Content-Type: application/json" -d '{
  "messaging_type" : "RESPONSE"
  "recipient": {
    "id": "10213567110690760"
  },
  "message": {
    "text": "hello, world!"
  }
}' "https://graph.facebook.com/v6.0/me/messages?access_token=111767213828347"