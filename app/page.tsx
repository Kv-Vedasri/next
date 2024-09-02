import Hero from '@/components/Hero';
export default function Home() {
  return (
   <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:ox-10 px-5 ">
      <div className=" max w-7x1 w-full ">
        <Hero/>
      </div>
   </main>
  );
}