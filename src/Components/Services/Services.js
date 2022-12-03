import React from 'react';
import "./Services.css";

const Services = () => {
    return (
        <div className='services-container'>
            <div className='services-list-container'>
                {/* desc */}
                <div className='services-desc-container'>
                    <h1>My Awesome <span>Services</span></h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                    </p>
                    <button>Hire Me</button>
                </div>
                {/* items */}
                <div className='services-items-container'>
                    <div className='services-item'>
                        <i className='fa-solid fa-code'></i>
                        <div className='item-desc'>
                            <h3>Web Development</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a</p>
                        </div>
                    </div>
                    <div className='services-item'>
                        <i className='fa-solid fa-desktop'></i>
                        <div className='item-desc'>
                            <h3>Desktop Development</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a</p>
                        </div>
                    </div>
                    <div className='services-item'>
                        <i className='fa-solid fa-tablet-alt'></i>
                        <div className='item-desc'>
                            <h3>Machine Learning</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services