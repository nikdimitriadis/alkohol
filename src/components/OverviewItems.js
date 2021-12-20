import OverviewTemp from "./OverviewTemp";
import DataOverview from "./DataOverview.js";


const OverviewItems = () => {
    return (
        <section>
            {
                DataOverview.map((e, i) => <OverviewTemp
                    key={i}
                    drink={e.drink}
                    info={e.info} />)
            }
        </section>
    );
}

export default OverviewItems;