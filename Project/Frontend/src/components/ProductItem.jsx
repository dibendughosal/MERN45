import appleLogo from "../assets/apple.png"
function ProductItem({brandName, title, startingPrice, cuttprice, descrption, thumbnail, id}) {
  return (
    <div key={id} className="flex w-[410px] px-8 py-5 rounded-xl bg-[#ECECEC] shadow-xl items-center hover:-translate-y-2">
        {/* Left */}
        <div>
            <div className="flex items-center">
                <img src={appleLogo} alt="apple-logo" className="h-8"/>
                <h1 className="font-bold text-lg">{brandName}</h1>
            </div>
            <div className="space-y-1 pb-2">
                <h1 className="font-bold text-2xl pt-2">{title}</h1>
                <h3><span className="font-bold">FROM ₹{startingPrice}*</span> <s>₹ {cuttprice}</s></h3>
                <p className="text-sm font-">{descrption}</p>
            </div>
            <button className="btn">Details</button>

        </div>
        {/* Right */}
        <div>
          <img src={thumbnail} alt="" className="w-[300px]"/>
        </div>
    </div>
  )
}

export default ProductItem