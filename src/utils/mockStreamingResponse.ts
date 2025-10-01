const AI_RESPONSES = [
    "That's a great question! Let me think about that for a moment.",
    "I understand what you're asking. Here's my perspective on that topic.",
    "Interesting point! I'd love to discuss this further with you.",
    "Thanks for sharing that with me. I have some thoughts on this.",
    "That's a fascinating question. Let me break this down for you.",
    "I appreciate you bringing this up. Here's what I think about it.",
    "That's definitely worth exploring. Let me share my insights.",
    "Great question! This is something I've been thinking about lately.",
    "I'm glad you asked about this. Here's my take on the matter.",
    "That's an important topic. Let me give you my perspective.",
];

export const mockStreamingResponse = () => {
    const baseResponse = AI_RESPONSES[Math.floor(Math.random() * AI_RESPONSES.length)]!;
    const additionalContent =
        " This is a detailed response that demonstrates how the streaming effect works. The message appears character by character to simulate a real AI assistant typing. You can see how the interface handles longer messages and maintains a smooth user experience.";

    return baseResponse + additionalContent;
};
