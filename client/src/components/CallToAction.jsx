
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
        <div className="p-5 flex-1 flex justify-center items-center">
            <img src="https://cdn.pixabay.com/photo/2023/08/02/18/21/yoga-8165759_960_720.jpg" width="400" height="300" />
        </div>
    </div>
  )
}