const Banner = () => {
    return (
        <div className="carousel rounded-2xl mt-3  w-full">
            <div id="slide1" className="carousel-item h-screen relative w-full">
                <img src="https://i.ibb.co/FwxngQX/pexels-binyamin-mellish-186077.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle"> ❮ </a>
                    <a href="#slide2" className="btn btn-circle"> ❯ </a>
                </div>
            </div>
            <div id="slide2" className="carousel-item h-screen relative w-full">
                <img src="https://i.ibb.co/tx1zLdd/pexels-binyamin-mellish-1396132.jpg" className="w-full" />
                
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item h-screen relative w-full">
                <img src=" https://i.ibb.co/pvJxnBb/pexels-vlad-bagacian-1212053.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item h-screen relative w-full">
                <img src="https://i.ibb.co/W0246WM/pexels-pixabay-164558.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;