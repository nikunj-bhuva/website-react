function Company({ imgSrc }) {
  const imgUrl = `src/assets/${imgSrc}.webp`;

  return (
    <>
      <div className="col p-0">
        <img src={imgUrl} width="184px" height="72px" alt="..." />
      </div>
    </>
  );
}

export default Company;
