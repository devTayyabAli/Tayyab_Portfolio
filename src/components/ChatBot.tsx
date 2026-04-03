"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const quickQuestions = [
  "Tell me about your experience",
  "What technologies do you use?",
  "Are you available for hire?",
  "Show me your projects",
];

const botResponses: Record<string, string> = {
  "tell me about your experience":
    "I am a MERN Stack Developer with 2.5 years of experience building web applications using MongoDB, Express.js, React.js, and Node.js. I also specialize in Web3 technologies and have worked on NFT platforms, crypto staking apps, and DeFi projects.",
  "what technologies do you use?":
    "My tech stack includes: Frontend (React.js, Next.js, TypeScript, Tailwind CSS), Backend (Node.js, Express.js, MongoDB), Web3 (Web3.js, Ethers.js, Wagmi, Smart Contracts), and Tools (Git, Postman, AWS).",
  "are you available for hire?":
    "Yes, I'm currently available for new opportunities! I specialize in full-stack development, Web3 applications, and MERN stack projects. Feel free to contact me via email at tayyabarine@gmail.com or phone at +92 3041517931.",
  "show me your projects":
    "I've worked on several exciting projects including: Book of Gates (NFT minting platform), ARC Coin Staking (crypto staking platform), House of Legends (NFT marketplace), BitNexus (crypto presale platform), and KGC World (referral-based crypto earning). Check out the Projects section for more details!",
  experience:
    "I have 2.5 years of professional experience. Currently working at BetterLogics as a MERN Stack Developer (Oct 2024 - Present), and previously at Silicon Nexus as Lead Frontend Developer (Mar 2023 - Sep 2024).",
  skills:
    "My core skills include React.js, Next.js, Node.js, MongoDB, Web3.js, Ethers.js, TypeScript, and various other modern web technologies. Check the Skills section for a complete list!",
  contact:
    "You can reach me at: Email: tayyabarine@gmail.com, Phone: +92 3041517931, Location: Lahore, Pakistan. I'm also active on LinkedIn and GitHub!",
  projects:
    "I've built several Web3 and full-stack projects including NFT platforms, crypto staking apps, and DeFi solutions. My portfolio includes Book of Gates, ARC Coin Staking, House of Legends, BitNexus, and KGC World.",
  default:
    "I'm Muhammad Tayyab, a MERN Stack Developer specializing in Web3 technologies. I can tell you about my experience, skills, projects, or how to contact me. What would you like to know?",
};

function getBotResponse(input: string): string {
  const lowerInput = input.toLowerCase();

  for (const [key, response] of Object.entries(botResponses)) {
    if (lowerInput.includes(key)) {
      return response;
    }
  }

  // Check for partial matches
  if (lowerInput.includes("hi") || lowerInput.includes("hello")) {
    return "Hello! Welcome to my portfolio. I'm Muhammad Tayyab, a MERN Stack Developer. How can I help you today?";
  }
  if (lowerInput.includes("bye") || lowerInput.includes("goodbye")) {
    return "Thank you for visiting my portfolio! Feel free to reach out if you have any questions. Have a great day!";
  }
  if (lowerInput.includes("thank")) {
    return "You're welcome! Is there anything else you'd like to know about my work or experience?";
  }

  return botResponses.default;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Tayyab's AI assistant. Ask me anything about his experience, skills, or projects!",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (text: string = inputValue) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: text,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot thinking
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(text),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-cyan text-black flex items-center justify-center shadow-lg hover:shadow-cyan/50 transition-shadow ${
          isOpen ? "hidden" : ""
        }`}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] h-[500px] max-h-[calc(100vh-100px)] glass rounded-2xl overflow-hidden flex flex-col border border-cyan/30 glow-cyan"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-cyan/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan flex items-center justify-center">
                  <Bot className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Tayyab&apos;s Assistant</h3>
                  <p className="text-xs text-gray-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${
                    message.sender === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.sender === "user"
                        ? "bg-white/10"
                        : "bg-cyan"
                    }`}
                  >
                    {message.sender === "user" ? (
                      <User className="w-4 h-4 text-white" />
                    ) : (
                      <Bot className="w-4 h-4 text-black" />
                    )}
                  </div>
                  <div
                    className={`max-w-[75%] p-3 rounded-2xl text-sm ${
                      message.sender === "user"
                        ? "bg-cyan text-black rounded-br-none"
                        : "bg-white/5 text-gray-200 rounded-bl-none"
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-cyan flex items-center justify-center">
                    <Bot className="w-4 h-4 text-black" />
                  </div>
                  <div className="bg-white/5 p-3 rounded-2xl rounded-bl-none flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length < 3 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((question) => (
                    <button
                      key={question}
                      onClick={() => handleSend(question)}
                      className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-400 hover:bg-cyan/20 hover:text-cyan transition-colors border border-white/10"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan transition-colors text-sm"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!inputValue.trim() || isTyping}
                  className="w-10 h-10 rounded-full bg-cyan text-black flex items-center justify-center hover:bg-cyan/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
