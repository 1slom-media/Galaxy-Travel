import { Footer, Header, HeroImage, TrainingComp } from "../../components"

export const Training =()=>{
    return(
        <div>
            <Header/>
            <HeroImage heading='TRAINING.' text='Pre-Flight & In-Flight Training.' />
            <TrainingComp/>
            <Footer/>
        </div>
    )
}