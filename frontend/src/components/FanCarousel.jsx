import { useState, useEffect, useRef, useCallback } from "react";

const slides = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
    alt: "Leather wallet organizer",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80",
    alt: "Luxury handbag",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&q=80",
    alt: "Woman with phone case",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    alt: "Bedside clock setup",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
    alt: "Jewelry accessories",
  },
];

const TOTAL = slides.length;

// Compute visual props for each card relative to active index
function getCardStyle(index, active, total) {
  let offset = index - active;
  // wrap around
  if (offset > Math.floor(total / 2)) offset -= total;
  if (offset < -Math.floor(total / 2)) offset += total;

  const absOffset = Math.abs(offset);
  const sign = offset === 0 ? 0 : offset / absOffset;

  // Z-index: center highest
  const zIndex = 100 - absOffset * 10;

  // Horizontal shift
  const xBase = offset * 180;

  // Vertical position: center card sits higher
  const yTranslate = absOffset === 0 ? 0 : absOffset * 18 + 10;

  // Rotation: fan out
  const rotate = offset * 8;

  // Scale: center card biggest
  const scale = absOffset === 0 ? 1 : absOffset === 1 ? 0.82 : 0.68;

  // Opacity
  const opacity = absOffset > 2 ? 0 : absOffset === 2 ? 0.6 : 1;

  // Width of cards
  const width = absOffset === 0 ? 480 : absOffset === 1 ? 260 : 200;
  const height = absOffset === 0 ? 520 : absOffset === 1 ? 460 : 400;

  return {
    zIndex,
    transform: `translateX(${xBase}px) translateY(${yTranslate}px) rotate(${rotate}deg) scale(${scale})`,
    opacity,
    width: `${width}px`,
    height: `${height}px`,
    transition: "all 0.6s cubic-bezier(0.34, 1.2, 0.64, 1)",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: `-${height / 2}px`,
    marginLeft: `-${width / 2}px`,
    borderRadius: "18px",
    overflow: "hidden",
    cursor: absOffset !== 0 ? "pointer" : "default",
    boxShadow:
      absOffset === 0
        ? "0 32px 80px rgba(0,0,0,0.18)"
        : "0 12px 40px rgba(0,0,0,0.10)",
  };
}

export default function FanCarousel() {
  const [active, setActive] = useState(0);
  const [animDir, setAnimDir] = useState(null); // 'left' | 'right'
  const autoRef = useRef(null);

  const goTo = useCallback(
    (next, dir) => {
      setAnimDir(dir);
      setActive(((next % TOTAL) + TOTAL) % TOTAL);
    },
    []
  );

  const prev = () => goTo(active - 1, "left");
  const next = () => goTo(active + 1, "right");

  // Auto-play
  useEffect(() => {
    autoRef.current = setInterval(() => goTo(active + 1, "right"), 4000);
    return () => clearInterval(autoRef.current);
  }, [active, goTo]);

  return (
    <>
      {/* Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

      <style>{`
        .fan-section {
          background: #ffffff;
          min-height: 100vh;
          padding: 60px 0 80px;
          font-family: 'DM Sans', sans-serif;
          overflow: hidden;
        }

        .fan-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(36px, 5vw, 64px);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -1.5px;
          color: #0d0d0d;
          max-width: 480px;
        }

        .view-all-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 15px;
          font-weight: 500;
          color: #0d0d0d;
          text-decoration: none;
          border: 1.5px solid #0d0d0d;
          border-radius: 50px;
          padding: 10px 22px;
          transition: background 0.2s ease, color 0.2s ease;
          white-space: nowrap;
        }

        .view-all-btn:hover {
          background: #0d0d0d;
          color: #fff;
        }

        .view-all-btn svg {
          transition: transform 0.2s ease;
        }

        .view-all-btn:hover svg {
          transform: translate(2px, -2px);
        }

        .fan-stage {
          position: relative;
          width: 100%;
          height: 560px;
          margin-top: 40px;
        }

        .fan-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          pointer-events: none;
          user-select: none;
        }

        .fan-card {
          will-change: transform, opacity;
        }

        /* Nav */
        .fan-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-top: 40px;
        }

        .fan-nav-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1.5px solid #d0d0d0;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: border-color 0.2s ease, background 0.2s ease;
          outline: none;
        }

        .fan-nav-btn:hover {
          border-color: #0d0d0d;
          background: #f5f5f5;
        }

        .fan-nav-btn svg {
          width: 18px;
          height: 18px;
        }

        .fan-dots {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .fan-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #d0d0d0;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: background 0.25s ease, transform 0.25s ease;
        }

        .fan-dot.active {
          background: #0d0d0d;
          transform: scale(1.3);
        }

        /* Slide-in animation for heading */
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fan-heading-wrap {
          animation: slideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .fan-viewall-wrap {
          animation: slideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.15s both;
        }
      `}</style>

      <section className="fan-section">
        <div className="container-fluid px-4 px-lg-5">
          {/* Header row */}
          <div className="d-flex align-items-start justify-content-between flex-wrap gap-3">
            <div className="fan-heading-wrap">
              <h2 className="fan-heading">
                Designed for Your Daily<br />Statement.
              </h2>
            </div>
            <div className="fan-viewall-wrap d-flex align-items-center" style={{ paddingTop: "8px" }}>
              <a href="#" className="view-all-btn">
                View All
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            </div>
          </div>

          {/* Fan stage */}
          <div className="fan-stage">
            {slides.map((slide, i) => {
              const style = getCardStyle(i, active, TOTAL);
              return (
                <div
                  key={slide.id}
                  className="fan-card"
                  style={style}
                  onClick={() => {
                    const offset = ((i - active + TOTAL) % TOTAL);
                    if (offset === 0) return;
                    const dir = offset <= Math.floor(TOTAL / 2) ? "right" : "left";
                    goTo(i, dir);
                  }}
                >
                  <img src={slide.url} alt={slide.alt} draggable="false" />
                </div>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="fan-nav">
            <button className="fan-nav-btn" onClick={prev} aria-label="Previous">
              <svg viewBox="0 0 24 24" fill="none" stroke="#0d0d0d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <div className="fan-dots">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`fan-dot ${i === active ? "active" : ""}`}
                  onClick={() => goTo(i, i > active ? "right" : "left")}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button className="fan-nav-btn" onClick={next} aria-label="Next">
              <svg viewBox="0 0 24 24" fill="none" stroke="#0d0d0d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

