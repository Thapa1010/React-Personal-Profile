function Info() {
  return (
    <div className="name">
      <p className="fullname">Shulab Thapa</p>
      <p className="post">Frontend Developer</p>
      <p className="address">Kathmandu,Nepal</p>
      <div className="buttons">
        <a className="btn btn__1">
          <div className="btn-item">
            <img src="./icon.png" />
            <p>Email</p>
          </div>
        </a>
        {/* <a className="btn btn__2">
          <div className="btn-item">
            <img src="../src/assets/icon.png" />
            <p>LinkedIn</p>
          </div>
        </a> */}
      </div>
    </div>
  );
}

export default Info;
