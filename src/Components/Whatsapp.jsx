import { Link } from "react-router-dom";

const WhatsappButton = ({
  number = "923022228021",
  message = "Hi! I'm interested in your services.",
}) => {
  const encodedMessage = encodeURIComponent(message);

  return (
    <Link
      to={`https://wa.me/${number}?text=${encodedMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-25 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#2E3000] shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform duration-300"
    >
      {/* Pulse/bubble ring animation */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#2E3000] opacity-75 animate-ping" />

      <svg className="relative w-8 h-8" viewBox="0 0 32 32" fill="#25D366">
        <path d="M16.001 3C9.107 3 3.5 8.607 3.5 15.5c0 2.294.63 4.44 1.72 6.28L3 29l7.42-2.17a12.42 12.42 0 0 0 5.58 1.36h.001C22.895 28.19 28.5 22.583 28.5 15.69 28.5 8.797 22.895 3 16.001 3zm0 22.75h-.001a10.24 10.24 0 0 1-5.22-1.43l-.375-.223-3.888 1.137 1.157-3.78-.244-.39a10.22 10.22 0 0 1-1.57-5.47c0-5.66 4.6-10.26 10.264-10.26 2.742 0 5.32 1.07 7.258 3.01a10.19 10.19 0 0 1 3.006 7.26c0 5.66-4.6 10.15-10.387 10.15z" />
        <path d="M21.61 18.155c-.303-.152-1.792-.884-2.07-.985-.278-.101-.48-.152-.682.152-.202.303-.783.984-.96 1.186-.176.202-.353.227-.656.076-.303-.152-1.28-.472-2.437-1.505-.9-.803-1.51-1.795-1.687-2.098-.176-.303-.019-.467.133-.618.136-.136.303-.353.454-.53.152-.176.202-.303.303-.505.101-.202.05-.379-.025-.53-.076-.152-.682-1.644-.935-2.252-.246-.59-.497-.51-.682-.52-.176-.008-.379-.01-.581-.01a1.11 1.11 0 0 0-.808.379c-.278.303-1.06 1.035-1.06 2.526 0 1.49 1.086 2.93 1.237 3.132.152.202 2.137 3.264 5.18 4.577.724.312 1.288.499 1.728.638.726.231 1.386.198 1.908.12.582-.087 1.792-.733 2.045-1.44.253-.708.253-1.314.177-1.44-.075-.127-.278-.202-.581-.354z" />
      </svg>
    </Link>
  );
};

export default WhatsappButton;
