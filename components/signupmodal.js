import Signup from "@/pages/signup"

const Signupmodal = () => {
    return (
        <>
            <input type="checkbox" id="signupmodal" className="modal-toggle" />
            <label htmlFor="signupmodal" className="modal cursor-pointer">
                <label className="modal-box w-[25rem] h-[30rem] rounded-[20px] max-w-5xl " htmlFor="">
                    <Signup />
                </label>
            </label>
        </>
    )
}

export default Signupmodal