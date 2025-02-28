import { motion } from "framer-motion";

const Home = () => {
  return (
    <section id="home" className="h-screen flex flex-col items-center justify-center text-center bg-gray-900 text-white">
      <motion.img
        src="/assets/Justice.jpg" 
        alt="Profile"
        className="!w-20 !h-20 md:!w-24 md:!h-24"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      
      <h1 className="text-3xl md:text-5xl font-bold mt-4">Hi, I'm <span className="text-blue-400">N-nyiimock Bitanyanmi</span></h1>
      <p className="text-lg md:text-xl mt-2 text-gray-300">
        Data Scientist | Python | Azure Enthusiast | Power BI & MS Excel Expert111
      </p>

      <motion.a 
        href="#Projects"
        className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition"
        whileHover={{ scale: 1.1 }}
      >
        My Data Science Projects Coming Live Soon...
      </motion.a>
    </section>
  );
};

export default Home;
