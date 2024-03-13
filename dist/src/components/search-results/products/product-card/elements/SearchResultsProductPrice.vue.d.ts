import type { PropType as __PropType } from 'vue';
import type { RegularPriceDocumentElement } from '../../../../../types/DocumentElement';
import type { Document } from '@getlupa/client-sdk/Types';
import type { SearchResultsOptionLabels } from '../../../../../types/search-results/SearchResultsOptions';
declare const _sfc_main: import("vue").DefineComponent<{
    item: {
        type: __PropType<Document>;
        required: true;
    };
    options: {
        type: __PropType<RegularPriceDocumentElement>;
        required: true;
    };
    labels: {
        type: __PropType<SearchResultsOptionLabels>;
        required: false;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    item: {
        type: __PropType<Document>;
        required: true;
    };
    options: {
        type: __PropType<RegularPriceDocumentElement>;
        required: true;
    };
    labels: {
        type: __PropType<SearchResultsOptionLabels>;
        required: false;
    };
}>>, {}, {}>;
export default _sfc_main;