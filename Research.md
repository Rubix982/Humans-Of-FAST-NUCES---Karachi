# Facebook API

## [Pages API](https://developers.facebook.com/docs/pages/)

- The Pages API allows apps to access and update a Facebook Page's settings and content, create and get Posts, get Comments on Page owned content, get Page insights, update actions that Users are able to perform on a Page, and much more.

## [Send API Reference](https://developers.facebook.com/docs/messenger-platform/reference/send-api/)

- The Send API is the main API used to send messages to users, including text, attachments, structured message templates, sender actions, and more.

## [Messages](https://developers.facebook.com/docs/graph-api/reference/v6.0/message)

- An individual message in Facebook Messenger. This is a Pages-only endpoint. To get individual message ID you should retrieve the conversation thread of which the message is a part. To do this, you must:

```
Search /page/conversations for the conversation_id
Search the conversation_id for the messages
conversation_id/message_id?fields=messages
Search the message_id for the message
message_id?fields=message
Or, use Webhooks for Pages to retrieve the messages.
```

## [Page Conversations](https://developers.facebook.com/docs/graph-api/reference/page/conversations/)

- ### Reading

> The page's conversations

> ***Note***: Time-based pagination is not available for the conversations endpoint.

- ### Permissions
> A page access token with pages_messaging permission can be used to view any conversation in which the page is involved. The user requesting the page access token must be an admin, editor, or moderator of the page.

## [Sending Messages](https://developers.facebook.com/docs/messenger-platform/send-messages/)

- Many types of unstructured content can be sent with the Messenger Platform, including text, audio, images, video, and files.

- There are also a number of pre-defined [message templates](https://developers.facebook.com/docs/messenger-platform/send-api-reference/templates) available that allow you to send structured messages for a richer experience. For more information, see [Templates](https://developers.facebook.com/docs/messenger-platform/send-messages/templates).

- For a complete list of API calls and request properties, see the [Send API Reference](https://developers.facebook.com/docs/messenger-platform/reference/send-api/).

## [APIs and SDKs](https://developers.facebook.com/docs/apis-and-sdks/)

- Find out how our APIs work and integrate our products quickly using SDKs for common languages and platforms.

- ### [SDKs](https://developers.facebook.com/docs/marketing-api/sdks/)
  - PHP, Python, Java, Ruby, NodeJS

# Page Names

- Nothing Reads Like FASTians
- A Read Of Quarantine
- Well Read FASTians
- Read Up
- The Art of Quarantine
- Swing the Read
- Musings Of FAST
- Musings While Quarantined
- FASTians X
- All You Read Is FAST

# Psych

## Messenger - Product

- App ID `228632805023558`
- App Secret `0061ac1d01c73c65e423445d3d8ba093`
- Access Token `EAADP8Lkgn0YBAFAVhIOoQaYuPAfmSySfPA5FTanNLJeICcK5z1b8vTxZBKX7dd2hPZClpEf3iqpoJJs4JRtvbwYchGrDuPxdiZC5hokL1h3QQDXWskm3CvsIaiy7bjJvC7Nfirsc49qyhVaQCjo2tWZA85cp74k6kM8rZBI5pRwZDZD`