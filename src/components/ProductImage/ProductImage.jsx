function ProductImage({photoBase64, className}) {
  return (
    <div className={[className, "overflow-hidden"].join(" ")}>
      <img
        src={`data:image/png;base64,${photoBase64}`}
        loading="lazy"
        alt=""
        className="object-scale-down object-center w-full h-full"
      />
    </div>
  );
}

export default ProductImage;
