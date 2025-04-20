import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

export default function Eataria() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white overflow-hidden font-sans">
      {/* Animated Star Background */}
      <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden">
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 animate-pulse" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col md:flex-row items-center justify-between p-10 md:p-20">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 space-y-6"
        >
          <h1 className="text-6xl font-extrabold text-white drop-shadow-xl">
            Taste the <span className="text-yellow-500">Legend</span> at <br /> <span className="text-emerald-400">EATARIA</span>
          </h1>
          <p className="text-gray-400 text-xl">
            The pizza that whispers class and screams flavor. Welcome to the future of indulgence.
          </p>
          <Button className="bg-gradient-to-r from-yellow-400 to-red-500 hover:scale-105 transition-transform duration-300 text-black text-lg font-bold px-6 py-3 rounded-full shadow-xl">
            🍕 Order Your Slice Now
          </Button>
        </motion.div>

        <motion.img
          initial={{ rotateY: 180, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          src="https://pngimg.com/uploads/pizza/pizza_PNG44094.png"
          alt="Pizza Hero"
          className="rounded-[3rem] w-full md:w-1/2 mt-10 md:mt-0 drop-shadow-2xl"
        />
      </section>

      {/* About Section */}
      <section className="relative z-10 p-10 md:p-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-bold mb-6 tracking-wide text-emerald-300">Who We Are</h2>
          <p className="text-gray-400 max-w-3xl text-lg leading-relaxed">
            Born from a dream and baked with brilliance — EATARIA is where ingredients meet inspiration. Every pizza is a piece of art: hand-tossed, stone-baked, and flavor-infused to leave you speechless.
          </p>
        </motion.div>
      </section>

      {/* 3D Style Pizza Carousel */}
      <section className="relative h-64 overflow-hidden bg-gray-950">
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-0 w-full h-32 -translate-y-1/2 bg-[url('https://cdn.pixabay.com/photo/2020/04/08/14/52/pizza-5018181_1280.jpg')] bg-contain bg-repeat-x opacity-20"
        />
      </section>

      {/* Contact Section (Disabled) */}
      <section className="relative z-10 p-10 md:p-20 bg-gray-950">
        <h2 className="text-4xl font-bold mb-8 text-yellow-400">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <Card className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg">
            <CardContent className="p-6 flex items-center space-x-4">
              <Phone className="text-yellow-500" />
              <div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <p className="text-gray-400">+91-9104005616</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg">
            <CardContent className="p-6 flex items-center space-x-4">
              <Mail className="text-yellow-500" />
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-gray-400">eataria@pizzashop.com</p>
              </div>
            </CardContent>
          </Card>
        </div>
        <p className="mt-6 text-sm text-gray-500 italic">
          (Form functionality coming soon. We believe in progress, not perfection.)
        </p>
      </section>

      {/* Footer */}
      <footer className="relative z-10 text-center py-10 text-gray-600 text-sm bg-black">
        &copy; 2025 <span className="text-white font-bold tracking-wider">EATARIA</span>. <br className="block md:hidden" /> Curated by minds, built with flavor. <br className="block md:hidden" /> Designed by <span className="text-emerald-500">Nikhil Rangarej</span> 💎
      </footer>
    </div>
  );
}
