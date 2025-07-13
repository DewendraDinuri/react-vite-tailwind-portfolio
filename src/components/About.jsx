const About = () => {
  return (
    <div className="border-b-0 border-neutral-900 pb-4 lg:mb-35">
      <h2 className="my-20 text-center">About 
         <span className="text-neutral-500"> Me</span></h2>
         <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
                <img src={aboutImg} alt="About Image" />
            </div>
            </div>
         </div>
    </div>
  )
}

export default About
