export interface Space {
    id: string;
    name: string;
    created: string;
    created_by: Createdby;
    modified?: any;
    modified_by?: any;
    provider: Provider;
  }
  
  export interface Provider {
    vendor: "AWS" | "GCP" | "AZURE";
  }
  
  export interface Createdby {
    id: string;
    email?: any;
    name: string;
  }
  