export const isValidValue = (value: any) => {
    if (value === null || value === undefined) return "---";
    if (value === "") return "---";
    if (Number.isNaN(value)) return "---";

    // object rỗng {}
    if (typeof value === "object" && !Array.isArray(value)) {
        return "---";
    }

    // array rỗng []
    if (Array.isArray(value)) {
        return value.length > 0;
    }

    return "---";
};