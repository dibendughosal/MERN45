import img1 from "../assets/OurService/repair.png"
import img2 from "../assets/OurService/exchange.png"
import img3 from "../assets/OurService/upgrade.png"
import img4 from "../assets/OurService/warrenty.png"
import Card from "./Card"

function Services() {
  return (
    <div className="w-full pb-20">
      <div className="w-[92%] mx-auto flex flex-col items-center gap-y-5">
        <h1 className="font-bold text-[40px] font-serif">Our Services</h1>
        <div className="flex gap-x-5">
        <Card 
        src={img1} 
        heading="Repair" 
        para="Offering expert repair services to ensure your satisfaction guaranteed. Contact us."
        />

        <Card src={img2}
        heading="Exchange"
        para="Offer assistance instead of exchanging relevant information for service."
        />

        <Card src={img3}
        heading="Upgrade"
        para="Enhance your experience with our premium service upgrade options."/>

        <Card src={img4}
        heading="Warranty"
        para="Guaranteed service provided within warranty terms. Contact for assistance."
        />
        </div>
      </div>
    </div>
  )
}

export default Services
