function Gadgets({src, paragraph}) {
  return (
    <div className="flex flex-col justify-center gap-y-4">
        <div className='w-[205px] h-[205px] bg-[#EBEAEA] rounded-[50%] flex flex-col items-center justify-center'>
        <div className="flex justify-center items-center">
            <img src={src} alt="Logo 1" className="w-[12vw] mix-blend-multiply hover:scale-[1.08] transition duration-300" />
        </div>
        </div>
        <h1 className="text-center font-semibold">{paragraph}</h1>
    </div>
  )
}

export default Gadgets
