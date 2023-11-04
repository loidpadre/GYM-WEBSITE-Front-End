import Card from "./cards/card";
import { Wrapper } from "./style";
import {GiGymBag, GiMuscleUp,GiBrain } from "react-icons/gi"
import {CgGym } from "react-icons/cg"


export default function Feature(){
    return(
        <Wrapper>
            <h1 className="title">FEATURES</h1>
            <div className="cards">          
            <Card icon={<GiMuscleUp size={90} color="red"/>} title="WeitLight" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, corporis."/>
            <Card icon={<GiGymBag size={90} color="red"/>} title="Specific Muscle" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, corporis."/>
            <Card icon={<CgGym size={90} color="red"/>} title="Flex Your muscle" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, corporis."/>
            <Card icon={<GiBrain size={90} color="red"/>} title="Cardio Exercise" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, corporis."/>
            </div>
        </Wrapper>
    )
}