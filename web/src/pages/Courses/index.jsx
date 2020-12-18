import ArrowLeft from "../../assets/icons/arrow-left.svg";
function Courses() {
    return (
        <>
            <header>
                <div className="return">
                    <img src={ArrowLeft} alt="Voltar"/>
                    <span>Voltar</span>
                </div>
                <div className="logo">
                    <span>Portal</span>
                    <span>Monitoria</span>
                </div>
            </header>
        </>
    );
}

export default Courses;