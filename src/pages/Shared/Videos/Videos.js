import React from 'react';
import videoimg1 from '../../../assets/vidoes/vidoes1.mp4'
import videoimg2 from '../../../assets/vidoes/vidoes2.mp4'
const Videos = () => {
        return (
                <div>
                <video width="320" height="240" controls>
                    <source src={videoimg1} type="video/mp4" />
                    
               {/* <source src="movie.ogg" type="video/ogg"/> */}
               Your browser does not support the video tag.
            </video>
                <video
                 width="320" height="240"
                src={videoimg2}
                    controls
                    autoplay
                 ></video>
            </div>
        );
};

export default Videos;