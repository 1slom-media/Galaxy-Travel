import { Footer, Header, HeroImage,PricingComp } from "../../components"

export const Pricing=()=>{
    return(
        <div>
            <Header/>
            <HeroImage heading="PRICING" text="Choose your trip." />
            <PricingComp/>
            <Footer/>
        </div>
    )
}