import React from 'react'
import TableForm from './TableForm.jsx'
import MenuPage from './MenuPage.jsx'

function ResturantPage()
{
    return(
        <>
        <div className='resturant-Page'>
           <div className='resturant-Page-Content'>
           <h1>Resturant-page-Heading</h1>
           <div className='resturant-address'>
                 <p> ADDRESS</p>
             </div>
           </div>
            <div className='resturant-page-offers'>
                <div className='resturant-special-dinning-offer'>
                  <div className='resturant-special-dinning-offer-left'>
                     <div className='special-offer-heading'>
                        <h1>Special Offers</h1>
                     </div>
                     <div className='special-offer-cards'>
                        <div className="golden-card">
                          <div>PRE-BOOK OFFER</div>
                          <div>Flat 30% OFF</div>
                          <div>Valid from 9:30PM to 11:55PM</div>
                          <div>Booking required</div>
                        </div>
                     </div>
                     </div>
                     <div className='resturant-special-dinning-offer-right'>
                        <TableForm/>
                     </div>

                </div>
            </div>
            <div className='resturant-page-menu'>
              <div className='resturant-menu-heading'>
                <h3>Menu</h3>
              </div>    
              <div className='resturant-menu-cards'>
                <MenuPage/>
                <MenuPage/>
                <MenuPage/>
                <MenuPage/>
                <MenuPage/>
                <MenuPage/>
                <MenuPage/>
                <MenuPage/>
                <MenuPage/>
                <MenuPage/>
               </div>
            </div>
        </div>
        </>
    )
}

export default ResturantPage;