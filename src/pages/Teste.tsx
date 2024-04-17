import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import './style.css'

interface SlideData {
    id: number;
    photo: string;
    title: string;
    description: string;
}

function Resizable() {
    const [display, setDisplay] = useState(true);
    const [width, setWidth] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(false);
    const sliderRef = useRef<Slider>(null);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        setIsMobile(width < 768); // Define como dispositivo móvel se a largura for menor que 768px
    }, [width]);

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: isMobile ? 1 : 3, // Mostra apenas 1 slide em dispositivos móveis
        slidesToScroll: 1,
        centerMode: true, // Centraliza os slides
    };
    
    const slideLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const slideRight = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const renderArrows = () => {
        if (!isMobile) return null; // Esconde as setas em dispositivos não móveis

        return (
            <div className="mobile-arrows">
                <button className="slider-button left-arrow" onClick={slideLeft}>
                    <BsArrowLeft />
                </button>
                <button className="slider-button right-arrow" onClick={slideRight}>
                    <BsArrowRight />
                </button>
            </div>
        );
    };

    // Dados reais para os slides (foto, título e descrição)
    const slides: SlideData[] = [
        { id: 1, photo: "https://static.wixstatic.com/media/e8f377_d2b21e51488240f093585fe762df6ccb~mv2.png/v1/fill/w_745,h_745,q_90/e8f377_d2b21e51488240f093585fe762df6ccb~mv2.webp", title: "Título 1", description: "Primeiro valor, Segundo valor" },
        { id: 2, photo: "https://static.wixstatic.com/media/e8f377_d2b21e51488240f093585fe762df6ccb~mv2.png/v1/fill/w_745,h_745,q_90/e8f377_d2b21e51488240f093585fe762df6ccb~mv2.webp", title: "Título 2", description: "Descrição 2" },
        { id: 3, photo: "https://static.wixstatic.com/media/e8f377_d2b21e51488240f093585fe762df6ccb~mv2.png/v1/fill/w_745,h_745,q_90/e8f377_d2b21e51488240f093585fe762df6ccb~mv2.webp", title: "Título 3", description: "Descrição 3" },
        // Adicione mais slides conforme necessário
    ];

    return (
        <div className="slider-container">
            <div
                style={{
                    width: width + "px",
                    display: display ? "block" : "none",
                    position: "relative" // Adiciona posicionamento relativo para as setas móveis
                }}
            >
                <Slider ref={sliderRef} {...settings}>
                    {slides.map((slide) => (
                        <div key={slide.id} className="slide">
                            <img src={slide.photo} alt={slide.title} className="slide-image" />
                            <h3 style={{ color: "#265094", fontWeight: 600, textTransform: "uppercase" }}>{slide.title}</h3>
                            <p style={{ color: "gray", fontWeight: 600, textTransform: "uppercase" }}>{slide.description}</p>
                        </div>
                    ))}
                </Slider>
                {renderArrows()}
            </div>
        </div>
    );
}

export default Resizable;
