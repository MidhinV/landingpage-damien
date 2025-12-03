# Damien Chatbot Setup Instructions

## Environment Variables

Create a `.env.local` file in the root of your project with the following:

```env
NEXT_PUBLIC_ELEVENLABS_AGENT_ID=agent_0401kb4epa6eehcsne0zrh791atb
NEXT_PUBLIC_ELEVENLABS_API_KEY=your_api_key_here
```

**Note:** The API key may be required depending on your ElevenLabs plan. If you're using a public agent, you might not need it, but it's recommended to include it.

## Features

The Damien Chatbot includes:

- ✅ Floating button in bottom right corner
- ✅ Damien's photo as the avatar
- ✅ Hover tooltip: "Hi I am Damien! Click here to chat or talk to me"
- ✅ Custom chat interface (not ElevenLabs widget)
- ✅ Text and voice input support
- ✅ Minimize/maximize functionality
- ✅ Seamless integration with ElevenLabs Conversational AI API
- ✅ No "Powered by ElevenLabs" branding

## API Integration

The chatbot uses the ElevenLabs Conversational AI API:
- Creates a conversation session when first opened
- Sends messages to the agent
- Receives text and audio responses
- Maintains conversation context

## Usage

The chatbot is automatically added to the landing page. Users can:
1. Click the floating button to open the chat
2. Type messages or use voice input
3. Minimize the chat window
4. Close the chat window

## Troubleshooting

If the chatbot doesn't work:
1. Verify the agent ID is correct in `.env.local`
2. Check if an API key is required for your ElevenLabs plan
3. Check browser console for any API errors
4. Ensure the agent is properly configured in ElevenLabs dashboard



