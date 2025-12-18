import { useState } from "react";

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const useChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = async (userMessage: string) => {
    const newMessages: Message[] = [...messages, { text: userMessage, sender: 'user' }];
    setMessages(newMessages);
    try {
        
    } catch (error) {
        
    }
    const botResponse = await fetchBotResponse(userMessage);
    const newBotMessage: Message = { text: botResponse, sender: 'bot' };
    setMessages((prevMessages) => [...prevMessages, newBotMessage]);
  };

  const fetchBotResponse = async (userMessage: string): Promise<string> => {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: userMessage }],
      }),
    });
    const data = await response.json();
    return data.choices[0].message.content;
  };

  return { messages, sendMessage };
};

export default useChatBot;
