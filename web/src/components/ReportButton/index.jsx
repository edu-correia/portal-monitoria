import flagPinkIcon from '../../assets/icons/flag-pink.svg';

function ReportButton({id, func}){
    return (
        <button onClick={() => func(id)}>
            <img src={flagPinkIcon} alt="Reportar"/>
        </button>
    )
}

export default ReportButton;