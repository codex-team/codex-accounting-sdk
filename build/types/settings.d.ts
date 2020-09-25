/**
 * Paths to tls certs
 */
export interface TlsSettings {
    /**
     * Path to ca cert file
     */
    tlsCaCertPath: string;
    /**
     * Path to client cert file
     */
    tlsCertPath: string;
    /**
     * Path to client keys file
     */
    tlsKeyPath: string;
}
/**
 * Settings for client module
 */
export interface Settings {
    /**
     * Base URL for sending queries
     */
    baseURL: string;
    /**
     * Tls verify settings
     */
    tlsVerify?: TlsSettings;
}
