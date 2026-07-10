import { useEffect, useState } from "react";

function useCurrencyHook(currency) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!currency) return;
        setLoading(true);
        setError(null);

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
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error in useCurrencyHook:", err);
                setError(err.message || "Failed to fetch exchange rates");
                setLoading(false);
            });
    }, [currency]);

    return { data, loading, error };
}

export default useCurrencyHook;