type MessageCallback = (message: string) => void;

type Connection = {
  onMessage: (callback: MessageCallback) => void;
  disconnect: () => void;
};

export function connectToServer(roomId: string): Connection {
  console.log(`Connecting to room: ${roomId}`);

  let interval: number;
  let messageCallback: MessageCallback | null = null;

  interval = setInterval(() => {
    if (messageCallback) {
      const fakeMessage = `Message from room ${roomId} at ${new Date().toLocaleTimeString()}`;

      messageCallback(fakeMessage);
    }
  }, 3000);

  return {
    onMessage(callback: MessageCallback) {
      messageCallback = callback;
    },

    disconnect() {
      console.log(`Disconnected from room: ${roomId}`);
      clearInterval(interval);
    },
  };
}