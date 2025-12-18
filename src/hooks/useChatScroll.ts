import React, { useEffect } from 'react'

function useChatScroll<T>(dep: T): React.RefObject<HTMLDivElement | null> {
  const ref = React.useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
    }, [dep]);

    return ref;
};

export default useChatScroll;
