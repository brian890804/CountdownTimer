
function Prompt() {
    return (
        <div className="row text-white fs-4 text-center align-content-center m-5"
            style={{
                width: '80vw',
                height: '10vw',
                backgroundColor: "RGB(47,40,60)",
            }}>
            <div className="col-6">
                <div className="col-12">
                    以作答題數
                </div >
                <div className="col-12">
                    ?
                </div >
            </div>
            <div className="col-6">
                <div className="col-12">
                    以作答題數
                </div >
                <div className="col-12">
                    ??
                </div >
            </div>
        </div>
    )
}
export default function Form() {
    return (
        <>
            <Prompt />
        </>
    )
}