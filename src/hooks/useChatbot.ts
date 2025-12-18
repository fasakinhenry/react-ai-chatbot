import axios from 'axios';
import { useState } from 'react';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const useChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = async (userMessage: string) => {
    const newMessages: Message[] = [
      ...messages,
      { text: userMessage, sender: 'user' },
    ];
    setMessages(newMessages);
    try {
      // Get responses using the new response API
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4o-mini',
          messages: [{ role: 'user', content: userMessage }],
        },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );
      const botMessage = response.data.choices[0].message.content;
      setMessages([...newMessages, { text: botMessage, sender: 'bot' }]);
    } catch (error) {
      console.error('Error fetching AI response:', error);
    }
  };

  return { messages, sendMessage };
};

export default useChatBot;
