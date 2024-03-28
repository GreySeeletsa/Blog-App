export default function Progress() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to track your progress?
            </h2>
            <p className='text-gray-500 my-2'>
                Track the number of exercises you've completed,
                new healthy habits,
                lifestyle and more...
            </p>
        </div>
        <div className="p-7 flex-1">
            <img src="https://cdn.pixabay.com/photo/2021/01/23/11/04/coming-5942155_960_720.jpg" />
        </div>
    </div>
  )
}
