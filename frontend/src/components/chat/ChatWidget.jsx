import { useEffect, useRef, useState } from 'react'
import { MessageCircle, Minimize2, Send, X } from 'lucide-react'
import { getMockReply, initialMessages, suggestedQuestions } from '../../data/chat.js'

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [minimized, setMinimized] = useState(false)
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing, open])

  const sendMessage = (text) => {
    const trimmed = text.trim()
    if (!trimmed || typing) return

    const userMsg = {
      id: `u-${Date.now()}`,
      role: 'user',
      content: trimmed,
      time: 'Just now',
    }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setTyping(true)

    window.setTimeout(() => {
      const reply = {
        id: `a-${Date.now()}`,
        role: 'assistant',
        content: getMockReply(trimmed),
        time: 'Just now',
      }
      setMessages((prev) => [...prev, reply])
      setTyping(false)
    }, 900)
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => {
          setOpen(true)
          setMinimized(false)
        }}
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand-700 text-white shadow-lg shadow-brand-700/25 transition hover:bg-brand-800"
        aria-label="Open support chat"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    )
  }

  return (
    <div className="fixed bottom-5 right-5 z-40 w-[calc(100vw-1.5rem)] max-w-sm">
      <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-xl">
        <div className="flex items-center justify-between bg-brand-800 px-4 py-3 text-white">
          <div>
            <p className="font-display text-sm font-semibold">AI Support</p>
            <p className="text-xs text-brand-200">Typically replies instantly</p>
          </div>
          <div className="flex gap-1">
            <button
              type="button"
              onClick={() => setMinimized((v) => !v)}
              className="rounded-lg p-1.5 hover:bg-white/10"
              aria-label="Minimize chat"
            >
              <Minimize2 className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-lg p-1.5 hover:bg-white/10"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {!minimized && (
          <>
            <div className="h-72 space-y-3 overflow-y-auto bg-slate-50 px-4 py-3">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-sm ${
                      msg.role === 'user'
                        ? 'rounded-br-md bg-brand-700 text-white'
                        : 'rounded-bl-md border border-border bg-white text-slate-700'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-bl-md border border-border bg-white px-3.5 py-2 text-sm text-muted">
                    <span className="inline-flex gap-1">
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:0ms]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:150ms]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:300ms]" />
                    </span>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            <div className="flex flex-wrap gap-1.5 border-t border-border bg-white px-3 py-2">
              {suggestedQuestions.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => sendMessage(q)}
                  className="rounded-full border border-border bg-slate-50 px-2.5 py-1 text-[11px] text-slate-600 hover:bg-brand-50 hover:text-brand-700"
                >
                  {q}
                </button>
              ))}
            </div>

            <form
              className="flex gap-2 border-t border-border p-3"
              onSubmit={(e) => {
                e.preventDefault()
                sendMessage(input)
              }}
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                className="flex-1 rounded-lg border border-border px-3 py-2 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
              />
              <button
                type="submit"
                className="rounded-lg bg-brand-700 p-2.5 text-white hover:bg-brand-800"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
