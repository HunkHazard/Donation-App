import Login from "./Login";

const loginmodal = () => {
    return (
        <>
            <input type="checkbox" id="loginmodal" className="modal-toggle" />
            <label htmlFor="loginmodal" className="modal cursor-pointer">
                <label className="modal-box w-[28rem] h-[31rem] rounded-[20px] max-w-5xl " htmlFor="">
                    <Login />
                </label>
            </label>
        </>
    )
}

export default loginmodal