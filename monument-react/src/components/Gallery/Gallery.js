import React from 'react';
import gallery1 from './gallery_1.jpg';
import gallery2 from './gallery_2.jpg';
import gallery3 from './gallery_3.jpg';
import gallery4 from './gallery_4.jpg';
import gallery5 from './gallery_5.jpg';
import gallery6 from './gallery_6.jpg';


const Gallery = (props) => {
    return (
        <section id="gallery">
		<div className="wrap">
			<h2>Issue Twenty</h2>
			<h3>A visual guide to the Southwest</h3>
			<div className="masonry">
				<img src={gallery1} alt="" />
				<img src={gallery3} alt="" />
				<img src={gallery4} alt="" />
				<img src={gallery2} alt="" />
				<img src={gallery5} alt="" />
				<img src={gallery6} alt="" />
			</div>
		</div>
	</section>
    )
};

export default Gallery;
