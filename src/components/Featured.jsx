import React from 'react';

function Featured() {
  return (
    <div className="border-b border-neutral-900 pb-24 lg:mb-36 lg:text-3xl">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="mt-24 text-4xl font-medium tracking-wide">
          Download <span className="text-neutral-500">My CV</span>
        </h2>

        {/* Subheading */}
        <p className="text-sm text-purple-400 tracking-widest mt-4 mb-6 uppercase">
          PDF Available for Review
        </p>

        {/* Description */}
        <p className="text-neutral-400 mb-10 text-lg px-4">
          Want to know more about my experience, education, and skills? Feel free to view my updated resume and get a full view of my professional journey.
        </p>

        {/* View CV Button */}
        <a
          href="/CV/Dinuri Dewendra.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 bg-gradient-to-r from-purple-600 to-purple-900 text-white text-lg rounded-xl font-medium shadow-md hover:scale-105 transition-transform"
        >
          Download
        </a>
      </div>
    </div>
  );
}

export default Featured;
