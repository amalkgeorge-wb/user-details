export default function Address(props) {
  const { street, suite, city, zipcode } = props?.userValue?.address;
  return (
    <div className="address mb-3">
      <h4 className="address-head">Address :</h4>
      <div className="d-flex menu-items ms-5">
        <div>
          <h6>Street</h6>
          <h6>Suit</h6>
          <h6>City</h6>
          <h6>Zipcode</h6>
        </div>
        <div>
          <h6 className="ms-2">
            : <span className="ms-2 right-element">{street}</span>
          </h6>
          <h6 className="ms-2">
            :<span className="ms-2 right-element">{suite}</span>
          </h6>
          <h6 className="ms-2">
            :<span className="ms-2 right-element">{city}</span>
          </h6>
          <h6 className="ms-2">
            :<span className="ms-2 right-element">{zipcode}</span>
          </h6>
        </div>
      </div>
    </div>
  );
}
