import ResturantCards from "./ResturantCards";
import { useEffect,useState } from "react";
import ShimmerCard from "./ShimmerCard";

function ResturantCardsContainer()
{
    const [resturantList, setResturantList] = useState([]);
   
    useEffect(()=>
    {
        fetchResturants()
    },[])

  
    if(resturantList.length===0)
        {
          
           return  <><div className='shimmer-style'><ShimmerCard/><ShimmerCard/><ShimmerCard/><ShimmerCard/></div></>;
        }


    async function  fetchResturants()
    {
        let resturantList = await fetch("https://68134c22129f6313e210d7ae.mockapi.io/HotelNames")
        resturantList = await resturantList.json();
        setResturantList(resturantList);
    }

    return(
        <>
        <div className="dinning-resturant-card-container">
        {
          resturantList.map((resturantCard)=>
          {
             return(
                <ResturantCards key={resturantCard.id} resturantCard={resturantCard} />
             )
          })

        }
           </div>
        </>
    )
}

export default ResturantCardsContainer;