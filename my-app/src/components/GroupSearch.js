import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";
import GroupSearchAPI from "../services/group-search-api";

// const required = (value) => {
//   if (!value) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         This field is required!
//       </div>
//     );
//   }
// };

const GroupSearch = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const user = AuthService.getCurrentUser();
  const userId = user.userId;

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
  const [SearchForGroup, setSearchForGroup] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeSearchForGroup = (e) => {
    const SearchForGroup = e.target.value;
    setSearchForGroup(SearchForGroup);
  };

//   const onChangePassword = (e) => {
//     const password = e.target.value;
//     setPassword(password);
//   };

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
        //group search api goes here

    //   AuthService.login(username, password).then(
    //     () => {
    //       props.history.push("/profile");
    //       window.location.reload();
    //     },
    //     (error) => {
    //       const resMessage =
    //         (error.response &&
    //           error.response.data &&
    //           error.response.data.message) ||
    //         error.message ||
    //         error.toString();

    //       setLoading(false);
    //       setMessage(resMessage);
    //     }
    //   );
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="col-md-12">
      <div className="card card-container">

        <Form onSubmit={handleSubmit} ref={form}>
          <div className="form-group">
            <label htmlFor="username">Search for a group!</label>
            <Input
              type="text"
              className="form-control"
              name="username"
              value={SearchForGroup}
              onChange={onChangeSearchForGroup}
            //   validations={[required]}
            />
          </div>

          {/* <div className="form-group">
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
            /> 
          </div> */}

          <div className="form-group">
            <button className="btn btn-primary btn-block" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Submit</span>
            </button>
          </div>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};

export default GroupSearch;
