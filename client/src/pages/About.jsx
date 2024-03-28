export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Welcome to our health and wellness blog! This blog was created
              as a personal project to research , document, and share evidence-based 
              information, practical tips, and inspiration. Whether you’re a fitness 
              enthusiast, a nutrition novice, or simply seeking a healthier lifestyle,
              we’ve got you covered
            </p>

            <p>
              We believe that health is not just about physical fitness; it’s a holistic
              approach that encompasses mental, emotional, and spiritual aspects.
            </p>

            <p>
            Let’s embark on this wellness journey together!
            Remember, health is not a destination; it’s a lifelong 
            adventure. Let’s thrive together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}