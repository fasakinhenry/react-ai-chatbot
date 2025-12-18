import * as React from 'react';

const ChatComponent: React.FunctionComponent = () => {
  return (
    <div className='flex flex-col h-[80vh] bg-white'>
      <h2 className='p-4 font-semibold text-lg text-center flex justify-center items-center gap-2 bg-blue-100 text-blue-800'>React + OpenAI chatbot </h2>
    </div>
  );
};

export default ChatComponent;
