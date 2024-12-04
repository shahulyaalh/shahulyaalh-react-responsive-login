import FormSignup from "./FormSignup"
import "./Form.css"

const Form = () => {
  return (
    <>
    <div className="form-container">
        <span className="close-btn">x</span>
        <div className="form-content-left">
            <img src="https://wallpapers.com/images/hd/rocket-drawing-png-04292024-juyt0nng4krimn2m.png" alt="left" className="form-img" />
        </div>
        <FormSignup />
    </div>
    </>
  )
}

export default Form