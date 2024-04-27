import { useState } from "react";
import "../css/RegisterPage.css";

export const RegisterPage = () => {
    const [error, setError] = useState({
        email: { required: false },
        password: { required: false },
        name: { required: false },
        custom_error: null,
    });

    const [loading, setLoading] = useState(false);

    return (
        <>
            <section className="register-block">
                <div className="container">
                    <div className="row ">
                        <div className="col register-sec">
                            <h2 className="text-center">Register Now</h2>
                            <form className="register-form" action="">
                                <div className="form-group">
                                    <label
                                        htmlFor="exampleInputEmail1"
                                        className="text-uppercase"
                                    >
                                        Name
                                    </label>

                                    <input type="text" className="form-control" name="name" />
                                    {error.name.required ? (
                                        <span className="text-danger">Name is required.</span>
                                    ) : null}
                                </div>
                                <div className="form-group">
                                    <label
                                        htmlFor="exampleInputEmail1"
                                        className="text-uppercase"
                                    >
                                        Email
                                    </label>

                                    <input type="text" className="form-control" name="email" />
                                    {error.email.required ? (
                                        <span className="text-danger">Email is required.</span>
                                    ) : null}
                                </div>
                                <div className="form-group">
                                    <label
                                        htmlFor="exampleInputPassword1"
                                        className="text-uppercase"
                                    >
                                        Password
                                    </label>
                                    <input
                                        className="form-control"
                                        type="password"
                                        name="password"
                                    />
                                    {error.password.required ? (
                                        <span className="text-danger">Password is required.</span>
                                    ) : null}
                                </div>
                                <div className="form-group">
                                    <span className="text-danger">
                                        {error.custom_error ? <p>Custom Error Message!</p> : null}
                                    </span>
                                    {loading ? (
                                        <div className="text-center">
                                            <div
                                                className="spinner-border text-primary "
                                                role="status"
                                            >
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                        </div>
                                    ) : null}

                                    <input
                                        type="submit"
                                        className="btn btn-login float-right"
                                        value="Register"
                                    />
                                </div>
                                <div className="clearfix"></div>
                                <div className="form-group">
                                    Already have account ? Please <a href="#">Login</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
