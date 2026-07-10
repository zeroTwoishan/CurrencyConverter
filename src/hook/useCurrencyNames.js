import { useEffect, useState } from "react";

function useCurrencyNames() {
    const [names, setNames] = useState({});

    useEffect(() => {
        fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch currency names");
                }
                return res.json();
            })
            .then((res) => {
                setNames(res);
            })
            .catch((err) => {
                console.error("Error in useCurrencyNames:", err);
            });
    }, []);

    return names;
}

export default useCurrencyNames;