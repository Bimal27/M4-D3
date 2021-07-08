import { Alert} from "react-bootstrap";

const WarningSign = (props) => (
    <Alert variant="danger" className="text-center">
    <Alert.Heading>{props.text}</Alert.Heading>
    <p>
       This is alert!!
    </p>
    <hr />
    <p className="mb-0">
        Welcome to the page.
    </p>
   </Alert>

)
export default WarningSign