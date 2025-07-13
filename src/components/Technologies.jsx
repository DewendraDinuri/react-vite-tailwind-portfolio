const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24 lg:mb-36 lg:text-3xl">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          {/* Add your technology icons or names here */}
          <p className="text-lg text-neutral-300">React</p>
        </div>

        {/* Example more items */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <p className="text-lg text-neutral-300">Node.js</p>
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <p className="text-lg text-neutral-300">Tailwind CSS</p>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
