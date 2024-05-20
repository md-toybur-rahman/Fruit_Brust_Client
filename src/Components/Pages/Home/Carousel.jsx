
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';

const Carousel = () => {
	return (
		<>
			<Swiper navigation={true} modules={[Navigation, Autoplay]} autoplay={true} className="mySwiper">
				<SwiperSlide>
					<div className='h-[700px] relative'>
						<div className='absolute h-full w-full bg-black opacity-50 z-[-20]'></div>
						<div className="absolute w-full h-full bg-[url('carousel_banner1.jpg')] bg-cover bg-bottom z-[-30]">
						</div>
						<div className='absolute h-full w-full flex flex-col items-center justify-center z-[-10]'>
							<h1 className='text-[72px] font-bold text-white text-center'>Exotic tastes at your <br /> doorstep</h1>
							<p className='text-[20px] font-medium text-white mt-6'>We supply highly quality organic products</p>
							<button className='mt-5 bg-[#F85559] text-white font-semibold text-[20px] px-[30px] py-3 rounded-lg'>Shop Now</button>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='h-[700px] relative'>
					<div className='absolute h-full w-full bg-black opacity-50 z-[-20]'></div>
						<div className="absolute w-full h-full bg-[url('carousel_banner2.jpg')] bg-cover bg-bottom z-[-30]">
						</div>
						<div className='absolute h-full w-full flex flex-col items-center justify-center z-[-10]'>
							<h1 className='text-[72px] font-bold text-white text-center'>Exotic tastes at your <br /> doorstep</h1>
							<p className='text-[20px] font-medium text-white mt-6'>We supply highly quality organic products</p>
							<button className='mt-5 bg-[#F85559] text-white font-semibold text-[20px] px-[30px] py-3 rounded-lg'>Shop Now</button>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='h-[700px] relative'>
					<div className='absolute h-full w-full bg-black opacity-50 z-[-20]'></div>
						<div className="absolute w-full h-full bg-[url('carousel_banner3.jpg')] bg-cover bg-bottom z-[-30]">
						</div>
						<div className='absolute h-full w-full flex flex-col items-center justify-center z-[-10]'>
							<h1 className='text-[72px] font-bold text-white text-center'>Exotic tastes at your <br /> doorstep</h1>
							<p className='text-[20px] font-medium text-white mt-6'>We supply highly quality organic products</p>
							<button className='mt-5 bg-[#F85559] text-white font-semibold text-[20px] px-[30px] py-3 rounded-lg'>Shop Now</button>
						</div>
					</div>
				</SwiperSlide>
				
			</Swiper>
		</>
	);
};

export default Carousel;