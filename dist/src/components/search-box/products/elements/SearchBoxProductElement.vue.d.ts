import type { PropType as __PropType } from 'vue';
import { type DocumentElement } from '../../../../types/DocumentElement';
import type { SearchBoxOptionLabels } from '../../../../types/search-box/SearchBoxOptions';
import type { Document } from '@getlupa/client-sdk/Types';
declare const _sfc_main: import("vue").DefineComponent<{
    item: {
        type: __PropType<Document>;
        required: true;
    };
    element: {
        type: __PropType<DocumentElement>;
        required: true;
    };
    labels: {
        type: __PropType<SearchBoxOptionLabels>;
        required: false;
    };
    isInStock: {
        type: __PropType<boolean>;
        required: false;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    item: {
        type: __PropType<Document>;
        required: true;
    };
    element: {
        type: __PropType<DocumentElement>;
        required: true;
    };
    labels: {
        type: __PropType<SearchBoxOptionLabels>;
        required: false;
    };
    isInStock: {
        type: __PropType<boolean>;
        required: false;
    };
}>>, {}, {}>;
export default _sfc_main;
