const FloatingWhatsApp = () => {
  const href =
    "https://wa.me/5554999870786?text=" +
    encodeURIComponent("Olá, gostaria de uma consulta.");

  return (
    <>
      <style>{`
        @keyframes wa-pulse {
          0%   { box-shadow: 0 8px 24px rgba(37,211,102,0.4), 0 0 0 0 rgba(37,211,102,0.35); }
          70%  { box-shadow: 0 8px 24px rgba(37,211,102,0.4), 0 0 0 18px rgba(37,211,102,0); }
          100% { box-shadow: 0 8px 24px rgba(37,211,102,0.4), 0 0 0 0 rgba(37,211,102,0); }
        }
      `}</style>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        style={{
          position: "fixed",
          bottom: 28,
          right: 28,
          zIndex: 100,
          width: 64,
          height: 64,
          borderRadius: "50%",
          backgroundColor: "#25d366",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          animation: "wa-pulse 2s ease-out infinite",
          transition: "transform 0.2s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="#ffffff"
          aria-hidden="true"
        >
          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.302.13-.602.117-.93-.014-.4-1.235-.99-1.59-1.16zm-3.122 7.214c-1.69 0-3.355-.486-4.74-1.404l-3.314.873.887-3.27a8.55 8.55 0 0 1-1.626-5.04c0-4.728 3.873-8.572 8.59-8.572 4.73 0 8.945 3.844 8.945 8.572 0 4.728-4.215 8.84-8.74 8.84zM16 0C7.214 0 0 7.214 0 16c0 2.84.756 5.594 2.198 8.024L0 32l8.32-2.182A15.95 15.95 0 0 0 16 32c8.787 0 16-7.214 16-16S24.787 0 16 0z" />
        </svg>
      </a>
    </>
  );
};

export default FloatingWhatsApp;
