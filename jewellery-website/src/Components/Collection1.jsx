function Collection1({ imgSrc }) {
  const imgUrl = `src/assets/${imgSrc}.webp`;
  return (
    <>
      <div className="col-6 p-0 text-center">
        <img
          src={imgUrl}
          width="530px;"
          height="249px"
          style={{ cursor: "pointer" }}
        />
      </div>
    </>
  );
}

export default Collection1;
