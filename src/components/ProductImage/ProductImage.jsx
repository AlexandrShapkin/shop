function ProductImage({image, className}) {
  return (
    <div className={[className, "overflow-hidden"].join(" ")}>
      <img
        src={`/image/${image}`}
        loading="lazy"
        alt=""
        className="object-scale-down object-center w-full h-full"
      />
    </div>
  );
}

export default ProductImage;
