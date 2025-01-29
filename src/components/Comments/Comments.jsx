import React from "react";
import './comments.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function Comments() {
    return (
        <Swiper
            spaceBetween={80}
            slidesPerView={3}
            centeredSlides={true}
            navigation
            pagination={{ clickable: true }}
            zoom={true}
            modules={[Navigation, Pagination]}
            slideToClickedSlide={true}
        >
            <SwiperSlide>
                <div className="eachComment">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sapiente, id eum ratione distinctio sequi accusamus dignissimos fugit quia adipisci eligendi porro modi doloremque, dolores ducimus. Corporis id quo ut?</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="eachComment">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sapiente, id eum ratione distinctio sequi accusamus dignissimos fugit quia adipisci eligendi porro modi doloremque, dolores ducimus. Corporis id quo ut?</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="eachComment">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sapiente, id eum ratione distinctio sequi accusamus dignissimos fugit quia adipisci eligendi porro modi doloremque, dolores ducimus. Corporis id quo ut?</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="eachComment">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sapiente, id eum ratione distinctio sequi accusamus dignissimos fugit quia adipisci eligendi porro modi doloremque, dolores ducimus. Corporis id quo ut?</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="eachComment">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sapiente, id eum ratione distinctio sequi accusamus dignissimos fugit quia adipisci eligendi porro modi doloremque, dolores ducimus. Corporis id quo ut?</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="eachComment">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sapiente, id eum ratione distinctio sequi accusamus dignissimos fugit quia adipisci eligendi porro modi doloremque, dolores ducimus. Corporis id quo ut?</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="eachComment">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sapiente, id eum ratione distinctio sequi accusamus dignissimos fugit quia adipisci eligendi porro modi doloremque, dolores ducimus. Corporis id quo ut?</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="eachComment">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sapiente, id eum ratione distinctio sequi accusamus dignissimos fugit quia adipisci eligendi porro modi doloremque, dolores ducimus. Corporis id quo ut?</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="eachComment">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sapiente, id eum ratione distinctio sequi accusamus dignissimos fugit quia adipisci eligendi porro modi doloremque, dolores ducimus. Corporis id quo ut?</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="eachComment">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sapiente, id eum ratione distinctio sequi accusamus dignissimos fugit quia adipisci eligendi porro modi doloremque, dolores ducimus. Corporis id quo ut?</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="eachComment">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sapiente, id eum ratione distinctio sequi accusamus dignissimos fugit quia adipisci eligendi porro modi doloremque, dolores ducimus. Corporis id quo ut?</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="eachComment">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sapiente, id eum ratione distinctio sequi accusamus dignissimos fugit quia adipisci eligendi porro modi doloremque, dolores ducimus. Corporis id quo ut?</p>
                </div>
            </SwiperSlide>

        </Swiper>
    );
};

export default Comments;