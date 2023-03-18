export default function CompanyProfile(props){
    const{name,catchPhrase,bs} = props?.userValue?.company
    return(
        <div>
        <h4>Company</h4>
        <ul>
            <li>
            <h6>Name : <span>{name}</span></h6>
            </li>
            <li>
            <h6>catchphrase : <span>{catchPhrase}</span></h6>
            </li>
            <li>
            <h6>bs : <span>{bs}</span></h6>
            </li>
        </ul>
      </div>
    )
}