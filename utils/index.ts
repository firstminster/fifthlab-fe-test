
export const generateActions = (action: string) => {
    action = action.toUpperCase();
    return {
        REQUEST: `${action}_REQUEST`,
        SUCCESS: `${action}_SUCCESS`,
        FAILURE: `${action}_FAILURE`,
    };
};

// download csv function
export const downloadCSV = (headers: any[], data: any[], filename: string) => {
    const csvContent = convertArrayToCSV(headers, data);

    const blob = new Blob([csvContent], { type: "text/csv" });

    const downloadLink = document.createElement("a");
    const url = URL.createObjectURL(blob);
    downloadLink.href = url;
    downloadLink.download = filename;

    document.body.appendChild(downloadLink);
    downloadLink.click();

    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(url);
};

//   convert to csv function
const convertArrayToCSV = (headers: string[], array: any[]): string => {
    const csvRows = [];

    // Push the headers
    csvRows.push(headers.join(","));

    // Push the data
    array.forEach((item) => {
        const values = headers.map((header) => item[header]);
        csvRows.push(values.join(","));
    });

    return csvRows.join("\n");
};