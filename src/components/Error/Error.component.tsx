import React from 'react';
interface IFError {
    message?: any,
    state?: any
}
const Error = ({ message, state }: IFError) => {
    // if (state?.error) {
    //     setTimeout(() => {
    //         store.dispatch(logoutAction())
    //     }, 5000);
    // }
    return (
        <>
            <div className="alert alert-danger" role="alert">{message}</div>
        </>
    )
}
export default Error