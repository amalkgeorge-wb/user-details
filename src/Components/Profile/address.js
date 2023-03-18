export default function Address(props){
    const {street,suite,city,zipcode} = props?.userValue?.address
    return(
        <div>
        <h4>Address :</h4>
        <ul>
            <li>
            <h6>Street : <span>{street}</span></h6>
            </li>
            <li>
            <h6>Suit : <span>{suite}</span></h6>
            </li>
            <li>
            <h6>City : <span>{city}</span></h6>
            </li>
            <li>
            <h6>Zipcode : <span>{zipcode}</span></h6>
            </li>
        </ul>
      </div>
    )
}