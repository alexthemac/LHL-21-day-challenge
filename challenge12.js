const parseTranscripts = (messages) => {
  let messageArray = [];
  messages.forEach((message) => {
    messageArray.push(`${message.origin}: ${message.message}`);
  });
  return messageArray;
}
