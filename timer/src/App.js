import { useState } from "react";
import { validate } from "./helpers";

function App() {

  const [profileDatas, setProfileDatas] = useState({
    fullname: '',
    email: '',
    password: '',
    ageRange: '',
    terms: true
  })

  const [errors, setErrors] = useState({
    fullname: "",
    email: "",
    password: "",
    ageRange: "",
    terms: true,
  });

  const handleChange = (e) => {
    e.preventDefault()
    const { name, type, checked, value } = e.target;

    setProfileDatas({
      ...profileDatas,
      [name]: type === 'checkbox' ? checked : value
    })

    const error = validate(name, value)

    setErrors({
      ...errors,
      [name]: error
    })

  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (
      profileDatas.fullname.length > 0 &&
      profileDatas.email.length > 0 &&
      profileDatas.password.length > 0 &&
      profileDatas.ageRange.length > 0
    ) {
      console.log(profileDatas);
    } else {
      console.log("Form is invalid");
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fullname">Fullname: </label>
        <input
          name="fullname"
          defaultValue={profileDatas.fullname}
          disabled={profileDatas.terms}
          onChange={handleChange}
        />
        {errors.fullname && <p style={{color: 'red'}} >{errors.fullname}</p>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input name="email" onChange={handleChange} />
        {errors.email && <p style={{color: 'red'}} >{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input name="password" type="password" onChange={handleChange} />
        {errors.password && <p style={{color: 'red'}} >{errors.password}</p>}
      </div>

      <div>
        <label htmlFor="ageRange">Age Range</label>
        <select name="ageRange" onChange={handleChange}>
          <option value="">Kateqoriya</option>
          <option value="10-20">10-20</option>
          <option value="30-40">30-40</option>
        </select>
        {errors.ageRange && <p style={{color: 'red'}} >{errors.ageRange}</p>}
      </div>

      <div>
        <label htmlFor="terms">Terms</label>
        <input
          name="terms"
          type="checkbox"
          onChange={handleChange}
          defaultChecked={profileDatas.terms}
        />
        {errors.terms && <p style={{color: 'red'}} >{errors.terms}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
