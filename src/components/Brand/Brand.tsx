import React from "react";
import { InfiniteMovingBrands } from "./InfiniteSlider";
import BrandImgSection from "./BrandImgSection";
const Brand = () => {
    const brandItems = [
    //   { src: "/images/brand/strapi.png", alt: "Strapi" },
    //   { src: "/images/brand/mapbox.png", alt: "Mapbox" },
    //   { src: "/images/brand/stenciljs.png", alt: "StencilJS" },
    //   { src: "/images/brand/spotify.png", alt: "Spotify" },
    //   { src: "/images/brand/woocommerce.png", alt: "WooCommerce" },
    //   { src: "/images/brand/slack.png", alt: "Slack" },
      { src: "/images/brand/brand-08.png", alt: "WooCommerce" },
      { src: "/images/brand/brand-01.png", alt: "Strapi" },
      { src: "/images/brand/brand-02.png", alt: "Mapbox" },
      { src: "/images/brand/brand-03.png", alt: "StencilJS" },
      { src: "/images/brand/brand-04.png", alt: "Spotify" },
      { src: "/images/brand/brand-t.png", alt: "Slack" },
      // Duplicate items to ensure continuous scrolling
    ];
  
    return (
      <div className="rainbow-brand-area rainbow-section-gap">
        <div className=" flex-col gap-4 w-full justify-center  flex">
          <BrandImgSection />
          <div className="section-title text-center">
            <p className="small-title font-bold">Trusted by 800,000+ Highly Productive Companies</p>
          </div>
          <InfiniteMovingBrands
          className=""
          items={brandItems} direction="left" speed="normal" />
        </div>
      </div>
    );
  };

  export default Brand
// import React from 'react'

// const Brand = () => {
//   return (
//     <div className="rainbow-brand-area rainbow-section-gap">
//     <div className="container">
//         <div className="row">
//             <div className="col-lg-12">
//                 <div className="section-title rating-title text-center sal-animate" data-sal="slide-up" data-sal-duration="700" data-sal-delay="100">
//                     <p className="b1 mb--0 small-title">truest 800,000+ HIGHLY PRODUCTIVE Company</p>
//                 </div>
//             </div>
//         </div>
//         <div className="row">
//             <div className="col-lg-12 mt--10">
//                 <ul className="bg-red-500 brand-list brand-style-2 slider-brand slider-brand-activation">
//                     <li className="slide-single-layout"><a href="#"><img src="/images/brand/strapi.png" alt="Brand Image"/></a></li>
//                     <li className="slide-single-layout"><a href="#"><img src="/images/brand/mapbox.png" alt="Brand Image"/></a></li>
//                     <li className="slide-single-layout"><a href="#"><img src="/images/brand/stenciljs.png" alt="Brand Image"/></a></li>
//                     <li className="slide-single-layout"><a href="#"><img src="/images/brand/spotify.png" alt="Brand Image"/></a></li>
//                     <li className="slide-single-layout"><a href="#"><img src="/images/brand/woocommerce.png" alt="Brand Image"/></a></li>
//                     <li className="slide-single-layout"><a href="#"><img src="/images/brand/slack.png" alt="Brand Image"/></a></li>
//                     <li className="slide-single-layout"><a href="#"><img src="/images/brand/strapi.png" alt="Brand Image"/></a></li>
//                     <li className="slide-single-layout"><a href="#"><img src="/images/brand/mapbox.png" alt="Brand Image"/></a></li>
//                     <li className="slide-single-layout"><a href="#"><img src="/images/brand/stenciljs.png" alt="Brand Image"/></a></li>
//                     <li className="slide-single-layout"><a href="#"><img src="/images/brand/spotify.png" alt="Brand Image"/></a></li>
//                     <li className="slide-single-layout"><a href="#"><img src="/images/brand/woocommerce.png" alt="Brand Image"/></a></li>
//                     <li className="slide-single-layout"><a href="#"><img src="/images/brand/slack.png" alt="Brand Image"/></a></li>
//                 </ul>
//             </div>
//         </div>
//     </div>
// </div>
//   )
// }

// export default Brand