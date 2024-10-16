/**
 * Akeneo Management API SDK. Allows you to create instances of a client
 * with access to the Akeneo API.
 */
import { AxiosInstance } from 'axios';
import { ClientParams } from './types.js';
/**
 * Create a client instance
 * @param params - Client initialization parameters
 *
 * ```javascript
 * const client = akeneo({
 *   url: AKENEO_API_URL,
 *   username: AKENEO_USERNAME,
 *   password: AKENEO_PASSWORD,
 *   clientId: AKENEO_CLIENT_ID,
 *   secret: AKENEO_SECRET,
 * });
 * ```
 */
export declare const createClient: (params: ClientParams) => {
    raw: {
        http: AxiosInstance;
    };
    category: {
        getOne: (params: {
            code: string;
            query?: {
                with_attribute_options?: boolean | undefined;
                with_quality_scores?: boolean | undefined;
            } | undefined;
        }) => Promise<import("./types.js").Category<import("./types.js").KeyValueMap>>;
        get: (params: {
            query?: import("./types.js").CategoryQueryParameters | undefined;
        }) => Promise<import("./types.js").ListResponse<import("./types.js").Category<import("./types.js").KeyValueMap>>>;
        getAll: (params: {
            query?: import("./types.js").CategoryQueryParameters | undefined;
        }) => Promise<import("./types.js").ListResponse<import("./types.js").Category<import("./types.js").KeyValueMap>>>;
    };
    productModel: {
        getOne: (params: {
            code: string;
        }) => Promise<import("./types.js").ProductModel>;
        get: (params: {
            query?: import("./types.js").ProductModelQueryParameters | undefined;
        }) => Promise<import("./types.js").ListResponse<import("./types.js").ProductModel>>;
        getAll: (params: {
            query?: import("./types.js").ProductModelQueryParameters | undefined;
        }) => Promise<import("./types.js").ListResponse<import("./types.js").ProductModel>>;
    };
    product: {
        getOne: (params: {
            code: string;
            query?: {
                with_attribute_options?: boolean | undefined;
                with_quality_scores?: boolean | undefined;
            } | undefined;
        }) => Promise<import("./types.js").Product>;
        get: (params: {
            query?: import("./types.js").ProductQueryParameters | undefined;
        }) => Promise<import("./types.js").ListResponse<import("./types.js").Product>>;
        getAll: (params: {
            query?: import("./types.js").ProductQueryParameters | undefined;
        }) => Promise<import("./types.js").ListResponse<import("./types.js").Product>>;
    };
    assetFamily: {
        getOne: (params: {
            code: string;
            query?: {
                with_attribute_options?: boolean | undefined;
                with_quality_scores?: boolean | undefined;
            } | undefined;
        }) => Promise<import("./types.js").AssetFamily>;
        get: (params: {
            query?: import("./types.js").AssetFamilyQueryParameters | undefined;
        }) => Promise<import("./types.js").ListResponse<import("./types.js").AssetFamily>>;
        getAll: (params: {
            query?: import("./types.js").AssetFamilyQueryParameters | undefined;
        }) => Promise<import("./types.js").ListResponse<import("./types.js").AssetFamily>>;
        getAssets: (params: {
            assetFamilyCode: string;
            query?: import("./types.js").AssetQueryParameters | undefined;
        }) => Promise<import("./types.js").ListResponse<import("./types.js").Asset>>;
        getAsset: (params: {
            assetFamilyCode: string;
            code: string;
        }) => Promise<import("./types.js").Asset>;
        getAssetsAll: (params: {
            assetFamilyCode: string;
            query?: import("./types.js").AssetQueryParameters | undefined;
        }) => Promise<import("./types.js").ListResponse<import("./types.js").Asset>>;
    };
    assetMediaFile: {
        /**
         *
         * @see https://api.akeneo.com/api-reference.html#get_asset_media_files__code
         */
        get: (code: string) => Promise<import("axios").AxiosResponse<any>>;
    };
    referenceEntitiesMediaFile: {
        /**
         * @see https://api.akeneo.com/api-reference.html#get_reference_entity_media_files__code
         */
        get: (code: string) => Promise<any>;
    };
    attribute: {
        getOne: (params: {
            code: string;
        }) => Promise<import("./types.js").Attribute>;
        get: (params: {
            query?: import("./types.js").AttributeQueryParameters | undefined;
        }) => Promise<import("./types.js").ListResponse<import("./types.js").Attribute>>;
        getAll: (params: {
            query?: import("./types.js").AttributeQueryParameters | undefined;
        }) => Promise<import("./types.js").ListResponse<import("./types.js").Attribute>>;
        getOptions: (params: {
            attributeCode: string;
            query?: import("./types.js").AttributeOptionQueryParameters | undefined;
        }) => Promise<import("./types.js").ListResponse<import("./types.js").AttributeOption>>;
        add: ({ code, attribute }: {
            code: string;
            attribute: any;
        }) => Promise<import("axios").AxiosResponse<any>>;
        addOption: ({ attributeCode, code, option, }: {
            attributeCode: string;
            code: string;
            option: any;
        }) => Promise<import("axios").AxiosResponse<any>>;
    };
    referenceEntity: {
        get: (params: {
            query?: import("./types.js").ReferenceEntityQueryParameters | undefined;
        }) => Promise<import("./types.js").ListResponse<import("./types.js").Entity>>;
        getRecords: (params: {
            referenceEntityCode: string;
            query?: import("./types.js").ReferenceEntityRecordQueryParameters | undefined;
        }) => Promise<import("./types.js").ListResponse<import("./types.js").EntityRecord>>;
        /**
         * @see https://api.akeneo.com/api-reference.html#patch_reference_entity__code_
         */ add: ({ code, body }: {
            code: string;
            body: any;
        }) => Promise<import("axios").AxiosResponse<any>>;
        /**
         * @see https://api.akeneo.com/api-reference.html#patch_reference_entity_attributes__code_
         */
        addAttribute: ({ referenceEntityCode, code, attribute, }: {
            referenceEntityCode: string;
            code: string;
            attribute: any;
        }) => Promise<void>;
        /**
         * @see https://api.akeneo.com/api-reference.html#patch_reference_entity_attributes__attribute_code__options__code_
         */
        addAttributeOption: ({ referenceEntityCode, attributeCode, code, option, }: {
            referenceEntityCode: string;
            attributeCode: string;
            code: string;
            option: any;
        }) => Promise<import("axios").AxiosResponse<any>>;
        /**
         * @see https://api.akeneo.com/api-reference.html#patch_reference_entity_records
         */
        addRecords: ({ referenceEntityCode, records, }: {
            referenceEntityCode: string;
            records: any[];
        }) => Promise<import("axios").AxiosResponse<any>>;
    };
    family: {
        get: (params: {
            query?: import("./types.js").FamilyQueryParameters | undefined;
        }) => Promise<import("./types.js").ListResponse<import("./types.js").Family>>;
        getVariants: (params: {
            familyCode: string;
            query?: import("./types.js").FamilyVariantQueryParameters | undefined;
        }) => Promise<import("./types.js").ListResponse<import("./types.js").Variant>>;
    };
};
export type AkeneoClientAPI = ReturnType<typeof createClient>;
export * from './types.js';
export default createClient;
