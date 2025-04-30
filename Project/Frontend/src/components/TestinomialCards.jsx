import quoteImg from "../assets/CustomerReviews/quote.png"


function TestinomialCards({name, description, rating, profile}) {

  return (
    <div className="w-[270px] h-full border border-gray-400 rounded-md bg-gray-100 px-4 flex flex-col py-5 justify-between gap-y-3 items-center">
      <img src={quoteImg} alt="quote" className="w-8"/>
      <p className="text-center font-[500]">{description}</p>
      
      <img src={profile} alt="" className="w-16 h-16 object-cover rounded-[50%]"/>
      <h1 className="font-bold">{name}</h1>
      
    </div>
  )
}

export default TestinomialCards
