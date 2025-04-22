declare module '@maptiler/leaflet-maptilersdk' {
    import { Layer } from "leaflet";

    interface MaptilerLayerOptions {
        apiKey: string;
        style?: string;
        maptilerLogo?: boolean;
        [key: string]: any; // Allow other optional properties
    }

    export class MaptilerLayer extends Layer {
        constructor(options: MaptilerLayerOptions);
    }
}
