import { Badge } from 'react-bootstrap'

const MyBadge = (props) =>(
   <div className="text-center">
    <Badge variant={props.color}>{props.text}</Badge>
    </div>
) 
export default MyBadge