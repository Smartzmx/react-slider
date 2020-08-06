import React, {useState} from 'react';
import ReactSlider from "react-slick";

const Slider = () => {
    const config = {
        // dots: true,
        // infinite: true,
        // speed: 500,
        // slidesToShow: 3,
        // slidesToScroll: 1

        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 5000,
        arrows: false
      };
    
      const [settings, setSettings] = useState(config);
    
      const products = [
        {
          img: '/images/product1.jpg',
          title: 'Dolore magna',
          text: 'Lorem ipsum dolor sit amet elit.'
        },
        {
          img: '/images/product2.jpg',
          title: 'Eget est lorem',
          text: 'Lorem Ipsum adipiscing elit ipsum.'
        },
        {
          img: '/images/product3.jpg',
          title: 'Tempus imperdiet',
          text: 'Orci porta non pulvinar neque laoreet.'
        },
        {
          img: '/images/product4.jpg',
          title: 'Mattis rhoncus',
          text: 'Bibendum neque egestas congue..'
        },
        {
          img: '/images/product5.jpg',
          title: 'Odio ut enim',
          text: 'Mattis rhoncus urna neque viverra justo.'
        }
      ]
    
      const onChangeCenterMode = e => {
        if (e.target.checked) {
          setSettings({
            ...config,
            centerMode: true,
            centerPadding: '50px',
          });
        } else {
          setSettings(config);
        }
      }
    
    return ( 
        <>
        <h3>Carousel Slider in React</h3>

        <label className="cb-centermode">
          <input type="checkbox" checked={settings.centerMode} onChange={onChangeCenterMode} />
          <span>Enable Center Mode</span>
        </label>

        <div className='max-width-slider'>
            <ReactSlider {...settings}>
            {products.map((x, i) => {
            return <div key={i} className="img-card">
                        <img className="img" src={x.img} />
                        <div class="card-body">
                        <div className="card-title">{x.title}</div>
                        <div className="card-text">{x.text}</div>
                        </div>
                    </div>
                })}
            </ReactSlider>
        </div>
        </>
     );
}
 
export default Slider;