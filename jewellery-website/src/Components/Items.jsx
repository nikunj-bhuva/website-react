function Items({ imgSrc }) {
  const imgUrl = `src/assets/${imgSrc}.webp`;
  return (
    <div
      className="col-3"
      style={{
        width: "17%",
        backgroundColor: "#80808038",
        borderRadius: "50%",
        cursor: "pointer",
      }}
    >
      <img
        src={imgUrl}
        width="150px"
        height="150px"
        style={{ borderRadius: "50%", margin: "10px 0px 10px 10px" }}
      />
    </div>
  );
}

export default Items;
