import { useEffect, useState } from "react";

function useCurrencyHook(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        if (!currency) return;

        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Failed to fetch exchange rates: ${res.statusText}`);
                }
                return res.json();
            })
            .then((res) => {
                if (res && res[currency]) {
                    setData(res[currency]);
                }
            })
            .catch((error) => {
                console.error("Error in useCurrencyHook:", error);
            });
    }, [currency]);

    return data;
}

export default useCurrencyHook;
