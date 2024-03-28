
export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-m'>
                <h6>What You’ll Find Here</h6>
                    From beginner workouts to advanced training, we’ll share exercise routines,
                    form tips, and motivation to keep you moving.
                    Discover the latest research on superfoods, meal planning, and mindful eating. 
                    We’ll debunk myths and celebrate wholesome ingredients.
                    Learn techniques for stress management, meditation, and cultivating 
                    a positive mindset. Explore delicious and nutritious recipes that nourish your 
                    body and delight your taste buds. From sleep optimization to productivity boosters,
                    we’ll explore ways to enhance your daily life.
            </h2>
        </div>
        <div className="p-7 flex-1">
            <img src="https://media.istockphoto.com/id/1363368428/vector/girl-choosing-healthy-lifestyle-practicing-yoga-near-sport-equipment-vegetables.jpg?s=2048x2048&w=is&k=20&c=Zumtw6XnxEMVr8HnFgXKEOFB86H-ZOi310GpqtngQTU=" />
        </div>
    </div>
  )
}