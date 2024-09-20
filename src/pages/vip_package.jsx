import PackageItem from "../components/package_item";
import { useParams } from "react-router-dom";
import rok_packages from "../utils/rok_package";
import cod_packages from "../utils/cod_package";

const VipPackage = () => {
    const { type } = useParams();
    let data = [];
    if (type === 'rok') {
        data = rok_packages;
    }
    else if (type === 'cod') {
        data = cod_packages;
    }

    return (
        <div className="package-page-content">
            <div className="package-page-container">
                <div className="package-item-free">
                    <PackageItem
                        key={0}
                        id={data[0].id}
                        name={data[0].name}
                        vip={data[0].vip}
                        price={data[0].price}
                        isReduced={data[0].isReduced}
                        reduced_price={data[0].reduced_price}
                        price_vi={data[0].price_vi}
                        reduced_price_vi={data[0].reduced_price_vi}
                        type={type}
                    />
                </div>
                <div className="package-page-list">
                    {
                        data.slice(1).map((item, index) => (
                            <PackageItem
                                key={index}
                                id={item.id}
                                name={item.name}
                                vip={item.vip}
                                price={item.price}
                                isReduced={item.isReduced}
                                reduced_price={item.reduced_price}
                                price_vi={item.price_vi}
                                reduced_price_vi={item.reduced_price_vi}
                                type={type}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default VipPackage;
