"use client";

import { useState } from 'react';

export default function ExamplePage() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-[480px] bg-white border border-[#CFD7DD] rounded-2xl p-6 space-y-5">
        <h2 className="text-[#23323F] text-base leading-6 font-bold tracking-[0.25px] font-poppins">
          Get the latest insights in your inbox
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="w-full">
            <div className="w-full border border-[#AFBCC6] rounded-lg px-3 py-3 focus-within:border-[#5CADBE] transition-colors">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Type your email"
                className="w-full text-base leading-6 text-[#8EA1AF] font-medium tracking-[0.25px] font-poppins outline-none placeholder:text-[#8EA1AF]"
                required
              />
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full bg-[#5CADBE] text-white font-semibold text-sm leading-5 tracking-[0.25px] py-3 px-6 rounded-lg font-poppins hover:bg-[#4a9cad] transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </main>
  );
}