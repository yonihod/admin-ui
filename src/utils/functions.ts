export const formatDate = (date: string) => {
    const d = new Date(date);
    return d.toLocaleDateString();
}

export const formatProvider = (provider: string) => {
    switch (provider) {
        case "AWS":
            return "Amazon Web Services";
        case "GCP":
            return "Google Cloud Platform";
        case "AZURE":
            return "Azure";
        default:
            return provider;
    }
}