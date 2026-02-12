interface ScreenshotBlockProps {
  src: string;
  alt: string;
}

const ScreenshotBlock = ({ src, alt }: ScreenshotBlockProps) => {
  return (
    <div className="my-12 flex justify-center">
      <div className="w-full max-w-[1000px] rounded-xl overflow-hidden border border-border shadow-sm bg-secondary">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-contain"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ScreenshotBlock;
