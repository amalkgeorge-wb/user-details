export default function CompanyProfile(props) {
  const { name, catchPhrase, bs } = props?.userValue?.company;
  return (
    <div className="company ms-5 mb-2 mt-3">
      <h4 className=" company-name mt-3">Company</h4>
      <div className="d-flex">
        <div>
          <h6>Name</h6>
          <h6>catchphrase</h6>
          <h6>bs</h6>
        </div>
        <div>
          <h6 className="ms-2">
            : <span className="right-element ms-2">{name}</span>
          </h6>
          <h6 className="ms-2">
            :<span className="right-element ms-2">{catchPhrase}</span>
          </h6>
          <h6 className="ms-2">
            :<span className="right-element ms-2">{bs}</span>
          </h6>
        </div>
      </div>
    </div>
  );
}
