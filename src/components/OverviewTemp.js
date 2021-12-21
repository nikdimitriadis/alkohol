

const OverviewTemp = (props) => {
    return (
        <section className='overview'>
            <h2 className='fontPlayfair'>{props.drink}</h2>
            <p>{props.info}</p>
        </section>
    );
}

export default OverviewTemp;